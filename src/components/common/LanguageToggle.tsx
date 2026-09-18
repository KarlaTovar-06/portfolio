import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
      className="flex p-3 size-11 items-center rounded-full border-2 bg-white text-negro transition-transform duration-200 dark:bg-negro2 dark:text-white cursor-pointer"
    >
      <span className="text-xs font-bold" aria-hidden="true">{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
