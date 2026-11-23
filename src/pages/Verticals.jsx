import { Buildings, Factory, Truck } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header, { Arrow } from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

// each vertical feeds the next; the last one is highlighted as the outcome
const FLOW = [
  ['Trading & distribution', 'We supply', 'Distribution gives us stock, brands and 1,700+ dealers.'],
  ['Infrastructure & projects', 'We execute', 'Projects use our own stock, so we control timelines.'],
  ['In-house brand', 'We create', 'Field experience shapes every PARKAN product.'],
]

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function Verticals() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/bailhongal-site.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Verticals</p>
<p className={"eyebrow"}>Three business verticals</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Three businesses, <em>one strength</em></h1>
<p className={"lead"}>Supply, projects and our own brand. Each one makes the others stronger.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/verticals"}>Overview</Button><Button variant="ghost" size="sm" href={"/trading"}>Trading &amp; Distribution</Button><Button variant="ghost" size="sm" href={"/infrastructure"}>Infrastructure &amp; Projects</Button><Button variant="ghost" size="sm" href={"/in-house-brand"}>In-house Brand</Button></div></nav>

<section className={"sec"}><div className={"wrap stack vstack"} style={{gap: "88px"}}>
<div className={"g2 duo vstack-card"} style={{gap: "64px", "--i": 0}}>
<img src={"/media/distribution-floor.webp"} alt={"Distribution floor stocked with electrical products"} loading={"lazy"} style={{width: "100%", height: "400px", borderRadius: "8px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico"}><Truck /></div><span className={"tag"}>Vertical 01 · Since 2003</span></div>
<h2 className={"h2"}>Trading &amp; Distribution</h2>
<p>One of the region's largest electrical wholesalers.</p>
<ul className={"list"}><li className={"check"}>Electrical products, lighting, appliances and specialised cables</li><li className={"check"}>Channel partner for Legrand, Havells, Polycab, Schneider Electric and more</li><li className={"check"}>13 branches serving a 1,700+ dealer network</li></ul>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/trading"}>Explore Trading</Button><Button variant="secondary" href={"/contact"}>Bulk Enquiry</Button></div></div>
</div>

<div className={"g2 duo vstack-card"} style={{gap: "64px", "--i": 1}}>
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico ico-red"}><Buildings /></div><span className={"tag tag-red"}>Vertical 02 · Since 2020</span></div>
<h2 className={"h2"}>Infrastructure &amp; Projects</h2>
<p>Cabling, panels and lighting for government hospitals and smart-city works across Karnataka.</p>
<ul className={"list"}><li className={"check"}>50+ government projects completed</li><li className={"check"}>4,100+ streetlights installed for the Public Works Department</li><li className={"check"}>Hospitals in Shirhatti, Chikkamagaluru, Hubballi and Bailhongal</li></ul>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/infrastructure"}>Explore Projects</Button><Button variant="secondary" href={"/contact"}>Discuss a Project</Button></div></div>
<img src={"/img/306556b2cb02a531c3cba888a36ca077.jpg"} alt={"Aerial night view of the illuminated Unkal Lake promenade"} style={{width: "100%", height: "400px", objectFit: "cover", borderRadius: "8px", display: "block"}} />
</div>

<div className={"g2 duo vstack-card"} style={{gap: "64px", "--i": 2}}>
<img src={"/media/quality-lab.webp"} alt={"Quality testing of PARKAN products at an engineering test bench"} loading={"lazy"} style={{width: "100%", height: "400px", borderRadius: "8px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico"}><Factory /></div><span className={"tag"}>Vertical 03 · Since 2026</span></div>
<h2 className={"h2"}>In-house Brand</h2>
<p>Quality electrical products under our own PARKAN brand.</p>
<ul className={"list"}><li className={"check"}>Wires, cable accessories, conduits and boxes</li><li className={"check"}>Made through trusted contract manufacturing</li><li className={"check"}>More products being added</li></ul>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/in-house-brand"}>Explore Our Brand</Button><Button variant="secondary" href={"/products"}>View Products</Button></div></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How they connect</p><h2 className={"h2"}>One network, every order</h2></div></div>
<ol className={"flow"}>
{FLOW.map(([tag, title, text], i) => <li key={title}>{i > 0 && <span className={"fconn"} aria-hidden={"true"}><Arrow /></span>}<div className={"fhead"}><span className={"fnum"}>{String(i + 1).padStart(2, '0')}</span><span className={"ftag"}>{tag}</span></div><h3>{title}</h3><p className={"small"}>{text}</p></li>)}
</ol>
</div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Not sure who to call?</h2><p className={"lead"}>Tell us what you need. We'll connect you to the right team.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Send an Enquiry</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
