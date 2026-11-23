import { useState } from 'react'
import { ArrowRight, CaretDown, List, PhoneCall, X } from "@phosphor-icons/react"
import Button, { IconButton } from './Button.jsx'

const SECTIONS = { "/about": ["/about", "/company", "/leadership", "/branches", "/why-us"], "/verticals": ["/verticals", "/trading", "/in-house-brand"], "/products": ["/products", "/product"], "/infrastructure": ["/infrastructure"] }
// globalThis.__path is set by the prerender (no location on the server)
const on = href => (SECTIONS[href] ?? [href]).includes((globalThis.__path ?? location.pathname).replace(/\/+$/, "") || "/") ? "on" : undefined
const Caret = () => <CaretDown size={14} weight="bold" />
export const Arrow = () => <ArrowRight size={18} weight="bold" />
const Lines = ({ open }) => open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />
const Phone = () => <PhoneCall size={18} />
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
<Button variant="ghost" className="navphone" href="tel:+919274337813" icon={<span className="navphone-ico"><Phone /></span>}><span><small>Get in Touch</small>+91 92743 37813</span></Button>
<Button href="/contact" iconRight={<Arrow />}>Enquire Now</Button>
<IconButton variant="ghost" className="burger" label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="menu" onClick={() => setOpen(o => !o)} icon={<Lines open={open} />} />
</div>
</div></div></header>
  )
}
