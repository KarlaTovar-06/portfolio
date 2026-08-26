import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  AppWindow,
  ArrowUpRight,
  Globe,
  Mail,
  Sparkles,
} from "lucide-react";
import SplitText from "../../animations/SplitText/SplitText";

type LinkItem = { name: string; url: string };

const websites: LinkItem[] = [
  { name: "Rubidex", url: "https://rubidex.ai" },
  { name: "RubiVault", url: "https://rubivault.com" },
  { name: "BMS Intel", url: "https://bmsintel.com" },
  { name: "GridLock", url: "https://gridlock.co" },
  { name: "Pontivy USA", url: "https://pontivyusa.com" },
];

const webapps: LinkItem[] = [
  { name: "RubiVault App", url: "https://app.rubivault.com" },
  { name: "Rubidex App", url: "https://app.rubidex.ai" },
  { name: "BMS Intel App", url: "https://app.bmsintel.com" },
];

// Personal projects — add your own links here whenever ready.
const personal: LinkItem[] = [];

// ─────────────────────────────────────────────────────────────────────────
// useLinkMetadata — fetches real OG metadata + screenshot via api.microlink.io
// Cached in sessionStorage so reloads don't re-hit the API.
// ─────────────────────────────────────────────────────────────────────────

interface LinkMetadata {
  title?: string;
  description?: string;
  screenshot?: string;
}

