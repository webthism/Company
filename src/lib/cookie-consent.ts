export const COOKIE_CONSENT_KEY = "webthism_cookie_consent";
export const COOKIE_CONSENT_EVENT = "webthism-cookie-consent-accepted";

export type CookieConsent = "accepted" | "necessary";

export const getStoredConsent = (): CookieConsent | null => {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(COOKIE_CONSENT_KEY);
  return value === "accepted" || value === "necessary" ? value : null;
};
