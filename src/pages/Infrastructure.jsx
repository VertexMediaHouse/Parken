import { Buildings, FilePdf, Lamp, Lightbulb, Lightning, Plug, SquaresFour } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import SubNav, { VERTICALS } from '../SubNav.jsx'

const SERVICES = [
  ['Inside the building', '/media/projects-work-1.webp', 'Electrician wiring a distribution board', [
    ['Internal wiring', 'Wiring, switches and sockets, and fan installation.', <Plug />],
    ['COB & LED light fittings', 'Indoor lighting for hospitals, offices and institutions.', <Lightbulb />],
    ['Distribution boards & MCBs', 'Protection and distribution for every floor.', <SquaresFour />],
  ]],
  ['Power & public spaces', '/media/projects-work-2.webp', 'LED street lighting along a city road at dusk', [
    ['HT/LT cabling & panels', 'Power cabling and panels from supply point to load.', <Lightning />],
    ['Street & high-mast lighting', 'Efficient fixtures, poles and cabling for roads.', <Lamp />],
    ['Smart-city & public spaces', 'Lighting for markets, lakefronts and walkways.', <Buildings />],
  ]],
]

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function Infrastructure() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/projects-hero.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / Infrastructure &amp; Projects</p>
<p className={"eyebrow"}>Vertical 02 · Since 2020</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Infrastructure &amp; <em>Projects</em></h1>
<p className={"lead"}>Cabling, panels and lighting for government hospitals and smart-city works across Karnataka. We handle design, supply, installation and handover.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px"}}><Button variant="accent" size="lg" href={"/contact"}>Contact Us</Button></div>
</div></section>
<SubNav label="Vertical sections" kicker="Our verticals" items={VERTICALS} current="/infrastructure" />

