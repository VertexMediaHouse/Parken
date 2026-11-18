import { Header } from './Hero.jsx'
import Footer from './Footer.jsx'

// Demo copy, photos and portraits (randomuser.me / Unsplash). Replace with your own.
const u = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=75`

const HIGHLIGHTS = [
  ['Founded in 2014', 'A decade of hands-on advisory work', 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z'],
  ['120+ specialists', 'Strategy, finance and operations experts', 'M16 19v-1a4 4 0 0 0-8 0v1M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 8v-1a3 3 0 0 0-2.2-2.9M4 19v-1a3 3 0 0 1 2.2-2.9'],
  ['30 cities served', 'Local teams with a national reach', 'M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z'],
]

const TIMELINE = [
  ['2014', 'Two founders, one desk', 'Started as a two-person advisory practice helping local manufacturers fix cash flow and planning.'],
  ['2017', 'First 100 clients', 'Grew into a full strategy and operations team, with repeat work from almost every early client.'],
  ['2020', 'Infrastructure practice', 'Launched our projects division, delivering hospital and public-sector infrastructure end to end.'],
  ['2023', 'Going national', 'Opened offices across 30 cities and partnered with India’s leading electrical brands.'],
  ['Today', '500+ businesses later', 'Still the same promise: listen first, plan honestly, and stay until the results show up.'],
]

const STATS = [
  ['500+', 'Businesses advised'],
  ['92%', 'See gains within 90 days'],
  ['₹1,200 Cr', 'Project value delivered'],
]

const VALUES = [
  ['Our Mission', 'Give every business, large or small, the clear strategy and steady execution usually reserved for the biggest firms.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z'],
  ['Our Vision', 'Become the most trusted growth partner for Indian businesses, measured by the results our clients keep.', 'M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12Zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'],
  ['Our Values', 'Honest advice, plain language and ownership of outcomes. We only recommend what we would do ourselves.', 'M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z'],
]

const TEAM = [
  ['Ananya Rao', 'Founder & CEO', 'https://randomuser.me/api/portraits/women/68.jpg'],
  ['Vikram Desai', 'Head of Strategy', 'https://randomuser.me/api/portraits/men/32.jpg'],
  ['Meera Iyer', 'Finance Director', 'https://randomuser.me/api/portraits/women/44.jpg'],
  ['Arjun Patil', 'Projects Lead', 'https://randomuser.me/api/portraits/men/75.jpg'],
]

function Eyebrow({ children, light }) {
  return (
    <p className={`flex items-center gap-2 text-xs tracking-[0.2em] ${light ? 'text-white/70' : 'text-[#5b4a3e]'}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
      {children}
    </p>
  )
}

function Icon({ d, className = 'h-5 w-5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d={d} />
    </svg>
  )
}

function CtaButton({ children, href = '/#contact', dark }) {
  return (
    <a
      href={href}
      className={`group inline-flex w-fit items-center gap-4 rounded-full py-1.5 pl-6 pr-1.5 text-[15px] ${
        dark ? 'bg-[#7a3418] text-white' : 'bg-white text-[#1c140f]'
      }`}
    >
      {children}
      <span
        className={`grid h-10 w-10 place-items-center rounded-full transition-transform group-hover:rotate-45 ${
          dark ? 'bg-white text-[#7a3418]' : 'bg-[#7a3418] text-white'
        }`}
      >
        <Icon d="M7 17 17 7M8 7h9v9" className="h-4 w-4" />
      </span>
    </a>
  )
}

