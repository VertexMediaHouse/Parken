import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

class Component extends DCLogic {
renderVals() {
return {};
}
}

export default function Leadership() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Our Leadership Team</p>
<p className={"eyebrow"}>Our leadership team</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Leadership that combines experience with ambition</h1>
<p className={"lead"}>Our board and advisors bring together decades of industry knowledge and a clear plan for growth, governance and capital-market readiness.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><a href={"/company"}>Overview</a><a href={"/about"}>About Us</a><a className={"on"} href={"/leadership"}>Our Leadership Team</a><a href={"/branches"}>Our Branches</a><a href={"/why-us"}>Why Work With Us</a></div></nav>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Board of directors</p><h2 className={"h2"}>The people who lead Parkan</h2></div></div>
<div className={"g3"}>
<article className={"card card-flat"}><div className={"ph"} style={{height: "320px", borderRadius: "0", borderWidth: "0 0 1px 0"}}>PORTRAIT PHOTO</div><div className={"body"}><h3 className={"h3"}>[Name]</h3><span className={"tag tag-red"}>[Chairman / Managing Director]</span><p className={"small"}>[Founded Pooja Electricals in 2003 and has led the company's growth for over two decades.]</p><a className={"link small"} href={"#"}>LinkedIn profile →</a></div></article>
<article className={"card card-flat"}><div className={"ph"} style={{height: "320px", borderRadius: "0", borderWidth: "0 0 1px 0"}}>PORTRAIT PHOTO</div><div className={"body"}><h3 className={"h3"}>Bhavya Jain</h3><span className={"tag tag-red"}>Executive Director</span><p className={"small"}>[2–3 lines on responsibilities and background]</p><a className={"link small"} href={"#"}>LinkedIn profile →</a></div></article>
<article className={"card card-flat"}><div className={"ph"} style={{height: "320px", borderRadius: "0", borderWidth: "0 0 1px 0"}}>PORTRAIT PHOTO</div><div className={"body"}><h3 className={"h3"}>[Name]</h3><span className={"tag tag-red"}>[Director]</span><p className={"small"}>[2–3 lines on responsibilities and background]</p><a className={"link small"} href={"#"}>LinkedIn profile →</a></div></article>
</div></div></section>



<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our team</p><h2 className={"h2"}>The faces behind every delivery and every project</h2></div><p>Branch teams, project engineers, sales and support — grouped by branch or department.</p></div>
<div className={"g4"}>
<div className={"stack"} style={{gap: "10px"}}><div className={"ph"} style={{height: "220px"}}>TEAM PHOTO</div><h3 className={"h4"}>Hubballi · Head Office</h3><p className={"small"}>[Team size] · Sales, accounts, operations</p></div>
<div className={"stack"} style={{gap: "10px"}}><div className={"ph"} style={{height: "220px"}}>TEAM PHOTO</div><h3 className={"h4"}>Projects team</h3><p className={"small"}>[Team size] · Engineers &amp; site supervisors</p></div>
<div className={"stack"} style={{gap: "10px"}}><div className={"ph"} style={{height: "220px"}}>TEAM PHOTO</div><h3 className={"h4"}>Ahmedabad office</h3><p className={"small"}>[Team size] · PARKAN brand, warehouse &amp; logistics</p></div>
<div className={"stack"} style={{gap: "10px"}}><div className={"ph"} style={{height: "220px"}}>TEAM PHOTO</div><h3 className={"h4"}>Branch teams</h3><p className={"small"}>[Team size] · Across 13 branches</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<div className={"ph"} style={{height: "360px"}}>IMAGE · Team event / Diwali celebration</div>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Join our team</p><h2 className={"h2"}>Grow your career with a company built on trust</h2><p>We're always looking for sales, project and operations talent across our 13 branches.</p>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/why-us"}>See Open Roles</a><a className={"btn btn-line"} href={"/contact"}>Send Your CV</a></div></div>
</div></section>
<Footer />
</div>
  )
}
