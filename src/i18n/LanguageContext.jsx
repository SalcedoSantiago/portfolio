/**
 * External dependencies
 */
import React, { createContext, useCallback, useContext, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";

/**
 * Internal dependencies
 */
import { ScrollTrigger } from "../App/Components/animations/gsapSetup";
import { translations } from "./translations";

const LanguageContext = createContext(null);
const STORAGE_KEY = "portfolio-lang";
const VALID_LANGS = ["en", "es"];

const getFallbackLang = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (VALID_LANGS.includes(stored)) return stored;

  const browserLang = navigator.language?.toLowerCase() || "en";
  return browserLang.startsWith("es") ? "es" : "en";
};

const parseLang = (value) => (VALID_LANGS.includes(value) ? value : null);

const getByPath = (obj, path) =>
  path.split(".").reduce((acc, key) => (acc == null ? acc : acc[key]), obj);

export const LanguageProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlLang = parseLang(searchParams.get("lang"));
  const lang = urlLang || getFallbackLang();

  useEffect(() => {
    if (urlLang) return;
    const next = new URLSearchParams(searchParams);
    next.set("lang", lang);
    setSearchParams(next, { replace: true });
  }, [urlLang, lang, searchParams, setSearchParams]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    const timer = setTimeout(() => ScrollTrigger.refresh(), 50);
    return () => clearTimeout(timer);
  }, [lang]);

  const setLang = useCallback(
    (nextLang) => {
      if (!VALID_LANGS.includes(nextLang) || nextLang === lang) return;
      const next = new URLSearchParams(searchParams);
      next.set("lang", nextLang);
      setSearchParams(next, { replace: true });
    },
    [lang, searchParams, setSearchParams]
  );

  const t = useCallback(
    (path) => {
      const value = getByPath(translations[lang], path);
      if (value == null) return getByPath(translations.en, path) ?? path;
      return value;
    },
    [lang]
  );

  const localizedPath = useCallback(
    (pathname) => ({ pathname, search: `?lang=${lang}` }),
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, t, localizedPath }),
    [lang, setLang, t, localizedPath]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
};
