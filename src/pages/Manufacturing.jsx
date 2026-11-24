import { ArrowRight, Eye, MapPin, Medal, Star, UsersThree } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import SubNav, { VERTICALS } from '../SubNav.jsx'
import { productPath, products } from '../products.js'

const QUALITY = [
  ['Selected partners', 'Carefully chosen contract manufacturing partners.', <UsersThree />],
  ['Stage-wise QC', 'Quality checks at every stage of production.', <Eye />],
  ['Certified', 'Compliance with [BIS / ISI / relevant] standards.', <Medal />],
  ['Ready reach', 'Available through 13 branches and 1,700+ dealers.', <MapPin />],
]

class Component extends DCLogic {
renderVals() {
return { range: products };
}
}

export default function Manufacturing() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/vertical-brand.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/verticals"}>Verticals</a> / In-house Brand</p>
<p className={"eyebrow"}>Vertical 03 · Since 2026</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>In-house <em>Brand</em></h1>
<p className={"lead"}>Quality electrical products under our own PARKAN brand. Copper wires, cable accessories and conduits, sold through our dealer network.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px"}}><Button variant="accent" size="lg" href={"/contact"}>Contact Us</Button></div>
</div></section>
<SubNav label="Vertical sections" kicker="Our verticals" items={VERTICALS} current="/in-house-brand" />

<section className={"sec"}><div className={"wrap g2 duo"} style={{gap: "64px"}}>
<div className={"g2"} style={{gap: "12px"}}>
<img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Copper flexible wire"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "block"}} />
<img src={"/img/f2bf647773d8645c2a1b48c0ebf12db0.png"} alt={"Aluminium and copper cable terminals"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "block"}} />
<img src={"/img/46a59c725f2f845396470ddbf4aaf5dc.png"} alt={"Submersible wire"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "block"}} />
<img src={"/img/af0666c1aaeded40fc5dd9228ea414a8.png"} alt={"Nylon cable tie"} style={{width: "100%", height: "204px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "block"}} />
</div>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Our latest chapter</p><h2 className={"h2"}>From distributor to brand</h2>
<p>23 years of supply taught us what the market needs. Now we make it, to our own quality standards.</p>
<p>More products coming soon.</p>
<Button variant="primary" href={"/products"}>View Our Products</Button></div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Our product range</p><h2 className={"h2"}>PARKAN products</h2></div><Button variant="link" href={"/products"}>See all products →</Button></div>
<div className={"g5"} style={{gap: "16px"}}>
{v.range.map((p, i) => (<Fragment key={i}>
<a className={"rcard"} href={productPath(p)}>
<span className={"rcard-img"}><img src={p.img} alt={p.alt} loading={"lazy"} /></span>
<div className={"rcard-body"}><span className={"rcard-cat"}>{p.cat}</span><h3 className={"rcard-name"}>{p.name}</h3><span className={"rcard-go"}>View details<ArrowRight size={16} weight={"bold"} /></span></div>
</a>
</Fragment>))}
<a className={"rcard rcard-more"} href={"/contact"}>
<span className={"ico ico-red"}><Star /></span>
<h3 className={"rcard-name"}>More products on the way</h3>
<p className={"small muted"}>Need something not listed? Ask us.</p>
<span className={"rcard-go"}>Send an enquiry<ArrowRight size={16} weight={"bold"} /></span>
</a>
</div></div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Quality promise</p><h2 className={"h2"}>Checked at every stage</h2></div></div>
<div className={"qp"}>
<figure className={"qp-img"}><img src={"/media/product-wires.webp"} alt={"PARKAN multi-core copper cable"} loading={"lazy"} /><figcaption className={"qp-seal"}><strong>PARKAN</strong><span>Quality assured</span></figcaption></figure>
<ol className={"qp-list"}>{QUALITY.map(([title, text, icon], i) => <li key={title}><span className={"qp-node"}>{String(i + 1).padStart(2, '0')}</span><div className={"qp-body"}><h3>{title}</h3><p className={"small"}>{text}</p></div><span className={"qp-ico"}>{icon}</span></li>)}</ol>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap g2 duo"} style={{gap: "48px"}}>
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>From idea to shelf</p><h2 className={"h2"}>How we make it</h2>
<div className={"stack"} style={{gap: "16px"}}>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>1</div><p><strong style={{color: "#0E2A52"}}>Market need</strong> — insight from 23 years of trade</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>2</div><p><strong style={{color: "#0E2A52"}}>Design &amp; specs</strong> — defined by our team</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>3</div><p><strong style={{color: "#0E2A52"}}>Contract manufacturing</strong> — with trusted partners</p></div>
<div className={"row"} style={{gap: "16px", flexWrap: "nowrap"}}><div className={"stepn"} style={{flex: "none"}}>4</div><p><strong style={{color: "#0E2A52"}}>Testing &amp; dispatch</strong> — QC, then to our branches and dealers</p></div>
</div></div>
<div className={"g2"} style={{gap: "16px"}}><img src={"/media/projects-work-1-720.webp"} alt={"Electrician wiring a distribution board"} loading={"lazy"} style={{width: "100%", height: "200px", borderRadius: "8px", objectFit: "cover", display: "block"}} /><img src={"/media/product-accessories-720.webp"} alt={"PARKAN cable accessories"} loading={"lazy"} style={{width: "100%", height: "200px", borderRadius: "8px", objectFit: "cover", display: "block"}} /><div className={"ph"} style={{height: "200px"}}>CERTIFICATE</div><div className={"ph"} style={{height: "200px"}}>CERTIFICATE</div></div>
</div></section>

<section className={"sec"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Stock PARKAN</h2><p className={"lead"}>Dealer, distributor and bulk enquiries welcome.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="accent" href={"/contact"}>Enquire Now</Button><Button variant="secondary" href={"/contact"}>Become a Dealer</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
