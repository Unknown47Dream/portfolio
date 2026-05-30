import { useState, useEffect, useCallback, useRef } from 'react'

const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [dark, setDark] = useState(false)
  const [active, setActive] = useState('')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    setMounted(true)
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  useEffect(() => {
    const ids = ['hero', ...NAV_LINKS.map((l) => l.id)]
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      { threshold: 0.2, rootMargin: '-80px 0px -40% 0px' }
    )

    els.forEach((el) => el && observerRef.current?.observe(el))
    return () => observerRef.current?.disconnect()
  }, [])

  const toggleDark = useCallback(() => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }, [dark])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <nav className="fixed top-0 left-1/2 z-40 mt-6 -translate-x-1/2">
        <div className="flex items-center gap-6 rounded-full border border-black/5 bg-white/70 px-5 py-2 shadow-soft backdrop-blur-2xl dark:border-white/10 dark:bg-surface-dark/70 dark:shadow-dark-soft">
          <a href="#" className="font-display text-sm font-semibold tracking-tight text-ink dark:text-ink-dark">
            Portfolio
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={`#${link.id}`}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-500 ease-spring ${
                  active === link.id
                    ? 'bg-black/5 text-ink dark:bg-white/10 dark:text-ink-dark'
                    : 'text-ink-secondary hover:text-ink dark:text-ink-dark-secondary dark:hover:text-ink-dark'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={toggleDark}
            className="hidden h-8 w-8 items-center justify-center rounded-full text-ink-secondary transition-all duration-500 ease-spring hover:bg-black/5 hover:text-ink dark:text-ink-dark-secondary dark:hover:bg-white/5 dark:hover:text-ink-dark md:flex"
            aria-label="Toggle theme"
          >
            {dark ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 1V2M7 12V13M13 7H12M2 7H1M11.5 2.5L10.8 3.2M3.2 10.8L2.5 11.5M11.5 11.5L10.8 10.8M3.2 3.2L2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 8.5C10.5 9 9 9.5 7 9.5C4 9.5 2.5 8 2.5 5C2.5 3.5 3.5 2 5 1.5C2.5 2 1 4 1 6.5C1 9.5 3.5 12 6.5 12C9 12 11 10.5 11.5 8.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="relative flex h-8 w-8 flex-col items-center justify-center gap-[5px] md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`block h-[1.5px] w-5 rounded-full bg-ink transition-all duration-500 ease-spring dark:bg-ink-dark ${
                open ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 rounded-full bg-ink transition-all duration-500 ease-spring dark:bg-ink-dark ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] w-5 rounded-full bg-ink transition-all duration-500 ease-spring dark:bg-ink-dark ${
                open ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-30 flex items-center justify-center backdrop-blur-3xl transition-all duration-700 ease-spring ${
          open
            ? 'pointer-events-auto bg-white/95 opacity-100 dark:bg-surface-dark/95'
            : 'pointer-events-none bg-white/0 opacity-0 dark:bg-surface-dark/0'
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className={`font-display text-5xl font-bold tracking-tight text-ink transition-all duration-700 ease-spring hover:opacity-50 dark:text-ink-dark ${
                mounted && open
                  ? 'translate-y-0 opacity-100 blur-0'
                  : 'translate-y-12 opacity-0 blur-md'
              }`}
              style={{
                transitionDelay: mounted && open ? `${150 + i * 100}ms` : '0ms',
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={toggleDark}
            className={`mt-4 flex items-center gap-3 text-ink-secondary transition-all duration-700 ease-spring hover:text-ink dark:text-ink-dark-secondary dark:hover:text-ink-dark ${
              mounted && open
                ? 'translate-y-0 opacity-100 blur-0'
                : 'translate-y-12 opacity-0 blur-md'
            }`}
            style={{
              transitionDelay: mounted && open ? `${150 + NAV_LINKS.length * 100}ms` : '0ms',
            }}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="3" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M7 1V2M7 12V13M13 7H12M2 7H1M11.5 2.5L10.8 3.2M3.2 10.8L2.5 11.5M11.5 11.5L10.8 10.8M3.2 3.2L2.5 2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.5 8.5C10.5 9 9 9.5 7 9.5C4 9.5 2.5 8 2.5 5C2.5 3.5 3.5 2 5 1.5C2.5 2 1 4 1 6.5C1 9.5 3.5 12 6.5 12C9 12 11 10.5 11.5 8.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
            )}
            <span className="text-sm">{dark ? 'Light mode' : 'Dark mode'}</span>
          </button>
        </nav>
      </div>
    </>
  )
}
