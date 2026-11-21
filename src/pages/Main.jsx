import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

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
const first = brands.map(([name, src]) => ({ src, alt: name + ' logo', hidden: 'false' }));
const copy = brands.map(([name, src]) => ({ src, alt: '', hidden: 'true' }));
return { logos: first.concat(copy) };
}
}

export default function Main() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", fontFamily: "Inter, system-ui, sans-serif", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />

<section className={"hero on-dark"}><div className={"wrap"} style={{display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "56px", alignItems: "center", paddingTop: "80px", paddingBottom: "88px"}}>
<div className={"stack"} style={{gap: "24px"}}>
<p className={"eyebrow"}>Since 2003 · Karnataka · Goa · Gujarat</p>
<h1 className={"h1"}>Powering projects that build a stronger, smarter future</h1>
<p className={"lead"}>One of the region's largest wholesale electrical distributors, a trusted execution partner for government infrastructure, and the maker of our own PARKAN range of products.</p>
<div className={"row"} style={{gap: "16px", marginTop: "8px"}}><a className={"btn btn-red"} href={"/products"}>Explore Our Products <svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M5 12h14M13 6l6 6-6 6"}></path></svg></a><a className={"btn btn-ghost"} href={"/infrastructure"}>View Our Projects</a></div>
</div>
<figure style={{margin: "0", position: "relative"}}>
<img src={"/img/306556b2cb02a531c3cba888a36ca077.jpg"} alt={"Aerial night view of the illuminated Unkal Lake promenade, walkways and amphitheatre"} style={{width: "100%", height: "440px", objectFit: "cover", borderRadius: "14px", display: "block"}} />
<figcaption style={{position: "absolute", left: "16px", bottom: "16px", background: "rgba(11,33,67,.88)", color: "#FFFFFF", fontSize: "13px", fontWeight: "600", padding: "8px 14px", borderRadius: "999px"}}>Unkal Lake lighting · Hubballi Smart City</figcaption>
</figure>
</div></section>

<section aria-label={"Brands we distribute"} style={{background: "#F4F6F9", borderBottom: "1px solid #DDE2EA", padding: "40px 0 44px"}}>
<div className={"wrap row"} style={{justifyContent: "space-between", gap: "16px", marginBottom: "24px"}}>
<div className={"stack"} style={{gap: "6px"}}><p className={"eyebrow"} style={{margin: "0"}}>Our channel partners</p><h2 className={"h3"}>Authorised distributor for India's leading electrical brands</h2></div>
<a className={"link"} href={"/trading"}>All brands we deal in →</a>
</div>
<div className={"marquee"}><div className={"track"}>
{v.logos.map((l, i) => (<Fragment key={i}><div className={"logo-tile"} aria-hidden={l.hidden}><img src={l.src} alt={l.alt} /></div></Fragment>))}
</div></div>
<p className={"small muted"} style={{textAlign: "center", marginTop: "18px"}}>…and many more</p>
</section>

