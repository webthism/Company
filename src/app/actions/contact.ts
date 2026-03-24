"use server";

import { getCloudflareContext } from "@opennextjs/cloudflare";

export async function submitProjectLead(email: string) {
  if (!email) {
    return { error: "Missing email" };
  }

  try {
    const { env } = await getCloudflareContext();
    if ((env as any).DB) {
      await (env as any).DB.prepare(
        "INSERT OR IGNORE INTO leads (name, email, source) VALUES (?, ?, ?)"
      ).bind("Standard Lead", email, "contact_section").run();
      console.log("Contact lead saved to D1:", email);
      return { success: true };
    } else {
      console.warn("D1 Database binding 'DB' not found. Data not saved.");
      return { error: "Database connection failed" };
    }
  } catch (err: any) {
    console.error("Contact Submit Error:", err);
    return { error: err.message || "Failed to submit request" };
  }
}
