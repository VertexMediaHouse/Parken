import { useEffect, useState } from 'react'

const NAV = [
  ['Home', '/'],
  ['About', '/about'],
  ['Services', '/#services'],
  ['Industries', '/#industries'],
  ['Projects', '/#projects'],
]

export function Header() {
  return (
    <header className="relative z-10 flex items-center justify-between px-4 py-6 sm:px-16">
      <a href="/" className="flex items-center gap-2 text-xl font-medium tracking-tight">
        <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <path d="M7 9h10M7 12h7M7 15h10" stroke="#05080c" strokeWidth="2" strokeLinecap="round" />
        </svg>
        ConsultPro
      </a>

      <nav className="hidden items-center gap-8 md:flex">
        {NAV.map(([label, href]) => (
          <a
            key={label}
            href={href}
            aria-current={href === location.pathname ? 'page' : undefined}
            className="text-[15px] text-white/90 transition-colors hover:text-white/60 aria-[current]:text-white aria-[current]:underline aria-[current]:underline-offset-8"
          >
            {label}
          </a>
        ))}
      </nav>

      <a href="/#contact" className="rounded-full bg-white px-5 py-2.5 text-[15px] text-ink transition-colors hover:bg-white/85">
        Get in touch
      </a>
    </header>
  )
}

// Demo images (Wikimedia Commons): hero-1 & hero-3 by Shixart1985, CC BY 2.0;
// hero-2 "Revox B215 - cable harness" by Retired electrician, CC0. Replace with your own.
const SLIDES = [
  {
    image: '/hero-1.jpg',
    title: ['Business Consultants', 'That Deliver Results'],
    text: 'Helping businesses grow with strategy, insights, and expert consulting solutions for lasting business success.',
  },
  {
    image: '/hero-2.jpg',
    title: ['Expert Guidance', 'For Smarter Decisions'],
    text: 'Turning market insight and proven frameworks into clear, confident decisions for your business.',
  },
  {
    image: '/hero-3.jpg',
    title: ['Strategic Consulting', 'For Lasting Growth'],
    text: 'Supporting business growth through strategic planning, expert guidance, and proven consulting expertise.',
  },
]

const INTERVAL = 6000

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = setTimeout(() => setActive((active + 1) % SLIDES.length), INTERVAL)
    return () => clearTimeout(id)
  }, [active])

  const slide = SLIDES[active]

  return (
    <section className="relative h-svh min-h-[640px] w-full overflow-hidden bg-ink text-white">
      {SLIDES.map((s, i) => (
        <img
          key={s.image}
          src={s.image}
          alt=""
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      <Header />

      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col gap-8 px-4 pb-16 sm:px-16 lg:flex-row lg:items-end lg:justify-between">
        <div key={active} className="max-w-3xl animate-[rise_0.8s_ease-out]">
          <h1 className="text-5xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-7xl">
            {slide.title[0]}
            <br />
            {slide.title[1]}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">{slide.text}</p>
        </div>

        <a
          href="#"
          className="group flex w-fit shrink-0 items-center gap-4 rounded-full bg-white py-1.5 pl-6 pr-1.5 text-[15px] text-ink"
        >
          Book a Strategy Call
          <span className="grid h-10 w-10 place-items-center rounded-full bg-ink text-white transition-transform group-hover:rotate-45">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </a>
      </div>

      <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col items-end gap-5 sm:right-12">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Show slide ${i + 1}`}
            aria-current={i === active}
            className={`flex items-center gap-3 text-xs tracking-widest transition-colors ${
              i === active ? 'font-semibold text-white' : 'text-white/60 hover:text-white'
            }`}
          >
            0{i + 1}
            <span className={`h-px bg-current transition-all duration-500 ${i === active ? 'w-9' : 'w-4'}`} />
          </button>
        ))}
      </div>
    </section>
  )
}
