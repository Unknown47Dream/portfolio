import { ArrowLeft, ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "Nexus",
    category: "Brand Identity",
    description:
      "A complete visual system for an AI-native studio, built around quiet confidence, adaptive marks, and a launch-ready digital presence.",
    year: "2026",
    metric: "42%",
    metricLabel: "Higher launch recall",
    palette: ["#111827", "#F4EFE7", "#D5603F"],
  },
  {
    title: "Drift",
    category: "Web Platform",
    description:
      "A realtime analytics product with cinematic data layers, fast scanning states, and premium motion for dense operational workflows.",
    year: "2025",
    metric: "3.1x",
    metricLabel: "Faster insight loops",
    palette: ["#0E3B43", "#E7F6F2", "#F3B61F"],
  },
  {
    title: "Forma",
    category: "Design System",
    description:
      "A scalable component library for twelve product teams, unifying accessibility, design tokens, and release velocity.",
    year: "2025",
    metric: "12",
    metricLabel: "Teams onboarded",
    palette: ["#1F1A38", "#F6F4EF", "#7B8CDE"],
  },
  {
    title: "Aether",
    category: "Mobile App",
    description:
      "A gesture-first meditation experience shaped with haptics, spatial audio, and a soft visual language for daily rituals.",
    year: "2024",
    metric: "88%",
    metricLabel: "Week-two retention",
    palette: ["#17324D", "#F5E9D7", "#63B995"],
  },
];