<section style={{padding: "28px 0 0"}}><div className={"wrap"}>
<div className={"g3"} style={{background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", padding: "28px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>50+</span><span className={"muted small"}>Government projects completed</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>4,100+</span><span className={"muted small"}>Streetlights installed for the PWD</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"}>2020</span><span className={"muted small"}>Execution partner for government infrastructure since</span></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>What we do</p><h2 className={"h2"}>One team, every electrical job</h2></div></div>
<div className={"wwd"}>{SERVICES.map(([group, img, alt, list], g) => <div key={group} className={"wwd-col"}>
<figure className={"wwd-img"}><img src={img} alt={alt} loading={"lazy"} /><figcaption>{group}</figcaption></figure>
<ul className={"wwd-list"}>{list.map(([title, text, icon]) => <li key={title}><span className={"wwd-ico"}>{icon}</span><div><h3>{title}</h3><p className={"small"}>{text}</p></div></li>)}</ul>
</div>)}</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Completed projects</p><h2 className={"h2"}>Work we've delivered</h2></div>
<div className={"row"} style={{gap: "8px"}}><Button variant="secondary" size="sm" className="on" aria-pressed={true}>All</Button><Button variant="secondary" size="sm" aria-pressed={false}>Healthcare</Button><Button variant="secondary" size="sm" aria-pressed={false}>Smart City</Button></div></div>
<div className={"g2"} style={{gap: "24px"}}>
<article className={"card card-flat"}><img src={"/img/d69f347a7af9b6768177cdac9874b11b.jpg"} alt={"Government Hospital Shirhatti lit up at night"} style={{width: "100%", height: "280px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>Healthcare</span><h3 className={"h3"}>Government Hospital</h3>
<table className={"table"} style={{fontSize: "14px"}}><tbody><tr><td className={"muted"} style={{padding: "6px 0", width: "30%"}}>Location</td><td style={{padding: "6px 0"}}>Shirhatti, Gadag</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scale</td><td style={{padding: "6px 0"}}>100 beds</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scope</td><td style={{padding: "6px 0"}}>Complete electrical infrastructure for the taluk hospital</td></tr></tbody></table></div></article>
<article className={"card card-flat"}><img src={"/img/0cde396e732d34e99a30452e72a74c4f.jpg"} alt={"Front facade of the Mother and Child Hospital, Chikkamagaluru"} style={{width: "100%", height: "280px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>Healthcare</span><h3 className={"h3"}>Mother &amp; Child Hospital</h3>
<table className={"table"} style={{fontSize: "14px"}}><tbody><tr><td className={"muted"} style={{padding: "6px 0", width: "30%"}}>Location</td><td style={{padding: "6px 0"}}>Chikkamagaluru</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scale</td><td style={{padding: "6px 0"}}>250 beds</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scope</td><td style={{padding: "6px 0"}}>Electrical works for a modern government MCH facility</td></tr></tbody></table></div></article>
<article className={"card card-flat"}><img src={"/img/bb97532d2a242883a6cae7275a7ebe06.jpg"} alt={"Illuminated arch at the Bengeri smart market, Hubballi-Dharwad"} style={{width: "100%", height: "280px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag"}>Smart City</span><h3 className={"h3"}>Smart City Works</h3>
<table className={"table"} style={{fontSize: "14px"}}><tbody><tr><td className={"muted"} style={{padding: "6px 0", width: "30%"}}>Location</td><td style={{padding: "6px 0"}}>Hubballi – Dharwad</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scale</td><td style={{padding: "6px 0"}}>3 acres · 110+ shops for 250+ vendors</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scope</td><td style={{padding: "6px 0"}}>Bengeri smart market electrical works</td></tr></tbody></table></div></article>
<article className={"card card-flat"}><img src={"/img/306556b2cb02a531c3cba888a36ca077.jpg"} alt={"Aerial night view of the illuminated Unkal Lake promenade, walkways and amphitheatre"} style={{width: "100%", height: "280px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag"}>Smart City</span><h3 className={"h3"}>Unkal Lake</h3>
<table className={"table"} style={{fontSize: "14px"}}><tbody><tr><td className={"muted"} style={{padding: "6px 0", width: "30%"}}>Location</td><td style={{padding: "6px 0"}}>Hubballi Smart City</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scale</td><td style={{padding: "6px 0"}}>218 acres</td></tr><tr><td className={"muted"} style={{padding: "6px 0"}}>Scope</td><td style={{padding: "6px 0"}}>Lighting for the lakefront promenade, walkways and amphitheatre</td></tr></tbody></table></div></article>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Ongoing projects</p><h2 className={"h2"}>What we're building now</h2></div></div>
<div className={"g3"}>
<article className={"card card-flat"}><img src={"/img/7c2464003990a220631972e928a422ee.jpg"} alt={"High-mast street light installed for the PWD in Huvinahadagali"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Public lighting</span><h3 className={"h3"}>PWD Street Lighting</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>4,100+ streetlights</strong> installed for the Public Works Department. LED street and high-mast lighting across Huvinahadagali.</p></div></article>
<article className={"card card-flat"}><img src={"/img/7aa2c2aa6de312a190ee5d9684012526.jpg"} alt={"Jayadeva Hospital Hubballi building under construction at night"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Healthcare</span><h3 className={"h3"}>Jayadeva Hospital, Hubballi</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>250 beds.</strong> Cardiac hospital for North Karnataka.</p></div></article>
<article className={"card card-flat"}><img src={"/img/2fbd60c19eb9c691a775bbfd81bf9f56.jpg"} alt={"Workers laying reinforcement at the Bailhongal hospital site"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Healthcare</span><h3 className={"h3"}>Government Hospital, Bailhongal</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>50 beds.</strong> Electrical works for a new taluk hospital in Belagavi district.</p></div></article>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How we work</p><h2 className={"h2"}>From survey to switch-on</h2></div></div>
<div className={"g4"}>
<div className={"card"}><div className={"stepn"}>1</div><h3 className={"h4"}>Survey &amp; planning</h3><p className={"small"}>Site assessment and technical planning.</p></div>
<div className={"card"}><div className={"stepn"}>2</div><h3 className={"h4"}>Material supply</h3><p className={"small"}>Materials from our own supply network.</p></div>
<div className={"card"}><div className={"stepn"}>3</div><h3 className={"h4"}>Execution</h3><p className={"small"}>Installation by experienced, supervised teams.</p></div>
<div className={"card"}><div className={"stepn"}>4</div><h3 className={"h4"}>Testing &amp; handover</h3><p className={"small"}>Commissioning, documentation and handover.</p></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Have a project?</h2><p className={"lead"}>Government projects, JVs and turnkey works. Share the tender and our team will call you.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Get in Touch</Button><Button variant="secondary" icon={<FilePdf size={18} />} href={"#"}>Company Profile PDF</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
