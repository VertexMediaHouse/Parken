import { useEffect, useState } from 'react'
import { ArrowUpRight, CaretLeft, CaretRight, Clock, Cube, HardHat, Package, Factory, MagnifyingGlass, MapPin, NavigationArrow, Phone, Plug, Wrench } from '@phosphor-icons/react'
import { DCLogic, useDC } from '../dc.js'
import Header, { Arrow } from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button, { IconButton } from '../Button.jsx'
import { brands } from '../LogoWall.jsx'
import { branches, mapEmbed as embed, directions } from '../branches.js'

const HOURS = 'Mon – Sat, 9:30 am – 7:00 pm'
const Ico = ({ d, children }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d ? <path d={d}></path> : children}</svg>

const projects = {
  progress: [
    ['Healthcare', 'Jayadeva Hospital, Hubballi', 'Hubballi · 250 beds · cardiac hospital', '/img/7aa2c2aa6de312a190ee5d9684012526.jpg', 'Jayadeva Hospital Hubballi building under construction at night'],
    ['Healthcare', 'Government Hospital, Bailhongal', 'Belagavi district · 50 beds · new taluk hospital', '/img/2fbd60c19eb9c691a775bbfd81bf9f56.jpg', 'Workers laying reinforcement at the Bailhongal hospital site'],
    ['Government', 'PWD Street Lighting', 'Huvinahadagali · 4,100+ LED street lights for the PWD', '/img/7c2464003990a220631972e928a422ee.jpg', 'High-mast street light installed for the PWD in Huvinahadagali', '50% 30%'],
  ],
  done: [
    ['Healthcare', 'Government Hospital, Shirhatti', 'Gadag · 100 beds · taluk hospital', '/img/d69f347a7af9b6768177cdac9874b11b.jpg', 'Government Hospital Shirhatti lit up at night'],
    ['Healthcare', 'Mother & Child Hospital', 'Chikkamagaluru · 250 beds · government MCH hospital', '/img/0cde396e732d34e99a30452e72a74c4f.jpg', 'Front facade of the Mother and Child Hospital, Chikkamagaluru'],
    ['Smart City', 'Bengeri Smart Market', 'Hubballi–Dharwad · 3 acres · 110+ shops for 250+ vendors', '/img/bb97532d2a242883a6cae7275a7ebe06.jpg', 'Illuminated arch at the Bengeri smart market, Hubballi-Dharwad'],
    ['Smart City', 'Unkal Lake', 'Hubballi Smart City · 218 acres · lakefront lighting', '/img/306556b2cb02a531c3cba888a36ca077.jpg', 'Aerial night view of the illuminated Unkal Lake promenade'],
  ],
}
const SECTOR = { Healthcare: 'tag-red', Government: '', 'Smart City': 'tag-green' }

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'progress', q: '', st: '', type: '', sel: branches[0].name } }
  renderVals() {
    const { tab, q, st, type, sel } = this.state
    const needle = q.trim().toLowerCase()
    const list = branches.filter(b => (!st || b.state === st) && (!type || b.tag === type) &&
      (!needle || (b.name + ' ' + b.state + ' ' + b.address).toLowerCase().includes(needle)))
    const cur = branches.find(b => b.name === sel) ?? branches[0]
    return {
      tab, q, list, cur,
      items: projects[tab],
      setTab: t => this.setState({ tab: t }),
      set: k => e => this.setState({ [k]: e.target.value }),
      pick: name => this.setState({ sel: name }),
    }
  }
}


