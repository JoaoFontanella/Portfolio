import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const LOCALE_KEY = "portfolio-locale";
const LocaleContext = createContext(null);

function getInitialLocale() {
  if (typeof window === "undefined") {
    return "pt-BR";
  }

  const storedLocale = window.localStorage.getItem(LOCALE_KEY);
  if (storedLocale === "pt-BR" || storedLocale === "en-US") {
    return storedLocale;
  }

  return window.navigator.language.startsWith("en") ? "en-US" : "pt-BR";
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState(getInitialLocale);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    document.documentElement.lang = locale;
    window.localStorage.setItem(LOCALE_KEY, locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale,
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }

  return context;
}