import { useScrollReveal } from "../hooks/useScrollReveal";

export default function CTA() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="contact" className="scroll-reveal px-4 py-32 md:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <span className="mb-6 inline-flex rounded-full border border-black/5 bg-black/[0.02] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-secondary dark:border-white/5 dark:bg-white/[0.02] dark:text-ink-dark-secondary">
          Get in Touch
        </span>

        <h2 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-ink-dark md:text-7xl">
          Let's build
          <br />
          something remarkable
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-ink-secondary dark:text-ink-dark-secondary md:text-lg">
          Whether you have a project in mind or just want to explore possibilities, I'd love to hear
          from you.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@example.com"
            className="group relative inline-flex items-center gap-3 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-all duration-700 ease-spring active:scale-[0.98] dark:bg-ink-dark dark:text-surface-dark"
          >
            Start a conversation
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
            <div className="rounded-squircle-sm bg-soft-50 px-6 py-3.5 shadow-inner-light dark:bg-surface-dark">
              <span className="text-sm text-ink-secondary dark:text-ink-dark-secondary">
                dsworm.98@gmail.com
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
