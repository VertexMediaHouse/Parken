import { Clock, Eye, Lightning, Medal, ShieldCheck } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import SubNav, { COMPANY } from '../SubNav.jsx'
import { Arrow } from '../Header.jsx'

// the last milestone is highlighted as the newest
const MILESTONES = [
  ['2003', 'Founded as Pooja Electricals', 'Trading & distribution of electrical goods begins in Hubballi.'],
  ['[Year]', '13 branches across three states', '13 branches serving 1,700+ dealers.'],
  ['2020', 'Infrastructure & Projects', 'Electrical works for government hospitals and smart-city projects.'],
  ['Today', '50+ government projects', 'Including 4,100+ PWD streetlights and hospitals in Shirhatti and Chikkamagaluru.'],
  ['2026', 'PARKAN in-house brand', 'Our own range of electrical products.'],
]

const VALUES = [
  ['Integrity', 'Honest dealings with every customer and partner.', <ShieldCheck />],
  ['Reliability', 'We deliver on time, as promised.', <Clock />],
  ['Quality', 'No shortcuts on what we supply or build.', <Medal />],
  ['Growth', 'Always learning, always growing.', <Lightning />],
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
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/about-hero.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / About Us</p>
<p className={"eyebrow"}>About us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>One store to <em>13 branches</em></h1>
<p className={"lead"}>23+ years of reliable electrical supply and projects. What began as a single store in Hubballi now serves 1,700+ dealers across three states.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px"}}><Button variant="accent" size="lg" href={"/contact"}>Contact Us</Button></div>
</div></section>
<SubNav label="Company sections" kicker="Company" items={COMPANY} current="/about" />

<section className="sec"><div className="wrap g2 duo about-duo" style={{gap: "56px"}}>
<div className="stack about-text-col" style={{gap: "18px"}}>
  <p className="eyebrow" style={{margin: "0"}}>Who we are</p>
  <h2 className="h2" style={{lineHeight: "1.15"}}>About the company</h2>
  <p style={{fontWeight: "500", color: "var(--navy)"}}>Parkan Enterprises Limited has 23+ years in electrical supply and infrastructure. Based in Hubballi, with 13 branches across Karnataka, Goa and Gujarat.</p>
  <p>One of the region's largest electrical wholesalers, supplying 1,700+ dealers with India's top brands.</p>
  <p>We have also delivered 50+ government projects: hospitals, public lighting and smart-city works.</p>
  <p>Now we make our own products under the PARKAN brand.</p>
  <div style={{paddingTop: "10px"}}>
    <Button href="/company" iconRight={<Arrow />}>Explore Company Overview</Button>
  </div>
</div>
<div className="stack about-pics" style={{gap: "14px"}}>
  <img className="about-pic-main" src="/media/about-company-2.webp" alt="Office building at dusk" loading="lazy" />
  <div className="g2 about-pic-sub" style={{gap: "14px"}}>
    <img src="/media/about-company-1.webp" alt="Electrician installing ceiling cable trays" loading="lazy" style={{objectPosition: "70% center"}} />
    <img src="/media/about-company-3-720.webp" alt="Multi-core copper cables" loading="lazy" />
  </div>
</div>
</div></section>

<section style={{padding: "0 0 44px"}}><div className={"wrap"}>
<div className={"g4"} style={{background: "#0E2A52", borderRadius: "8px", padding: "36px", gap: "0"}}>
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
<div className={"card"} style={{background: "#0E2A52", borderColor: "#0E2A52", padding: "40px", gap: "16px"}}><div className={"ico ico-red"}><Eye /></div><h2 className={"h3"} style={{color: "#FFFFFF"}}>Our Vision</h2><p style={{color: "#DCE4F0"}}>To be the most trusted name in electrical solutions for infrastructure.</p><ul className={"list"}>{['A trusted leader in electrical solutions', 'Powering infrastructure across India', 'Stronger, smarter project delivery', 'Sustainable, energy-efficient growth'].map(t => <li key={t} className={"check"} style={{color: "#DCE4F0"}}>{t}</li>)}</ul></div>
<div className={"card"} style={{padding: "40px", gap: "16px"}}><div className={"ico"}><Lightning /></div><h2 className={"h3"}>Our Mission</h2><p>Quality products, reliable supply and on-time project delivery.</p><ul className={"list"}><li className={"check"}>Quality electrical products from trusted brands</li><li className={"check"}>Reliable supply and timely service</li><li className={"check"}>Project-focused solutions for infrastructure</li><li className={"check"}>Lasting partnerships with dealers and clients</li></ul></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our values</p><h2 className={"h2"}>What we stand for</h2></div></div>
<ul className={"values"}>
{VALUES.map(([name, text, icon], i) => <li key={name}><div className={"vhead"}><span className={"vnum"}>{String(i + 1).padStart(2, '0')}</span><span className={"valico"}>{icon}</span></div><h3>{name}</h3><p className={"small"}>{text}</p></li>)}
</ul>
</div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"} style={{"--cta": "url(/media/about-people.webp)"}}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Our people</h2><p className={"lead"}>Decades of industry experience at the top.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/leadership"}>Our Leadership Team</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
