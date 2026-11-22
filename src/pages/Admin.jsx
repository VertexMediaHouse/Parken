import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Button from '../Button.jsx'

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { published: false }; }
  renderVals() {
    return { published: this.state.published, publish: () => this.setState({ published: true }) };
  }
}

export default function Admin() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>

<div style={{display: "flex", flexWrap: "wrap", minHeight: "1500px", background: "#F4F6F9"}}>
<aside className={"adminnav"} style={{flex: "1 1 240px", maxWidth: "260px", background: "#0B2143", padding: "24px 16px", display: "flex", flexDirection: "column", gap: "6px"}}>
<span className={"logochip"} style={{marginBottom: "20px"}}><img src={"/img/69c175a88a5363f02583985878053bcf.png"} alt={"Parkan Group"} style={{height: "40px", display: "block"}} /></span>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M3 11l9-7 9 7M5 10v10h14V10"} /></svg> Dashboard</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#FFFFFF", background: "#184A8C", textDecoration: "none", fontSize: "14px", fontWeight: "600"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 3l8 4.5v9L12 21l-8-4.5v-9z"} /><path d={"M4 7.5l8 4.5 8-4.5M12 12v9"} /></svg> Products</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"4"} y={"4"} width={"7"} height={"7"} rx={"1"} /><rect x={"13"} y={"4"} width={"7"} height={"7"} rx={"1"} /><rect x={"4"} y={"13"} width={"7"} height={"7"} rx={"1"} /><rect x={"13"} y={"13"} width={"7"} height={"7"} rx={"1"} /></svg> Categories</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 6h16M4 12h16M4 18h10"} /></svg> Brand logos</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"} /><path d={"M3 7l9 6 9-6"} /></svg> Enquiries <span className={"tag tag-red"} style={{marginLeft: "auto"}}>[12]</span></a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><rect x={"4"} y={"5"} width={"16"} height={"16"} rx={"2"} /><path d={"M16 3v4M8 3v4M4 11h16"} /></svg> Meetings</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"} /><path d={"M14 3v5h5M9 13h6M9 17h6"} /></svg> Projects</a>
<a href={"#"} style={{display: "flex", gap: "12px", alignItems: "center", minHeight: "44px", padding: "0 14px", borderRadius: "8px", color: "#C9D5E8", textDecoration: "none", fontSize: "14px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"12"} r={"3"} /><path d={"M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M4.9 19.1L7 17M17 7l2.1-2.1"} /></svg> Settings</a>
</aside>

<main style={{flex: "999 1 640px", minWidth: "0", padding: "32px 40px", display: "flex", flexDirection: "column", gap: "24px"}}>
<div className={"row"} style={{justifyContent: "space-between", gap: "16px"}}>
<div className={"stack"} style={{gap: "4px"}}><p className={"small muted"}><a href={"#"}>Products</a> / Add new product</p><h1 className={"h2"} style={{fontSize: "28px"}}>Add New Product</h1></div>
<div className={"row"} style={{gap: "10px"}}><Button variant="secondary" size="sm" href={"/products"}>Cancel</Button><Button variant="secondary" size="sm">Save as Draft</Button><Button variant="primary" size="sm" onClick={v.publish}>Publish to Website</Button></div>
</div>
{v.published && <><p className={"small"} style={{background: "#EEF3FA", color: "#0E2A52", padding: "14px 16px", borderRadius: "8px", fontWeight: "600"}}>Published. The product is now live on Our Products.</p></>}

<div style={{display: "flex", flexWrap: "wrap", gap: "24px", alignItems: "flex-start"}}>
<div className={"stack"} style={{flex: "999 1 520px", minWidth: "0", gap: "24px"}}>
<section className={"card"} style={{gap: "18px"}}><h2 className={"h4"}>Basic details</h2>
<div className={"field"}><label htmlFor={"a1"}>Product name *</label><input id={"a1"} className={"input"} defaultValue={"Copper Flexible Wire"} /></div>
<div className={"g2"} style={{gap: "16px"}}>
<div className={"field"}><label htmlFor={"a2"}>Category *</label><select id={"a2"} className={"input"}><option>Wires &amp; Cables</option><option>Cable Accessories</option><option>Conduits &amp; Boxes</option></select></div>
<div className={"field"}><label htmlFor={"a3"}>Range</label><select id={"a3"} className={"input"}><option>PARKAN in-house range</option><option>Channel-partner brand</option></select></div>
<div className={"field"}><label htmlFor={"a4"}>Product code</label><input id={"a4"} className={"input"} placeholder={"PK-CFW-000"} /></div>
<div className={"field"}><label htmlFor={"a5"}>Brand</label><input id={"a5"} className={"input"} defaultValue={"PARKAN"} /></div>
</div>
<div className={"field"}><label htmlFor={"a6"}>Short description</label><textarea id={"a6"} className={"input"} placeholder={"One or two lines shown on the product card"}></textarea></div>
</section>

<section className={"card"} style={{gap: "18px"}}><div className={"row"} style={{justifyContent: "space-between"}}><h2 className={"h4"}>Specifications</h2><Button variant="secondary" size="sm" icon={<svg viewBox={"0 0 24 24"} width={"16"} height={"16"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M12 5v14M5 12h14"} /></svg>}>Add row</Button></div>
<div className={"g2"} style={{gap: "12px"}}><input className={"input"} aria-label={"Spec name 1"} defaultValue={"Conductor"} /><input className={"input"} aria-label={"Spec value 1"} defaultValue={"Copper, multi-strand"} /><input className={"input"} aria-label={"Spec name 2"} defaultValue={"Cores"} /><input className={"input"} aria-label={"Spec value 2"} defaultValue={"[3 core]"} /><input className={"input"} aria-label={"Spec name 3"} defaultValue={"Size"} /><input className={"input"} aria-label={"Spec value 3"} defaultValue={"[1.5 sq mm]"} /></div>
</section>

<section className={"card"} style={{gap: "14px"}}><h2 className={"h4"}>Images &amp; files</h2>
<div className={"ph"} style={{height: "180px", flexDirection: "column", gap: "8px", borderColor: "#184A8C"}}><svg viewBox={"0 0 24 24"} width={"28"} height={"28"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 9l5-5 5 5M12 4v12"} /></svg><span><strong>Drag &amp; drop product photos</strong> or click to upload</span><span className={"small muted"}>JPG / PNG · up to 8 images · first image is the cover</span></div>
<div className={"g5"} style={{gap: "10px"}}><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Cover image: copper flexible wire"} style={{width: "100%", height: "88px", objectFit: "contain", background: "#FFFFFF", border: "2px solid #184A8C", borderRadius: "10px", display: "block"}} /><div className={"ph"} style={{height: "88px"}}>IMG 2</div><div className={"ph"} style={{height: "88px"}}>IMG 3</div><div className={"ph"} style={{height: "88px"}}>+</div><div className={"ph"} style={{height: "88px"}}>DATASHEET PDF</div></div>
</section>
</div>

<div className={"stack"} style={{flex: "1 1 300px", minWidth: "0", gap: "24px"}}>
<section className={"card"} style={{gap: "12px"}}><h2 className={"h4"}>Visibility</h2>
<label className={"chk"}><input type={"checkbox"} defaultChecked /> Show on website</label>
<label className={"chk"}><input type={"checkbox"} defaultChecked /> Feature on Home page</label>
<label className={"chk"}><input type={"checkbox"} /> Show price</label>
<div className={"field"}><label htmlFor={"a7"}>Price (optional)</label><input id={"a7"} className={"input"} placeholder={"₹ [Price] / unit"} /></div></section>
<section className={"card"} style={{gap: "8px"}}><h2 className={"h4"}>Certifications</h2><label className={"chk"}><input type={"checkbox"} defaultChecked /> [ISI]</label><label className={"chk"}><input type={"checkbox"} /> [BIS]</label><label className={"chk"}><input type={"checkbox"} /> [Other]</label></section>
<section className={"card"} style={{gap: "12px"}}><h2 className={"h4"}>Card preview</h2>
<div className={"card card-flat"}><img src={"/img/3ad7a62206a97cbc6d86d076701f53a0.png"} alt={"Copper flexible wire"} style={{width: "100%", height: "140px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} /><div className={"body"}><div className={"row"} style={{gap: "6px"}}><span className={"tag"}>Wires &amp; Cables</span><span className={"tag tag-red"}>PARKAN</span></div><h3 className={"h4"}>Copper Flexible Wire</h3><p className={"small"}>Copper, multi-strand · [3 core] · [1.5 sq mm]</p></div></div></section>
</div>
</div>

<section className={"card"} style={{gap: "14px"}}><div className={"row"} style={{justifyContent: "space-between"}}><h2 className={"h4"}>Recently added</h2><Button variant="link" size="sm" href={"#"}>View all products →</Button></div>
<div style={{overflowX: "auto"}}><table className={"table"}><thead><tr><th>Product</th><th>Category</th><th>Status</th><th>Updated</th><th></th></tr></thead><tbody>
<tr><td>Nylon Cable Ties</td><td>Cable Accessories</td><td><span className={"tag"}>Published</span></td><td>[Date]</td><td><Button variant="link" size="sm" href={"#"}>Edit</Button></td></tr>
<tr><td>Submersible Wire</td><td>Wires &amp; Cables</td><td><span className={"tag"}>Published</span></td><td>[Date]</td><td><Button variant="link" size="sm" href={"#"}>Edit</Button></td></tr>
<tr><td>Surface &amp; Modular Boxes</td><td>Conduits &amp; Boxes</td><td><span className={"tag tag-red"}>Draft</span></td><td>[Date]</td><td><Button variant="link" size="sm" href={"#"}>Edit</Button></td></tr>
</tbody></table></div></section>
</main>
</div>

</div>
  )
}
