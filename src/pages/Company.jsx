import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function Company() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/distribution-floor.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Company</p>
<p className={"eyebrow"}>Company</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>23 years of electrical and <em>infrastructure solutions</em></h1>
<p className={"lead"}>Parkan Enterprises Limited, part of the Pooja Group of Companies, is an unlisted public limited company headquartered in Hubballi, with 13 branches across Karnataka, Goa and Gujarat.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" href={"/branches"}>Our Branches</Button><Button variant="ghost" size="sm" href={"/why-us"}>Why Work With Us</Button></div></nav>

<section style={{padding: "56px 0 0"}}><div className={"wrap"}>
<div className={"g4"} style={{background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", padding: "28px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"} style={{fontSize: "38px"}}>23+</span><span className={"muted small"}>Years of experience</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"} style={{fontSize: "38px"}}>13</span><span className={"muted small"}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #DDE2EA"}}><span className={"stat"} style={{fontSize: "38px"}}>1,700+</span><span className={"muted small"}>Dealer network</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"} style={{fontSize: "38px"}}>50+</span><span className={"muted small"}>Government projects done</span></div>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"g2"} style={{gap: "24px"}}>
<a href={"/about"} className={"card"} style={{textDecoration: "none", flexDirection: "row", gap: "24px", alignItems: "center"}}><img src={"/media/site-electrical-work.webp"} alt={"Electrical crew at work on a project site"} loading={"lazy"} style={{width: "200px", height: "160px", flex: "none", borderRadius: "12px", objectFit: "cover", display: "block"}} /><div className={"stack"} style={{gap: "10px"}}><span className={"tag"}>2.1</span><h2 className={"h3"}>About Us</h2><p className={"small"}>Our story since 2003, our journey, vision, mission and values.</p><Button as="span" variant="link">Read more →</Button></div></a>
<a href={"/leadership"} className={"card"} style={{textDecoration: "none", flexDirection: "row", gap: "24px", alignItems: "center"}}><img src={"/media/team-meeting.webp"} alt={"Team meeting in the office"} loading={"lazy"} style={{width: "200px", height: "160px", flex: "none", borderRadius: "12px", objectFit: "cover", display: "block"}} /><div className={"stack"} style={{gap: "10px"}}><span className={"tag"}>2.2</span><h2 className={"h3"}>Our Leadership Team</h2><p className={"small"}>Meet our directors, advisors and the people behind every branch and project.</p><Button as="span" variant="link">Meet the team →</Button></div></a>
<a href={"/branches"} className={"card"} style={{textDecoration: "none", flexDirection: "row", gap: "24px", alignItems: "center"}}><img src={"/img/0ff6f04e8e1bc90dfbcd5e8087794c6a.jpg"} alt={"Map of Parkan Group branches in western India"} style={{width: "200px", height: "160px", flex: "none", objectFit: "cover", borderRadius: "12px", background: "#0E2A52"}} /><div className={"stack"} style={{gap: "10px"}}><span className={"tag"}>2.3</span><h2 className={"h3"}>Our Branches</h2><p className={"small"}>13 branches across Karnataka, Goa and Gujarat, with our head office in Hubballi.</p><Button as="span" variant="link">Find a branch →</Button></div></a>
<a href={"/why-us"} className={"card"} style={{textDecoration: "none", flexDirection: "row", gap: "24px", alignItems: "center"}}><img src={"/media/site-engineers.webp"} alt={"Engineers reviewing a project site"} loading={"lazy"} style={{width: "200px", height: "160px", flex: "none", borderRadius: "12px", objectFit: "cover", display: "block"}} /><div className={"stack"} style={{gap: "10px"}}><span className={"tag"}>2.4</span><h2 className={"h3"}>Why Work With Us</h2><p className={"small"}>Why customers, dealers and government bodies trust us, how to partner with us, and careers.</p><Button as="span" variant="link">See why →</Button></div></a>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our journey</p><h2 className={"h2"}>Two decades of steady growth</h2></div><Button variant="link" href={"/about"}>Full story →</Button></div>
<div className={"g5"} style={{gap: "16px"}}>
<div className={"card"} style={{gap: "8px"}}><span className={"stat"} style={{fontSize: "32px"}}>2003</span><p className={"small"}>Founded as Pooja Electricals — trading &amp; distribution begins in Hubballi</p></div>
<div className={"card"} style={{gap: "8px"}}><span className={"stat"} style={{fontSize: "32px"}}>[Year]</span><p className={"small"}>Network grows to 13 branches across Karnataka, Goa and Gujarat</p></div>
<div className={"card"} style={{gap: "8px"}}><span className={"stat"} style={{fontSize: "32px"}}>2020</span><p className={"small"}>Infrastructure &amp; Projects vertical launched for government works</p></div>
<div className={"card"} style={{gap: "8px"}}><span className={"stat"} style={{fontSize: "32px"}}>Today</span><p className={"small"}>50+ government projects and a 1,700+ dealer network</p></div>
<div className={"card"} style={{gap: "8px"}}><span className={"stat"} style={{fontSize: "32px", color: "#D2232A"}}>2026</span><p className={"small"}>PARKAN in-house brand launched through contract manufacturing</p></div>
</div></div></section>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "24px"}}>
<div className={"card"} style={{background: "#0E2A52", borderColor: "#0E2A52", padding: "40px", gap: "16px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"} /><circle cx={"12"} cy={"12"} r={"3"} /></svg></div><h2 className={"h3"} style={{color: "#FFFFFF"}}>Our Vision</h2><p style={{color: "#DCE4F0"}}>To be a trusted leader in electrical solutions for the infrastructure sector, powering projects that build a stronger, smarter and sustainable future.</p></div>
<div className={"card"} style={{padding: "40px", gap: "16px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h2 className={"h3"}>Our Mission</h2><p>To deliver quality electrical products, reliable supply and project-focused solutions through trusted brands, timely service and lasting partnerships.</p></div>
</div></section>

<section style={{paddingBottom: "88px"}}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Want to know more about Parkan?</h2><p className={"lead"}>Visit a branch or book a meeting with our team.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Contact Us</Button><Button variant="secondary" href={"/branches"}>Find a Branch</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
