import axios from "axios";

export const API_BASE_URL =
  "https://errbud-api-7bd24dbbd474.herokuapp.com";

const AUTH_TOKEN_KEY = "token";

/** Default timeout for requests (e.g. file uploads). 5 minutes. */
const DEFAULT_TIMEOUT_MS = 5 * 60 * 1000;

/** Returns the stored JWT or null. Safe for SSR (returns null when window is undefined). */
export function getToken(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(AUTH_TOKEN_KEY);
}

/** Stores the JWT. Accepts "Bearer <token>" or raw token. Safe for SSR (no-op when window is undefined). */
export function setToken(value: string | null): void {
  if (typeof window === "undefined") return;
  if (!value?.trim()) {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    return;
  }
  const token = value.startsWith("Bearer ")
    ? value.slice(7).trim()
    : value.trim();
  localStorage.setItem(AUTH_TOKEN_KEY, token);
}

/** Base axios instance: uses API base URL, 5min timeout, and attaches JWT when present. */
export const api = axios.create({
  baseURL: `${API_BASE_URL}/api/v1`,
  timeout: DEFAULT_TIMEOUT_MS,
});

api.interceptors.request.use((config) => {
  const token = getToken();
  if (token?.trim()) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
