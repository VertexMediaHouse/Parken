// Demo portraits from randomuser.me. Replace with your own.
const AVATARS = [
  'https://randomuser.me/api/portraits/women/68.jpg',
  'https://randomuser.me/api/portraits/men/32.jpg',
  'https://randomuser.me/api/portraits/women/44.jpg',
  'https://randomuser.me/api/portraits/men/75.jpg',
]

function Avatars({ count, size = 'h-9 w-9' }) {
  return (
    <span className="flex -space-x-2">
      {AVATARS.slice(0, count).map((src) => (
        <img key={src} src={src} alt="" className={`${size} rounded-full border-2 border-cream object-cover`} />
      ))}
    </span>
  )
}

export default function About() {
  return (
    <section className="bg-cream px-4 py-24 text-[#1c140f] sm:px-16 sm:py-32">
      <p className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[#5b4a3e]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
        OUR APPROACH
      </p>

      <h2 className="mx-auto mt-8 max-w-5xl text-center font-serif text-4xl leading-[1.15] tracking-[-0.02em] sm:text-6xl">
        Business asks a lot of you.{' '}
        <img
          src="/hero-3.jpg"
          alt=""
          className="inline-block h-[0.9em] w-[1.9em] rounded-full object-cover align-[-0.1em]"
        />{' '}
        <em>Here, you can finally plan ahead</em>{' '}
        <span className="text-[#9b8b7e]">
          — with seasoned advisors and proven frameworks that{' '}
          <span className="inline-flex rounded-full bg-[#efe6dc] p-1 align-middle">
            <Avatars count={3} size="h-9 w-9 sm:h-11 sm:w-11" />
          </span>{' '}
          drive growth.
        </span>
      </h2>

      <div className="mx-auto mt-20 grid max-w-6xl gap-4 lg:grid-cols-3">
        <article className="flex min-h-[480px] flex-col justify-between rounded-[28px] bg-[#f3ece4] p-9">
          <div>
            <p className="text-sm text-[#7a6a5e]">Since 2014 · Global &amp; remote</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">
              A clearer way to
              <br />
              run your business
            </h3>
          </div>
          <div>
            <Avatars count={4} />
            <p className="mt-4 font-serif text-8xl leading-none tracking-[-0.03em]">500+</p>
            <p className="mt-4 max-w-xs text-[15px] leading-relaxed text-[#7a6a5e]">
              Clients who scaled with sharper strategy, leaner operations and steadier growth.
            </p>
          </div>
        </article>

        <article className="relative flex min-h-[480px] flex-col justify-between overflow-hidden rounded-[28px] p-9 text-white">
          <img src="/hero-1.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
          <span className="relative grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/15 backdrop-blur">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
              <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 7-7" />
            </svg>
          </span>
          <div className="relative">
            <h3 className="font-serif text-3xl">Our promise</h3>
            <p className="mt-3 max-w-xs text-[15px] leading-relaxed text-white/85">
              Advice that listens first — experienced, unhurried and shaped around the business you actually run.
            </p>
          </div>
        </article>

        <article className="flex min-h-[480px] flex-col justify-between rounded-[28px] bg-[#7a3418] p-9 text-white">
          <div className="flex items-center justify-between">
            <p className="text-sm text-white/85">Plan · Execute · Grow</p>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-white/40">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
                <path d="M3 21h18M7 21a5 5 0 0 1 10 0M12 3v3M4.9 8.9l2.1 2.1M19.1 8.9 17 11M2 15h3M19 15h3" />
              </svg>
            </span>
          </div>
          <h3 className="font-serif text-5xl leading-[1.1] tracking-[-0.02em]">
            Real results,
            <br />
            in ninety days.
          </h3>
          <div className="flex items-center gap-4">
            <span className="flex shrink-0 -space-x-3">
              <img src="/hero-3.jpg" alt="" className="h-14 w-14 rounded-full object-cover" />
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#7a3418]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                  <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
                </svg>
              </span>
            </span>
            <p className="max-w-[220px] text-sm leading-relaxed text-white/90">
              92% of clients see measurable gains within 90 days.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
