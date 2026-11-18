const COLUMNS = [
  ['Services', ['Business Strategy', 'Market Analysis', 'Process Optimization', 'Financial Planning']],
  ['Industries', ['Manufacturing', 'Financial Services', 'Energy', 'Technology']],
  ['Company', ['About', 'Projects', 'Team', 'Careers']],
]

export default function Footer() {
  return (
    <footer id="contact" className="bg-cream px-2 pb-2 sm:px-3 sm:pb-3">
      <div className="overflow-hidden rounded-[32px] bg-[#1c140f] px-6 pt-16 text-white sm:px-14 sm:pt-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
                LET&apos;S TALK
              </p>
              <h2 className="mt-5 max-w-2xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-7xl">
                Ready to build what&apos;s <em className="text-[#c9a98f]">next?</em>
              </h2>
            </div>
            <a
              href="#"
              className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[15px] text-[#1c140f]"
            >
              Book a Strategy Call
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#7a3418] text-white transition-transform group-hover:rotate-45">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </span>
            </a>
          </div>

          <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <a href="#" className="flex items-center gap-2 text-xl font-medium tracking-tight">
                <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
                  <circle cx="12" cy="12" r="11" fill="currentColor" />
                  <path d="M7 9h10M7 12h7M7 15h10" stroke="#1c140f" strokeWidth="2" strokeLinecap="round" />
                </svg>
                ConsultPro
              </a>
              <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-white/60">
                Strategy, insight and hands-on delivery for businesses that want lasting growth.
              </p>
              <a href="mailto:hello@consultpro.com" className="mt-6 block text-[15px] text-white/90 hover:text-white">
                hello@consultpro.com
              </a>
            </div>
            {COLUMNS.map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <p className="text-sm text-white/40">{title}</p>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-[15px] text-white/80 transition-colors hover:text-white">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/50 sm:flex-row sm:justify-between">
            <p>© {new Date().getFullYear()} ConsultPro. All rights reserved.</p>
            <div className="flex gap-6">
              {['LinkedIn', 'X', 'Privacy', 'Terms'].map((l) => (
                <a key={l} href="#" className="hover:text-white">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="-mb-[0.22em] select-none text-center font-serif text-[22vw] leading-none tracking-[-0.04em] text-white/[0.06]"
        >
          ConsultPro
        </p>
      </div>
    </footer>
  )
}
