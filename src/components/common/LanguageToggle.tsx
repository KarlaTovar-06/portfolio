import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function LanguageToggle() {
  const { locale, toggleLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLocale}
      aria-label="Toggle language"
      className="flex p-3 size-11 items-center rounded-full border-2 bg-white text-negro transition-transform duration-200 dark:bg-negro2 dark:text-white cursor-pointer"
    >
      <span className="text-xs font-bold">{locale === "en" ? "ES" : "EN"}</span>
    </button>
  );
}