<section style={{padding: "56px 0 0"}}><div className={"wrap"}>
<div className={"g4"} style={{background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "14px", boxShadow: "0 16px 40px rgba(14,42,82,.10)", padding: "32px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>23+</span><span className={"muted small"}>Years of experience</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>13</span><span className={"muted small"}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>1,700+</span><span className={"muted small"}>Dealer network</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"}>50+</span><span className={"muted small"}>Government projects completed</span></div>
</div></div></section>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<img src={"/media/distribution-floor.webp"} alt={"Distribution floor stocked with electrical products ready for dispatch"} loading={"lazy"} style={{width: "100%", height: "420px", borderRadius: "14px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"}>Who we are</p>
<h2 className={"h2"}>Built on trust for over 23 years</h2>
<p>Parkan Enterprises Limited is an unlisted public limited company with over 23 years of experience in electrical and infrastructure solutions. Headquartered in Hubballi, we operate 13 branches across Karnataka, Goa and Gujarat.</p>
<ul className={"list"}><li className={"check"}>One of the region's largest wholesale electrical distributors, serving 1,700+ dealers</li><li className={"check"}>Trusted execution partner on 50+ government projects, from hospitals to smart-city works</li><li className={"check"}>Our own PARKAN range, building a platform for long-term growth</li></ul>
<a className={"link"} href={"/about"}>Read Our Story →</a>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Three business verticals</p><h2 className={"h2"}>Supply, execution and our own brand</h2></div><a className={"btn btn-line"} href={"/verticals"}>View all verticals</a></div>
<div className={"g3"}>
<article className={"card card-flat"}><img src={"/media/warehouse-racks.webp"} alt={"Warehouse racks stocked with electrical goods"} loading={"lazy"} style={{width: "100%", height: "220px", objectFit: "cover", display: "block"}} /><div className={"body"}><div className={"row"} style={{gap: "10px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 9h4l3 3v4h-7"}></path><circle cx={"7"} cy={"18"} r={"2"}></circle><circle cx={"17"} cy={"18"} r={"2"}></circle></svg></div><span className={"tag"}>01 · Since 2003</span></div><h3 className={"h3"}>Trading &amp; Distribution</h3><p className={"small"}>Electrical products, lighting, appliances and specialised cables from India's leading brands, supplied to contractors, builders, developers, dealers and retailers.</p><a className={"link"} href={"/trading"}>Explore →</a></div></article>
<article className={"card card-flat"}><img src={"/img/d69f347a7af9b6768177cdac9874b11b.jpg"} alt={"Government Hospital Shirhatti lit up at night"} style={{width: "100%", height: "220px", objectFit: "cover", display: "block"}} /><div className={"body"}><div className={"row"} style={{gap: "10px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 21h16M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16M10 8h1M10 12h1M10 16h1M14 8h1M14 12h1M14 16h1"}></path></svg></div><span className={"tag tag-red"}>02 · Since 2020</span></div><h3 className={"h3"}>Infrastructure &amp; Projects</h3><p className={"small"}>End-to-end electrical infrastructure – cabling, panels and lighting – for government hospitals, public institutions and smart-city works.</p><a className={"link"} href={"/infrastructure"}>Explore →</a></div></article>
<article className={"card card-flat"}><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"PARKAN multi-core copper flexible cable"} style={{width: "100%", height: "220px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><div className={"row"} style={{gap: "10px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 21h18M5 21V10l5 3V10l5 3V6l4 2v13"}></path></svg></div><span className={"tag"}>03 · Since 2026</span></div><h3 className={"h3"}>In-house Brand</h3><p className={"small"}>Quality electrical products under our own PARKAN name, made through contract manufacturing and backed by our dealer network.</p><a className={"link"} href={"/in-house-brand"}>Explore →</a></div></article>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>PARKAN products</p><h2 className={"h2"}>From our own range</h2></div>
<div className={"row"} style={{gap: "8px"}}><button className={"chip on"} type={"button"}>All</button><button className={"chip"} type={"button"}>Wires &amp; Cables</button><button className={"chip"} type={"button"}>Cable Accessories</button><button className={"chip"} type={"button"}>Conduits &amp; Boxes</button></div></div>
<div className={"g4"}>
<article className={"card card-flat"}><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Multi-core copper flexible cable with coloured insulation"} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><span className={"tag"}>Wires &amp; Cables</span><h3 className={"h4"}>Copper Flexible Wire</h3><p className={"small"}>[Sizes] · [Cores] · [Coil length]</p><a className={"link"} href={"/product"}>View details →</a></div></article>
<article className={"card card-flat"}><img src={"/img/46a59c725f2f845396470ddbf4aaf5dc.png"} alt={"Flat three-core submersible cable"} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><span className={"tag"}>Wires &amp; Cables</span><h3 className={"h4"}>Submersible Wire</h3><p className={"small"}>Flat 3-core · [Sizes]</p><a className={"link"} href={"/product"}>View details →</a></div></article>
<article className={"card card-flat"}><img src={"/img/22ae9b4fdc00b2a1ac38d99de2e97f2f.png"} alt={"Brass single and double compression cable glands"} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><span className={"tag"}>Cable Accessories</span><h3 className={"h4"}>Single &amp; Double Compression Glands</h3><p className={"small"}>Brass · [Sizes]</p><a className={"link"} href={"/product"}>View details →</a></div></article>
<article className={"card card-flat"}><img src={"/img/db0d79cb2106768fc379d2fd816f5e66.png"} alt={"White surface and modular switch boxes"} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><span className={"tag"}>Conduits &amp; Boxes</span><h3 className={"h4"}>Surface &amp; Modular Boxes</h3><p className={"small"}>[Module sizes] · [Finish]</p><a className={"link"} href={"/product"}>View details →</a></div></article>
</div>
<div className={"row"} style={{justifyContent: "center", marginTop: "40px"}}><a className={"btn btn-blue"} href={"/products"}>Browse all products</a></div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Projects in action</p><h2 className={"h2"}>Completed infrastructure work</h2></div><a className={"btn btn-line"} href={"/infrastructure"}>View project portfolio</a></div>
<div className={"g3"}>
<article className={"card card-flat"}><img src={"/img/d69f347a7af9b6768177cdac9874b11b.jpg"} alt={"Government Hospital Shirhatti lit up at night"} style={{width: "100%", height: "240px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>Healthcare</span><h3 className={"h4"}>Government Hospital, Shirhatti</h3><p className={"small"}>Gadag · 100 beds · complete electrical infrastructure for the taluk hospital</p></div></article>
<article className={"card card-flat"}><img src={"/img/0cde396e732d34e99a30452e72a74c4f.jpg"} alt={"Front facade of the Mother and Child Hospital, Chikkamagaluru"} style={{width: "100%", height: "240px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>Healthcare</span><h3 className={"h4"}>Mother &amp; Child Hospital</h3><p className={"small"}>Chikkamagaluru · 250 beds · electrical works for a modern government MCH facility</p></div></article>
<article className={"card card-flat"}><img src={"/img/bb97532d2a242883a6cae7275a7ebe06.jpg"} alt={"Illuminated arch at the Bengeri smart market, Hubballi-Dharwad"} style={{width: "100%", height: "240px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>Smart City</span><h3 className={"h4"}>Bengeri Smart Market</h3><p className={"small"}>Hubballi–Dharwad · 3 acres · 110+ shops for 250+ vendors</p></div></article>
</div>
<div className={"card"} style={{marginTop: "24px", flexDirection: "row", flexWrap: "wrap", alignItems: "center", gap: "16px 28px", padding: "20px 28px"}}>
<span className={"tag tag-red"}>In progress</span>
<p className={"small"} style={{color: "#1A1F2B"}}><strong>Jayadeva Hospital, Hubballi</strong> · 250 beds</p>
<p className={"small"} style={{color: "#1A1F2B"}}><strong>Government Hospital, Bailhongal</strong> · 50 beds</p>
<p className={"small"} style={{color: "#1A1F2B"}}><strong>PWD street lighting</strong> · 4,100+ streetlights installed</p>
</div>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Why Parkan</p><h2 className={"h2"}>Built on trust, delivered with care</h2></div><a className={"link"} href={"/why-us"}>Why work with us →</a></div>
<div className={"g4"}>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"9"} r={"6"}></circle><path d={"M9 14.5L8 21l4-2 4 2-1-6.5"}></path></svg></div><h3 className={"h4"}>23+ years of experience</h3><p className={"small"}>In electrical supply since 2003.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}></path><path d={"M9 12l2 2 4-4"}></path></svg></div><h3 className={"h4"}>50+ government projects</h3><p className={"small"}>Hospitals, public lighting and smart-city works.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"}></path><circle cx={"12"} cy={"10"} r={"2.5"}></circle></svg></div><h3 className={"h4"}>13 branches, 1,700+ dealers</h3><p className={"small"}>Reliable supply and timely service across three states.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 21h18M5 21V10l5 3V10l5 3V6l4 2v13"}></path></svg></div><h3 className={"h4"}>Our own PARKAN brand</h3><p className={"small"}>Quality products, built on our trade experience.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap g2"} style={{gap: "56px", alignItems: "center"}}>
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"}>Our network</p>
<h2 className={"h2"}>13 branches across Karnataka, Goa and Gujarat</h2>
<p>Head office in Hubballi, with branches close to every customer for supplies, site visits and after-sales support.</p>
<div className={"row"} style={{gap: "8px"}}><span className={"tag tag-red"}>Hubballi · HO</span><span className={"tag"}>Belagavi</span><span className={"tag"}>Shivamogga</span><span className={"tag"}>Mangaluru</span><span className={"tag"}>Bengaluru</span><span className={"tag"}>Margao, Goa</span><span className={"tag"}>Ahmedabad</span><span className={"tag"}>+ 6 more</span></div>
<a className={"btn btn-blue"} href={"/branches"} style={{width: "max-content"}}>See all branches</a>
</div>
<img src={"/img/0ff6f04e8e1bc90dfbcd5e8087794c6a.jpg"} alt={"Map of western India showing Parkan Group branches: head office in Hubballi, branches in Belagavi, Margao, Shivamogga, Mangaluru, Bengaluru and Ahmedabad"} style={{width: "100%", height: "480px", objectFit: "contain", background: "#0E2A52", borderRadius: "14px", display: "block"}} />
</div></section>

<section style={{padding: "88px 0"}}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Planning a project or need a reliable supplier?</h2><p className={"lead"}>Talk to our team today. Send an enquiry or book a meeting at a time that suits you.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Contact Us</a><a className={"btn btn-ghost"} href={"/contact"}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"4"} y={"5"} width={"16"} height={"16"} rx={"2"}></rect><path d={"M16 3v4M8 3v4M4 11h16"}></path></svg> Book a Meeting</a></div>
</div></div></section>
<Footer />
</div>
  )
}
