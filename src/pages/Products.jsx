import { CaretDown, FilePdf, MagnifyingGlass } from '@phosphor-icons/react'
import { useState } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import SubNav from '../SubNav.jsx'
import ProductCard from '../ProductCard.jsx'
import { categories, products } from '../products.js'

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { cat: 'all' }; }
  renderVals() {
    const cats = categories, all = products;
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
  const [filtersOpen, setFiltersOpen] = useState(false) // phones only: desktop always shows the filters
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/projects-work-1.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Our Products</p>
<p className={"eyebrow"}>PARKAN products</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Our Own Range, <em>Built on 23 Years</em></h1>
<p className={"lead"}>PARKAN products, at 13 branches and 1,700+ dealers. Browse wires, cable accessories and conduits, then ask us for prices and stock.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px"}}><Button variant="accent" size="lg" href={"/contact"}>Contact Us</Button></div>
<div className={"row"} style={{gap: "12px", marginTop: "20px", maxWidth: "760px", flexWrap: "nowrap"}}><label htmlFor={"q"} style={{position: "absolute", left: "-9999px"}}>Search products</label><input id={"q"} className={"input"} type={"search"} placeholder={"Search by product name or size"} style={{minHeight: "56px", border: "0"}} /><Button variant="accent" icon={<MagnifyingGlass size={18} />}>Search</Button></div>
</div></section>

<SubNav label="Product categories" kicker="Category" variant="secondary" items={v.cats.map(c => ({ label: c.label, on: c.cls === 'on', pick: c.pick }))} />

<section className={"sec"} style={{paddingTop: "24px"}}><div className={"wrap"} style={{display: "flex", flexWrap: "wrap", gap: "40px", alignItems: "flex-start"}}>
<aside className={"card filters" + (filtersOpen ? " open" : "")} aria-label={"Filters"} style={{flex: "1 1 260px", maxWidth: "300px", gap: "22px"}}>
<div className={"row"} style={{justifyContent: "space-between"}}><h2 className={"h4"}><button type="button" className="ftoggle" aria-expanded={filtersOpen} onClick={() => setFiltersOpen(o => !o)}>Filters<CaretDown size={16} weight="bold" /></button></h2><Button variant="link" size="sm" href={"#"}>Clear all</Button></div>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Range</legend><label className={"chk"}><input type={"checkbox"} defaultChecked={""} /> PARKAN in-house range</label><label className={"chk"}><input type={"checkbox"} /> Channel-partner brands</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Application</legend><label className={"chk"}><input type={"checkbox"} /> Residential</label><label className={"chk"}><input type={"checkbox"} /> Commercial</label><label className={"chk"}><input type={"checkbox"} /> Industrial</label><label className={"chk"}><input type={"checkbox"} /> Infrastructure projects</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Material</legend><label className={"chk"}><input type={"checkbox"} /> Copper</label><label className={"chk"}><input type={"checkbox"} /> Aluminium</label><label className={"chk"}><input type={"checkbox"} /> Brass</label><label className={"chk"}><input type={"checkbox"} /> PVC / Nylon</label></fieldset>
<fieldset style={{border: "0", padding: "0", margin: "0"}}><legend className={"h4"} style={{fontSize: "14px", marginBottom: "8px"}}>Certification</legend><label className={"chk"}><input type={"checkbox"} /> [ISI]</label><label className={"chk"}><input type={"checkbox"} /> [Other]</label></fieldset>
</aside>

<div className={"stack"} style={{flex: "999 1 560px", minWidth: "0", gap: "24px"}}>
<div className={"row"} style={{justifyContent: "space-between", gap: "16px"}}><p className={"small"}>Showing <strong>{v.count}</strong> products in <strong>{v.activeLabel}</strong></p>
<div className={"row"} style={{gap: "10px"}}><label htmlFor={"sort"} className={"small"} style={{fontWeight: "600"}}>Sort by</label><select id={"sort"} className={"input"} style={{width: "200px"}}><option>Name A–Z</option><option>Newest first</option><option>Category</option></select></div></div>
<div className={"g3"}>
{v.items.map(p => <ProductCard key={p.slug} p={p} />)}
</div>
<div className={"card"} style={{flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px", background: "#EEF3FA", borderColor: "#EEF3FA"}}><div className={"stack"} style={{gap: "4px"}}><h3 className={"h4"}>More PARKAN products being added</h3><p className={"small"}>Need Legrand, Havells, Polycab or Schneider? We supply those too.</p></div><Button variant="secondary" size="sm" href={"/trading"}>Brands we distribute</Button></div>
</div>
</div></section>

<section className={"sec alt"}><div className={"wrap"}><div className={"cta"}>
<div className={"stack"} style={{gap: "10px", maxWidth: "640px"}}><h2 className={"h2"}>Want PARKAN for your project or store?</h2><p className={"lead"}>Dealer and bulk orders welcome.</p></div>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/contact"}>Enquire Now</Button><Button variant="secondary" icon={<FilePdf size={18} />} href={"#"}>Download Catalogue</Button></div>
</div></div></section>
<Footer />
</div>
  )
}
