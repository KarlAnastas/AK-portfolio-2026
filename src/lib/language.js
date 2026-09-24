export const LANGUAGES = ["en", "ja", "ru"];
const STORAGE_KEY = "ak-lang";
const GEO_KEY = "ak-geo";
const RU_COUNTRIES = ["RU", "BY", "KZ", "KG"];

const read = (storage, key) => {
  try {
    return storage.getItem(key);
  } catch {
    return null;
  }
};
const write = (storage, key, value) => {
  try {
    storage.setItem(key, value);
  } catch {
    // Storage blocked (private mode etc.): the choice just won't persist.
  }
};

export const getSavedLanguage = () => {
  const saved = read(localStorage, STORAGE_KEY);
  return LANGUAGES.includes(saved) ? saved : null;
};

export const saveLanguage = (lang) => write(localStorage, STORAGE_KEY, lang);

const fromCountry = (c) => (c === "JP" ? "ja" : RU_COUNTRIES.includes(c) ? "ru" : "en");

const fetchWithTimeout = (url, ms = 2500) => {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), ms);
  return fetch(url, { signal: ctl.signal }).finally(() => clearTimeout(timer));
};

const SOURCES = [
  ["https://ipapi.co/country/", (r) => r.text()],
  ["https://api.country.is/", async (r) => (await r.json()).country],
];

// First visit only: pick a language from the visitor's country by IP,
// falling back to the browser language if both lookups fail.
export async function detectLanguage() {
  const cached = read(sessionStorage, GEO_KEY);
  if (cached) return fromCountry(cached);

  for (const [url, parse] of SOURCES) {
    try {
      const res = await fetchWithTimeout(url);
      if (!res.ok) continue;
      const country = String((await parse(res)) || "").trim().toUpperCase();
      if (/^[A-Z]{2}$/.test(country)) {
        write(sessionStorage, GEO_KEY, country);
        return fromCountry(country);
      }
    } catch {
      // Blocked, offline or timed out: try the next source.
    }
  }

  const nav = (navigator.language || "en").slice(0, 2).toLowerCase();
  return LANGUAGES.includes(nav) ? nav : "en";
}
