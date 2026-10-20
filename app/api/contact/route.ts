import { NextResponse } from "next/server"
import { Resend } from "resend"

export async function POST(req: Request) {
  let body: { name?: string; email?: string; message?: string; website?: string }
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "bad request" }, { status: 400 })
  }

  // honeypot: bots fill the hidden field, so pretend it worked
  if (body.website) return NextResponse.json({ ok: true })

  const name = String(body.name ?? "").replace(/[\r\n]+/g, " ").trim().slice(0, 100)
  const email = String(body.email ?? "").trim().slice(0, 200)
  const message = String(body.message ?? "").trim().slice(0, 4000)
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) {
    return NextResponse.json({ error: "invalid" }, { status: 400 })
  }

  const key = process.env.RESEND_API_KEY
  if (!key) return NextResponse.json({ error: "not configured" }, { status: 500 })

  const resend = new Resend(key)
  const { error } = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: "ranandra313@gmail.com",
    replyTo: email,
    subject: "Portfolio message from " + name,
    text: "From: " + name + " <" + email + ">\n\n" + message,
  })
  if (error) return NextResponse.json({ error: "send failed" }, { status: 502 })
  return NextResponse.json({ ok: true })
}