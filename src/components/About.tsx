import { useScrollReveal } from "../hooks/useScrollReveal";

const STATS = [
  { value: "15+", label: "Years building" },
  { value: "25+", label: "Projects shipped" },
  { value: "50+", label: "Technologies" },
  { value: "100+", label: "Clients served" },
];

export default function About() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section ref={ref} id="about" className="scroll-reveal px-4 py-32 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-16 md:flex-row md:gap-24">
        <div className="w-full md:w-1/2">
          <span className="mb-6 inline-flex rounded-full border border-black/5 bg-black/[0.02] px-4 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-ink-secondary dark:border-white/5 dark:bg-white/[0.02] dark:text-ink-dark-secondary">
            About
          </span>

          <h2 className="font-display text-4xl font-bold tracking-tight text-ink dark:text-ink-dark md:text-6xl">
            Full-Stack
            <br />
            <span className="text-ink-muted dark:text-ink-dark-secondary">Developer</span>
            <br />
            Front to back
            <br />
            <span className="text-ink-muted dark:text-ink-dark-secondary">end to end</span>
          </h2>

          <p className="mt-8 text-base leading-relaxed text-ink-secondary dark:text-ink-dark-secondary md:text-lg">
            With over seven years of experience across the full stack, I architect and build digital
            products from database schemas to pixel-perfect interfaces. Every component, every API,
            every query — deliberate and purposeful.
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink-secondary dark:text-ink-dark-secondary md:text-lg">
            Currently focused on Angular and React ecosystems, real-time applications, and crafting
            seamless experiences that bridge frontend elegance with backend reliability.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {[
              "Angular",
              "TypeScript",
              "React.js",
              "NgRx",
              "Node.js",
              "Nest.js",
              "TailwindCSS",
              "PostgreSQL",
              "WebSocket",
              "Docker",
              "GSAP",
              "Testing",
            ].map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-black/5 bg-white/50 px-4 py-2 text-xs font-medium text-ink-secondary transition-all duration-500 ease-spring hover:bg-black/[0.02] hover:text-ink dark:border-white/5 dark:bg-white/[0.02] dark:text-ink-dark-secondary dark:hover:text-ink-dark"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <div className="flash-border rounded-squircle p-[1px] shadow-soft dark:shadow-dark-soft">
            <div className="rounded-[calc(2rem-1px)] bg-surface p-8 shadow-inner-light dark:bg-surface-dark md:p-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-secondary">
                Impact
              </span>
              <div className="mt-8 grid grid-cols-2 gap-8">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <span className="font-display text-4xl font-bold tracking-tight text-ink dark:text-ink-dark md:text-5xl">
                      {stat.value}
                    </span>
                    <p className="mt-1 text-xs text-ink-muted dark:text-ink-dark-secondary">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flash-border mt-6 rounded-squircle p-[1px] shadow-soft dark:shadow-dark-soft">
            <div className="rounded-[calc(2rem-1px)] bg-surface p-8 shadow-inner-light dark:bg-surface-dark md:p-10">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink-muted dark:text-ink-dark-secondary">
                Philosophy
              </span>
              <blockquote className="mt-4 font-display text-xl font-semibold leading-snug tracking-tight text-ink dark:text-ink-dark md:text-2xl">
                "Great software isn't just about what users see — it's about what they never have to
                think about."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
