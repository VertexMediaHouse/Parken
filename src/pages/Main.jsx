import { DCLogic, useDC } from '../dc.js'
import Header, { Arrow } from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button, { IconButton } from '../Button.jsx'
import { brands } from '../LogoWall.jsx'
import { branches } from '../branches.js'

const HOURS = 'Mon – Sat, 9:30 am – 7:00 pm'
const mapQ = b => b.name === 'Odhav Warehouse' ? 'Odhav, Ahmedabad, Gujarat' : `${b.name}, ${b.state}`
const embed = b => `https://www.google.com/maps?q=${encodeURIComponent(mapQ(b))}&z=12&output=embed`
const directions = b => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Parkan Enterprises, ' + mapQ(b))

const projects = {
  progress: [
    ['Healthcare', 'Jayadeva Hospital, Hubballi', 'Hubballi · 250 beds · cardiac super-speciality branch of the Sri Jayadeva Institute', '/img/7aa2c2aa6de312a190ee5d9684012526.jpg', 'Jayadeva Hospital Hubballi building under construction at night'],
    ['Healthcare', 'Government Hospital, Bailhongal', 'Belagavi district · 50 beds · critical electrical infrastructure for a new taluk hospital', '/img/2fbd60c19eb9c691a775bbfd81bf9f56.jpg', 'Workers laying reinforcement at the Bailhongal hospital site'],
    ['Government', 'PWD Street Lighting', 'Huvinahadagali · 4,100+ street and high-mast LED lights installed for the Public Works Department', '/img/7c2464003990a220631972e928a422ee.jpg', 'High-mast street light installed for the PWD in Huvinahadagali'],
  ],
  done: [
    ['Healthcare', 'Government Hospital, Shirhatti', 'Gadag · 100 beds · complete electrical infrastructure for the taluk hospital', '/img/d69f347a7af9b6768177cdac9874b11b.jpg', 'Government Hospital Shirhatti lit up at night'],
    ['Healthcare', 'Mother & Child Hospital', 'Chikkamagaluru · 250 beds · electrical works for a modern government MCH facility', '/img/0cde396e732d34e99a30452e72a74c4f.jpg', 'Front facade of the Mother and Child Hospital, Chikkamagaluru'],
    ['Smart City', 'Bengeri Smart Market', 'Hubballi–Dharwad · 3 acres · 110+ shops for 250+ vendors', '/img/bb97532d2a242883a6cae7275a7ebe06.jpg', 'Illuminated arch at the Bengeri smart market, Hubballi-Dharwad'],
    ['Smart City', 'Unkal Lake', 'Hubballi Smart City · 218 acres · lighting for the promenade, walkways and amphitheatre', '/img/306556b2cb02a531c3cba888a36ca077.jpg', 'Aerial night view of the illuminated Unkal Lake promenade'],
  ],
}
const SECTOR = { Healthcare: 'tag-red', Government: '', 'Smart City': 'tag-green' }

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { tab: 'progress', q: '', st: '', type: '', sel: 'Hubballi', pg: 0, pages: 1 } }
  renderVals() {
    const { tab, q, st, type, sel, pg, pages } = this.state
    const needle = q.trim().toLowerCase()
    const list = branches.filter(b => (!st || b.state === st) && (!type || b.tag === type) &&
      (!needle || (b.name + ' ' + b.state + ' ' + b.address).toLowerCase().includes(needle)))
    const cur = branches.find(b => b.name === sel) ?? branches[0]
    return {
      tab, q, list, cur, pg, pages,
      items: projects[tab],
      setTab: t => this.setState({ tab: t, pg: 0 }),
      // ponytail: re-measured on render/scroll only, add a resize listener if dots drift after window resize
      measure: el => {
        if (!el) return
        const pages = Math.max(1, Math.ceil((el.scrollWidth - 2) / el.clientWidth))
        const pg = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2 ? pages - 1 : Math.round(el.scrollLeft / el.clientWidth)
        if (pages !== this.state.pages || pg !== this.state.pg) this.setState({ pages, pg })
      },
      set: k => e => this.setState({ [k]: e.target.value }),
      pick: name => this.setState({ sel: name }),
    }
  }
}

