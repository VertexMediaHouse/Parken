import { useRef } from 'react'

// Demo photos: local hero shots + Unsplash. Replace with your own.
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=75`
export const ITEMS = [
  { image: '/hero-3.jpg', title: 'Manufacturing', text: 'Leaner lines, sharper output.', detail: 'Process audits, lean rollouts and supply-chain fixes that cut waste and lift throughput without new capex.', chips: ['12 Plants', 'Ops Team', 'Delivered'] },
  { image: u('1486406146926-c627a92ad1ab'), title: 'Financial Services', text: 'Growth with risk under control.', detail: 'Strategy, compliance and cost programs that help banks and insurers grow while keeping regulators comfortable.', chips: ['30+ Firms', 'Risk Team', 'Delivered'] },
  { image: u('1473341304170-971dccb5ac1e'), title: 'Energy', text: 'Reliable plans for a shifting grid.', detail: 'Transition roadmaps, asset planning and operating models built for utilities facing a fast-changing market.', chips: ['8 Utilities', 'Energy Team', 'Delivered'] },
  { image: '/hero-1.jpg', title: 'Technology', text: 'Scale products, not overhead.', detail: 'Go-to-market, pricing and org design that let software and hardware companies scale revenue faster than cost.', chips: ['50+ Startups', 'Growth Team', 'Delivered'] },
  { image: u('1497366216548-37526070297c'), title: 'Professional Services', text: 'Better margins, happier teams.', detail: 'Pricing, utilisation and partner models that turn busy firms into profitable, well-run practices.', chips: ['40 Firms', 'People Team', 'Delivered'] },
]

export default function Industries() {
  const track = useRef(null)
  const scroll = (dir) => track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: 'smooth' })

  return (
    <section id="industries" className="bg-cream px-4 pt-24 text-ink sm:px-16 sm:pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between gap-6">
          <h2 className="text-4xl font-medium tracking-[-0.03em] sm:text-6xl">Industries, Served Better</h2>
          <a href="#" className="shrink-0 rounded-full bg-white px-5 py-2.5 text-[15px] transition-colors hover:bg-white/70">
            All Industries
          </a>
        </div>

        <div
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {ITEMS.map((item) => (
            <article
              key={item.title}
              className="relative aspect-[352/358] w-[85%] shrink-0 snap-start overflow-hidden rounded-2xl sm:w-[calc((100%-1.5rem)/3.1)]"
            >
              <img src={item.image} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <div className="absolute inset-x-5 bottom-6 text-white">
                <h3 className="text-2xl font-medium tracking-[-0.02em]">{item.title}</h3>
                <p className="mt-1 text-[15px] text-white/80">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          {[-1, 1].map((dir) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              aria-label={dir < 0 ? 'Previous' : 'Next'}
              className="grid h-10 w-10 place-items-center rounded-full bg-[#e9e5dd] transition-colors hover:bg-[#ddd7cc]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d={dir < 0 ? 'm15 6-6 6 6 6' : 'm9 6 6 6-6 6'} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
