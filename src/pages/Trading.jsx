import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

const CUSTOMERS = [
  ['Contractors', <path d="M4 17h16M6 17v-3a6 6 0 0 1 12 0v3M10 8V5h4v3" />],
  ['Builders', <path d="M4 21V9l8-6 8 6v12M9 21v-6h6v6" />],
  ['Developers', <path d="M3 21h18M5 21V4h8v17M13 9h6v12M8 8h2M8 12h2M8 16h2" />],
  ['Dealers', <path d="M4 11v10h16V11M3 7l2-4h14l2 4c0 2-1.5 3-3 3s-3-1-3-3c0 2-1.5 3-3 3S9 9 9 7c0 2-1.5 3-3 3S3 9 3 7zM10 21v-5h4v5" />],
  ['Retailers', <path d="M5 8h14l-1 13H6zM9 8a3 3 0 0 1 6 0" />],
  ['Consultants & project teams', <><circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 5a3 3 0 0 1 0 6M21 20a6 6 0 0 0-4-5.7" /></>],
]
const SECTORS = ['Residential', 'Commercial', 'Industrial', 'Institutional']

class Component extends DCLogic {
renderVals() {
const brands = [
['Legrand', '/img/bb655788983d8312f5e27df0b0b861ab.png'],
['Havells', '/img/91f5465a7beff9a9bc08e94d746a572b.png'],
['Polycab', '/img/c2975ec5fafc9efa04ea0dafb0d79fc8.png'],
['Schneider Electric', '/img/5cbf90197cd62d520d7188a1a9ae4aec.png'],
['L&T', '/img/60390122cc428563d22f78a5d5537020.png'],
['ABB', '/img/3dac94a9407069ab3df0d2f02e8ba9f9.png'],
['Finolex Cables', '/img/fb7d2b883345ef8033c8006f80516a3c.png'],
['KEI Wires & Cables', '/img/11a0412345e15fbcb8f2f67f8c630bf1.png'],
['Crompton', '/img/b0842fc18c0402c890e8a9df537ad0c1.png'],
['Orient Electric', '/img/b0e7f6671ac7d4033cd7bcb40fa28550.png'],
['V-Guard', '/img/4b6154a31877fa31b514ca79a7b9615d.png'],
['RR Kabel', '/img/ae56375d436b0eafdec75d53f5d1717e.png'],
['GM', '/img/bf32904fbc02b38a1bf0fc2daa4ebefa.png'],
['Goldmedal', '/img/c40e25a975012704d1ae27ad98b161da.png'],
['GreatWhite', '/img/498d805f2b1ea1e0c4d59ff0e72e90f6.png'],
['Norisys', '/img/6312172bc9927bd274ac03c16cd9d871.png']
];
return { logos: brands.map(([name, src]) => ({ src, alt: name + ' logo' })) };
}
}

export default function Trading() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/warehouse-aisle.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / Trading &amp; Distribution</p>
<p className={"eyebrow"}>Vertical 01 · Since 2003</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Trading &amp; <em>Distribution</em></h1>
<p className={"lead"}>One of the largest and most reliable wholesale electrical distributors in the region – and a trusted supply partner for infrastructure projects.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/verticals"}>Overview</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/trading"}>Trading &amp; Distribution</Button><Button variant="ghost" size="sm" href={"/infrastructure"}>Infrastructure &amp; Projects</Button><Button variant="ghost" size="sm" href={"/in-house-brand"}>In-house Brand</Button></div></nav>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Overview</p><h2 className={"h2"}>The core of our business for over 23 years</h2>
<p>What started as a single store in 2003 is now a regional wholesale network, supplying quality products from India's leading brands with reliable stock and timely service.</p>
<div className={"g3"} style={{gap: "16px", marginTop: "8px"}}>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>13</span><span className={"small muted"}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>16+</span><span className={"small muted"}>Leading brands</span></div>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>1,700+</span><span className={"small muted"}>Dealer network</span></div>
</div></div>
<img src={"/media/warehouse-racks.webp"} alt={"Warehouse racks stocked with electrical goods"} loading={"lazy"} style={{width: "100%", height: "400px", borderRadius: "12px", objectFit: "cover", display: "block"}} />
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"reach"}>
<div className={"reach-who"}><p className={"eyebrow"}>Who we supply</p><h2 className={"h3"}>Trusted by the people who build</h2>
<ul className={"who"}>{CUSTOMERS.map(([name, icon]) => <li key={name}><span className={"whoico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>{icon}</svg></span>{name}</li>)}</ul></div>
<div className={"reach-sec on-dark"}><p className={"eyebrow"}>Sectors</p><h2 className={"h3"}>Every kind of project</h2>
<ol className={"sectors"}>{SECTORS.map((name, i) => <li key={name}><span className={"secn"}>{String(i + 1).padStart(2, '0')}</span>{name}</li>)}</ol></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Product portfolio</p><h2 className={"h2"}>What we supply</h2></div><Button variant="link" href={"/products"}>Browse products →</Button></div>
<div className={"g2"} style={{gap: "24px"}}>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h3 className={"h3"}>Electrical Products</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Modular switches</li><li className={"check"}>Wires &amp; cables (HT/LT)</li><li className={"check"}>Switchgears &amp; panel fittings</li><li className={"check"}>Metal boxes &amp; DBs</li><li className={"check"}>MCBs, RCCBs</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"} /></svg></div><h3 className={"h3"}>Lighting Solutions</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>LED lights</li><li className={"check"}>Panel fittings</li><li className={"check"}>Chandeliers &amp; pendant lights</li><li className={"check"}>Antique light fittings</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 11l9-7 9 7M5 10v10h14V10"} /></svg></div><h3 className={"h3"}>Home &amp; Industrial Appliances</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Geysers</li><li className={"check"}>Kitchen chimneys</li><li className={"check"}>Ceiling &amp; table fans</li><li className={"check"}>Kitchen appliances</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 20c0-6 4-6 8-8s8-2 8-8"} /><circle cx={"4"} cy={"20"} r={"1.5"} /><circle cx={"20"} cy={"4"} r={"1.5"} /></svg></div><h3 className={"h3"}>Specialised Cables</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Underground electric &amp; telecom cables</li><li className={"check"}>Raychem termination &amp; joint kits</li><li className={"check"}>Industrial HT/LT cables</li></ul></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap stack"} style={{gap: "28px"}}>
<div className={"sechead"} style={{marginBottom: "0"}}><div><p className={"eyebrow"}>Our channel partners</p><h2 className={"h2"}>Authorised partner for leading brands</h2></div></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px"}}>
{v.logos.map((l, i) => (<Fragment key={i}><div style={{height: "96px", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px"}}><img src={l.src} alt={l.alt} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block"}} /></div></Fragment>))}
</div>
<p className={"small muted"} style={{textAlign: "center"}}>…and many more</p>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Reach &amp; logistics</p><h2 className={"h2"}>Close to every customer, ready for every project</h2></div></div>
<div className={"g2"} style={{gap: "24px"}}>
<div className={"card tcard"}><div className={"timg tmap"}><img src={"/media/branch-map-720.webp"} alt={"Map of Parkan branches across Karnataka, Goa and Gujarat"} loading={"lazy"} /></div><div className={"tbody"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"} /><circle cx={"12"} cy={"10"} r={"2.5"} /></svg></div><h2 className={"h3"}>Branch network</h2><p className={"small"}>13 branches across Karnataka, Goa and Gujarat — Hubballi, Belagavi, Shivamogga, Mangaluru, Bengaluru, Margao, Ahmedabad and more — with stock and service close to every customer.</p><Button variant="link" href={"/branches"}>Find a branch →</Button></div></div>
<div className={"card tcard"}><div className={"timg"}><img src={"/media/site-engineers.webp"} alt={"Site engineers reviewing an electrical installation"} loading={"lazy"} /></div><div className={"tbody"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 9h4l3 3v4h-7"} /><circle cx={"7"} cy={"18"} r={"2"} /><circle cx={"17"} cy={"18"} r={"2"} /></svg></div><h2 className={"h3"}>Supply for projects</h2><p className={"small"}>A trusted supply partner for infrastructure projects, backed by a pan-India logistics partner and our 1,500 sq ft warehouse in Odhav.</p><Button variant="link" href={"/infrastructure"}>See our projects →</Button></div></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Dealer, contractor or bulk buyer?</h2><p className={"lead"}>Get project pricing and priority supply from your nearest branch.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Request Bulk Pricing</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
