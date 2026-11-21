import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

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
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Verticals</p>
<p className={"eyebrow"}>Three business verticals</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Three businesses that strengthen each other</h1>
<p className={"lead"}>Trading &amp; Distribution, Infrastructure &amp; Projects and our In-house Brand. Our supply network feeds our projects, and 23 years in the field shape the products we create.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><a className={"on"} href={"/verticals"}>Overview</a><a href={"/trading"}>Trading &amp; Distribution</a><a href={"/infrastructure"}>Infrastructure &amp; Projects</a><a href={"/in-house-brand"}>In-house Brand</a></div></nav>

<section className={"sec"}><div className={"wrap stack"} style={{gap: "88px"}}>
<div className={"g2"} style={{gap: "64px", alignItems: "center"}}>
<img src={"/media/distribution-floor.webp"} alt={"Distribution floor stocked with electrical products"} loading={"lazy"} style={{width: "100%", height: "400px", borderRadius: "14px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 9h4l3 3v4h-7"} /><circle cx={"7"} cy={"18"} r={"2"} /><circle cx={"17"} cy={"18"} r={"2"} /></svg></div><span className={"tag"}>Vertical 01 · Since 2003</span></div>
<h2 className={"h2"}>Trading &amp; Distribution</h2>
<p>One of the largest and most reliable wholesale electrical distributors in the region – and a trusted supply partner for infrastructure projects.</p>
<ul className={"list"}><li className={"check"}>Electrical products, lighting, appliances and specialised cables</li><li className={"check"}>Channel partner for Legrand, Havells, Polycab, Schneider Electric and more</li><li className={"check"}>13 branches serving a 1,700+ dealer network</li></ul>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-blue"} href={"/trading"}>Explore Trading</a><a className={"btn btn-line"} href={"/contact"}>Bulk Enquiry</a></div></div>
</div>

<div className={"g2"} style={{gap: "64px", alignItems: "center"}}>
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 21h16M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16M10 8h1M10 12h1M10 16h1M14 8h1M14 12h1M14 16h1"} /></svg></div><span className={"tag tag-red"}>Vertical 02 · Since 2020</span></div>
<h2 className={"h2"}>Infrastructure &amp; Projects</h2>
<p>End-to-end electrical infrastructure – cabling, panels and lighting – for government hospitals, public institutions and smart-city works across Karnataka.</p>
<ul className={"list"}><li className={"check"}>50+ government projects completed</li><li className={"check"}>4,100+ streetlights installed for the Public Works Department</li><li className={"check"}>Hospitals in Shirhatti, Chikkamagaluru, Hubballi and Bailhongal</li></ul>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-blue"} href={"/infrastructure"}>Explore Projects</a><a className={"btn btn-line"} href={"/contact"}>Discuss a Project</a></div></div>
<img src={"/img/306556b2cb02a531c3cba888a36ca077.jpg"} alt={"Aerial night view of the illuminated Unkal Lake promenade"} style={{width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px", display: "block"}} />
</div>

<div className={"g2"} style={{gap: "64px", alignItems: "center"}}>
<div className={"g2"} style={{gap: "12px"}}>
<img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Copper flexible wire"} style={{width: "100%", height: "194px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/22ae9b4fdc00b2a1ac38d99de2e97f2f.png"} alt={"Compression cable glands"} style={{width: "100%", height: "194px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/7a8cf99aa34623d083b1537073ddf866.png"} alt={"Corrugated flexible pipe"} style={{width: "100%", height: "194px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/db0d79cb2106768fc379d2fd816f5e66.png"} alt={"Surface and modular boxes"} style={{width: "100%", height: "194px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
</div>
<div className={"stack"} style={{gap: "18px"}}><div className={"row"} style={{gap: "12px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 21h18M5 21V10l5 3V10l5 3V6l4 2v13"} /></svg></div><span className={"tag"}>Vertical 03 · Since 2026</span></div>
<h2 className={"h2"}>In-house Brand</h2>
<p>We create quality electrical products under our own PARKAN brand – backed by 23+ years of trade experience and a 1,700+ dealer network.</p>
<ul className={"list"}><li className={"check"}>Wires, cable accessories, conduits and boxes</li><li className={"check"}>Made through trusted contract manufacturing</li><li className={"check"}>More products being added</li></ul>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-blue"} href={"/in-house-brand"}>Explore Our Brand</a><a className={"btn btn-line"} href={"/products"}>View Products</a></div></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How they connect</p><h2 className={"h2"}>One network behind every order and project</h2></div></div>
<div className={"g3"}>
<div className={"card"}><div className={"stepn"}>1</div><h3 className={"h4"}>We supply</h3><p className={"small"}>Distribution gives us stock, brand partnerships and reach to 1,700+ dealers.</p></div>
<div className={"card"}><div className={"stepn"}>2</div><h3 className={"h4"}>We execute</h3><p className={"small"}>Projects use materials from our own network, so timelines stay in our control.</p></div>
<div className={"card"}><div className={"stepn"}>3</div><h3 className={"h4"}>We create</h3><p className={"small"}>What we learn in the field shapes the PARKAN products we make.</p></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Not sure which team you need?</h2><p className={"lead"}>Tell us what you're working on and we'll route you to the right vertical.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Send an Enquiry</a></div>
</div></div></section>
<Footer />
</div>
  )
}
