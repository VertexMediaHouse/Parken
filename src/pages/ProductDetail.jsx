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

export default function ProductDetail() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<div style={{background: "#F4F6F9", borderBottom: "1px solid #DDE2EA"}}><div className={"wrap"} style={{paddingTop: "16px", paddingBottom: "16px"}}><p className={"small"}><a href={"/"}>Home</a> / <a href={"/products"}>Our Products</a> / <a href={"/products"}>Wires &amp; Cables</a> / Copper Flexible Wire</p></div></div>

<section className={"sec"} style={{paddingTop: "48px"}}><div className={"wrap g2"} style={{gap: "56px", alignItems: "start"}}>
<div className={"stack"} style={{gap: "12px"}}>
<img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"PARKAN multi-core copper flexible cable with coloured insulation"} style={{width: "100%", height: "520px", objectFit: "contain", background: "#FFFFFF", border: "1px solid #DDE2EA", borderRadius: "12px", display: "block"}} />
<div className={"g4"} style={{gap: "12px"}}><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Copper flexible wire, main view"} style={{width: "100%", height: "104px", objectFit: "contain", background: "#FFFFFF", border: "2px solid #184A8C", borderRadius: "12px", display: "block"}} /><div className={"ph"} style={{height: "104px"}}>COIL PHOTO</div><div className={"ph"} style={{height: "104px"}}>PACKAGING</div><div className={"ph"} style={{height: "104px"}}>VIDEO</div></div>
</div>
<div className={"stack"} style={{gap: "20px"}}>
<div className={"row"} style={{gap: "8px"}}><span className={"tag"}>Wires &amp; Cables</span><span className={"tag"}>PARKAN in-house range</span><span className={"tag tag-red"}>[ISI certified]</span></div>
<h1 className={"h2"}>PARKAN Copper Flexible Wire</h1>
<p className={"small muted"}>Product code: [PK-CFW-000]</p>
<p>Multi-core copper flexible wire with coloured insulation for house wiring, panels and appliance connections. [Add conductor grade, insulation type and applicable standard.]</p>
<table className={"table"} style={{border: "1px solid #DDE2EA", borderRadius: "12px", overflow: "hidden"}}><tbody>
<tr><th style={{width: "40%"}}>Conductor</th><td>Copper, multi-strand</td></tr>
<tr><th>Cores</th><td>[1 / 2 / 3 / 4 core]</td></tr>
<tr><th>Sizes</th><td>[0.75 – X sq mm]</td></tr>
<tr><th>Insulation</th><td>[PVC / FR / FR-LSH]</td></tr>
<tr><th>Voltage grade</th><td>[X kV]</td></tr>
<tr><th>Coil length</th><td>[X m]</td></tr>
</tbody></table>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/contact"}>Enquire Now</Button><Button variant="secondary" icon={<svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 21l1.6-4.8A8.5 8.5 0 1 1 8 19.5z"} /></svg>} href={"#"}>WhatsApp</Button><Button variant="secondary" icon={<svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"} /><path d={"M14 3v5h5M9 13h6M9 17h6"} /></svg>} href={"#"}>Datasheet PDF</Button></div>
<div className={"card"} style={{flexDirection: "row", gap: "16px", alignItems: "center", background: "#EEF3FA", borderColor: "#EEF3FA"}}><div className={"ico"} style={{background: "#FFFFFF"}}><svg viewBox={"0 0 24 24"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 6h11v10H3zM14 9h4l3 3v4h-7"} /><circle cx={"7"} cy={"18"} r={"2"} /><circle cx={"17"} cy={"18"} r={"2"} /></svg></div><p className={"small"} style={{color: "#0E2A52"}}>Available through 13 branches and 1,700+ dealers · Bulk and dealer pricing on request</p></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}>
<div className={"row"} style={{gap: "8px", marginBottom: "24px"}}><Button variant="secondary" size="sm" className="on" aria-pressed={true}>Description</Button><Button variant="secondary" size="sm" aria-pressed={false}>Specifications</Button><Button variant="secondary" size="sm" aria-pressed={false}>Certifications</Button><Button variant="secondary" size="sm" aria-pressed={false}>Downloads</Button></div>
<div className={"card"} style={{padding: "36px"}}><p>[Detailed product description, applications (homes, offices, panels, appliances) and installation notes.]</p><ul className={"list"} style={{marginTop: "8px"}}><li className={"check"}>[Key feature 1]</li><li className={"check"}>[Key feature 2]</li><li className={"check"}>[Key feature 3]</li></ul></div>
</div></section>

<section className={"sec"}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>You may also need</p><h2 className={"h2"}>Related products</h2></div><Button variant="link" href={"/products"}>All PARKAN products →</Button></div>
<div className={"g4"}>
<article className={"card card-flat"}><img src={"/img/cd3d12ff449434da80b3e66cb98c1d17.png"} alt={"Stranded aluminium wire"} style={{width: "100%", height: "180px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><h3 className={"h4"}>Aluminium Wire</h3><p className={"small"}>Stranded · [Sizes]</p><Button variant="link" size="sm" href={"/product"}>View details →</Button></div></article>
<article className={"card card-flat"}><img src={"/img/46a59c725f2f845396470ddbf4aaf5dc.png"} alt={"Flat submersible wire"} style={{width: "100%", height: "180px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><h3 className={"h4"}>Submersible Wire</h3><p className={"small"}>Flat 3-core · [Sizes]</p><Button variant="link" size="sm" href={"/product"}>View details →</Button></div></article>
<article className={"card card-flat"}><img src={"/img/7a8cf99aa34623d083b1537073ddf866.png"} alt={"Corrugated flexible pipe"} style={{width: "100%", height: "180px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><h3 className={"h4"}>Flexible Pipe</h3><p className={"small"}>Corrugated · [Diameters]</p><Button variant="link" size="sm" href={"/product"}>View details →</Button></div></article>
<article className={"card card-flat"}><img src={"/img/db0d79cb2106768fc379d2fd816f5e66.png"} alt={"Surface and modular boxes"} style={{width: "100%", height: "180px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><h3 className={"h4"}>Surface &amp; Modular Boxes</h3><p className={"small"}>[Module sizes] · [Finish]</p><Button variant="link" size="sm" href={"/product"}>View details →</Button></div></article>
</div></div></section>
<Footer />
</div>
  )
}