const Swoosh = ({ w = 280 }) => <svg className="swoosh" viewBox="0 0 300 16" width={w} aria-hidden="true"><path d="M4 13C70 3 190 0 296 6" fill="none" stroke="#D2232A" strokeWidth="3.5" strokeLinecap="round"></path></svg>
const Ico = ({ d, children }) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d ? <path d={d}></path> : children}</svg>
const IcoBoxes = () => <Ico><path d="M8 3l4 2v4l-4 2-4-2V5zM4 13l4-2 4 2v4l-4 2-4-2zM12 13l4-2 4 2v4l-4 2-4-2z"></path></Ico>
const IcoHelmet = () => <Ico><path d="M3 17h18M5 17v-3a7 7 0 0 1 14 0v3M10 7V5h4v2M12 5v5"></path></Ico>
const IcoCube = () => <Ico><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9zM12 12l8-4.5M12 12v9M12 12L4 7.5"></path></Ico>
const goPage = (e, i) => { const s = e.currentTarget.closest('section').querySelector('.pslider'); s.scrollTo({ left: i * s.clientWidth, behavior: 'smooth' }) }

export default function Main() {
  const v = useDC(Component)
  return (
<div className="home">
<Header />

<section className="hx"><div className="wrap"><div className="hx-card">
<img className="hx-bg" src="/media/distribution-floor.webp" alt="" />
<div className="hx-body">
<p className="hx-eyebrow"><span>Electrical solutions for</span><span>a stronger tomorrow</span></p>
<h1 className="hx-h1">Wires, Cables, Installation Accessories, Industrial Components <em>and Much More.</em></h1>
<Swoosh w={300} />
<p className="hx-lead">A comprehensive range of reliable electrical products for residential, commercial, industrial and infrastructure needs.</p>
<div className="row" style={{gap: "32px"}}>
<Button size="lg" href="/products" iconRight={<Arrow />}>Explore Our Products</Button>
<Button variant="secondary" size="lg" href="/verticals" iconRight={<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M7 17L17 7M8 7h9v9"></path></svg>}>Our Verticals</Button>
</div>
</div>
</div></div></section>

<section className="sec-tight alt brands" aria-label="Brands we distribute"><div className="wrap">
<div className="sechead">
<div><p className="kicker">Our channel partners</p><h2 className="h2">Authorised distributor for<br /><em>India's leading electrical brands</em></h2></div>
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
<div className="stack" style={{gap: "28px"}}>
<span className="pill">About Us</span>
<h2 className="h2">Powering Projects for a <em>Stronger, Smarter</em> Future <Swoosh w={200} /></h2>
<img className="capsule" src="/media/team-meeting.webp" alt="The Parkan team in a meeting at the office" loading="lazy" />
</div>
<div className="stack" style={{gap: "28px"}}>
<p className="kicker">Three business verticals</p>
<div className="vrow">
<a href="/trading"><span className="vico"><IcoBoxes /></span>Trading &amp; Distribution</a>
<a href="/infrastructure"><span className="vico"><IcoHelmet /></span>Infrastructure &amp; Projects</a>
<a href="/in-house-brand"><span className="vico"><IcoCube /></span>In-house Brand</a>
</div>
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
<h2 className="h2">Three Core Verticals. <em>One Stronger Network.</em></h2>
<p className="lead">From a wide range of electrical products to end-to-end project execution, our three business verticals work together to power homes, businesses and infrastructure across the region.</p>
<Button href="/verticals" iconRight={<Arrow />}>Explore Our Verticals</Button>
</div>
<div className="g3">
<a className="vcard" href="/trading"><img src="/media/warehouse-racks.webp" alt="Warehouse racks stocked with electrical goods" loading="lazy" /><div className="vbody"><span className="vico float"><IcoBoxes /></span><h3 className="h3">Trading &amp; Distribution</h3><p className="small">A comprehensive range of electrical products from India's leading brands.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
<a className="vcard" href="/infrastructure"><img src="/img/d69f347a7af9b6768177cdac9874b11b.jpg" alt="Government Hospital Shirhatti lit up at night" loading="lazy" /><div className="vbody"><span className="vico float red"><IcoHelmet /></span><h3 className="h3">Infrastructure &amp; Projects</h3><p className="small">End-to-end electrical infrastructure, from design to execution.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
<a className="vcard" href="/in-house-brand"><img src="/media/electrician-testing.webp" alt="Electrician testing an installation with a meter" loading="lazy" /><div className="vbody"><span className="vico float"><IcoCube /></span><h3 className="h3">In-house Brand</h3><p className="small">Reliable, high-quality electrical products under our own PARKAN brand.</p><Button as="span" variant="link" iconRight={<Arrow />}>Learn More</Button></div></a>
</div>
</div></section>

<section className="sec"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our products</p><h2 className="h2">Explore Our <em>Product Range.</em></h2></div>
<p>A comprehensive range of electrical products for residential, commercial and industrial applications.</p>
</div>
<div className="bento">
<a className="bcard big" href="/products"><div className="btxt"><span className="bico"><Ico d="M6 5h12M6 9h12M6 13h12M6 17h12M5 3v18M19 3v18" /></span><h3>Wires &amp; Cables</h3><p>Copper flexible, aluminium and submersible wire for every need.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/img/3ad7a62206a97cbc6d86d076701f53a0.png" alt="PARKAN multi-core copper flexible cable" loading="lazy" /></a>
<a className="bcard warm" href="/products"><div className="btxt"><span className="bico"><Ico d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-2.9 1.2V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-2.9-1.2l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.7 1.7 0 0 0 3 14H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.2-2.9l-.1-.1A2 2 0 1 1 7 4.2l.1.1A1.7 1.7 0 0 0 10 3V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 2.9 1.2l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.7 1.7 0 0 0 21 10h.1a2 2 0 1 1 0 4H21a1.7 1.7 0 0 0-1.6 1z" /></span><h3>Cable Accessories</h3><p>Glands, terminals, ties and clips for safe, seamless installations.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/img/22ae9b4fdc00b2a1ac38d99de2e97f2f.png" alt="Brass single and double compression cable glands" loading="lazy" /></a>
<a className="bcard" href="/products"><div className="btxt"><span className="bico"><Ico d="M3 21h18M5 21V10l5 3V10l5 3V6l4 2v13" /></span><h3>Conduits &amp; Boxes</h3><p>Flexible pipe and surface &amp; modular boxes for neat wiring.</p><IconButton as="span" aria-hidden="true" icon={<Arrow />} /></div><img src="/img/db0d79cb2106768fc379d2fd816f5e66.png" alt="White surface and modular switch boxes" loading="lazy" /></a>
</div>
</div></section>

<section className="sec alt"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our projects</p><h2 className="h2">Infrastructure <em>Projects.</em></h2></div>
<p>A portfolio of our key electrical infrastructure projects across government, healthcare and smart-city works.</p>
</div>
<div className="ptabs-row center">
<div className="ptabs" role="tablist" aria-label="Project status">
<Button variant="ghost" role="tab" aria-selected={v.tab === 'progress'} className={v.tab === 'progress' ? 'on' : undefined} onClick={() => v.setTab('progress')}>In Progress ({projects.progress.length})</Button>
<Button variant="ghost" role="tab" aria-selected={v.tab === 'done'} className={v.tab === 'done' ? 'on' : undefined} onClick={() => v.setTab('done')}>Completed ({projects.done.length})</Button>
</div>
</div>
<div key={v.tab} ref={v.measure} onScroll={e => v.measure(e.currentTarget)} className="pslider" role="tabpanel" style={{'--n': v.items.length}}>
{v.items.map(([sector, name, desc, src, alt]) => <article key={name} className="pcard"><img src={src} alt={alt} loading="lazy" /><div className="pbody"><span className={'tag ' + SECTOR[sector]}>{sector}</span><h3 className="h4">{name}</h3><p className="small">{desc}</p></div></article>)}
</div>
{v.pages > 1 && <div className="pdots">{Array.from({ length: v.pages }, (_, i) => <button key={i} type="button" className={i === v.pg ? 'on' : ''} aria-label={'Projects page ' + (i + 1)} aria-current={i === v.pg} onClick={e => goPage(e, i)}></button>)}</div>}
<div className="row" style={{justifyContent: "center", marginTop: "28px"}}><Button variant="link" href="/infrastructure" iconRight={<Arrow />}>View All Projects</Button></div>
</div></section>

<section className="sec"><div className="wrap">
<div className="sechead split">
<div><p className="kicker">Our branches</p><h2 className="h2">Find a Branch <em>Near You.</em></h2></div>
<p>A growing network of branches across Karnataka, Goa and Gujarat, ensuring faster service, wider reach and stronger support.</p>
</div>
<div className="finder">
<div className="flist">
<label className="search"><span className="sr">Search branches</span><Ico d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14zM21 21l-5-5" /><input type="search" placeholder="Search by branch, city or state" value={v.q} onChange={v.set('q')} /></label>
<div className="fsel">
<label><span className="sr">State</span><select className="input" onChange={v.set('st')} defaultValue=""><option value="">All states</option><option>Karnataka</option><option>Goa</option><option>Gujarat</option></select></label>
<label><span className="sr">Branch type</span><select className="input" onChange={v.set('type')} defaultValue=""><option value="">All branch types</option><option>Head Office</option><option>Registered Office</option><option>Branch</option><option>Warehouse</option></select></label>
</div>
<p className="small">Showing <strong>{v.list.length}</strong> {v.list.length === 1 ? 'branch' : 'branches'}</p>
<div className="bscroll">
{v.list.map(b => <div key={b.name} className={'bcardx' + (b.name === v.cur.name ? ' on' : '')}>
<button type="button" className="bpick" onClick={() => v.pick(b.name)} aria-pressed={b.name === v.cur.name}>
<span className="bname">{b.name}{b.tag !== 'Branch' && <span className={'tag ' + b.tagCls}>{b.tag}</span>}</span>
<span className="bline"><Ico d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11zM12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />{b.address}</span>
<span className="bline"><Ico d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />{b.phone}<span className="sep"></span><Ico d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zM12 7v5l3 2" />{HOURS}</span>
</button>
<IconButton href={directions(b)} target="_blank" rel="noopener noreferrer" label={'Directions to ' + b.name} icon={<Ico d="M3 11l18-8-8 18-2-8z" />} />
</div>)}
{v.list.length === 0 && <p className="small" style={{padding: "16px"}}>No branch matches. Try another city or state.</p>}
</div>
</div>
<iframe key={v.cur.name} className="fmap" title={'Map: ' + v.cur.name} src={embed(v.cur)} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
</div></section>

<section className="sec-tight" style={{paddingBottom: "112px"}}><div className="wrap"><div className="cta2">
<img src="/media/site-electrical-work.webp" alt="" loading="lazy" />
<div className="stack" style={{gap: "16px", maxWidth: "560px"}}>
<p className="kicker light">Get in touch</p>
<h2 className="h2">Have a Project in Mind?</h2>
<p className="lead">Get in touch with our team for products, project support or business collaboration.</p>
</div>
<Button variant="accent" href="/contact" iconRight={<Arrow />}>Send an Enquiry</Button>
</div></div></section>

<Footer />
</div>
  )
}
