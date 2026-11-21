import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function About() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / About Us</p>
<p className={"eyebrow"}>About us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>From a single store to one of the region's largest distributors</h1>
<p className={"lead"}>Over 23 years of experience in electrical and infrastructure solutions, built on reliable supply and timely service.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><a href={"/company"}>Overview</a><a className={"on"} href={"/about"}>About Us</a><a href={"/leadership"}>Our Leadership Team</a><a href={"/branches"}>Our Branches</a><a href={"/why-us"}>Why Work With Us</a></div></nav>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "start"}}>
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Who we are</p>
<h2 className={"h2"}>About the company</h2>
<p>Parkan Enterprises Limited is an unlisted public limited company with over 23 years of experience in electrical and infrastructure solutions. Headquartered in Hubballi, we operate 13 branches across Karnataka, Goa and Gujarat.</p>
<p>We are one of the region's largest wholesale electrical distributors, serving a dealer network of more than 1,700 with quality products from India's leading brands, backed by reliable supply and timely service.</p>
<p>Alongside trading, we are a trusted execution partner for infrastructure, having delivered more than 50 government projects – from hospitals and public lighting to smart-city works.</p>
<p>Drawing on this experience in the field, we are now developing our own range of products – building a scalable platform for long-term expansion and future capital-market opportunities.</p>
</div>
<div className={"stack"} style={{gap: "16px"}}><img src={"/media/site-electrical-work.webp"} alt={"Electrical crew laying cabling on a project site"} loading={"lazy"} style={{width: "100%", height: "340px", borderRadius: "14px", objectFit: "cover", display: "block"}} /><div className={"g2"} style={{gap: "16px"}}><img src={"/img/d69f347a7af9b6768177cdac9874b11b.jpg"} alt={"Government Hospital Shirhatti, electrified by Parkan"} style={{width: "100%", height: "160px", objectFit: "cover", borderRadius: "10px", display: "block"}} /><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"PARKAN copper flexible wire"} style={{width: "100%", height: "160px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "10px", display: "block"}} /></div></div>
</div></section>

<section style={{padding: "0 0 88px"}}><div className={"wrap"}>
<div className={"g4"} style={{background: "#0E2A52", borderRadius: "14px", padding: "36px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>23+</span><span className={"small"} style={{color: "#C9D5E8"}}>Years of experience</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>13</span><span className={"small"} style={{color: "#C9D5E8"}}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>1,700+</span><span className={"small"} style={{color: "#C9D5E8"}}>Dealer network</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"} style={{color: "#FFFFFF"}}>50+</span><span className={"small"} style={{color: "#C9D5E8"}}>Government projects done</span></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our journey</p><h2 className={"h2"}>Milestones</h2></div></div>
<div className={"stack"} style={{gap: "0", maxWidth: "880px"}}>
<div className={"row"} style={{gap: "32px", alignItems: "flex-start", flexWrap: "nowrap", paddingBottom: "32px"}}><span className={"stat"} style={{fontSize: "28px", width: "120px", flex: "none"}}>2003</span><div className={"card"} style={{flex: "1"}}><h3 className={"h4"}>Founded as Pooja Electricals</h3><p className={"small"}>Trading &amp; distribution of electrical goods begins in Hubballi.</p></div></div>
<div className={"row"} style={{gap: "32px", alignItems: "flex-start", flexWrap: "nowrap", paddingBottom: "32px"}}><span className={"stat"} style={{fontSize: "28px", width: "120px", flex: "none"}}>[Year]</span><div className={"card"} style={{flex: "1"}}><h3 className={"h4"}>13 branches across three states</h3><p className={"small"}>Hubballi, Belagavi, Shivamogga, Mangaluru, Bengaluru, Margao, Ahmedabad and more — serving 1,700+ dealers.</p></div></div>
<div className={"row"} style={{gap: "32px", alignItems: "flex-start", flexWrap: "nowrap", paddingBottom: "32px"}}><span className={"stat"} style={{fontSize: "28px", width: "120px", flex: "none"}}>2020</span><div className={"card"} style={{flex: "1"}}><h3 className={"h4"}>Infrastructure &amp; Projects</h3><p className={"small"}>End-to-end electrical works for government hospitals, public institutions and smart-city projects.</p></div></div>
<div className={"row"} style={{gap: "32px", alignItems: "flex-start", flexWrap: "nowrap", paddingBottom: "32px"}}><span className={"stat"} style={{fontSize: "28px", width: "120px", flex: "none"}}>Today</span><div className={"card"} style={{flex: "1"}}><h3 className={"h4"}>50+ government projects</h3><p className={"small"}>Including 4,100+ streetlights for the Public Works Department and hospitals in Shirhatti and Chikkamagaluru.</p></div></div>
<div className={"row"} style={{gap: "32px", alignItems: "flex-start", flexWrap: "nowrap"}}><span className={"stat"} style={{fontSize: "28px", width: "120px", flex: "none", color: "#D2232A"}}>2026</span><div className={"card"} style={{flex: "1"}}><h3 className={"h4"}>PARKAN in-house brand</h3><p className={"small"}>Our own range of electrical products through contract manufacturing.</p></div></div>
</div></div></section>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "24px"}}>
<div className={"card"} style={{background: "#0E2A52", borderColor: "#0E2A52", padding: "40px", gap: "16px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"} /><circle cx={"12"} cy={"12"} r={"3"} /></svg></div><h2 className={"h3"} style={{color: "#FFFFFF"}}>Our Vision</h2><p style={{color: "#DCE4F0"}}>To be a trusted leader in electrical solutions for the infrastructure sector, powering projects that build a stronger, smarter and sustainable future.</p></div>
<div className={"card"} style={{padding: "40px", gap: "16px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h2 className={"h3"}>Our Mission</h2><p>To deliver quality electrical products, reliable supply and project-focused solutions through trusted brands, timely service and lasting partnerships.</p><ul className={"list"}><li className={"check"}>Quality electrical products from trusted brands</li><li className={"check"}>Reliable supply and timely service</li><li className={"check"}>Project-focused solutions for infrastructure</li><li className={"check"}>Lasting partnerships with dealers and clients</li></ul></div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our values</p><h2 className={"h2"}>What we stand for</h2></div></div>
<div className={"g4"}>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"} /><path d={"M9 12l2 2 4-4"} /></svg></div><h3 className={"h4"}>Integrity</h3><p className={"small"}>Honest dealings with every customer and partner.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"12"} r={"9"} /><path d={"M12 7v5l3 3"} /></svg></div><h3 className={"h4"}>Reliability</h3><p className={"small"}>Delivering what we promise, when we promise.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"9"} r={"6"} /><path d={"M9 14.5L8 21l4-2 4 2-1-6.5"} /></svg></div><h3 className={"h4"}>Quality</h3><p className={"small"}>No compromise on what we supply or build.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h3 className={"h4"}>Growth</h3><p className={"small"}>Constantly learning and expanding our capabilities.</p></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Meet the people behind Parkan</h2><p className={"lead"}>Our leadership and advisors bring decades of industry knowledge.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/leadership"}>Our Leadership Team</a></div>
</div></div></section>
<Footer />
</div>
  )
}
