"use server";

import { Resend } from "resend";
import { getCloudflareContext } from "@opennextjs/cloudflare";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendBlueprintAccess(email: string, name: string) {
  if (!email || !name) {
    return { error: "Missing email or name" };
  }

  // 1. Save to Cloudflare D1 (Unlimited)
  try {
    const { env } = await getCloudflareContext();
    if ((env as any).DB) {
      await (env as any).DB.prepare(
        "INSERT OR IGNORE INTO leads (name, email) VALUES (?, ?)"
      ).bind(name, email).run();
      console.log("Lead saved to D1:", email);
    } else {
      console.warn("D1 Database binding 'DB' not found. Data not saved.");
    }
  } catch (dbError) {
    console.error("D1 Database error:", dbError);
  }

  // 2. Send via Resend (Free 3,000/mo)
  const blueprintLink = "https://docs.google.com/document/d/1R6_EK7k0Pb_zkYl-PCWRLpMdJf9WMCUtKT8-xi1Pt_4/edit?usp=sharing";

  try {
    const { data, error } = await resend.emails.send({
      from: "WebGrowth <blueprint@webthism.com>",
      to: [email],
      subject: "Your 2026 Growth Blueprint - Instant Access",
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #f4f4f5; background-color: #000; max-width: 600px; margin: 0 auto; border: 1px solid #27272a; padding: 48px; border-radius: 24px;">
          <h1 style="color: #fff; font-size: 28px; font-weight: 900; margin-bottom: 24px; text-transform: uppercase; letter-spacing: -0.05em;">The 2026 <span style="color: #BD9DFF;">Growth</span> Blueprint</h1>
          <p style="color: #a1a1aa; font-size: 16px;">Hi ${name},</p>
          <p style="color: #a1a1aa; font-size: 16px;">Thank you for requesting access to our conversion-first framework. As promised, here is your access to the blueprint:</p>
          
          <div style="margin: 40px 0;">
            <a href="${blueprintLink}" style="background-color: #BD9DFF; color: #000; padding: 20px 40px; text-decoration: none; border-radius: 12px; font-weight: 900; display: inline-block; font-size: 18px; text-transform: uppercase; letter-spacing: 0.05em;">Get Instant Access</a>
          </div>
          
          <p style="font-size: 12px; color: #71717a; margin-top: 40px;">
            If you have any issues with the link, please reply directly to this email.<br>
            Direct Link: <a href="${blueprintLink}" style="color: #BD9DFF; text-decoration: underline;">${blueprintLink}</a>
          </p>
          
          <hr style="border: 0; border-top: 1px solid #27272a; margin: 40px 0;">
          
          <p style="font-size: 14px; color: #a1a1aa;">
            To your growth,<br>
            <strong style="color: #fff;">The Webthism Team</strong>
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
    console.error("Server Action Exception:", err);
    return { error: err.message || "Failed to submit request" };
  }
}
