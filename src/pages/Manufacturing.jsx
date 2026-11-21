import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

class Component extends DCLogic {
renderVals() {
return { range: [
{ name: 'Nylon Cable Ties', cat: 'Accessories', img: '/img/af0666c1aaeded40fc5dd9228ea414a8.png' },
{ name: 'PVC Cable Clips', cat: 'Accessories', img: '/img/f584469b41f17caf4493bd5cd89c506a.png' },
{ name: 'Aluminium & Copper Terminals', cat: 'Accessories', img: '/img/f2bf647773d8645c2a1b48c0ebf12db0.png' },
{ name: 'Single & Double Compression Glands', cat: 'Accessories', img: '/img/22ae9b4fdc00b2a1ac38d99de2e97f2f.png' },
{ name: 'Copper Flexible Wire', cat: 'Wires', img: '/img/3ad7a62206a97cbc6d86d076701f53a0.png' },
{ name: 'Aluminium Wire', cat: 'Wires', img: '/img/cd3d12ff449434da80b3e66cb98c1d17.png' },
{ name: 'Submersible Wire', cat: 'Wires', img: '/img/46a59c725f2f845396470ddbf4aaf5dc.png' },
{ name: 'Flexible Pipe', cat: 'Conduits', img: '/img/7a8cf99aa34623d083b1537073ddf866.png' },
{ name: 'Surface & Modular Boxes', cat: 'Boxes', img: '/img/db0d79cb2106768fc379d2fd816f5e66.png' }
] };
}
}

export default function Manufacturing() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / In-house Brand</p>
<p className={"eyebrow"}>Vertical 03 · Since 2026</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>In-house Brand</h1>
<p className={"lead"}>We create quality electrical products under our own PARKAN brand – backed by 23+ years of trade experience and a 1,700+ dealer network.</p>
</div></section>
<nav className={"subnav"} aria-label={"Vertical sections"}><div className={"wrap"}><a href={"/verticals"}>Overview</a><a href={"/trading"}>Trading &amp; Distribution</a><a href={"/infrastructure"}>Infrastructure &amp; Projects</a><a className={"on"} href={"/in-house-brand"}>In-house Brand</a></div></nav>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<div className={"g2"} style={{gap: "12px"}}>
<img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Copper flexible wire"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/f2bf647773d8645c2a1b48c0ebf12db0.png"} alt={"Aluminium and copper cable terminals"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/46a59c725f2f845396470ddbf4aaf5dc.png"} alt={"Submersible wire"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<img src={"/img/af0666c1aaeded40fc5dd9228ea414a8.png"} alt={"Nylon cable tie"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
</div>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Our latest chapter</p><h2 className={"h2"}>From trusted distributor to trusted brand</h2>
<p>After more than two decades of supplying the market, we know what dealers, contractors and projects need. Through contract manufacturing, we now create electrical products under the PARKAN name – checked against our own quality standards before they reach you.</p>
<p>The range is building a scalable platform for long-term expansion, with more products being added.</p>
<a className={"btn btn-blue"} href={"/products"} style={{width: "max-content"}}>View Our Products</a></div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our product range</p><h2 className={"h2"}>PARKAN products</h2></div><a className={"link"} href={"/products"}>See all products →</a></div>
<div className={"g5"} style={{gap: "16px"}}>
{v.range.map((p, i) => (<Fragment key={i}>
<article className={"card card-flat"}><img src={p.img} alt={p.name} style={{width: "100%", height: "150px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"} style={{padding: "16px"}}><span className={"tag"}>{p.cat}</span><h3 className={"h4"} style={{fontSize: "15px"}}>{p.name}</h3><a className={"link small"} href={"/product"}>View →</a></div></article>
</Fragment>))}
<article className={"card"} style={{alignItems: "center", justifyContent: "center", textAlign: "center", borderStyle: "dashed", background: "#FFFFFF"}}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"} /></svg></div><h3 className={"h4"} style={{fontSize: "15px"}}>More products being added</h3></article>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Quality promise</p><h2 className={"h2"}>Quality checked at every stage</h2></div></div>
<div className={"g4"}>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"9"} cy={"8"} r={"3.5"} /><path d={"M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a5 5 0 0 1 3.5 6"} /></svg></div><h3 className={"h4"}>Selected partners</h3><p className={"small"}>Carefully chosen contract manufacturing partners.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"} /><circle cx={"12"} cy={"12"} r={"3"} /></svg></div><h3 className={"h4"}>Stage-wise QC</h3><p className={"small"}>Quality checks at every stage of production.</p></div>
<div className={"card"}><div className={"ico"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"9"} r={"6"} /><path d={"M9 14.5L8 21l4-2 4 2-1-6.5"} /></svg></div><h3 className={"h4"}>Certified</h3><p className={"small"}>Compliance with [BIS / ISI / relevant] standards.</p></div>
<div className={"card"}><div className={"ico ico-red"}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"} /><circle cx={"12"} cy={"10"} r={"2.5"} /></svg></div><h3 className={"h4"}>Ready reach</h3><p className={"small"}>Available through 13 branches and 1,700+ dealers.</p></div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap g2"} style={{gap: "48px", alignItems: "center"}}>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>From idea to shelf</p><h2 className={"h2"}>How a PARKAN product is made</h2>
<div className={"stack"} style={{gap: "16px"}}>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>1</div><p><strong style={{color: "#0E2A52"}}>Market need</strong> — insight from 23 years of trade</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>2</div><p><strong style={{color: "#0E2A52"}}>Design &amp; specs</strong> — defined by our team</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>3</div><p><strong style={{color: "#0E2A52"}}>Contract manufacturing</strong> — with trusted partners</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>4</div><p><strong style={{color: "#0E2A52"}}>Testing &amp; dispatch</strong> — QC, then to our branches and dealers</p></div>
</div></div>
<div className={"g2"} style={{gap: "16px"}}><img src={"/media/electrician-testing.webp"} alt={"Electrician testing an installation with a meter"} loading={"lazy"} style={{width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover", display: "block"}} /><img src={"/media/quality-lab.webp"} alt={"Quality check at an engineering test bench"} loading={"lazy"} style={{width: "100%", height: "200px", borderRadius: "10px", objectFit: "cover", display: "block"}} /><div className={"ph"} style={{height: "200px"}}>CERTIFICATE</div><div className={"ph"} style={{height: "200px"}}>CERTIFICATE</div></div>
</div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Want to stock PARKAN products?</h2><p className={"lead"}>Dealer, distributor and bulk enquiries welcome.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Enquire Now</a><a className={"btn btn-ghost"} href={"/contact"}>Become a Dealer</a></div>
</div></div></section>
<Footer />
</div>
  )
}
