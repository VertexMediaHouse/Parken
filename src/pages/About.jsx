import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

// the last milestone is highlighted as the newest
const MILESTONES = [
  ['2003', 'Founded as Pooja Electricals', 'Trading & distribution of electrical goods begins in Hubballi.'],
  ['[Year]', '13 branches across three states', 'Hubballi, Belagavi, Shivamogga, Mangaluru, Bengaluru, Margao, Ahmedabad and more — serving 1,700+ dealers.'],
  ['2020', 'Infrastructure & Projects', 'End-to-end electrical works for government hospitals, public institutions and smart-city projects.'],
  ['Today', '50+ government projects', 'Including 4,100+ streetlights for the Public Works Department and hospitals in Shirhatti and Chikkamagaluru.'],
  ['2026', 'PARKAN in-house brand', 'Our own range of electrical products through contract manufacturing.'],
]

const VALUES = [
  ['Integrity', 'Honest dealings with every customer and partner.', <><path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></>],
  ['Reliability', 'Delivering what we promise, when we promise.', <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 3" /></>],
  ['Quality', 'No compromise on what we supply or build.', <><circle cx="12" cy="9" r="6" /><path d="M9 14.5L8 21l4-2 4 2-1-6.5" /></>],
  ['Growth', 'Constantly learning and expanding our capabilities.', <path d="M13 3l-8 11h7l-1 7 8-11h-7z" />],
]

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
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/team-meeting.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / About Us</p>
<p className={"eyebrow"}>About us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>From a single store to one of the region's <em>largest distributors</em></h1>
<p className={"lead"}>Over 23 years of experience in electrical and infrastructure solutions, built on reliable supply and timely service.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" href={"/branches"}>Our Branches</Button><Button variant="ghost" size="sm" href={"/why-us"}>Why Work With Us</Button></div></nav>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "start"}}>
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Who we are</p>
<h2 className={"h2"}>About the company</h2>
<p>Parkan Enterprises Limited is an unlisted public limited company with over 23 years of experience in electrical and infrastructure solutions. Headquartered in Hubballi, we operate 13 branches across Karnataka, Goa and Gujarat.</p>
<p>We are one of the region's largest wholesale electrical distributors, serving a dealer network of more than 1,700 with quality products from India's leading brands, backed by reliable supply and timely service.</p>
<p>Alongside trading, we are a trusted execution partner for infrastructure, having delivered more than 50 government projects – from hospitals and public lighting to smart-city works.</p>
<p>Drawing on this experience in the field, we are now developing our own range of products – building a scalable platform for long-term expansion and future capital-market opportunities.</p>
</div>
<div className={"stack"} style={{gap: "16px"}}><img src={"/media/site-electrical-work.webp"} alt={"Electrical crew laying cabling on a project site"} loading={"lazy"} style={{width: "100%", height: "340px", borderRadius: "12px", objectFit: "cover", display: "block"}} /><div className={"g2"} style={{gap: "16px"}}><img src={"/img/d69f347a7af9b6768177cdac9874b11b.jpg"} alt={"Government Hospital Shirhatti, electrified by Parkan"} style={{width: "100%", height: "160px", objectFit: "cover", borderRadius: "12px", display: "block"}} /><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"PARKAN copper flexible wire"} style={{width: "100%", height: "160px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} /></div></div>
</div></section>

<section style={{padding: "0 0 88px"}}><div className={"wrap"}>
<div className={"g4"} style={{background: "#0E2A52", borderRadius: "12px", padding: "36px", gap: "0"}}>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>23+</span><span className={"small"} style={{color: "#C9D5E8"}}>Years of experience</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>13</span><span className={"small"} style={{color: "#C9D5E8"}}>Branches in 3 states</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px", borderRight: "1px solid #23406B"}}><span className={"stat"} style={{color: "#FFFFFF"}}>1,700+</span><span className={"small"} style={{color: "#C9D5E8"}}>Dealer network</span></div>
<div className={"stack"} style={{gap: "8px", padding: "0 24px"}}><span className={"stat"} style={{color: "#FFFFFF"}}>50+</span><span className={"small"} style={{color: "#C9D5E8"}}>Government projects done</span></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our journey</p><h2 className={"h2"}>Milestones</h2></div></div>
<ol className={"journey"}>
{MILESTONES.map(([year, title, text], i) => <li key={year} className={i === MILESTONES.length - 1 ? "next" : undefined}><span className={"jy"}>{year}</span><span className={"jdot"} aria-hidden={"true"}></span><div className={"jcard"}><h3 className={"h4"}>{title}</h3><p className={"small"}>{text}</p></div></li>)}
</ol>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Vision &amp; mission</p><h2 className={"h2"}>What drives us</h2></div></div>
<div className={"g2"} style={{gap: "24px"}}>
<div className={"card"} style={{background: "#0E2A52", borderColor: "#0E2A52", padding: "40px", gap: "16px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"} /><circle cx={"12"} cy={"12"} r={"3"} /></svg></div><h2 className={"h3"} style={{color: "#FFFFFF"}}>Our Vision</h2><p style={{color: "#DCE4F0"}}>To be a trusted leader in electrical solutions for the infrastructure sector, powering projects that build a stronger, smarter and sustainable future.</p></div>
<div className={"card"} style={{padding: "40px", gap: "16px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M13 3l-8 11h7l-1 7 8-11h-7z"} /></svg></div><h2 className={"h3"}>Our Mission</h2><p>To deliver quality electrical products, reliable supply and project-focused solutions through trusted brands, timely service and lasting partnerships.</p><ul className={"list"}><li className={"check"}>Quality electrical products from trusted brands</li><li className={"check"}>Reliable supply and timely service</li><li className={"check"}>Project-focused solutions for infrastructure</li><li className={"check"}>Lasting partnerships with dealers and clients</li></ul></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our values</p><h2 className={"h2"}>What we stand for</h2></div></div>
<ul className={"values"}>
{VALUES.map(([name, text, icon], i) => <li key={name}><div className={"vhead"}><span className={"vnum"}>{String(i + 1).padStart(2, '0')}</span><span className={"valico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}>{icon}</svg></span></div><h3>{name}</h3><p className={"small"}>{text}</p></li>)}
</ul>
</div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Meet the people behind Parkan</h2><p className={"lead"}>Our leadership and advisors bring decades of industry knowledge.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/leadership"}>Our Leadership Team</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
