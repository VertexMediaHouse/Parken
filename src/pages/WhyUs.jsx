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

export default function WhyUs() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/electrician-testing.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Why Work With Us</p>
<p className={"eyebrow"}>Why work with us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>A partner you can rely on, project <em>after project</em></h1>
<p className={"lead"}>For customers, dealers, contractors, government bodies and business partners — and for the people who want to build their career with us.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" href={"/branches"}>Our Branches</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/why-us"}>Why Work With Us</Button></div></nav>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>For customers &amp; partners</p><h2 className={"h2"}>Six reasons to choose Parkan</h2></div></div>
<div className={"g3"}>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"9"} r={"6"}></circle><path d={"M9 14.5L8 21l4-2 4 2-1-6.5"}></path></svg></div><h3 className={"h4"}>23+ years of experience</h3><p className={"small"}>In electrical and infrastructure solutions since 2003.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"}></path><path d={"M9 12l2 2 4-4"}></path></svg></div><h3 className={"h4"}>50+ government projects</h3><p className={"small"}>Hospitals, public lighting and smart-city works, including 4,100+ streetlights for the PWD.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"}></path><circle cx={"12"} cy={"10"} r={"2.5"}></circle></svg></div><h3 className={"h4"}>13 branches, 1,700+ dealers</h3><p className={"small"}>Reliable supply and timely service across Karnataka, Goa and Gujarat.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"4"} y={"4"} width={"7"} height={"7"} rx={"1"}></rect><rect x={"13"} y={"4"} width={"7"} height={"7"} rx={"1"}></rect><rect x={"4"} y={"13"} width={"7"} height={"7"} rx={"1"}></rect><rect x={"13"} y={"13"} width={"7"} height={"7"} rx={"1"}></rect></svg></div><h3 className={"h4"}>India's leading brands</h3><p className={"small"}>Legrand, Havells, Polycab, Schneider Electric, L&amp;T, ABB and many more.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 21h18M5 21V10l5 3V10l5 3V6l4 2v13"}></path></svg></div><h3 className={"h4"}>Our own PARKAN brand</h3><p className={"small"}>Quality products backed by our trade experience and dealer network.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 9h4l3 3v4h-7"}></path><circle cx={"7"} cy={"18"} r={"2"}></circle><circle cx={"17"} cy={"18"} r={"2"}></circle></svg></div><h3 className={"h4"}>Pan-India reach</h3><p className={"small"}>Pan-India logistics partner, a 1,500 sq ft warehouse in Odhav and an import &amp; export licence.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Partner with us</p><h2 className={"h2"}>Let's grow together</h2></div><p>We welcome partnerships and collaboration with businesses, contractors and investors.</p></div>
<div className={"g3"}>
<div className={"card"} style={{gap: "16px", padding: "32px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"9"} cy={"8"} r={"3.5"}></circle><path d={"M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5 5 0 0 1 3.5 6"}></path></svg></div><h3 className={"h3"}>Business introductions</h3><p className={"small"}>We work with:</p><div className={"row"} style={{gap: "8px"}}><span className={"tag"}>Builders</span><span className={"tag"}>Developers</span><span className={"tag"}>Distributors</span><span className={"tag"}>Manufacturers</span><span className={"tag"}>Interior designers</span><span className={"tag"}>Architects</span><span className={"tag"}>Factories &amp; industrial units</span><span className={"tag"}>Energy service companies</span></div></div>
<div className={"card"} style={{gap: "16px", padding: "32px"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M14.7 6.3a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.3-1.3a4 4 0 0 1-5-5z"}></path><path d={"M3 21l6-6"}></path></svg></div><h3 className={"h3"}>Infrastructure partnerships</h3><p className={"small"}>Collaborate with us on:</p><div className={"row"} style={{gap: "8px"}}><span className={"tag tag-red"}>Government projects</span><span className={"tag tag-red"}>Joint ventures (JVs)</span><span className={"tag tag-red"}>Registered class contractors</span><span className={"tag tag-red"}>EPC &amp; turnkey projects</span></div></div>
<div className={"card"} style={{gap: "16px", padding: "32px"}}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 20h18M6 16v-4M11 16V8M16 16v-6M21 4l-5 5-4-3-6 5"}></path></svg></div><h3 className={"h3"}>Strategic investors &amp; mentors</h3><p className={"small"}>For our next phase of growth:</p><div className={"row"} style={{gap: "8px"}}><span className={"tag"}>Capital-market readiness</span><span className={"tag"}>Pre-IPO funding</span><span className={"tag"}>Growth capital</span><span className={"tag"}>Board-level mentorship</span><span className={"tag"}>Governance &amp; compliance</span><span className={"tag"}>Scaling strategy</span></div></div>
</div>
<div className={"row"} style={{justifyContent: "center", marginTop: "36px"}}><Button variant="primary" href={"/contact"}>Talk to Us About a Partnership</Button></div>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>How we work with you</p><h2 className={"h2"}>Simple from first call to delivery</h2></div></div>
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
<div className={"sechead"}><div><p className={"eyebrow"}>Careers</p><h2 className={"h2"} style={{color: "#FFFFFF"}}>Build your career with Parkan</h2></div><p style={{color: "#C9D5E8"}}>Stable growth, hands-on learning across distribution, projects and our own brand, and teams that feel like family.</p></div>
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