// each slide carries its own copy; the text block swaps with the image
const SLIDES = [
  { src: '/media/home-hero-1.webp', eyebrow: 'Electrical solutions for a stronger tomorrow', h1: <>Wires, Cables &amp; Components <em>That Power India.</em></>, lead: 'Reliable electrical products for homes, businesses, industry and infrastructure.' },
  { src: '/media/home-hero-2.webp', eyebrow: 'PARKAN cable accessories', h1: <>Glands, Lugs &amp; Ties <em>Built to Hold.</em></>, lead: 'Cable glands, copper and aluminium lugs, clips and ties for clean, secure installations.' },
  { src: '/media/home-hero-3.webp', eyebrow: 'Conduits & boxes for every site', h1: <>Conduits &amp; Junction Boxes <em>Made for Real Sites.</em></>, lead: 'Flexible pipe, surface and modular boxes that keep wiring protected from slab to switch.' },
]
// background slider: slides travel left to right; state = [current, previous]
function HeroSlides() {
  const [[cur, prev], set] = useState([0, -1])
  const go = i => set(([c]) => i === c ? [c, -1] : [i, c])
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const t = setTimeout(() => go((cur + 1) % SLIDES.length), 6000)
    return () => clearTimeout(t)
  }, [cur])
  const s = SLIDES[cur]
  return <>
    <div className="hx-slides" aria-hidden="true">
      {SLIDES.map(({ src }, i) => <div key={src} className={'hx-slide' + (i === cur ? ' on' : i === prev ? ' out' : '')}><img src={src} alt="" fetchPriority={i ? 'low' : 'high'} /></div>)}
    </div>
    <div className="hx-body">
      <div className="hx-copy" key={cur}>
        <p className="hx-eyebrow"><span>{s.eyebrow}</span></p>
        <h1 className="hx-h1">{s.h1}</h1>
        <p className="hx-lead">{s.lead}</p>
      </div>
      <div className="row" style={{gap: "32px"}}>
        <Button size="lg" href="/products" iconRight={<Arrow />}>Explore Our Products</Button>
        <Button variant="secondary" size="lg" href="/verticals" iconRight={<ArrowUpRight size={16} />}>Our Verticals</Button>
      </div>
    </div>
    <div className="hx-dots"><button type="button" className="hx-arr" aria-label="Previous image" onClick={() => go((cur + SLIDES.length - 1) % SLIDES.length)}><CaretLeft size={18} weight="bold" /></button>{SLIDES.map(({ src: s }, i) => <button key={s} type="button" aria-label={`Show image ${i + 1}`} aria-current={i === cur} className={i === cur ? 'on' : ''} onClick={() => go(i)}><span /></button>)}<button type="button" className="hx-arr" aria-label="Next image" onClick={() => go((cur + 1) % SLIDES.length)}><CaretRight size={18} weight="bold" /></button></div>
  </>
}

