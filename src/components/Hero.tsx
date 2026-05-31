import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="hero"
      className="scroll-reveal relative flex min-h-[100dvh] flex-col items-center justify-center px-4 py-24 md:px-8"
    >
      <span className="mb-6 rounded-full border border-black/5 bg-black/[0.02] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-secondary dark:border-white/5 dark:bg-white/[0.02] dark:text-ink-dark-secondary">
        Fullstack Developer
      </span>

      <h1 className="max-w-5xl text-center font-display text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight text-ink dark:text-ink-dark">
        <span className="hero-title-effect">Crafting digital</span>
        <br />
        <span className="hero-title-effect relative inline-block">
          experiences
          <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-ink/10 dark:bg-ink-dark/10" />
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-center text-lg leading-relaxed text-ink-secondary dark:text-ink-dark-secondary">
        I bridge the gap between design and engineering, creating interfaces that feel as good as
        they look.
      </p>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <a
          href="#work"
          className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition-all duration-700 ease-spring active:scale-[0.98] dark:bg-ink-dark dark:text-surface-dark"
        >
          View my work
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-all duration-700 ease-spring group-hover:translate-x-0.5 group-hover:-translate-y-[1px] group-hover:scale-105">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 13L13 1M13 1H5M13 1V9"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>

        <div className="rounded-squircle border border-black/5 p-1.5 dark:border-white/5">
          <div className="rounded-squircle-sm bg-soft-50 px-6 py-3 shadow-inner-light dark:bg-surface-dark">
            <span className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
              Available for projects
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-black/10 p-1.5 dark:border-white/10">
          <div className="h-2 w-[2px] animate-bounce rounded-full bg-ink/30 dark:bg-ink-dark/30" />
        </div>
      </div>
    </section>
  );
}
