import { Clock, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button from '../Button.jsx'
import SubNav, { COMPANY } from '../SubNav.jsx'
import { branches, directions } from '../branches.js'
import { W, H, PINS, INDIA } from '../indiaMap.js'

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

// India map, red pin per state we operate in. Label sits left or right of its pin so Goa and Hubballi (close together) never collide.
const STATES = [
  { at: PINS.ahmedabad, name: 'Gujarat', sub: 'Ahmedabad · Registered office', side: 1 },
  { at: PINS.hubballi, name: 'Karnataka', sub: 'Hubballi · Head office', side: 1, hq: true },
  { at: PINS.margao, name: 'Goa', sub: 'Margao', side: -1 },
]
function BranchMap() {
  return <div className="netmap">
    <svg viewBox={`-150 -30 ${W + 230} ${H + 60}`} preserveAspectRatio="xMidYMid meet" role="img" aria-label="Map of India with pins in Gujarat (Ahmedabad), Karnataka (Hubballi head office) and Goa (Margao)">
      <defs><pattern id="netdots" width="14" height="14" patternUnits="userSpaceOnUse"><circle cx="7" cy="7" r="2.4" /></pattern></defs>
      <path className="netmap-land" d={INDIA} />
      <path className="netmap-dots" d={INDIA} fill="url(#netdots)" />
      <path className="netmap-line" d={INDIA} />
      {STATES.map(({ at: [x, y], name, sub, side, hq }) => <g key={name} className="netpin">
        <circle className="netpin-pulse" cx={x} cy={y} r={hq ? 16 : 12} />
        <circle className="netpin-dot" cx={x} cy={y} r={hq ? 13 : 10} />
        <text x={x + side * 30} y={y - 6} textAnchor={side > 0 ? 'start' : 'end'}><tspan className="netpin-name">{name}</tspan><tspan className="netpin-sub" x={x + side * 30} dy="40">{sub}</tspan></text>
      </g>)}
    </svg>
  </div>
}

export default function Branches() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/about-company-2.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / <a href={"/company"}>Company</a> / Our Branches</p>
<p className={"eyebrow"}>Our branches</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Close to <em>you</em></h1>
<p className={"lead"}>13 branches across Karnataka, Goa and Gujarat, led from our Hubballi head office. Walk in, call or send an enquiry to your nearest branch.</p>
<div className={"row"} style={{gap: "12px", marginTop: "28px"}}><Button variant="accent" size="lg" href={"/contact"}>Contact Us</Button></div>
</div></section>
<SubNav label="Company sections" kicker="Company" items={COMPANY} current="/branches" />

<section className={"sec"} style={{paddingBottom: "40px"}}><div className={"wrap netgrid"}>
<BranchMap />
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Our network</p>
<h2 className={"h2"}>Three states, one network</h2>
<p>From our head office in Hubballi, 13 branches serve 1,700+ dealers, contractors and project sites across Karnataka, Goa and Gujarat. Every branch keeps stock on hand, so most orders leave the same day.</p>
<ul className={"list"}>
<li className={"check"}>Head office in Hubballi, registered office in Ahmedabad</li>
<li className={"check"}>Odhav warehouse ships the PARKAN brand across India</li>
<li className={"check"}>Open Mon–Sat, 9:30 am – 7:00 pm at every branch</li>
</ul>
<div className={"g4 netstats"}>
<div className={"card"}><span className={"stat"}>13</span><span className={"small muted"}>Branches</span></div>
<div className={"card"}><span className={"stat"}>11</span><span className={"small muted"}>Karnataka</span></div>
<div className={"card"}><span className={"stat"}>1</span><span className={"small muted"}>Goa</span></div>
<div className={"card"}><span className={"stat"}>1</span><span className={"small muted"}>Gujarat</span></div>
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
