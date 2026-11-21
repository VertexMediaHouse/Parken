import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

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
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / Infrastructure &amp; Projects</p>
<p className={"eyebrow"}>Vertical 02 · Since 2020</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Infrastructure &amp; Projects</h1>
<p className={"lead"}>End-to-end electrical infrastructure – cabling, panels and lighting – for government hospitals, public institutions and smart-city works across Karnataka.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><a href={"/verticals"}>Overview</a><a href={"/trading"}>Trading &amp; Distribution</a><a className={"on"} href={"/infrastructure"}>Infrastructure &amp; Projects</a><a href={"/in-house-brand"}>In-house Brand</a></div></nav>

<section style={{padding: "56px 0 0"}}><div className={"wrap"}>
<div className={"g3"} style={{background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "14px", padding: "28px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>50+</span><span className={"muted small"}>Government projects completed</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"}>4,100+</span><span className={"muted small"}>Streetlights installed for the PWD</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"}>2020</span><span className={"muted small"}>Execution partner for government infrastructure since</span></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>What we do</p><h2 className={"h2"}>Complete electrical works, one team</h2></div></div>
<div className={"g3"}>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 20c0-6 4-6 8-8s8-2 8-8"} /><circle cx={"4"} cy={"20"} r={"1.5"} /><circle cx={"20"} cy={"4"} r={"1.5"} /></svg></div><h3 className={"h4"}>Internal wiring</h3><p className={"small"}>Wiring, switches and sockets, and fan installation.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.5 1 2.5h6c0-1 .2-1.7 1-2.5A6 6 0 0 0 12 3z"} /></svg></div><h3 className={"h4"}>COB &amp; LED light fittings</h3><p className={"small"}>Indoor lighting for hospitals, offices and institutions.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"4"} y={"4"} width={"7"} height={"7"} rx={"1"} /><rect x={"13"} y={"4"} width={"7"} height={"7"} rx={"1"} /><rect x={"4"} y={"13"} width={"7"} height={"7"} rx={"1"} /><rect x={"13"} y={"13"} width={"7"} height={"7"} rx={"1"} /></svg></div><h3 className={"h4"}>Distribution boards &amp; MCBs</h3><p className={"small"}>Protection and distribution for every floor.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h3 className={"h4"}>HT/LT cabling &amp; panels</h3><p className={"small"}>Power cabling and panels from supply point to load.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 21V8M8 8h8M6 4h12"} /></svg></div><h3 className={"h4"}>Street &amp; high-mast lighting</h3><p className={"small"}>Energy-efficient fixtures, poles and cabling for public roads.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 21h16M6 21V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v16M10 8h1M10 12h1M10 16h1M14 8h1M14 12h1M14 16h1"} /></svg></div><h3 className={"h4"}>Smart-city &amp; public spaces</h3><p className={"small"}>Lighting for markets, lakefronts, walkways and amphitheatres.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Completed projects</p><h2 className={"h2"}>Work we've delivered</h2></div>
<div className={"row"} style={{gap: "8px"}}><button className={"chip on"} type={"button"}>All</button><button className={"chip"} type={"button"}>Healthcare</button><button className={"chip"} type={"button"}>Smart City</button></div></div>
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
<article className={"card card-flat"}><img src={"/img/7c2464003990a220631972e928a422ee.jpg"} alt={"High-mast street light installed for the PWD in Huvinahadagali"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Public lighting</span><h3 className={"h3"}>PWD Street Lighting</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>4,100+ streetlights</strong> installed for the Public Works Department. Street and high-mast LED lighting for public roads in Huvinahadagali and surrounding areas – energy-efficient fixtures, poles and cabling built for long-term performance.</p></div></article>
<article className={"card card-flat"}><img src={"/img/7aa2c2aa6de312a190ee5d9684012526.jpg"} alt={"Jayadeva Hospital Hubballi building under construction at night"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Healthcare</span><h3 className={"h3"}>Jayadeva Hospital, Hubballi</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>250 beds.</strong> Cardiac super-speciality branch of the Sri Jayadeva Institute for North Karnataka.</p></div></article>
<article className={"card card-flat"}><img src={"/img/2fbd60c19eb9c691a775bbfd81bf9f56.jpg"} alt={"Workers laying reinforcement at the Bailhongal hospital site"} style={{width: "100%", height: "260px", objectFit: "cover", display: "block"}} /><div className={"body"}><span className={"tag tag-red"}>In progress · Healthcare</span><h3 className={"h3"}>Government Hospital, Bailhongal</h3><p className={"small"}><strong style={{color: "#0E2A52"}}>50 beds.</strong> New taluk hospital in Belagavi district – critical electrical infrastructure for healthcare operations.</p></div></article>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How we work</p><h2 className={"h2"}>From survey to switch-on</h2></div></div>
<div className={"g4"}>
<div className={"card"}><div className={"stepn"}>1</div><h3 className={"h4"}>Survey &amp; planning</h3><p className={"small"}>Site assessment and technical planning.</p></div>
<div className={"card"}><div className={"stepn"}>2</div><h3 className={"h4"}>Material supply</h3><p className={"small"}>Quality products sourced through our own distribution network.</p></div>
<div className={"card"}><div className={"stepn"}>3</div><h3 className={"h4"}>Execution</h3><p className={"small"}>Installation by experienced, supervised teams.</p></div>
<div className={"card"}><div className={"stepn"}>4</div><h3 className={"h4"}>Testing &amp; handover</h3><p className={"small"}>Commissioning, documentation and handover.</p></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Have a government or infrastructure requirement?</h2><p className={"lead"}>We partner on government projects, joint ventures and EPC &amp; turnkey works. Share the tender or project details and our projects team will get in touch.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Get in Touch</a><a className={"btn btn-ghost"} href={"#"}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"} /><path d={"M14 3v5h5M9 13h6M9 17h6"} /></svg> Company Profile PDF</a></div>
</div></div></section>
<Footer />
</div>
  )
}
