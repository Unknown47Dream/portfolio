import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const PROJECTS = [
  {
    title: "EPOS",
    category: "Point of Sale",
    description:
      "Developed and maintained an EPOS (Electronic Point of Sale) platform featuring product management, sales processing, payment handling, and inventory tracking. Built reporting and analytics modules providing real-time insights into sales performance and business operations.",
    year: "2024",
    metric: "99.9%",
    metricLabel: "System uptime",
    palette: ["#16213E", "#F5F0EB", "#E07A5F"],
  },
  {
    title: "Gift Shop",
    category: "E-Commerce",
    description:
      "An online gift shop platform with curated product listings, cart management, and seamless checkout experience.",
    year: "2025",
    metric: "3.1x",
    metricLabel: "Faster insight loops",
    palette: ["#0E3B43", "#E7F6F2", "#F3B61F"],
  },
  {
    title: "Kitchen Screen",
    category: "Kitchen Display",
    description:
      "Developed a Kitchen Display System to manage incoming orders, track ticket status, and streamline kitchen workflows in real time. Built order and ticket handling features that improved coordination between kitchen and service teams.",
    year: "2024",
    metric: "2.5x",
    metricLabel: "Kitchen efficiency",
    palette: ["#2B2118", "#F7F3EE", "#E3B23C"],
  },
  {
    title: "Time Tracking",
    category: "Productivity",
    description:
      "Developed features for a time tracking platform, including timesheets, attendance management, and employee activity monitoring. Built reporting and analytics tools that helped managers track productivity, work hours, and project progress.",
    year: "2023",
    metric: "98%",
    metricLabel: "Timesheet compliance",
    palette: ["#1B2838", "#F4F6F9", "#4A90D9"],
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
