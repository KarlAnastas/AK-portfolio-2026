import { useCallback, useSyncExternalStore } from "react";

const KEY = "ak-theme";
const root = document.documentElement;
const listeners = new Set();

const getTheme = () => (root.dataset.theme === "dark" ? "dark" : "light");

const subscribe = (fn) => {
  listeners.add(fn);
  return () => listeners.delete(fn);
};

// index.html applies the saved theme before first paint; this keeps React in sync.
export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme);
  const toggleTheme = useCallback(() => {
    const next = getTheme() === "dark" ? "light" : "dark";
    if (next === "dark") root.dataset.theme = "dark";
    else delete root.dataset.theme;
    try {
      localStorage.setItem(KEY, next);
    } catch {
      // Storage blocked: the theme still switches for this visit.
    }
    listeners.forEach((fn) => fn());
  }, []);
  return { theme, toggleTheme };
}
