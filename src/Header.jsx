const SECTIONS = { "/company": ["/company", "/about", "/leadership", "/branches", "/why-us"], "/verticals": ["/verticals", "/trading", "/infrastructure", "/in-house-brand"], "/products": ["/products", "/product"] }
// globalThis.__path is set by the prerender (no location on the server)
const on = href => (SECTIONS[href] ?? [href]).includes((globalThis.__path ?? location.pathname).replace(/\/+$/, "") || "/") ? "on" : undefined

export default function Header() {
  return (<>
<div className={"topbar"}><div className={"wrap"}><span>Part of the Pooja Group of Companies · 13 branches across Karnataka, Goa &amp; Gujarat</span><span>+91 98440 38260 · parkanenterprisesltd@gmail.com · Mon–Sat, 9:30 am – 7:00 pm</span></div></div>
<header className={"nav"}><div className={"wrap"}>
<a href={"/"} aria-label={"Parkan Group home"}><img className={"logo"} src={"/img/69c175a88a5363f02583985878053bcf.png"} alt={"Parkan Group — Built on Trust"} /></a>
<nav className={"menu"} aria-label={"Main"}>
<a href={"/"} className={on("/")}>Home</a>
<div className={"dd"}><a href={"/company"} className={on("/company")}>Company <svg viewBox={"0 0 24 24"} width={"16"} height={"16"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M6 9l6 6 6-6"}></path></svg></a><div className={"ddm"}><a href={"/about"}>About Us</a><a href={"/leadership"}>Our Leadership Team</a><a href={"/branches"}>Our Branches</a><a href={"/why-us"}>Why Work With Us</a></div></div>
<div className={"dd"}><a href={"/verticals"} className={on("/verticals")}>Verticals <svg viewBox={"0 0 24 24"} width={"16"} height={"16"} fill={"none"} stroke={"currentColor"} strokeWidth={"1.8"} strokeLinecap={"round"} strokeLinejoin={"round"} aria-hidden={"true"}><path d={"M6 9l6 6 6-6"}></path></svg></a><div className={"ddm"}><a href={"/trading"}>Trading &amp; Distribution</a><a href={"/infrastructure"}>Infrastructure &amp; Projects</a><a href={"/in-house-brand"}>In-house Brand</a></div></div>
<a href={"/products"} className={on("/products")}>Our Products</a>
<a href={"/contact"} className={on("/contact")}>Contact Us</a>
</nav>
<a className={"btn btn-red"} href={"/contact"}>Get a Quote</a>
</div></header>
  </>)
}
