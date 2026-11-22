import { useState } from 'react'
import Button, { IconButton } from './Button.jsx'

const SECTIONS = { "/about": ["/about", "/company", "/leadership", "/branches", "/why-us"], "/verticals": ["/verticals", "/trading", "/in-house-brand"], "/products": ["/products", "/product"], "/infrastructure": ["/infrastructure"] }
// globalThis.__path is set by the prerender (no location on the server)
const on = href => (SECTIONS[href] ?? [href]).includes((globalThis.__path ?? location.pathname).replace(/\/+$/, "") || "/") ? "on" : undefined
const Caret = () => <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>
export const Arrow = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>
const Lines = ({ open }) => <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}></path></svg>
const Phone = () => <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"></path></svg>
const Nav = ({ href, ...p }) => <Button variant="ghost" size="sm" href={href} className={on(href)} aria-current={on(href) && "page"} {...p} />

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
<header className="nav"><div className="wrap"><div className={"navbar" + (open ? " open" : "")} onKeyDown={e => e.key === "Escape" && setOpen(false)}>
<a href="/" aria-label="Parkan Group home"><img className="logo" src="/img/69c175a88a5363f02583985878053bcf.png" alt="Parkan Group — Built on Trust" /></a>
<nav id="menu" className="menu" aria-label="Main">
<Nav href="/">Home</Nav>
<Nav href="/about">About Us</Nav>
<div className="dd"><Nav href="/verticals" iconRight={<Caret />}>Our Verticals</Nav><div className="ddm"><a href="/trading">Trading &amp; Distribution</a><a href="/infrastructure">Infrastructure &amp; Projects</a><a href="/in-house-brand">In-house Brand</a></div></div>
<div className="dd"><Nav href="/products" iconRight={<Caret />}>Products</Nav><div className="ddm"><a href="/products">All Products</a><a href="/in-house-brand">PARKAN In-house Brand</a><a href="/trading">Brands We Distribute</a></div></div>
<Nav href="/infrastructure">Projects</Nav>
<Nav href="/contact">Contact</Nav>
</nav>
<div className="navend">
<Button variant="ghost" className="navphone" href="tel:+919844038260" icon={<span className="navphone-ico"><Phone /></span>}><span><small>Get in Touch</small>+91 98440 38260</span></Button>
<Button href="/contact" iconRight={<Arrow />}>Enquire Now</Button>
<IconButton variant="ghost" className="burger" label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)} icon={<Lines open={open} />} />
</div>
</div></div></header>
  )
}
