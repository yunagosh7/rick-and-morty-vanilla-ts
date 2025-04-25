import { constants } from "../constants/index.js";

export async function apiFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${constants.apiBaseUrl}${endpoint}`, options);
  if (!res.ok) {
    throw new Error(`API call failed: ${res.status}`);
  }
  return res.json() as Promise<T>;
}