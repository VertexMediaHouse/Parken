import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'

class Component extends DCLogic {
  constructor(props) { super(props); this.state = { st: 'All' }; }
  renderVals() {
    const all = [
      { name: 'Hubballi', state: 'Karnataka', tag: 'Head Office', tagCls: 'tag-red', address: '[Head office address], Hubballi, Karnataka', phone: '+91 98440 38260 · +91 94488 38977', email: 'parkanenterprisesltd@gmail.com' },
      { name: 'Belagavi', state: 'Karnataka', tag: 'Branch', tagCls: '', address: '[Address], Belagavi, Karnataka', phone: '[Phone]', email: '[Email]' },
      { name: 'Shivamogga', state: 'Karnataka', tag: 'Branch', tagCls: '', address: '[Address], Shivamogga, Karnataka', phone: '[Phone]', email: '[Email]' },
      { name: 'Mangaluru', state: 'Karnataka', tag: 'Branch', tagCls: '', address: '[Address], Mangaluru, Karnataka', phone: '[Phone]', email: '[Email]' },
      { name: 'Bengaluru', state: 'Karnataka', tag: 'Branch', tagCls: '', address: '[Address], Bengaluru, Karnataka', phone: '[Phone]', email: '[Email]' },
      { name: 'Margao', state: 'Goa', tag: 'Branch', tagCls: '', address: '[Address], Margao, Goa', phone: '[Phone]', email: '[Email]' },
      { name: 'Ahmedabad', state: 'Gujarat', tag: 'Registered Office', tagCls: 'tag-red', address: 'C-319, City Center, near Prem Darwaja, Girdhar Nagar, Ahmedabad, Gujarat', phone: '+91 77967 12003', email: 'pelahmedabad@gmail.com' },
      { name: 'Odhav Warehouse', state: 'Gujarat', tag: 'Warehouse', tagCls: '', address: '[Address], Odhav, Ahmedabad, Gujarat · 1,500 sq ft', phone: '[Phone]', email: '[Email]' }
    ];
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
<section className={"pagehead on-dark"}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Our Branches</p>
<p className={"eyebrow"}>Our branches</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Close to you, across three states</h1>
<p className={"lead"}>13 branches across Karnataka, Goa and Gujarat, with our head office in Hubballi and registered office in Ahmedabad.</p>
</div></section>
<nav className={"subnav"} aria-label={"Company sections"}><div className={"wrap"}><a href={"/company"}>Overview</a><a href={"/about"}>About Us</a><a href={"/leadership"}>Our Leadership Team</a><a className={"on"} href={"/branches"}>Our Branches</a><a href={"/why-us"}>Why Work With Us</a></div></nav>

<section className={"sec"} style={{paddingBottom: "56px"}}><div className={"wrap g2"} style={{gap: "56px", alignItems: "center"}}>
<img src={"/img/0ff6f04e8e1bc90dfbcd5e8087794c6a.jpg"} alt={"Map of western India showing Parkan Group branches: head office in Hubballi, branches in Belagavi, Margao, Shivamogga, Mangaluru, Bengaluru and Ahmedabad"} style={{width: "100%", height: "560px", objectFit: "contain", background: "#0E2A52", borderRadius: "14px", display: "block"}} />
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
<div className={"row"} style={{gap: "8px"}}>{v.states.map((s, i) => (<Fragment key={i}><button type={"button"} className={`chip ${s.cls}`} onClick={s.pick}>{s.label}</button></Fragment>))}</div></div>
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
<div className={"row"} style={{gap: "8px", marginTop: "4px"}}><a className={"btn btn-blue btn-sm"} href={"#"}>Get Directions</a><a className={"btn btn-line btn-sm"} href={"/contact"}>Book a Visit</a></div>
</article>
</Fragment>))}
</div>
<p className={"small muted"} style={{marginTop: "24px"}}>Showing the main locations. [Names and addresses of the remaining branches, to complete all 13]</p>
</div></section>

<section className={"sec"}><div className={"wrap g2"} style={{gap: "64px", alignItems: "center"}}>
<img src={"/media/warehouse-aisle.webp"} alt={"Warehouse aisle with stocked shelving"} loading={"lazy"} style={{width: "100%", height: "360px", borderRadius: "14px", objectFit: "cover", display: "block"}} />
<div className={"stack"} style={{gap: "18px"}}><p className={"eyebrow"} style={{margin: "0"}}>Warehouse &amp; logistics</p><h2 className={"h2"}>Stock ready to move, anywhere in India</h2><p>A 1,500 sq ft warehouse in Odhav, Ahmedabad, a pan-India logistics partner and an import &amp; export licence let us serve dealers and projects well beyond our branch network.</p>
<ul className={"list"}><li className={"check"}>1,500 sq ft warehouse in Odhav</li><li className={"check"}>Pan-India logistics partner</li><li className={"check"}>Import &amp; export licence</li></ul>
<div className={"row"} style={{gap: "12px"}}><a className={"btn btn-red"} href={"/contact"}>Plan a Visit</a><a className={"btn btn-line"} href={"#"}>Get Directions</a></div></div>
</div></section>
<Footer />
</div>
  )
}
