import Lenis from 'lenis'

// Framer-style motion, all optional: smooth scroll, fade-up reveals, count-up stats, nav shadow.
// Without JS (or with reduced motion) every element is simply visible.
export function startMotion() {
  const nav = document.querySelector('.nav')
  const onScroll = () => nav?.classList.toggle('is-scrolled', scrollY > 8)
  addEventListener('scroll', onScroll, { passive: true }); onScroll()

  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return

  // card spotlight: feed cursor position to the card's :after gradient
  addEventListener('pointermove', e => {
    const c = e.target.closest?.('.card'); if (!c) return
    const r = c.getBoundingClientRect()
    c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`)
  }, { passive: true })

  const lenis = new Lenis({ duration: 1.1, smoothWheel: true })
  const raf = t => { lenis.raf(t); requestAnimationFrame(raf) }
  requestAnimationFrame(raf)

  // reveal: grid children stagger, everything else in a section fades up as a block
  const grids = '.g2 > *, .g3 > *, .g4 > *, .g5 > *'
  const targets = [...document.querySelectorAll(`main section .wrap > *, body section .wrap > *, ${grids}`)]
    .filter(el => !el.matches('.g2, .g3, .g4, .g5, .hero *') && !el.closest('.hero, .pagehead'))
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return
    const el = e.target; el.classList.add('in'); io.unobserve(el)
    setTimeout(() => el.classList.remove('rv', 'in'), 1500) // hand hover transitions back to the element
  }), { rootMargin: '0px 0px -8% 0px' })
  for (const el of targets) {
    if (el.getBoundingClientRect().top < innerHeight * 0.92) continue // already on screen: leave it
    const i = el.matches(grids) ? [...el.parentElement.children].indexOf(el) : 0
    el.style.setProperty('--d', `${Math.min(i, 5) * 70}ms`)
    el.classList.add('rv'); io.observe(el)
  }

  // count up plain figures such as 13, 50+, 1,700+ (years like 2003 are left alone)
  const cio = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return
    cio.unobserve(e.target)
    const el = e.target, end = +el.dataset.n, suffix = el.dataset.s, t0 = performance.now()
    const step = t => {
      const p = Math.min((t - t0) / 1400, 1), v = Math.round(end * (1 - (1 - p) ** 3))
      el.textContent = v.toLocaleString('en-IN') + suffix
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }), { threshold: 0.6 })
  for (const el of document.querySelectorAll('.stat')) {
    const m = el.textContent.trim().match(/^([\d,]+)(\+?)$/)
    if (!m || (!m[2] && /^(19|20)\d\d$/.test(m[1]))) continue
    el.dataset.n = m[1].replace(/,/g, ''); el.dataset.s = m[2]
    el.style.minWidth = `${el.textContent.length}ch`
    cio.observe(el)
  }
}
