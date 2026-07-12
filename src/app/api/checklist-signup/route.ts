import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;

  if (!apiKey || !listId) {
    console.error("Missing BREVO_API_KEY or BREVO_LIST_ID env vars");
    return NextResponse.json({ error: "Server not configured" }, { status: 500 });
  }

  const res = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      listIds: [Number(listId)],
      updateEnabled: true,
    }),
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    // Contact already on the list — treat as success, not an error.
    if (body.code === "duplicate_parameter") {
      return NextResponse.json({ ok: true });
    }
    console.error("Brevo contact create failed:", res.status, body);
    return NextResponse.json({ error: "Failed to sign up" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
