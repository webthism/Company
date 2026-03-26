"use server";

import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitProjectLead(email: string) {
  if (!email) {
    return { error: "Missing email" };
  }

  // 1. Save to Cloudflare D1
  try {
    const { env } = await getCloudflareContext();
    if ((env as any).DB) {
      await (env as any).DB.prepare(
        "INSERT OR IGNORE INTO leads (name, email, source) VALUES (?, ?, ?)"
      ).bind("Standard Lead", email, "contact_section").run();
      console.log("Contact lead saved to D1:", email);
    } else {
      console.warn("D1 Database binding 'DB' not found. Data not saved.");
    }
  } catch (err: any) {
    console.error("D1 Database error:", err);
  }

  // 2. Send via Resend
  try {
    const { data, error } = await resend.emails.send({
      from: "Webthism <admin@webthism.com>",
      to: [email],
      subject: "Ready to start? - Webthism",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #f4f4f5; background-color: #000; max-width: 600px; margin: 0 auto; border: 1px solid #27272a; padding: 48px; border-radius: 24px;">
          <h1 style="color: #fff; font-size: 28px; font-weight: 900; margin-bottom: 24px;">Thrilled you’re here! 🎉</h1>
          
          <p style="color: #a1a1aa; font-size: 16px;">
            Hi,
          </p>
          
          <p style="color: #a1a1aa; font-size: 16px;">
            Can’t wait to get started and help you hit your goals!
          </p>
          
          <p style="color: #a1a1aa; font-size: 16px; font-weight: 700; margin-top: 32px;">
            Quick next steps:
          </p>
          
          <ul style="color: #a1a1aa; font-size: 16px; padding-left: 20px;">
            <li style="margin-bottom: 12px;">Attached is our Services Overview so you can see exactly what we do and what might fit you best.</li>
            <li style="margin-bottom: 12px;">To hit the ground running on our first call, could you take 5 min to fill this short form? It just helps me understand your goals better upfront. <br />
                <a href="https://forms.gle/qK9s4J3cS8xoqJg28" target="_blank" style="color: #BD9DFF; text-decoration: underline; font-weight: 700;">Click here to fill the form</a>
            </li>
          </ul>
          
          <p style="color: #a1a1aa; font-size: 16px; margin-top: 32px;">
            Once you reply with a quick “Yes”, “I’m in”, “Ready” or anything similar (or after you submit the form), I’ll send over some call time options right away.
          </p>
          
          <p style="color: #a1a1aa; font-size: 16px;">
            Questions? Just hit reply — I’m around!
          </p>
          
          <p style="color: #a1a1aa; font-size: 16px;">
            Can’t wait to hear from you 😊
          </p>
          
          <p style="color: #a1a1aa; font-size: 16px; margin-top: 32px;">
            Warmly,<br />
            <strong style="color: #fff;">Webthism</strong>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #27272a; margin: 40px 0;">
          
          <p style="font-size: 12px; color: #71717a; text-align: center;">
            © 2026 Webthism. All Rights Reserved.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return { error: error.message };
    }

    return { success: true, data };
  } catch (err: any) {
    console.error("Resend Exception:", err);
    return { error: err.message || "Failed to send email" };
  }
}
