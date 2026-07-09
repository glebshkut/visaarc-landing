import { NextResponse } from 'next/server';
import { escapeTelegramHtml, sendTelegramMessage } from '@/lib/telegram';
import { formatUtmLines, sanitizeUtmParams, type UtmParams } from '@/lib/utm';

const VOLUME_OPTIONS = ['0–10', '10–50', '50–100', '100–500', '500+'] as const;

interface AccessFormPayload {
  name?: string;
  email?: string;
  phone?: string;
  volume?: string;
  source?: string;
  timestamp?: string;
  utm?: UtmParams;
}

function validatePayload(body: AccessFormPayload) {
  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const volume = body.volume?.trim() ?? '';

  if (name.length < 2) return 'Invalid name';
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'Invalid email';
  if (phone.replace(/\D/g, '').length < 10) return 'Invalid phone';
  if (!VOLUME_OPTIONS.includes(volume as (typeof VOLUME_OPTIONS)[number])) return 'Invalid volume';

  return null;
}

function formatAccessMessage(body: AccessFormPayload) {
  const name = escapeTelegramHtml(body.name?.trim() ?? '');
  const email = escapeTelegramHtml(body.email?.trim() ?? '');
  const phone = escapeTelegramHtml(body.phone?.trim() ?? '');
  const volume = escapeTelegramHtml(body.volume?.trim() ?? '');
  const source = escapeTelegramHtml(body.source?.trim() || 'visaarc-landing');
  const timestamp = escapeTelegramHtml(
    body.timestamp ?? new Date().toISOString(),
  );

  const utm = sanitizeUtmParams(body.utm);

  return [
    '<b>New VisaArc access request</b>',
    '',
    `<b>Name:</b> ${name}`,
    `<b>Email:</b> ${email}`,
    `<b>Phone:</b> ${phone}`,
    `<b>Volume:</b> ${volume} applications/month`,
    `<b>Source:</b> ${source}`,
    `<b>Time:</b> ${timestamp}`,
    ...formatUtmLines(utm, escapeTelegramHtml),
  ].join('\n');
}

export async function POST(request: Request) {
  let body: AccessFormPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const validationError = validatePayload(body);
  if (validationError) {
    return NextResponse.json({ error: validationError }, { status: 400 });
  }

  const sent = await sendTelegramMessage(formatAccessMessage(body));

  if (!sent) {
    return NextResponse.json(
      { error: 'Failed to send notification' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
