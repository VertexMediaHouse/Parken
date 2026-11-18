const SERVICES = [
  ['Business Strategy', 'Develop strategic roadmaps that align goals, improve performance, and ensure sustainable business growth.', 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm3.5-12.5-2 5-5 2 2-5 5-2Z'],
  ['Market Analysis', 'Deliver market insights that support decisions, improve planning, and uncover new growth opportunities.', 'M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm10 2-4.3-4.3M8 11l2 2 4-4'],
  ['Process Optimization', 'Streamline operations, reduce inefficiencies, and improve performance through structured optimization.', 'M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.3l2-1.6-2-3.4-2.4 1a7.6 7.6 0 0 0-2.2-1.3L14.3 3h-4l-.4 2.4a7.6 7.6 0 0 0-2.2 1.3l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.6l-2 1.6 2 3.4 2.4-1a7.6 7.6 0 0 0 2.2 1.3l.4 2.4h4l.4-2.4a7.6 7.6 0 0 0 2.2-1.3l2.4 1 2-3.4-2-1.6c.1-.4.1-.9.1-1.3Z'],
  ['Growth Advisory', 'Identify new opportunities, develop actionable strategies, and drive scalable business growth effectively forward.', 'm3 17 6-6 4 4 8-8M15 7h6v6'],
  ['Financial Planning', 'Strengthen financial performance through forecasting, budgeting, and resource allocation for stability.', 'M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6'],
  ['Change Management', 'Guide organizations through transformation with structured planning, execution, and adoption strategies.', 'M3 12a9 9 0 0 1 15.5-6.3L21 8M21 3v5h-5M21 12a9 9 0 0 1-15.5 6.3L3 16M3 21v-5h5'],
]

export default function Services() {
  return (
    <section id="services" className="bg-cream px-4 pb-24 text-[#1c140f] sm:px-16 sm:pb-32">
      <div className="mx-auto max-w-6xl text-center">
        <p className="flex items-center justify-center gap-2 text-xs tracking-[0.2em] text-[#5b4a3e]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#e8a04a]" />
          OUR SERVICES
        </p>
        <h2 className="mx-auto mt-6 max-w-3xl font-serif text-5xl leading-[1.05] tracking-[-0.02em] sm:text-6xl">
          Strategic business solutions <em className="text-[#9b8b7e]">for modern enterprises</em>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-[#7a6a5e]">
          Explore a range of expert consulting services designed to improve performance, strengthen operations, and
          support sustainable business growth.
        </p>
        <a
          href="#"
          className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#7a3418] py-1.5 pl-6 pr-1.5 text-[15px] text-white"
        >
          Get in Touch
          <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#7a3418] transition-transform group-hover:rotate-45">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </a>

        <div className="mt-16 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(([title, text, icon]) => (
            <article
              key={title}
              className="group rounded-[28px] bg-[#f3ece4] p-8 transition-colors duration-300 hover:bg-[#7a3418] hover:text-white"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-white text-[#7a3418]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={icon} />
                </svg>
              </span>
              <h3 className="mt-14 font-serif text-3xl">{title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#7a6a5e] transition-colors group-hover:text-white/80">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
