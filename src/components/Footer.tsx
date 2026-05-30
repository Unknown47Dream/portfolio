export default function Footer() {
  return (
    <footer className="border-t border-black/5 px-4 py-10 dark:border-white/5 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-ink-muted dark:text-ink-dark-secondary">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {['Twitter', 'GitHub', 'Dribbble', 'LinkedIn'].map((social) => (
            <a
              key={social}
              href="#"
              className="text-xs text-ink-muted transition-all duration-500 ease-spring hover:text-ink dark:text-ink-dark-secondary dark:hover:text-ink-dark"
            >
              {social}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
