import { ChartLineUp, Factory, Handshake, MapPin, Medal, ShieldCheck, SquaresFour, Truck, Wrench } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header, { Arrow } from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'

const PARTNERS = [
  ['Business introductions', 'We work with:', ['Builders', 'Developers', 'Distributors', 'Manufacturers', 'Interior designers', 'Architects', 'Factories & industrial units', 'Energy service companies'], <Handshake />],
  ['Infrastructure partnerships', 'Collaborate with us on:', ['Government projects', 'Joint ventures (JVs)', 'Registered class contractors', 'EPC & turnkey projects'], <Wrench />],
  ['Strategic investors & mentors', 'For our next phase of growth:', ['Capital-market readiness', 'Pre-IPO funding', 'Growth capital', 'Board-level mentorship', 'Governance & compliance', 'Scaling strategy'], <ChartLineUp />],
]

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function WhyUs() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/electrician-testing.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Why Work With Us</p>
<p className={"eyebrow"}>Why work with us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Reliable, project <em>after project</em></h1>
<p className={"lead"}>For customers, dealers, partners and future colleagues.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" href={"/branches"}>Our Branches</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/why-us"}>Why Work With Us</Button></div></nav>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>For customers &amp; partners</p><h2 className={"h2"}>Why Parkan</h2></div></div>
<div className={"g3"}>
<div className={"card"}><div className={"ico"}><Medal /></div><h3 className={"h4"}>23+ years of experience</h3><p className={"small"}>In electrical and infrastructure solutions since 2003.</p></div>
<div className={"card"}><div className={"ico ico-red"}><ShieldCheck /></div><h3 className={"h4"}>50+ government projects</h3><p className={"small"}>Hospitals, public lighting and 4,100+ PWD streetlights.</p></div>
<div className={"card"}><div className={"ico"}><MapPin /></div><h3 className={"h4"}>13 branches, 1,700+ dealers</h3><p className={"small"}>Reliable supply and timely service across Karnataka, Goa and Gujarat.</p></div>
<div className={"card"}><div className={"ico ico-red"}><SquaresFour /></div><h3 className={"h4"}>India's leading brands</h3><p className={"small"}>Legrand, Havells, Polycab, Schneider Electric, L&amp;T, ABB and many more.</p></div>
<div className={"card"}><div className={"ico"}><Factory /></div><h3 className={"h4"}>Our own PARKAN brand</h3><p className={"small"}>Quality products, built on 23 years of trade.</p></div>
<div className={"card"}><div className={"ico ico-red"}><Truck /></div><h3 className={"h4"}>Pan-India reach</h3><p className={"small"}>Pan-India shipping, an Odhav warehouse and an import &amp; export licence.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead split"}><div><p className={"kicker"}>Partner with us</p><h2 className={"h2"}>Let's Grow <em>Together.</em></h2></div><p>Businesses, contractors and investors welcome.</p></div>
<div className={"g3"}>
{PARTNERS.map(([title, intro, tags, d], i) => <article key={title} className={'ptncard' + (i === 1 ? ' dark' : '')}>
<div className="ptntop"><span className="vico">{d}</span><span className="vnum">0{i + 1}</span></div>
<h3 className="h3">{title}</h3>
<p className="small">{intro}</p>
<div className="row" style={{gap: "8px"}}>{tags.map(t => <span key={t} className="tag">{t}</span>)}</div>
</article>)}
</div>
<div className={"row"} style={{justifyContent: "center", marginTop: "40px"}}><Button href={"/contact"} iconRight={<Arrow />}>Talk to Us About a Partnership</Button></div>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How we work with you</p><h2 className={"h2"}>Call to delivery, simple</h2></div></div>
<div className={"g4"}>
<div className={"step"}><div className={"stepn"}>1</div><h3 className={"h4"}>Share your requirement</h3><p className={"small"}>Send an enquiry, call or visit a branch.</p></div>
<div className={"step"}><div className={"stepn"}>2</div><h3 className={"h4"}>Get a clear proposal</h3><p className={"small"}>Products, quantities, pricing and timelines.</p></div>
<div className={"step"}><div className={"stepn"}>3</div><h3 className={"h4"}>Supply or execution</h3><p className={"small"}>Delivered from our network or executed on site.</p></div>
<div className={"step"}><div className={"stepn"}>4</div><h3 className={"h4"}>Ongoing support</h3><p className={"small"}>After-sales help from your nearest branch.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap g2"} style={{gap: "48px"}}>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Certifications &amp; approvals</p><h2 className={"h3"}>Recognised and registered</h2>
<div className={"g3"} style={{gap: "12px"}}><div className={"ph"} style={{height: "96px"}}>CERTIFICATE</div><div className={"ph"} style={{height: "96px"}}>CERTIFICATE</div><div className={"ph"} style={{height: "96px"}}>CERTIFICATE</div></div><p className={"small"}>[Govt contractor registration / BIS / ISI / GST / import–export licence — to be provided]</p></div>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>What clients say</p><h2 className={"h3"}>Client testimonials</h2>
<div className={"card"} style={{gap: "14px"}}><p style={{fontSize: "17px", color: "#1A1F2B"}}>[Client testimonial — to be provided by Parkan]</p><div className={"row"} style={{gap: "12px"}}><div className={"ph"} style={{width: "48px", height: "48px", borderRadius: "50%", padding: "0"}}></div><div className={"stack"}><strong className={"small"}>[Client name]</strong><span className={"small muted"}>[Designation, Company]</span></div></div></div></div>
</div></section>

<section className={"sec on-dark"} style={{background: "#0E2A52"}}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Careers</p><h2 className={"h2"} style={{color: "#FFFFFF"}}>Careers</h2></div><p style={{color: "#C9D5E8"}}>Steady growth, real learning and a team that feels like family.</p></div>
<div className={"stack"} style={{gap: "12px"}}>
<div className={"card"} style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}><div className={"stack"} style={{gap: "6px"}}><h3 className={"h4"}>[Sales Executive]</h3><p className={"small"}>[Hubballi] · Full-time · [Experience]</p></div><Button variant="secondary" size="sm" href={"/contact"}>Apply Now</Button></div>
<div className={"card"} style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}><div className={"stack"} style={{gap: "6px"}}><h3 className={"h4"}>[Site Engineer — Electrical]</h3><p className={"small"}>[Belagavi] · Full-time · [Experience]</p></div><Button variant="secondary" size="sm" href={"/contact"}>Apply Now</Button></div>
<div className={"card"} style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}><div className={"stack"} style={{gap: "6px"}}><h3 className={"h4"}>[Warehouse &amp; Logistics Executive]</h3><p className={"small"}>[Ahmedabad] · Full-time · [Experience]</p></div><Button variant="secondary" size="sm" href={"/contact"}>Apply Now</Button></div>
</div>
<p className={"small"} style={{color: "#C9D5E8", marginTop: "20px"}}>Don't see a role? Email your CV to [careers email].</p>
</div></section>
<Footer />
</div>
  )
}
