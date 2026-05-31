export default function Footer() {
  const socials = [
    { name: "X", link: "https://x.com/ds_worm" },
    { name: "GitHub", link: "https://github.com/Unknown47Dream" },
    { name: "LinkedIn", link: "https://www.linkedin.com/in/peyman68ta/" },
    { name: "Telegram", link: "https://t.me/Peyman_TA" },
  ];
  return (
    <footer className="border-t border-black/5 px-4 py-10 dark:border-white/5 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="text-xs text-ink-muted dark:text-ink-dark-secondary">
          &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              className="text-xs text-ink-muted transition-all duration-500 ease-spring hover:text-ink dark:text-ink-dark-secondary dark:hover:text-ink-dark"
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
