import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { cat: 'all' }; }
  renderVals() {
    const cats = [['all','All products'],['wire','Wires & Cables'],['acc','Cable Accessories'],['box','Conduits & Boxes']];
    const all = [
      { c: 'wire', cat: 'Wires & Cables', name: 'Copper Flexible Wire', spec: 'Multi-core copper · [Sizes] · [Coil length]', img: '/img/3ad7a62206a97cbc6d86d076701f53a0.png' },
      { c: 'wire', cat: 'Wires & Cables', name: 'Aluminium Wire', spec: 'Stranded aluminium conductor · [Sizes]', img: '/img/cd3d12ff449434da80b3e66cb98c1d17.png' },
      { c: 'wire', cat: 'Wires & Cables', name: 'Submersible Wire', spec: 'Flat 3-core for pumps · [Sizes]', img: '/img/46a59c725f2f845396470ddbf4aaf5dc.png' },
      { c: 'acc', cat: 'Cable Accessories', name: 'Nylon Cable Ties', spec: '[Lengths] · [Colours]', img: '/img/af0666c1aaeded40fc5dd9228ea414a8.png' },
      { c: 'acc', cat: 'Cable Accessories', name: 'PVC Cable Clips', spec: 'With steel nails · [Sizes]', img: '/img/f584469b41f17caf4493bd5cd89c506a.png' },
      { c: 'acc', cat: 'Cable Accessories', name: 'Aluminium & Copper Terminals', spec: '[Types] · [Sizes]', img: '/img/f2bf647773d8645c2a1b48c0ebf12db0.png' },
      { c: 'acc', cat: 'Cable Accessories', name: 'Single & Double Compression Glands', spec: 'Brass · [Sizes]', img: '/img/22ae9b4fdc00b2a1ac38d99de2e97f2f.png' },
      { c: 'box', cat: 'Conduits & Boxes', name: 'Flexible Pipe', spec: 'Corrugated · [Diameters] · [Coil length]', img: '/img/7a8cf99aa34623d083b1537073ddf866.png' },
      { c: 'box', cat: 'Conduits & Boxes', name: 'Surface & Modular Boxes', spec: '[Module sizes] · [Finish]', img: '/img/db0d79cb2106768fc379d2fd816f5e66.png' }
    ];
    const items = this.state.cat === 'all' ? all : all.filter(p => p.c === this.state.cat);
    const active = cats.find(c => c[0] === this.state.cat);
    return {
      cats: cats.map(([id, label]) => ({ label, cls: id === this.state.cat ? 'on' : '', pick: () => this.setState({ cat: id }) })),
      items, count: items.length, activeLabel: active[1]
    };
  }
}

export default function Products() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{paddingBottom: "48px"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Our Products</p>
<p className={"eyebrow"}>PARKAN products</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Our Own Range, Built on 23 Years of Trade Experience</h1>
<p className={"lead"}>Quality electrical products under the PARKAN brand, available through our 13 branches and 1,700+ dealers.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px", maxWidth: "760px", flexWrap: "nowrap"}}><label htmlFor={"q"} style={{position: "absolute", left: "-9999px"}}>Search products</label><input id={"q"} className={"input"} type={"search"} placeholder={"Search by product name or size"} style={{minHeight: "56px", border: "0"}} /><button className={"btn btn-red"} type={"button"} style={{minHeight: "56px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"11"} cy={"11"} r={"7"}></circle><path d={"M21 21l-5-5"}></path></svg> Search</button></div>
</div></section>

<nav className={"subnav"} aria-label={"Product categories"}><div className={"wrap"}>
{v.cats.map((c, i) => (<Fragment key={i}><button type={"button"} className={`chip ${c.cls}`} onClick={c.pick}>{c.label}</button></Fragment>))}
</div></nav>

<section className={"sec"} style={{paddingTop: "48px"}}><div className={"wrap"} style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start"}}>
<aside className={"card"} aria-label={"Filters"} style={{flex: "1 1 260px", maxWidth: "300px", gap: "22px"}}>
<div className={"row"} style={{justifyContent: "space-between"}}><h2 className={"h4"}>Filters</h2><a className={"link small"} href={"#"}>Clear all</a></div>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Range</legend><label className={"chk"}><input type={"checkbox"} defaultChecked={""} /> PARKAN in-house range</label><label className={"chk"}><input type={"checkbox"} /> Channel-partner brands</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Application</legend><label className={"chk"}><input type={"checkbox"} /> Residential</label><label className={"chk"}><input type={"checkbox"} /> Commercial</label><label className={"chk"}><input type={"checkbox"} /> Industrial</label><label className={"chk"}><input type={"checkbox"} /> Infrastructure projects</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Material</legend><label className={"chk"}><input type={"checkbox"} /> Copper</label><label className={"chk"}><input type={"checkbox"} /> Aluminium</label><label className={"chk"}><input type={"checkbox"} /> Brass</label><label className={"chk"}><input type={"checkbox"} /> PVC / Nylon</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Certification</legend><label className={"chk"}><input type={"checkbox"} /> [ISI]</label><label className={"chk"}><input type={"checkbox"} /> [Other]</label></fieldset>
</aside>

<div className={"stack"} style={{flex: "999 1 560px", minWidth: "0", gap: "24px"}}>
<div className={"row"} style={{justifyContent: "space-between", gap: "16px"}}><p className={"small"}>Showing <strong>{v.count}</strong> products in <strong>{v.activeLabel}</strong></p>
<div className={"row"} style={{gap: "10px"}}><label htmlFor={"sort"} className={"small"} style={{fontWeight: "600"}}>Sort by</label><select id={"sort"} className={"input"} style={{width: "200px"}}><option>Name A–Z</option><option>Newest first</option><option>Category</option></select></div></div>
<div className={"g3"}>
{v.items.map((p, i) => (<Fragment key={i}>
<article className={"card card-flat"}><img src={p.img} alt={p.name} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} />
<div className={"body"}><div className={"row"} style={{gap: "6px"}}><span className={"tag"}>{p.cat}</span><span className={"tag tag-red"}>PARKAN</span></div>
<h3 className={"h4"}>{p.name}</h3>
<p className={"small"}>{p.spec}</p>
<div className={"row"} style={{gap: "8px", marginTop: "6px"}}><a className={"btn btn-blue btn-sm"} href={"/product"}>View Details</a><a className={"btn btn-line btn-sm"} href={"/contact"}>Enquire Now</a></div></div></article>
</Fragment>))}
</div>
<div className={"card"} style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", background: "#EEF3FA", borderColor: "#EEF3FA"}}><div className={"stack"} style={{gap: "4px"}}><h3 className={"h4"}>More PARKAN products being added</h3><p className={"small"}>Looking for Legrand, Havells, Polycab, Schneider and other brands? We supply those too.</p></div><a className={"btn btn-line btn-sm"} href={"/trading"}>Brands we distribute</a></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Interested in PARKAN products for your project or store?</h2><p className={"lead"}>Dealer and bulk enquiries welcome. Download the catalogue or talk to our sales team.</p></div>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Enquire Now</a><a className={"btn btn-ghost"} href={"#"}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"}></path><path d={"M14 3v5h5M9 13h6M9 17h6"}></path></svg> Download Catalogue</a></div>
</div></div></section>
<Footer />
</div>
  )
}
