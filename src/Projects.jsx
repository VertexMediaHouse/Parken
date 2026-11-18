// Placeholder photos. Replace with the real project shots.
const PROJECTS = [
  {
    image: '/hero-2.jpg',
    tag: 'Healthcare',
    title: 'Government Hospital, Shirhatti',
    meta: 'Gadag · 100 beds · complete electrical infrastructure for the taluk hospital',
  },
  {
    image: '/hero-1.jpg',
    tag: 'Healthcare',
    title: 'Mother & Child Hospital',
    meta: 'Chikkamagaluru · 250 beds · electrical works for a modern government MCH facility',
  },
  {
    image: '/hero-3.jpg',
    tag: 'Smart City',
    title: 'Bengeri Smart Market',
    meta: 'Hubballi–Dharwad · 3 acres · 110+ shops for 250+ vendors',
  },
]

const IN_PROGRESS = [
  ['Jayadeva Hospital, Hubballi', '250 beds'],
  ['Government Hospital, Bailhongal', '50 beds'],
  ['PWD street lighting', '4,100+ streetlights installed'],
]

export default function Projects() {
  return (
    <section id="projects" className="bg-cream px-4 pb-24 text-[#1c140f] sm:px-16 sm:pb-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#5b4a3e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
              PROJECTS IN ACTION
            </p>
            <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
              Completed infrastructure <em className="text-[#9b8b7e]">work</em>
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-3 rounded-full border border-[#1c140f]/15 py-1.5 pl-5 pr-1.5 text-[15px] transition-colors hover:bg-[#f3ece4]"
          >
            View project portfolio
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#7a3418] text-white transition-transform group-hover:rotate-45">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M7 17 17 7M8 7h9v9" />
              </svg>
            </span>
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((p) => (
            <article key={p.title} className="group rounded-[28px] bg-[#f3ece4] p-2.5">
              <div className="overflow-hidden rounded-[22px]">
                <img
                  src={p.image}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="px-4 pb-5 pt-5">
                <span className="rounded-full bg-[#7a3418]/10 px-3 py-1 text-xs text-[#7a3418]">{p.tag}</span>
                <h3 className="mt-4 font-serif text-3xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-[#7a6a5e]">{p.meta}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-[28px] bg-[#7a3418] px-6 py-5 text-[15px] text-white/75">
          <span className="flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs tracking-wide text-white">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#e8a04a]" />
            In progress
          </span>
          {IN_PROGRESS.map(([name, detail]) => (
            <span key={name}>
              <span className="text-white">{name}</span> · {detail}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