export default function Main() {
  const v = useDC(Component)
  return (
<div className="home">
<Header />

<section className="hx"><div className="wrap"><div className="hx-card">
<HeroSlides />
</div></div></section>

<section className="sec-tight alt brands" aria-label="Brands we distribute"><div className="wrap">
<div className="sechead">
<div><p className="kicker">Our channel partners</p><h2 className="h2">Distributor for<br /><em>India's top brands</em></h2></div>
<Button variant="link" href="/trading" iconRight={<Arrow />}>All Brands We Deal In</Button>
</div>
</div>
<div className="marquee"><div className="track">
{brands.concat(brands).map(([name, src], i) => <div key={i} className="logo-tile" aria-hidden={i >= brands.length ? 'true' : undefined}><img src={src} alt={i >= brands.length ? '' : name + ' logo'} /></div>)}
</div></div>
<p className="more"><span>…and many more</span></p>
</section>

<section className="sec"><div className="wrap">
<div className="g2 about">
<img className="capsule" src="/media/home-about.webp" alt="Parkan team in a product presentation at the office" loading="lazy" />
<div className="stack" style={{gap: "28px", justifyContent: "center"}}>
<div><p className="kicker">About us</p><h2 className="h2">Powering Projects for a <em>Stronger, Smarter</em> Future.</h2></div>
<p className="lead">Parkan Enterprises Limited is an unlisted public limited company with over 23 years of experience in electrical and infrastructure solutions, operating across Karnataka, Goa and Gujarat.</p>
<div className="row" style={{gap: "32px"}}>
<Button href="/about" iconRight={<Arrow />}>More About Us</Button>
<Button variant="secondary" href="/contact" iconRight={<Arrow />}>Get in Touch</Button>
</div>
</div>
</div>
<div className="g4 stats">
<div className="statcard"><Ico d="M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12zM8.5 14l-1.5 7 5-2.5 5 2.5-1.5-7M12 6.5l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 8.6l2-.3z" /><span className="stat">23+</span><span>Years of Experience</span></div>
<div className="statcard"><Ico d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" /><span className="stat">13</span><span>Branches in 3 States</span></div>
<div className="statcard"><Ico d="M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 6.5M18 14a6 6 0 0 1 3.5 6" /><span className="stat">1,700+</span><span>Dealer Network</span></div>
<div className="statcard"><Ico d="M3 21h18M4 10h16M12 3l8 5H4zM6 10v8M10 10v8M14 10v8M18 10v8" /><span className="stat">50+</span><span>Government Projects Done</span></div>
</div>
</div></section>

<section className="sec alt"><div className="wrap verts">
<div className="stack" style={{gap: "24px"}}>
<p className="kicker">Our business verticals</p>
<h2 className="h2">Three Verticals. <em>One Network.</em></h2>
<p className="lead">Supply, projects and our own brand, working as one.</p>
<Button href="/verticals" iconRight={<Arrow />}>Explore Our Verticals</Button>
</div>
<div className="g3">
<a className="vcard" href="/trading"><img src="/media/vertical-trading-720.webp" alt="Warehouse racks stocked with wire reels and electrical goods" loading="lazy" /><div className="vbody"><span className="vico float red"><Package /></span><h3 className="h3">Trading &amp; Distribution</h3><p className="small">Electrical products from India's top brands. Serving 1,700+ dealers and bulk projects across 13 branches.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
<a className="vcard" href="/infrastructure"><img src="/media/vertical-infra-720.webp" alt="Hospital building with completed electrical works, lit at night" loading="lazy" /><div className="vbody"><span className="vico float red"><HardHat /></span><h3 className="h3">Infrastructure &amp; Projects</h3><p className="small">Electrical infrastructure, from design to handover. 50+ government hospitals and smart-city works delivered.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
<a className="vcard" href="/in-house-brand"><img src="/media/vertical-brand-720.webp" alt="Electrician wiring a distribution board" loading="lazy" /><div className="vbody"><span className="vico float red"><Cube /></span><h3 className="h3">In-house Brand</h3><p className="small">Quality products under our own PARKAN brand. Copper wires, cable accessories and conduits built for reliability.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
</div>
</div></section>

<section className="sec"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our products</p><h2 className="h2">Our <em>Products.</em></h2></div>
<p>Electrical products for homes, businesses and industry.</p>
</div>
<div className="bento">
<a className="bcard big" href="/products"><div className="btxt"><span className="bico"><Plug /></span><h3>Wires &amp; Cables</h3><p>Copper, aluminium and submersible wire.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/media/product-wires-720.webp" alt="PARKAN multi-core copper cable" loading="lazy" /></a>
<a className="bcard warm" href="/products"><div className="btxt"><span className="bico"><Wrench /></span><h3>Cable Accessories</h3><p>Glands, terminals, ties and clips.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/media/product-accessories-720.webp" alt="Cable glands, lugs, ferrules, clips and ties" loading="lazy" /></a>
<a className="bcard" href="/products"><div className="btxt"><span className="bico"><Factory /></span><h3>Conduits &amp; Boxes</h3><p>Flexible pipe, surface and modular boxes.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/media/product-conduits-720.webp" alt="PVC conduit pipes, junction boxes and modular boxes" loading="lazy" /></a>
</div>
</div></section>

<section className="sec alt projects"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our projects</p><h2 className="h2">Infrastructure <em>Projects.</em></h2></div>
<p>Key government, healthcare and smart-city projects.</p>
</div>
<div className="ptabs-row center">
<div className="ptabs" role="tablist" aria-label="Project status">
<Button variant="ghost" role="tab" aria-selected={v.tab === 'progress'} className={v.tab === 'progress' ? 'on' : undefined} onClick={() => v.setTab('progress')}>In Progress ({projects.progress.length})</Button>
<Button variant="ghost" role="tab" aria-selected={v.tab === 'done'} className={v.tab === 'done' ? 'on' : undefined} onClick={() => v.setTab('done')}>Completed ({projects.done.length})</Button>
</div>
</div>
<div key={v.tab} className="pmarq" role="tabpanel"><div className="ptrack">
{[0, 1].flatMap(k => v.items.map(([sector, name, desc, src, alt, pos]) => <article key={name + k} className="pcard" aria-hidden={k ? 'true' : undefined}><img src={src} alt={k ? '' : alt} loading="lazy" style={pos && {objectPosition: pos}} /><div className="pbody"><span className={'tag ' + SECTOR[sector]}>{sector}</span><h3 className="h4">{name}</h3><p className="small">{desc}</p></div></article>))}
</div></div>
<div className="row" style={{justifyContent: "center", marginTop: "8px"}}><Button variant="link" href="/infrastructure" iconRight={<Arrow />}>View All Projects</Button></div>
</div></section>

<section className="sec"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our branches</p><h2 className="h2">Branches <em>Near You.</em></h2></div>
<p>Branches across Karnataka, Goa and Gujarat, close to you.</p>
</div>
<div className="finder">
<div className="flist">
<label className="search"><span className="sr">Search branches</span><MagnifyingGlass /><input type="search" placeholder="Search by branch, city or state" value={v.q} onChange={v.set('q')} /></label>
<div className="fsel">
<label><span className="sr">State</span><select className="input" onChange={v.set('st')} defaultValue=""><option value="">All states</option><option>Karnataka</option><option>Goa</option><option>Gujarat</option></select></label>
<label><span className="sr">Branch type</span><select className="input" onChange={v.set('type')} defaultValue=""><option value="">All branch types</option><option>Registered Office</option><option>Branch</option></select></label>
</div>
<p className="small">Showing <strong>{v.list.length}</strong> {v.list.length === 1 ? 'branch' : 'branches'}</p>
<div className="bscroll">
{v.list.map(b => <div key={b.name} className={'bcardx' + (b.name === v.cur.name ? ' on' : '')}>
<button type="button" className="bpick" onClick={() => v.pick(b.name)} aria-pressed={b.name === v.cur.name}>
<span className="bname">{b.name}{b.tag !== 'Branch' && <span className={'tag ' + b.tagCls}>{b.tag}</span>}</span>
<span className="bline"><MapPin />{b.address}</span>
<span className="bline"><Phone />{b.phone}<span className="sep"></span><span className="bhours"><Clock />{HOURS}</span></span>
</button>
<IconButton href={directions(b)} target="_blank" rel="noopener noreferrer" label={'Directions to ' + b.name} icon={<NavigationArrow />} />
</div>)}
{v.list.length === 0 && <p className="small" style={{padding: "16px"}}>No branch matches. Try another city or state.</p>}
</div>
</div>
<iframe key={v.cur.name} className="fmap" title={'Map: ' + v.cur.name} src={embed(v.cur)} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</div></section>

<section className="sec-tight" style={{paddingBottom: "56px"}}><div className="wrap"><div className="cta2">
<img src="/media/home-contact.webp" alt="" loading="lazy" />
<div className="stack" style={{gap: "16px", maxWidth: "560px"}}>
<p className="kicker light">Get in touch</p>
<h2 className="h2">Have a Project in Mind?</h2>
<p className="lead">Talk to us about products, projects or partnerships.</p>
</div>
<Button variant="accent" href="/contact" iconRight={<Arrow />}>Send an Enquiry</Button>
</div></div></section>

<Footer />
</div>
  )
}
