// Text wordmarks for now. Swap for official SVG logos in /public when you have them.
const BRANDS = ['Legrand', 'Havells', 'Polycab', 'Schneider Electric', 'L&T', 'ABB', 'Finolex Cables', 'Siemens', 'Crompton', 'Anchor']

export default function Partners() {
  return (
    <section className="bg-cream pt-20 text-[#1c140f] sm:pt-24">
      <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-4 sm:px-0">
        <div>
          <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-[#5b4a3e]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
            OUR CHANNEL PARTNERS
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight tracking-[-0.01em] sm:text-4xl">
            Authorised distributor for India&apos;s <em className="text-[#9b8b7e]">leading electrical brands</em>
          </h2>
        </div>
        <a href="#" className="group flex items-center gap-2 text-[15px] text-[#7a3418]">
          All brands we deal in
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>

      <div className="group mt-12 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-[marquee_40s_linear_infinite_reverse] gap-4 group-hover:[animation-play-state:paused]">
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <li
              key={i}
              aria-hidden={i >= BRANDS.length}
              className="grid h-24 w-64 place-items-center rounded-[22px] border border-[#1c140f]/[0.06] bg-[#f3ece4] text-2xl font-semibold tracking-[-0.03em] text-[#1c140f]/45 transition-colors hover:text-[#7a3418]"
            >
              {brand}
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center text-sm text-[#9b8b7e]">…and many more</p>
    </section>
  )
}
