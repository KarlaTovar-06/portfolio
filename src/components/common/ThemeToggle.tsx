import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? t("aria.themeLight") : t("aria.themeDark")}
      className="flex p-3 size-11 items-center rounded-full border-2 bg-white text-negro transition-transform duration-200 dark:bg-negro2 dark:text-white cursor-pointer"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