export default function Work() {
  const ref = useScrollReveal<HTMLElement>();
  const [active, setActive] = useState(0);
  const project = PROJECTS[active];

  const previous = () => {
    setActive((current) => (current - 1 + PROJECTS.length) % PROJECTS.length);
  };

  const next = () => {
    setActive((current) => (current + 1) % PROJECTS.length);
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % PROJECTS.length);
    }, 6500);

    return () => window.clearInterval(interval);
  }, []);

  const previewProjects = useMemo(() => {
    return PROJECTS.map((item, index) => {
      const offset = (index - active + PROJECTS.length) % PROJECTS.length;
      return { ...item, offset, index };
    });
  }, [active]);

  return (
    <section ref={ref} id="work" className="scroll-reveal overflow-hidden px-4 py-32 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-black/5 bg-black/[0.02] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-secondary dark:border-white/5 dark:bg-white/[0.02] dark:text-ink-dark-secondary">
              Selected Work
            </span>

            <h2 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-ink-dark md:text-6xl">
              Projects
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={previous}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/5 bg-white/65 text-ink shadow-soft backdrop-blur-xl transition-all duration-500 ease-spring hover:-translate-y-0.5 hover:bg-white hover:shadow-soft-lg active:scale-95 dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-dark dark:shadow-dark-soft dark:hover:bg-white/[0.08]"
              aria-label="Previous project"
            >
              <ArrowLeft size={18} weight="bold" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-soft-lg transition-all duration-500 ease-spring hover:-translate-y-0.5 hover:shadow-soft-xl active:scale-95 dark:bg-ink-dark dark:text-surface-dark"
              aria-label="Next project"
            >
              <ArrowRight size={18} weight="bold" />
            </button>
          </div>
        </div>

        <div className="relative mt-12">
          <div className="pointer-events-none absolute -left-16 top-20 h-56 w-56 rounded-full bg-[#63b995]/10 blur-3xl dark:bg-[#7b8cde]/10" />
          <div className="pointer-events-none absolute -right-24 bottom-4 h-64 w-64 rounded-full bg-[#d5603f]/10 blur-3xl dark:bg-[#f3b61f]/10" />

          <div className="relative grid min-h-[620px] gap-6 lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch">
            <article className="relative z-10 flex flex-col justify-between rounded-[2rem] border border-black/5 bg-white/70 p-6 shadow-soft-xl backdrop-blur-2xl transition-all duration-700 ease-spring dark:border-white/10 dark:bg-white/[0.035] dark:shadow-dark-soft md:p-10">
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="rounded-full border border-black/5 bg-black/[0.025] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-dark-secondary">
                    {project.category}
                  </span>
                  <span className="text-sm font-medium text-ink-muted dark:text-ink-dark-secondary">
                    {project.year}
                  </span>
                </div>

                <div key={project.title} className="mt-10 animate-fade-up">
                  <h3 className="font-display text-[clamp(3rem,9vw,6.75rem)] font-bold leading-[0.88] tracking-tight text-ink dark:text-ink-dark">
                    {project.title}
                  </h3>
                  <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-secondary dark:text-ink-dark-secondary md:text-lg">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-[1fr_auto] sm:items-end">
                <div className="flex items-end gap-4">
                  <span className="font-display text-5xl font-bold tracking-tight text-ink dark:text-ink-dark">
                    {project.metric}
                  </span>
                  <span className="pb-2 text-sm leading-tight text-ink-muted dark:text-ink-dark-secondary">
                    {project.metricLabel}
                  </span>
                </div>

                <a
                  href="#contact"
                  className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition-all duration-500 ease-spring hover:-translate-y-0.5 active:scale-[0.98] dark:bg-ink-dark dark:text-surface-dark"
                >
                  View case
                  <ArrowUpRight
                    size={16}
                    weight="bold"
                    className="transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </div>
            </article>

            <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-black/5 bg-white/55 p-4 shadow-soft-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.035] dark:shadow-dark-soft lg:min-h-full">
              <div className="grid h-full min-h-[396px] gap-3 md:grid-cols-2">
                {previewProjects.map((item) => {
                  const isActive = item.index === active;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActive(item.index)}
                      className={`group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-[1.35rem] border p-5 text-left transition-all duration-500 ease-spring focus:outline-none focus:ring-2 focus:ring-ink/30 dark:focus:ring-white/30 md:min-h-0 md:p-6 ${
                        isActive
                          ? "border-ink/10 bg-ink text-white shadow-soft-lg dark:border-white/10 dark:bg-ink-dark dark:text-surface-dark"
                          : "border-black/5 bg-white/60 text-ink hover:-translate-y-1 hover:bg-white hover:shadow-soft-lg dark:border-white/10 dark:bg-white/[0.04] dark:text-ink-dark dark:hover:bg-white/[0.07]"
                      }`}
                      aria-label={`Show ${item.title}`}
                    >
                      <div className="relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <span
                              className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${
                                isActive
                                  ? "text-white/60 dark:text-black/45"
                                  : "text-ink-muted dark:text-ink-dark-secondary"
                              }`}
                            >
                              {item.category}
                            </span>
                            <h4 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
                              {item.title}
                            </h4>
                          </div>
                          <ArrowUpRight
                            size={18}
                            weight="bold"
                            className={`mt-1 shrink-0 transition-transform duration-500 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                              isActive ? "opacity-90" : "opacity-45"
                            }`}
                          />
                        </div>

                        <p
                          className={`mt-5 line-clamp-3 text-sm leading-relaxed ${
                            isActive
                              ? "text-white/72 dark:text-black/60"
                              : "text-ink-secondary dark:text-ink-dark-secondary"
                          }`}
                        >
                          {item.description}
                        </p>
                      </div>

                      <div className="relative z-10 mt-8 flex items-end justify-between gap-4">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="font-display text-3xl font-bold tracking-tight">
                              {item.metric}
                            </span>
                            <span
                              className={`text-[10px] font-semibold uppercase tracking-[0.18em] ${
                                isActive
                                  ? "text-white/50 dark:text-black/40"
                                  : "text-ink-muted dark:text-ink-dark-secondary"
                              }`}
                            >
                              {item.year}
                            </span>
                          </div>
                          <span
                            className={`mt-1 block text-xs ${
                              isActive
                                ? "text-white/58 dark:text-black/50"
                                : "text-ink-muted dark:text-ink-dark-secondary"
                            }`}
                          >
                            {item.metricLabel}
                          </span>
                        </div>

                        <div>
                          <div className="flex gap-2">
                            {item.palette.map((color) => (
                              <span
                                key={color}
                                className={`h-3 w-3 rounded-full border ${
                                  isActive
                                    ? "border-white/30 dark:border-black/20"
                                    : "border-black/10 dark:border-white/20"
                                }`}
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
