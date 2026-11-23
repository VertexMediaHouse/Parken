import { BuildingOffice, HardHat, House, HouseLine, Lightbulb, Lightning, MapPin, Plug, ShoppingBag, Storefront, Truck, UsersThree } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

const CUSTOMERS = [
  ['Contractors', <HardHat />],
  ['Builders', <HouseLine />],
  ['Developers', <BuildingOffice />],
  ['Dealers', <Storefront />],
  ['Retailers', <ShoppingBag />],
  ['Consultants & project teams', <UsersThree />],
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
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/vertical-trading.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / Trading &amp; Distribution</p>
<p className={"eyebrow"}>Vertical 01 · Since 2003</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Trading &amp; <em>Distribution</em></h1>
<p className={"lead"}>One of the region's largest electrical wholesalers.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/verticals"}>Overview</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/trading"}>Trading &amp; Distribution</Button><Button variant="ghost" size="sm" href={"/infrastructure"}>Infrastructure &amp; Projects</Button><Button variant="ghost" size="sm" href={"/in-house-brand"}>In-house Brand</Button></div></nav>

<section className={"sec"}><div className={"wrap g2 duo"} style={{gap: "64px"}}>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Overview</p><h2 className={"h2"}>Our core since 2003</h2>
<p>One store in 2003. Today, a regional network stocking India's top brands.</p>
<div className={"g3"} style={{gap: "16px", marginTop: "8px"}}>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>13</span><span className={"small muted"}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>16+</span><span className={"small muted"}>Leading brands</span></div>
<div className={"stack"} style={{gap: "4px"}}><span className={"stat"} style={{fontSize: "34px"}}>1,700+</span><span className={"small muted"}>Dealer network</span></div>
</div></div>
<img src={"/media/about-hero.webp"} alt={"Distribution warehouse stocked with wire reels and switchgear"} loading={"lazy"} style={{width: "100%", height: "400px", borderRadius: "8px", objectFit: "cover", display: "block"}} />
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"reach"}>
<div className={"reach-who"}><p className={"eyebrow"}>Who we supply</p><h2 className={"h3"}>Trusted by builders</h2>
<ul className={"who"}>{CUSTOMERS.map(([name, icon]) => <li key={name}><span className={"whoico"}>{icon}</span>{name}</li>)}</ul></div>
<div className={"reach-sec on-dark"}><p className={"eyebrow"}>Sectors</p><h2 className={"h3"}>Every kind of project</h2>
<ol className={"sectors"}>{SECTORS.map((name, i) => <li key={name}><span className={"secn"}>{String(i + 1).padStart(2, '0')}</span>{name}</li>)}</ol></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Product portfolio</p><h2 className={"h2"}>What we supply</h2></div><Button variant="link" href={"/products"}>Browse products →</Button></div>
<div className={"g2"} style={{gap: "24px"}}>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico"}><Lightning /></div><h3 className={"h3"}>Electrical Products</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Modular switches</li><li className={"check"}>Wires &amp; cables (HT/LT)</li><li className={"check"}>Switchgears &amp; panel fittings</li><li className={"check"}>Metal boxes &amp; DBs</li><li className={"check"}>MCBs, RCCBs</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico ico-red"}><Lightbulb /></div><h3 className={"h3"}>Lighting Solutions</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>LED lights</li><li className={"check"}>Panel fittings</li><li className={"check"}>Chandeliers &amp; pendant lights</li><li className={"check"}>Antique light fittings</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico"}><House /></div><h3 className={"h3"}>Home &amp; Industrial Appliances</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Geysers</li><li className={"check"}>Kitchen chimneys</li><li className={"check"}>Ceiling &amp; table fans</li><li className={"check"}>Kitchen appliances</li></ul></div>
<div className={"card"} style={{padding: "32px", gap: "14px"}}><div className={"ico ico-red"}><Plug /></div><h3 className={"h3"}>Specialised Cables</h3><ul className={"list"} style={{gap: "8px"}}><li className={"check"}>Underground electric &amp; telecom cables</li><li className={"check"}>Raychem termination &amp; joint kits</li><li className={"check"}>Industrial HT/LT cables</li></ul></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap stack"} style={{gap: "28px"}}>
<div className={"sechead"} style={{marginBottom: "0"}}><div><p className={"eyebrow"}>Our channel partners</p><h2 className={"h2"}>Top brands, authorised</h2></div></div>
<div style={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: "16px"}}>
{v.logos.map((l, i) => (<Fragment key={i}><div style={{height: "96px", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", padding: "16px 20px"}}><img src={l.src} alt={l.alt} style={{maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block"}} /></div></Fragment>))}
</div>
<p className={"small muted"} style={{textAlign: "center"}}>…and many more</p>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Reach &amp; logistics</p><h2 className={"h2"}>Close by, always stocked</h2></div></div>
<div className={"g2"} style={{gap: "24px"}}>
<div className={"card tcard"}><div className={"timg tmap"}><img src={"/media/branch-map-720.webp"} alt={"Map of Parkan branches across Karnataka, Goa and Gujarat"} loading={"lazy"} /></div><div className={"tbody"}><div className={"ico"}><MapPin /></div><h2 className={"h3"}>Branch network</h2><p className={"small"}>13 branches across Karnataka, Goa and Gujarat, with stock close to you.</p><Button variant="link" href={"/branches"}>Find a branch →</Button></div></div>
<div className={"card tcard"}><div className={"timg"}><img src={"/media/about-people.webp"} alt={"Parkan team reviewing plans in the warehouse"} loading={"lazy"} /></div><div className={"tbody"}><div className={"ico ico-red"}><Truck /></div><h2 className={"h3"}>Supply for projects</h2><p className={"small"}>Bulk project supply, shipped pan-India from our Odhav warehouse.</p><Button variant="link" href={"/infrastructure"}>See our projects →</Button></div></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Buying in bulk?</h2><p className={"lead"}>Get project pricing and priority supply from your nearest branch.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Request Bulk Pricing</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
