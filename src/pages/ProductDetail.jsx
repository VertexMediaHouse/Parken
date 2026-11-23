import { Certificate, FilePdf, FileText, ShieldCheck, Truck, WhatsappLogo } from '@phosphor-icons/react'
import { useState } from 'react'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import ProductCard from '../ProductCard.jsx'
import { productAt, products } from '../products.js'

// extra gallery shots after each product's own photo
const GALLERY = [
  ['/media/about-hero.webp', 'Distribution warehouse stocked and ready to ship'],
  ['/media/vertical-trading.webp', 'Warehouse racks stocked with wire reels'],
  ['/media/projects-work-1.webp', 'Electrician wiring a distribution board'],
]
const TABS = [['desc', 'Description'], ['specs', 'Specifications'], ['certs', 'Certifications'], ['files', 'Downloads']]
const QC = ['Stage-wise quality checks', 'Checked at every stage of production by our selected manufacturing partners.', <ShieldCheck />]
const REPORTS = ['Test reports on request', 'Batch test reports for dealer, project and tender submissions.', <FileText />]
const FILES = [['Product datasheet', 'PDF · specifications, sizes and codes', 'datasheet'], ['PARKAN catalogue', 'PDF · the full PARKAN range', 'PARKAN catalogue'], ['Test report', 'PDF · latest batch', 'latest test report']]
const th = {width: "40%"}

export default function ProductDetail() {
  // globalThis.__path is set by the prerender (no location on the server)
  const p = productAt(globalThis.__path ?? location.pathname) ?? products[0]
  const [tab, setTab] = useState('desc')
  const [shot, setShot] = useState(0)
  const shots = [[p.img, p.alt], ...GALLERY]
  const ask = what => 'https://wa.me/919274337813?text=' + encodeURIComponent(`Hi Parkan, please send the ${what} for PARKAN ${p.name} (${p.code}).`)
  const related = [...products.filter(x => x.c === p.c && x !== p), ...products.filter(x => x.c !== p.c)].slice(0, 4)
  const certs = [...p.certs.map(([t, d]) => [t, d, <Certificate />]), QC, REPORTS]
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<div style={{background: "#F4F6F9", borderBottom: "1px solid #DDE2EA"}}><div className={"wrap"} style={{paddingTop: "16px", paddingBottom: "16px"}}><p className={"small"}><a href={"/"}>Home</a> / <a href={"/products"}>Our Products</a> / <a href={"/products"}>{p.cat}</a> / {p.name}</p></div></div>

<section className={"sec"} style={{paddingTop: "24px"}}><div className={"wrap g2 duo"} style={{gap: "56px"}}>
<div className={"stack"} style={{gap: "12px"}}>
<img src={shots[shot][0]} alt={shots[shot][1]} style={{width: "100%", height: "520px", objectFit: shot ? "cover" : "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "8px", display: "block"}} />
<div className={"pgal"}>{shots.map(([src, alt], i) => <button type="button" key={src} className={i === shot ? "on" : undefined} aria-pressed={i === shot} aria-label={`Show image ${i + 1}: ${alt}`} onClick={() => setShot(i)}><img src={src} alt="" /></button>)}</div>
</div>
<div className={"stack"} style={{gap: "20px"}}>
<div className={"row"} style={{gap: "8px"}}><span className={"tag"}>{p.cat}</span><span className={"tag"}>PARKAN in-house range</span>{p.certs[0] && <span className={"tag tag-red"}>{p.certs[0][0]}</span>}</div>
<h1 className={"h2"}>PARKAN {p.name}</h1>
<p className={"small muted"}>Product code: {p.code}</p>
<p>{p.summary}</p>
<table className={"table"} style={{border: "1px solid #DDE2EA", borderRadius: "8px", overflow: "hidden"}}><tbody>
{p.specs.slice(0, 5).map(([k, val], i) => <tr key={k}><th style={i ? undefined : th}>{k}</th><td>{val}</td></tr>)}
</tbody></table>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/contact"}>Enquire Now</Button><Button variant="secondary" icon={<WhatsappLogo size={18} />} href={ask("price and availability")} target={"_blank"} rel={"noopener"}>WhatsApp</Button><Button variant="secondary" icon={<FilePdf size={18} />} href={"#details"} onClick={() => setTab("files")}>Datasheet PDF</Button></div>
<div className={"card"} style={{flexDirection: "row", gap: "16px", alignItems: "center", background: "#EEF3FA", borderColor: "#EEF3FA"}}><div className={"ico"} style={{background: "#FFFFFF"}}><Truck /></div><p className={"small"} style={{color: "#0E2A52"}}>At 13 branches and 1,700+ dealers · Bulk pricing on request</p></div>
</div>
</div></section>

<section className={"sec alt"} id={"details"}><div className={"wrap"}>
<div className={"row"} role={"group"} aria-label={"Product information"} style={{gap: "8px", marginBottom: "24px"}}>{TABS.map(([id, label]) => <Button key={id} variant="secondary" size="sm" className={tab === id ? "on" : undefined} aria-pressed={tab === id} aria-controls={"tab-" + id} onClick={() => setTab(id)}>{label}</Button>)}</div>
<div className={"card"} style={{padding: "36px"}}>
<div id={"tab-desc"} hidden={tab !== "desc"}><div className={"g2"} style={{gap: "40px"}}>
<div className={"stack"} style={{gap: "14px"}}><h2 className={"h4"}>About this product</h2>{p.desc.map(t => <p key={t}>{t}</p>)}</div>
<div className={"stack"} style={{gap: "14px"}}><h2 className={"h4"}>Key features</h2><ul className={"list"}>{p.features.map(f => <li key={f} className={"check"}>{f}</li>)}</ul></div>
</div></div>
<div id={"tab-specs"} hidden={tab !== "specs"}><table className={"table"} style={{border: "1px solid #DDE2EA"}}><tbody>
{p.specs.map(([k, val], i) => <tr key={k}><th style={i ? undefined : th}>{k}</th><td>{val}</td></tr>)}
<tr><th>Product code</th><td>{p.code}</td></tr>
</tbody></table></div>
<div id={"tab-certs"} hidden={tab !== "certs"}><div className={"g3"}>
{certs.map(([t, d, icon]) => <div key={t} className={"stack"} style={{gap: "10px"}}><span className={"ico"}>{icon}</span><h3 className={"h4"}>{t}</h3><p className={"small"}>{d}</p></div>)}
</div></div>
<div id={"tab-files"} hidden={tab !== "files"}><ul className={"dl"}>
{FILES.map(([t, d, what]) => <li key={t}><span className={"ico"}><FilePdf /></span><div className={"stack"} style={{gap: "2px"}}><strong>{t}</strong><span className={"small muted"}>{d}</span></div><Button variant="secondary" size="sm" icon={<WhatsappLogo size={16} />} href={ask(what)} target={"_blank"} rel={"noopener"} aria-label={`Request ${t} on WhatsApp`}>Request</Button></li>)}
</ul></div>
</div>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>You may also need</p><h2 className={"h2"}>Related products</h2></div><Button variant="link" href={"/products"}>All PARKAN products →</Button></div>
<div className={"g4"}>{related.map(r => <ProductCard key={r.slug} p={r} />)}</div>
</div></section>
<Footer />
</div>
  )
}