function useLinkMetadata(url: string) {
  const [data, setData] = useState<LinkMetadata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const cacheKey = `featured-meta:${url}`;

    try {
      const cached = sessionStorage.getItem(cacheKey);
      if (cached) {
        setData(JSON.parse(cached));
        setLoading(false);
        return;
      }
    } catch {
      /* sessionStorage unavailable */
    }

    setLoading(true);
    fetch(
      `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=true`
    )
      .then((res) => res.json())
      .then((json) => {
        if (cancelled) return;
        if (json.status === "success") {
          const meta: LinkMetadata = {
            title: json.data.title,
            description: json.data.description,
            screenshot: json.data.screenshot?.url,
          };
          setData(meta);
          try {
            sessionStorage.setItem(cacheKey, JSON.stringify(meta));
          } catch {
            /* quota exceeded — ignore */
          }
        }
      })
      .catch(() => {
        /* silent fallback — card will show hostname only */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [url]);

  return { data, loading };
}

// ─────────────────────────────────────────────────────────────────────────
// LinkPreviewCard — WhatsApp-style compact preview (image left, text right)
// ─────────────────────────────────────────────────────────────────────────

function LinkPreviewCard({ url }: { url: string }) {
  const { data, loading } = useLinkMetadata(url);

  let hostname = url;
  try {
    hostname = new URL(url).hostname.replace(/^www\./, "");
  } catch {
    /* keep raw */
  }

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.012 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group flex md:flex-col md:w-48 max-h-52 items-stretch gap-3 p-2 rounded-2xl bg-muted border border-gris2/20 hover:border-foreground/30 transition-colors"
    >
      {/* Thumbnail (square) — real screenshot from microlink */}
      <div className="md:w-full w-24 shrink-0 rounded-xl bg-foreground/5 overflow-hidden relative">
        {data?.screenshot ? (
          <img
            src={data.screenshot}
            alt={data.title || hostname}
            className="w-full h-full object-cover object-top"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-foreground/5 to-foreground/10 flex items-center justify-center text-[10px] font-bold text-foreground/40">
            {loading ? "…" : hostname}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0 py-0.5 flex flex-col justify-center gap-0.5">
        <p className="text-xs font-semibold text-foreground line-clamp-1 leading-tight">
          {data?.title || hostname}
        </p>
        {data?.description ? (
          <p className="text-[10px] text-muted-foreground line-clamp-2 leading-snug">
            {data.description}
          </p>
        ) : (
          <p className="text-[10px] text-muted-foreground/60 line-clamp-2 leading-snug">
            {loading ? "Loading preview…" : hostname}
          </p>
        )}
        <p className="text-[9px] tracking-wider text-muted-foreground/70 truncate mt-0.5">
          {hostname}
        </p>
      </div>

    </motion.a>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// BentoWidget container
// ─────────────────────────────────────────────────────────────────────────

function BentoWidget({
  icon: Icon,
  label,
  accent,
  className = "",
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  count: number;
  accent: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className={`rounded-3xl border border-gris2/20 bg-card/30 backdrop-blur-sm p-4 flex flex-col gap-3 shadow-lg ${className}`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon className={`size-4 ${accent}`} />
          <h3 className="text-xs uppercase tracking-wider font-bold text-muted-foreground">
            {label}
          </h3>
        </div>
      </div>
      <div className="flex-1 min-h-0">{children}</div>
    </motion.div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// FeaturedWork section
// Bento: 4 cols × 2 rows.
//   Widget 1: col-span-2 row-span-2 — Websites (5 WhatsApp previews stacked)
//   Widget 2: col-span-2 — Web Apps (3 previews horizontal)
//   Widget 3: col-span-1 — Personal placeholder
//   Widget 4: col-span-1 — Contact CTA
// ─────────────────────────────────────────────────────────────────────────

export default function FeaturedWork() {
  return (
    <section
      id="featured-work"
      className="w-full min-h-screen flex flex-col justify-center items-center py-16 px-6"
    >
      <div className="w-full max-w-7xl flex flex-col gap-12">

          <h1 className="text-foreground leading-tight">
            <SplitText
              text="Featured [[Work]]"
              className="text-2xl md:text-4xl"
              delay={0.3}
              staggerChildren={0.03}
              duration={0.6}
              initialY={50}
            />
          </h1>


        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
          {/* Widget 1 — Websites (col-span-2, row-span-2) */}
          <BentoWidget
            icon={Globe}
            label="Websites"
            count={websites.length}
            accent="text-rosa"
            className="md:col-span-2 md:row-span-2"
          >
            <div className="flex flex-wrap gap-2 h-full">
              {websites.map((site) => (
                <LinkPreviewCard key={site.url} {...site} />
              ))}
            </div>
          </BentoWidget>

          {/* Widget 2 — Web Apps (col-span-2, row 1) */}
          <BentoWidget
            icon={AppWindow}
            label="Web Apps"
            count={webapps.length}
            accent="text-cyan"
            className="md:col-span-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 h-full">
              {webapps.map((app) => (
                <LinkPreviewCard key={app.url} {...app} />
              ))}
            </div>
          </BentoWidget>

          {/* Widget 3 — Personal (col-span-1, row 2) */}
          <BentoWidget
            icon={Sparkles}
            label="Personal"
            count={personal.length}
            accent="text-verde"
            className="md:col-span-1"
          >
            {personal.length > 0 ? (
              <div className="flex flex-col gap-2">
                {personal.map((p) => (
                  <LinkPreviewCard key={p.url} {...p} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center gap-2 p-3 rounded-2xl border border-dashed border-gris2 h-full min-h-[80px]">
                <Sparkles className="size-4 text-verde" />
                <p className="text-[10px] text-muted-foreground">
                  Personal projects coming soon.
                </p>
              </div>
            )}
          </BentoWidget>

          {/* Widget 4 — Contact CTA (col-span-1, row 2) */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:col-span-1 rounded-3xl border border-gris2/20 bg-gradient-to-br from-morado to-rosa p-4 flex flex-col items-center justify-center gap-2 hover:border-morado transition-colors group"
          >
            <Mail className="size-6 text-morado group-hover:scale-110 transition-transform" />
            <p className="text-sm font-bold text-foreground">Let&apos;s talk</p>
            <p className="text-[10px] text-muted-foreground flex items-center gap-1">
              Go to contact <ArrowUpRight className="size-3" />
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