export default function AboutUs() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-svh min-h-[640px] flex-col overflow-hidden bg-ink text-white">
        <img src="/hero-2.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
        <Header />
        <div className="relative z-10 mt-auto flex flex-col gap-8 px-4 pb-16 pt-10 sm:px-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl animate-[rise_0.8s_ease-out]">
            <Eyebrow light>ABOUT CONSULTPRO</Eyebrow>
            <h1 className="mt-6 text-5xl font-normal leading-[1.05] tracking-[-0.04em] sm:text-7xl">
              Built on trust.
              <br />
              <span className="font-serif italic">Driven by results.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90 sm:text-xl">
              For over a decade we have helped businesses plan smarter, run leaner and grow with confidence — one honest
              conversation at a time.
            </p>
          </div>
          <CtaButton href="#story">Read our story</CtaButton>
        </div>
      </section>

      <main className="bg-cream text-[#1c140f]">
        {/* Highlights */}
        <section className="px-4 sm:px-16">
          <div className="mx-auto grid max-w-6xl divide-[#1c140f]/10 border-b border-[#1c140f]/10 py-12 sm:grid-cols-3 sm:divide-x">
            {HIGHLIGHTS.map(([title, text, icon]) => (
              <div key={title} className="flex items-center gap-4 py-4 sm:px-8 sm:first:pl-0">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#f3ece4] text-[#7a3418]">
                  <Icon d={icon} />
                </span>
                <div>
                  <p className="font-serif text-2xl">{title}</p>
                  <p className="text-[15px] text-[#7a6a5e]">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Story */}
        <section id="story" className="scroll-mt-8 px-4 py-24 sm:px-16 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-2">
            <div className="lg:sticky lg:top-12 lg:self-start">
              <Eyebrow>OUR STORY</Eyebrow>
              <h2 className="mt-6 font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                A decade of work, <em className="text-[#9b8b7e]">one simple idea</em>
              </h2>
              <p className="mt-5 max-w-md text-[17px] leading-relaxed text-[#7a6a5e]">
                Good advice should be practical, honest and measured by results. That idea has shaped every client we have
                taken on since day one.
              </p>
              <img src="/hero-3.jpg" alt="" loading="lazy" className="mt-10 aspect-[4/3] w-full rounded-[28px] object-cover" />
            </div>

            <ol className="relative border-l border-[#1c140f]/10 pl-8 sm:pl-12">
              {TIMELINE.map(([year, title, text]) => (
                <li key={year} className="relative pb-12 last:pb-0">
                  <span className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-[#7a3418] ring-4 ring-cream sm:-left-[53px]" />
                  <p className="text-sm tracking-[0.15em] text-[#7a3418]">{year}</p>
                  <h3 className="mt-2 font-serif text-3xl">{title}</h3>
                  <p className="mt-2 max-w-md text-[15px] leading-relaxed text-[#7a6a5e]">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 sm:px-16">
          <div className="mx-auto grid max-w-6xl items-stretch gap-10 rounded-[28px] bg-[#1c140f] p-6 text-white sm:p-10 lg:grid-cols-[1fr_1.1fr_1fr]">
            <div className="flex flex-col justify-between gap-8">
              {STATS.map(([value, label]) => (
                <div key={label} className="border-b border-white/10 pb-6 last:border-0 last:pb-0">
                  <p className="font-serif text-6xl leading-none tracking-[-0.03em]">{value}</p>
                  <p className="mt-2 text-[15px] text-white/60">{label}</p>
                </div>
              ))}
            </div>
            <img src={u('1497366216548-37526070297c')} alt="" loading="lazy" className="aspect-[4/3] h-full w-full rounded-[22px] object-cover lg:aspect-auto" />
            <div className="flex flex-col justify-end gap-6">
              <Eyebrow light>WHY CLIENTS STAY</Eyebrow>
              <h2 className="font-serif text-4xl leading-[1.1] tracking-[-0.02em]">
                Advice you can act on <em className="text-[#c9a98f]">on Monday morning.</em>
              </h2>
              <p className="text-[15px] leading-relaxed text-white/70">
                No thick decks that gather dust. We work beside your team, set clear targets and stay accountable until
                they are met.
              </p>
              <CtaButton>Book a Strategy Call</CtaButton>
            </div>
          </div>
        </section>

        {/* Mission / Vision / Values */}
        <section className="px-4 py-24 sm:px-16 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <div className="flex justify-center">
                <Eyebrow>WHAT DRIVES US</Eyebrow>
              </div>
              <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                Purpose behind <em className="text-[#9b8b7e]">every project</em>
              </h2>
            </div>
            <div className="mt-16 grid gap-4 md:grid-cols-3">
              {VALUES.map(([title, text, icon], i) => (
                <article
                  key={title}
                  className={`flex min-h-[400px] flex-col justify-between rounded-[28px] p-8 ${
                    i === 0 ? 'bg-[#7a3418] text-white' : 'bg-[#f3ece4]'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <span className={`grid h-12 w-12 place-items-center rounded-full ${i === 0 ? 'bg-white/15' : 'bg-white text-[#7a3418]'}`}>
                      <Icon d={icon} />
                    </span>
                    <span className={`text-sm ${i === 0 ? 'text-white/60' : 'text-[#9b8b7e]'}`}>0{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="font-serif text-4xl">{title}</h3>
                    <p className={`mt-3 text-[15px] leading-relaxed ${i === 0 ? 'text-white/80' : 'text-[#7a6a5e]'}`}>{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section id="team" className="px-4 pb-24 sm:px-16 sm:pb-32">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>THE PEOPLE</Eyebrow>
                <h2 className="mt-5 font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
                  Meet our <em className="text-[#9b8b7e]">leadership</em>
                </h2>
              </div>
              <a href="#" className="group flex items-center gap-2 text-[15px] text-[#7a3418]">
                We&apos;re hiring
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {TEAM.map(([name, role, photo]) => (
                <article key={name} className="group rounded-[28px] bg-[#f3ece4] p-2.5">
                  <div className="overflow-hidden rounded-[22px]">
                    <img
                      src={photo}
                      alt={name}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="px-3 pb-3 pt-4">
                    <h3 className="font-serif text-2xl">{name}</h3>
                    <p className="text-sm text-[#7a6a5e]">{role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="px-4 pb-24 sm:px-16 sm:pb-32">
          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
            <div className="relative h-[420px] sm:h-[480px]">
              <img src="/hero-1.jpg" alt="" className="absolute left-0 top-0 h-[70%] w-[70%] rounded-[28px] object-cover" />
              <img
                src={u('1486406146926-c627a92ad1ab')}
                alt=""
                className="absolute bottom-0 right-0 h-[60%] w-[58%] rounded-[28px] border-8 border-cream object-cover"
              />
            </div>
            <figure>
              <Eyebrow>CLIENT VOICES</Eyebrow>
              <blockquote className="mt-6 font-serif text-3xl leading-[1.25] tracking-[-0.01em] sm:text-4xl">
                “They didn’t hand us a report and leave. They sat with our managers every week until the new plan was
                running on its own. <em className="text-[#9b8b7e]">Margins are up 18% in a year.</em>”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src="https://randomuser.me/api/portraits/men/46.jpg" alt="" className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-medium">Rahul Kulkarni</p>
                  <p className="text-sm text-[#7a6a5e]">Managing Director, Kulkarni Industries</p>
                </div>
              </figcaption>
            </figure>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
