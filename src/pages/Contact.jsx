import { CaretLeft, CaretRight, Buildings, CalendarBlank, EnvelopeSimple, MapPin, Phone } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { DCLogic, useDC } from '../dc.js'
import Header from '../Header.jsx'
import Footer from '../Footer.jsx'
import Button, { IconButton } from '../Button.jsx'
import { branches, directions } from '../branches.js'

const EMAIL = 'parkanenterprisesltd@gmail.com'
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December']
const WD = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
export const branchRows = branches.map(b => ({ name: b.name, state: b.state, phone: b.phone, tag: b.tag === 'Branch' ? null : 'Regd. office', dir: directions(b) }))

class Component extends DCLogic {
  // y/m/today stay null on the server; mount() fills them in the browser so the calendar is always the real month
  constructor(props) { super(props); this.state = { y: null, m: null, today: null, day: null, slot: '11:00 am', sent: false }; }
  mount() { const t = new Date(); t.setHours(0, 0, 0, 0); this.setState({ y: t.getFullYear(), m: t.getMonth(), today: t }); }
  renderVals() {
    const { y, m, today, day, slot } = this.state;
    const days = [];
    let monthLabel = '', canPrev = false, dateLabel = 'pick a date';
    if (y !== null) {
      const lead = (new Date(y, m, 1).getDay() + 6) % 7; // Monday-first grid
      for (let i = 0; i < lead; i++) days.push({ n: '', off: true, cls: '', vis: 'hidden', pick: null });
      const len = new Date(y, m + 1, 0).getDate();
      for (let n = 1; n <= len; n++) {
        const d = new Date(y, m, n);
        const on = day && d.getTime() === day.getTime();
        days.push({ n: String(n), off: d.getDay() === 0 || d < today, vis: 'visible', cls: on ? 'on' : '', pick: () => this.setState({ day: d }) });
      }
      monthLabel = MONTHS[m] + ' ' + y;
      canPrev = y > today.getFullYear() || m > today.getMonth();
      if (day) dateLabel = WD[day.getDay()] + ', ' + day.getDate() + ' ' + MONTHS[day.getMonth()].slice(0, 3);
    }
    const shift = k => { const d = new Date(y, m + k, 1); this.setState({ y: d.getFullYear(), m: d.getMonth() }); };
    const slots = ['10:00 am','11:00 am','12:30 pm','2:30 pm','4:00 pm','5:00 pm'].map(t => ({ t, cls: t === slot ? 'on' : '', pick: () => this.setState({ slot: t }) }));
    const send = e => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(e.currentTarget));
      const body = `Name: ${f.name}\nCompany: ${f.company}\nPhone: ${f.phone}\nEmail: ${f.email}\nCity: ${f.city}\nEnquiry type: ${f.type}\n\n${f.message}`;
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent('Website enquiry: ' + f.type + ' — ' + f.name)}&body=${encodeURIComponent(body)}`;
      this.setState({ sending: true }); // the mail app takes a moment to open
      setTimeout(() => this.setState({ sending: false, sent: true }), 1200);
    };
    const book = () => {
      if (!day) return;
      const type = document.getElementById('m1').value;
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`Meeting request: ${type}, ${dateLabel} at ${slot}`)}&body=${encodeURIComponent(`I'd like to book a ${type.toLowerCase()} on ${dateLabel} at ${slot}.\n\nName:\nPhone:\nCompany:`)}`;
    };
    return { days, slots, slot, dateLabel, monthLabel, canPrev, prev: () => shift(-1), next: () => shift(1), picked: !!day, book, sent: this.state.sent, sending: this.state.sending, send };
  }
}

