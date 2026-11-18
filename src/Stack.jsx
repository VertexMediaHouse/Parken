import { useEffect, useRef, useState } from 'react'
import { ITEMS } from './Industries.jsx'

const ICONS = [
  'M4 4h16v16H4zM4 9h16M9 9v11', // scope
  'M16 19v-1a4 4 0 0 0-8 0v1M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z', // team
  'm5 12 4 4 10-10', // delivered
]
const STICKY_TOP = 96 // px, matches top-24

export default function Stack() {
  const list = useRef(null)
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const cards = [...list.current.children]
      const i = cards.findLastIndex((c) => c.getBoundingClientRect().top <= STICKY_TOP + 1)
      setActive(Math.max(0, i))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sticky cards report their stuck position, so derive the natural one from the list top.
  const goTo = (i) => {
    const card = list.current.children[0]
    const step = card.offsetHeight + parseFloat(getComputedStyle(list.current).rowGap)
    const top = list.current.getBoundingClientRect().top + window.scrollY + i * step - STICKY_TOP
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <section className="bg-cream px-4 py-24 text-ink sm:px-16 sm:py-28">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[250px_1fr]">
        <nav className="sticky top-24 hidden self-start lg:block">
          {ITEMS.map((item, i) => (
            <button
              key={item.title}
              onClick={() => goTo(i)}
              aria-current={i === active}
              className={`flex w-full items-center gap-4 rounded-full px-4 py-3 text-left text-[17px] transition-colors ${
                i === active ? 'bg-[#efe9e2] font-medium text-ink' : 'text-ink/60 hover:text-ink'
              }`}
            >
              <span className="text-ink/50">0{i + 1}</span>
              {item.title}
            </button>
          ))}
        </nav>

        <div ref={list} className="flex flex-col gap-8">
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="sticky top-24 grid gap-6 rounded-[28px] bg-white p-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.04)] sm:grid-cols-[44%_1fr]"
            >
              <img src={item.image} alt="" loading="lazy" className="aspect-[4/3] h-full w-full rounded-[22px] object-cover sm:aspect-auto sm:h-[340px]" />
              <div className="flex flex-col justify-between gap-8 px-3 pb-3 sm:py-2 sm:pr-6">
                <div>
                  <h3 className="text-3xl font-medium tracking-[-0.03em] sm:text-4xl">{item.title}</h3>
                  <p className="mt-5 max-w-sm text-[17px] leading-relaxed text-ink/80">{item.detail}</p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {item.chips.map((chip, j) => (
                    <li key={chip} className="flex items-center gap-2 rounded-full bg-[#f4f1ec] px-4 py-2.5 text-[15px]">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                        <path d={ICONS[j]} />
                      </svg>
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
