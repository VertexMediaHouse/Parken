import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import { branches } from '../branches.js'

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
<h1 className={"h1"} style={{marginBottom: "16px"}}>Close to you, <em>across three states</em></h1>
<p className={"lead"}>13 branches across Karnataka, Goa and Gujarat, with our head office in Hubballi and registered office in Ahmedabad.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><Button variant="ghost" size="sm" href={"/company"}>Overview</Button><Button variant="ghost" size="sm" href={"/about"}>About Us</Button><Button variant="ghost" size="sm" href={"/leadership"}>Our Leadership Team</Button><Button variant="ghost" size="sm" className="on" aria-current="page" href={"/branches"}>Our Branches</Button><Button variant="ghost" size="sm" href={"/why-us"}>Why Work With Us</Button></div></nav>

<section className={"sec"} style={{paddingBottom: "56px"}}><div className={"wrap g2"} style={{gap: "56px", alignItems: "center"}}>
<img src={"/img/0ff6f04e8e1bc90dfbcd5e8087794c6a.jpg"} alt={"Map of western India showing Parkan Group branches: head office in Hubballi, branches in Belagavi, Margao, Shivamogga, Mangaluru, Bengaluru and Ahmedabad"} style={{width: "100%", height: "560px", objectFit: "contain", background: "#0E2A52", borderRadius: "12px", display: "block"}} />
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Our network</p>
<h2 className={"h2"}>Three states, one reliable supply chain</h2>
<p>From our head office in Hubballi, our branches serve 1,700+ dealers with reliable supply and timely service. In Gujarat, our Ahmedabad office and Odhav warehouse support the PARKAN brand and pan-India logistics.</p>
<div className={"g3"} style={{gap: "16px"}}>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>[X]</span><span className={"small muted"}>Karnataka</span></div>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>[X]</span><span className={"small muted"}>Goa</span></div>
<div className={"card"} style={{gap: "4px", padding: "20px"}}><span className={"stat"} style={{fontSize: "32px"}}>[X]</span><span className={"small muted"}>Gujarat</span></div>
</div>
<p className={"small muted"}>[Confirm branch count per state]</p>
</div>
</div></section>

<section className={"sec alt"} style={{paddingTop: "64px"}}><div className={"wrap"}>
<div className={"sechead"}><div><p className={"eyebrow"}>Branch directory</p><h2 className={"h2"}>Find your nearest branch</h2></div>
<div className={"row"} style={{gap: "8px"}}>{v.states.map((s, i) => (<Fragment key={i}><Button variant="secondary" size="sm" className={s.cls} aria-pressed={s.cls === 'on'} onClick={s.pick}>{s.label}</Button></Fragment>))}</div></div>
<div className={"g3"}>
{v.items.map((b, i) => (<Fragment key={i}>
<article className={"card"} style={{gap: "14px"}}>
<div className={"row"} style={{justifyContent: "space-between", gap: "8px"}}><h3 className={"h3"}>{b.name}</h3><span className={`tag ${b.tagCls}`}>{b.tag}</span></div>
<div className={"stack"} style={{gap: "8px"}}>
<p className={"small row"} style={{gap: "8px", flexWrap: "nowrap", alignItems: "flex-start"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{flex: "none"}}><path d={"M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"} /><circle cx={"12"} cy={"10"} r={"2.5"} /></svg> {b.address}</p>
<p className={"small row"} style={{gap: "8px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"} /></svg> {b.phone}</p>
<p className={"small row"} style={{gap: "8px", flexWrap: "nowrap", overflowWrap: "anywhere"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"} style={{flex: "none"}}><rect x={"3"} y={"5"} width={"18"} height={"14"} rx={"2"} /><path d={"M3 7l9 6 9-6"} /></svg> {b.email}</p>
<p className={"small row"} style={{gap: "8px"}}><svg viewBox={"0 0 24 24"} width={"18"} height={"18"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><circle cx={"12"} cy={"12"} r={"9"} /><path d={"M12 7v5l3 3"} /></svg> Mon–Sat, 9:30 am – 7:00 pm</p>
</div>
<div className={"row"} style={{gap: "8px", marginTop: "4px"}}><Button variant="secondary" size="sm" href={"#"}>Get Directions</Button><Button variant="secondary" size="sm" href={"/contact"}>Book a Visit</Button></div>
</article>
</Fragment>))}
</div>
<p className={"small muted"} style={{marginTop: "24px"}}>Showing the main locations. [Names and addresses of the remaining branches, to complete all 13]</p>
</div></section>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<img src={"/media/warehouse-aisle.webp"} alt={"Warehouse aisle with stocked shelving"} loading={"lazy"} style={{width: "100%", height: "360px", borderRadius: "12px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Warehouse &amp; logistics</p><h2 className={"h2"}>Stock ready to move, anywhere in India</h2><p>A 1,500 sq ft warehouse in Odhav, Ahmedabad, a pan-India logistics partner and an import &amp; export licence let us serve dealers and projects well beyond our branch network.</p>
<ul className={"list"}><li className={"check"}>1,500 sq ft warehouse in Odhav</li><li className={"check"}>Pan-India logistics partner</li><li className={"check"}>Import &amp; export licence</li></ul>
<div className={"row"} style={{gap: "12px"}}><Button variant="primary" href={"/contact"}>Plan a Visit</Button><Button variant="secondary" href={"#"}>Get Directions</Button></div></div>
</div></section>
<Footer />
</div>
  )
}