export default function Contact() {
  const v = useDC(Component)
  return (
<div style={{width: "100%", minWidth: "0", color: "#1A1F2B", background: "#FFFFFF"}}>
<Header />
<section className={"pagehead on-dark"} style={{"--bg": "url(/media/contact-hero.webp)"}}><div className={"wrap"}>
<p className={"crumb"}><a href={"/"}>Home</a> / Contact Us</p>
<p className={"eyebrow"}>Contact us</p>
<h1 className={"h1"} style={{marginBottom: "16px"}}>Let's Work <em>Together</em></h1>
<p className={"lead"}>Supplies, projects, dealership or partnership: we are ready to help.</p>
</div></section>

<div className={"wrap"} style={{marginTop: "-32px", position: "relative"}}>
<div className={"g4"}>
<a className={"card"} href={"tel:+919274337813"} style={{textDecoration: "none", boxShadow: "0 12px 32px rgba(14,42,82,.10)"}}><div className={"ico"}><Phone /></div><h2 className={"h4"}>Call us</h2><p className={"small"}>+91 92743 37813</p></a>
<a className={"card"} href={"mailto:parkanenterprisesltd@gmail.com"} style={{textDecoration: "none", boxShadow: "0 12px 32px rgba(14,42,82,.10)"}}><div className={"ico"}><EnvelopeSimple /></div><h2 className={"h4"}>Email us</h2><p className={"small"} style={{overflowWrap: "anywhere"}}>parkanenterprisesltd@gmail.com</p></a>
<a className={"card"} href={"/branches"} style={{textDecoration: "none", boxShadow: "0 12px 32px rgba(14,42,82,.10)"}}><div className={"ico ico-red"}><MapPin /></div><h2 className={"h4"}>Head office</h2><p className={"small"}>Hubballi, Karnataka<br />Mon–Sat, 9:30 am – 7:00 pm</p></a>
<a className={"card"} href={"/branches"} style={{textDecoration: "none", boxShadow: "0 12px 32px rgba(14,42,82,.10)"}}><div className={"ico"}><Buildings /></div><h2 className={"h4"}>Registered office</h2><p className={"small"}>C-319, City Center, near Prem Darwaja, Girdhar Nagar, Ahmedabad</p></a>
</div></div>

<section className={"sec"}><div className={"wrap"}><div className={"enq"}>
<form className={"enq-form"} aria-label={"Enquiry form"} action={"mailto:parkanenterprisesltd@gmail.com"} method={"post"} encType={"text/plain"} onSubmit={v.send}>
<div className={"stack"} style={{gap: "8px"}}><p className={"eyebrow"} style={{margin: "0"}}>Enquiry form</p><h2 className={"h2"} style={{fontSize: "30px"}}>Send Us an Enquiry</h2></div>
<div className={"g2"} style={{gap: "16px"}}>
<div className={"field"}><label htmlFor={"f1"}>Name *</label><input id={"f1"} name={"name"} required autoComplete={"name"} className={"input"} placeholder={"Your full name"} /></div>
<div className={"field"}><label htmlFor={"f2"}>Company</label><input id={"f2"} name={"company"} autoComplete={"organization"} className={"input"} placeholder={"Company name"} /></div>
<div className={"field"}><label htmlFor={"f3"}>Phone *</label><input id={"f3"} name={"phone"} type={"tel"} required autoComplete={"tel"} className={"input"} placeholder={"+91"} /></div>
<div className={"field"}><label htmlFor={"f4"}>Email *</label><input id={"f4"} name={"email"} type={"email"} required autoComplete={"email"} className={"input"} placeholder={"you@company.com"} /></div>
<div className={"field"}><label htmlFor={"f5"}>City</label><input id={"f5"} name={"city"} autoComplete={"address-level2"} className={"input"} placeholder={"City"} /></div>
<div className={"field"}><label htmlFor={"f6"}>Enquiry type *</label><select id={"f6"} name={"type"} className={"input"}><option>Product Supply</option><option>Infrastructure Project</option><option>PARKAN Products</option><option>Dealership</option><option>Partnership / Investment</option><option>Careers</option><option>Other</option></select></div>
</div>
<div className={"field enq-msg"}><label htmlFor={"f7"}>Message</label><textarea id={"f7"} name={"message"} className={"input"} placeholder={"Tell us what you need — products, quantities, project location, timelines"}></textarea></div>
<div className={"row"} style={{gap: "12px"}}><Button size="lg" type={"submit"} loading={v.sending}>Submit Enquiry</Button><Button variant="secondary" size="lg" href={"https://wa.me/919274337813"} target={"_blank"} rel={"noopener"}>Or WhatsApp us</Button></div>
{v.sent && <><p className={"small"} role={"status"} style={{background: "#EEF3FA", color: "#0E2A52", padding: "14px 16px", borderRadius: "8px"}}>Your email app should now open with the enquiry filled in — press send there. If nothing opened, write to parkanenterprisesltd@gmail.com or call +91 92743 37813.</p></>}
</form>

<div className={"enq-book"}>
<div className={"stack"} style={{gap: "8px"}}><p className={"eyebrow"} style={{margin: "0"}}>Book a meeting</p><h2 className={"h2"} style={{fontSize: "30px"}}>Pick a date &amp; time</h2><p className={"small"}>Meet us at a branch, on a call or on video. Mon–Sat, 10:00 am – 6:00 pm.</p></div>
<div className={"row"} style={{justifyContent: "space-between"}}><IconButton size="sm" label={"Previous month"} disabled={!v.canPrev} onClick={v.prev} icon={<CaretLeft size={18} />} /><span className={"h4"} aria-live={"polite"}>{v.monthLabel}</span><IconButton size="sm" label={"Next month"} disabled={!v.monthLabel} onClick={v.next} icon={<CaretRight size={18} />} /></div>
<div className={"cal"}>
<span className={"cal-wd"}>Mon</span><span className={"cal-wd"}>Tue</span><span className={"cal-wd"}>Wed</span><span className={"cal-wd"}>Thu</span><span className={"cal-wd"}>Fri</span><span className={"cal-wd"}>Sat</span><span className={"cal-wd"}>Sun</span>
{v.days.map((d, i) => (<Fragment key={i}>{d.n ? <Button variant="secondary" iconOnly fullWidth className={d.cls} aria-pressed={d.cls === 'on'} disabled={d.off} onClick={d.pick}>{d.n}</Button> : <span></span>}</Fragment>))}
</div>
<div className={"stack"} style={{gap: "10px"}}><span className={"h4"} style={{fontSize: "14px"}}>Available slots · {v.dateLabel}</span>
<div className={"slots"}>{v.slots.map((s, i) => (<Fragment key={i}><Button variant="secondary" size="sm" className={s.cls} aria-pressed={s.cls === 'on'} onClick={s.pick}>{s.t}</Button></Fragment>))}</div></div>
<div className={"field"}><label htmlFor={"m1"}>Meeting type</label><select id={"m1"} className={"input"}><option>Visit a branch</option><option>Phone call</option><option>Video call</option><option>Site visit</option></select></div>
<Button variant={v.picked ? "primary" : "secondary"} fullWidth className={"enq-cta"} icon={<CalendarBlank size={18} />} onClick={v.book} disabled={!v.picked}>{v.picked ? `Request ${v.dateLabel}, ${v.slot}` : 'Pick a date to request a meeting'}</Button>
</div>
</div></div></section>

<section className={"sec alt"}><div className={"wrap g2 duo"} style={{gap: "48px"}}>
<div className={"stack"} style={{gap: "20px"}}>
<p className={"eyebrow"} style={{margin: "0"}}>Our branches</p><h2 className={"h2"}>Visit your nearest branch</h2>
<div style={{overflowX: "auto"}}><table className={"table table-stack"} style={{background: "#FFFFFF", borderRadius: "8px", overflow: "hidden"}}><thead><tr><th>Branch</th><th>State</th><th>Phone</th><th></th></tr></thead><tbody>
{branchRows.map(b => (<tr key={b.name}><td>{b.tag ? <><strong>{b.name}</strong> <span className={b.tag === 'HO' ? 'tag tag-red' : 'tag'}>{b.tag}</span></> : b.name}</td><td>{b.state}</td><td>{b.phone ? <Button variant="link" size="sm" href={'tel:' + b.phone.replace(/\s/g, '')}>{b.phone}</Button> : <a className={"small muted"} href={"tel:+919274337813"}>via HO · +91 92743 37813</a>}</td><td><Button variant="link" size="sm" href={b.dir} target={"_blank"} rel={"noopener"}>Directions</Button></td></tr>))}
</tbody></table></div>
<Button variant="link" href={"/branches"}>See all 13 branches →</Button>
</div>
<div className={"stack"} style={{gap: "20px"}}>
<iframe className={"map"} title={"Map of Hubballi, Karnataka, where Parkan's head office is"} src={"https://www.google.com/maps?q=Hubballi,+Karnataka&z=12&output=embed"} loading={"lazy"} referrerPolicy={"no-referrer-when-downgrade"} style={{height: "420px"}}></iframe>
<div className={"card"} style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}><div className={"stack"} style={{gap: "4px"}}><h3 className={"h4"}>Quickest reply: WhatsApp</h3><p className={"small"}>Send a product list or site photo. We'll quote from the nearest branch.</p></div>
<div className={"row"} style={{gap: "8px"}}><Button variant="secondary" size="sm" href={"https://wa.me/919274337813"} target={"_blank"} rel={"noopener"}>WhatsApp +91 92743 37813</Button></div></div>
</div>
</div></section>
<Footer />
</div>
  )
}
