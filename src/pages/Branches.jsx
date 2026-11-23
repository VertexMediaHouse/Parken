import { Clock, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import { branches, directions } from '../branches.js'

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { st: 'All' }; }
  renderVals() {
    const all = branches;
    const states = ['All', 'Karnataka', 'Goa', 'Gujarat'];
    return {
      states: states.map(s => ({ label: s, cls: s === this.state.st ? 'on' : '', pick: () => this.setState({ st: s }) })),
      items: this.state.st === 'All' ? all : all.filter(b => b.state === this.state.st)
    };
  }
}

export default function Branches() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/branch-map.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Our Branches</p>
<p className={"eyebrow"}>Our branches</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Close to <em>you</em></h1>
<p className={"lead"}>13 branches. Head office in Hubballi, registered office in Ahmedabad.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/branches"}>Our Branches</Button></div></nav>

<section className={"sec"} style={{paddingBottom: "28px"}}><div className={"wrap g2 duo"} style={{gap: "56px"}}>
<img src={"/img/0ff6f04e8e1bc90dfbcd5e8087794c6a.jpg"} alt={"Map of western India showing Parkan Group branches: head office in Hubballi, branches in Belagavi, Margao, Shivamogga, Mangaluru, Bengaluru and Ahmedabad"} style={{width: "100%", height: "auto", maxHeight: "620px", aspectRatio: "1189 / 1390", objectFit: "cover", objectPosition: "top", background: "#0E2A52", borderRadius: "8px", display: "block"}} />
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Our network</p>
<h2 className={"h2"}>Three states, one network</h2>
<p>Our branches serve 1,700+ dealers. Ahmedabad and our Odhav warehouse handle the PARKAN brand and pan-India shipping.</p>
<div className={"g3"} style={{gap: "16px"}}>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>11</span><span className={"small muted"}>Karnataka</span></div>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>1</span><span className={"small muted"}>Goa</span></div>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>1</span><span className={"small muted"}>Gujarat</span></div>
</div>
</div>
</div></section>

<section className={"sec alt"} style={{paddingTop: "32px"}}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Branch directory</p><h2 className={"h2"}>Find your nearest branch</h2></div>
<div className={"row"} style={{gap: "8px"}}>{v.states.map((s, i) => (<Fragment key={i}><Button variant="secondary" size="sm" className={s.cls} aria-pressed={s.cls === 'on'} onClick={s.pick}>{s.label}</Button></Fragment>))}</div></div>
<div className={"g3"}>
{v.items.map((b, i) => (<Fragment key={i}>
<article className={"card branch-card"} style={{gap: "14px"}}>
<div className={"row branch-head"} style={{justifyContent: "space-between", gap: "8px"}}><h3 className={"h3"}>{b.name}</h3><span className={`tag ${b.tagCls}`}>{b.tag}</span></div>
<div className={"stack branch-body"} style={{gap: "8px"}}>
<p className={"small row"} style={{gap: "8px", flexWrap: "nowrap", alignItems: "flex-start"}}><MapPin size={18} style={{flex: "none"}} /> {b.address}</p>
<p className={"small row"} style={{gap: "8px"}}><Phone size={18} /> {b.phone}</p>
<p className={"small row"} style={{gap: "8px", flexWrap: "nowrap", overflowWrap: "anywhere"}}><EnvelopeSimple size={18} style={{flex: "none"}} /> {b.email}</p>
<p className={"small row"} style={{gap: "8px"}}><Clock size={18} /> Mon–Sat, 9:30 am – 7:00 pm</p>
</div>
<div className={"row branch-cta"} style={{gap: "8px", marginTop: "auto"}}><Button variant="secondary" size="sm" href={directions(b)} target={"_blank"} rel={"noopener noreferrer"}>Get Directions</Button><Button variant="secondary" size="sm" href={"/contact"}>Book a Visit</Button></div>
</article>
</Fragment>))}
</div>
</div></section>

<section className={"sec"}><div className={"wrap g2 duo"} style={{gap: "64px"}}>
<img src={"/media/vertical-trading.webp"} alt={"Warehouse aisle with stocked shelving"} loading={"lazy"} style={{width: "100%", height: "360px", borderRadius: "8px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Warehouse &amp; logistics</p><h2 className={"h2"}>Ready to ship, India-wide</h2><p>A 1,500 sq ft Odhav warehouse, a pan-India logistics partner and an import &amp; export licence take us beyond our branches.</p>
<ul className={"list"}><li className={"check"}>1,500 sq ft warehouse in Odhav</li><li className={"check"}>Pan-India logistics partner</li><li className={"check"}>Import &amp; export licence</li></ul>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/contact"}>Plan a Visit</Button><Button variant="secondary" href={"#"}>Get Directions</Button></div></div>
</div></section>
<Footer />
</div>
  )
}
