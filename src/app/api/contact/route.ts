import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(req: NextRequest) {
  const { name, email, phone, company, service, message } = await req.json();

  if (!name || !email || !message) {
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

  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px;font-weight:bold;border:1px solid #eee">${label}</td><td style="padding:8px;border:1px solid #eee">${value}</td></tr>`;

  try {
    await transporter.sendMail({
      // Authenticated Gmail account sends; the visitor's address is set as reply-to
      // so hitting "Reply" in the inbox answers the visitor directly.
      from: `"Tvam Key Software — Website" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL ?? process.env.SMTP_USER,
      replyTo: `"${escapeHtml(name)}" <${email}>`,
      subject: `New enquiry from ${name}${service ? ` — ${service}` : ''}`,
      html: `
        <h2>New Website Enquiry</h2>
        <table style="border-collapse:collapse;width:100%;max-width:640px">
          ${row('Name', escapeHtml(name))}
          ${row('Email', `<a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a>`)}
          ${row('Phone', phone ? escapeHtml(phone) : '—')}
          ${row('Company', company ? escapeHtml(company) : '—')}
          ${row('Service', service ? escapeHtml(service) : '—')}
          ${row('Message', escapeHtml(message).replace(/\n/g, '<br/>'))}
        </table>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact email failed:', err);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
