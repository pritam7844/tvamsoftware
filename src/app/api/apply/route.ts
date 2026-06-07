import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, phone, linkedin, position, message } = await req.json();

  if (!name || !email || !position) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Tvam Career Portal" <${process.env.SMTP_USER}>`,
    to: process.env.HR_EMAIL,
    subject: `New Application: ${position} — ${name}`,
    html: `
      <h2>New Job Application</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">Position</td><td style="padding:8px;border:1px solid #eee">${position}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">Email</td><td style="padding:8px;border:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">Phone</td><td style="padding:8px;border:1px solid #eee">${phone || '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">LinkedIn</td><td style="padding:8px;border:1px solid #eee">${linkedin ? `<a href="${linkedin}">${linkedin}</a>` : '—'}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">Cover Letter</td><td style="padding:8px;border:1px solid #eee">${message || '—'}</td></tr>
      </table>
    `,
  });

  return NextResponse.json({ ok: true });
}
