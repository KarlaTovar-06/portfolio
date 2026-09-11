import Hero from "./sections/Hero/Hero";
import Introducing from "./sections/Introducing/Introducing";
import TechStack from "./sections/TechStack/TechStack";
import Experiencia from "./sections/Experiencia/Experiencia";
import FeaturedWork from "./sections/FeaturedWork/FeaturedWork";
import Estudies from "./sections/Estudies/Estudies";
import BubbleMenu from "./components/common/BubbleMenu";
import { ThemeProvider } from "./lib/theme";
import { LanguageProvider, useLanguage } from "./lib/i18n/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import Contact from "./sections/Contact/Contact";

function AppContent() {
  const { t } = useLanguage();

  const items = [
    {
      label: t("menu.home"),
      href: "#hero",
      ariaLabel: t("aria.home"),
      rotation: -8,
      hoverStyles: { bgColor: "#41D6C4", textColor: "#ffffff" },
    },
    {
      label: t("menu.about"),
      href: "#introducing",
      ariaLabel: t("aria.about"),
      rotation: -2,
      hoverStyles: { bgColor: "#9BD24F", textColor: "#ffffff" },
    },
    {
      label: t("menu.techstack"),
      href: "#tech-stack",
      ariaLabel: t("aria.techstack"),
      rotation: 8,
      hoverStyles: { bgColor: "#3b82f6", textColor: "#ffffff" },
    },
    {
      label: t("menu.projects"),
      href: "#featured-work",
      ariaLabel: t("aria.projects"),
      rotation: 8,
      hoverStyles: { bgColor: "#D73961", textColor: "#ffffff" },
    },
    {
      label: t("menu.experience"),
      href: "#experience",
      ariaLabel: t("aria.experience"),
      rotation: 5,
      hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    },
    {
      label: t("menu.estudies"),
      href: "#estudies",
      ariaLabel: t("aria.estudies"),
      rotation: -5,
      hoverStyles: { bgColor: "#00C2AB", textColor: "#ffffff" },
    },
    {
      label: t("menu.contact"),
      href: "#contact",
      ariaLabel: t("aria.contact"),
      rotation: -2,
      hoverStyles: { bgColor: "#A22887", textColor: "#ffffff" },
    },
  ];

  return (
    <>
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>RB</span>}
        items={items}
        menuAriaLabel={t("aria.toggleNav")}
        useFixedPosition={true}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
      />
      <main className="overflow-x-clip gap-10">
        <Hero />
        <Introducing />
        <Experiencia />
        <FeaturedWork />
        <TechStack />
        <Estudies />
        <Contact />
      </main>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <TooltipProvider>
          <AppContent />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
