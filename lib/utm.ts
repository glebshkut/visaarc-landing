export const UTM_PARAMS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
] as const;

export type UtmParam = (typeof UTM_PARAMS)[number];
export type UtmParams = Partial<Record<UtmParam, string>>;

export const UTM_STORAGE_KEY = 'visaarc_utm';

const UTM_LABELS: Record<UtmParam, string> = {
  utm_source: 'Source',
  utm_medium: 'Medium',
  utm_campaign: 'Campaign',
  utm_term: 'Term',
  utm_content: 'Content',
};

export function sanitizeUtmValue(value: unknown): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim().slice(0, 200);
  return trimmed || undefined;
}

export function sanitizeUtmParams(input: unknown): UtmParams {
  if (!input || typeof input !== 'object') return {};

  const result: UtmParams = {};
  for (const key of UTM_PARAMS) {
    const value = sanitizeUtmValue((input as Record<string, unknown>)[key]);
    if (value) result[key] = value;
  }
  return result;
}

export function hasUtmParams(utm: UtmParams): boolean {
  return UTM_PARAMS.some((key) => Boolean(utm[key]));
}

export function formatUtmLines(
  utm: UtmParams,
  escape: (text: string) => string,
): string[] {
  if (!hasUtmParams(utm)) return [];

  return [
    '',
    '<b>UTM tracking</b>',
    ...UTM_PARAMS.flatMap((key) => {
      const value = utm[key];
      if (!value) return [];
      return [`<b>${UTM_LABELS[key]}:</b> ${escape(value)}`];
    }),
  ];
}
