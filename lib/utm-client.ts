'use client';

import {
  UTM_PARAMS,
  UTM_STORAGE_KEY,
  sanitizeUtmParams,
  type UtmParams,
} from '@/lib/utm';

function readUtmFromSearchParams(searchParams: URLSearchParams): UtmParams {
  const fromUrl: UtmParams = {};

  for (const key of UTM_PARAMS) {
    const value = searchParams.get(key);
    if (value) fromUrl[key] = value;
  }

  return sanitizeUtmParams(fromUrl);
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === 'undefined') return {};

  try {
    const raw = localStorage.getItem(UTM_STORAGE_KEY);
    if (!raw) return {};
    return sanitizeUtmParams(JSON.parse(raw));
  } catch {
    return {};
  }
}

export function captureUtmFromUrl(): UtmParams {
  if (typeof window === 'undefined') return {};

  const fromUrl = readUtmFromSearchParams(
    new URLSearchParams(window.location.search),
  );

  if (Object.keys(fromUrl).length > 0) {
    localStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(fromUrl));
    return fromUrl;
  }

  return getStoredUtmParams();
}
