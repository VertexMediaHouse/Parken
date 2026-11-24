import { Heart, InstagramLogo, LinkedinLogo, Sparkle } from "@phosphor-icons/react"
import { siClaude, siOpenai, siPerplexity } from "simple-icons"
import { IconButton } from './Button.jsx'
const ASK = 'Tell me about Parkan Group (Parkan Enterprises Limited), the electrical distributor and infrastructure company headquartered in Hubballi, Karnataka.'
const q = encodeURIComponent(ASK)
const ai = [
  ["ChatGPT", siOpenai, `https://chatgpt.com/?q=${q}`],
  ["Claude", siClaude, `https://claude.ai/new?q=${q}`],
  ["Perplexity", siPerplexity, `https://www.perplexity.ai/search?q=${q}`],
]
const Spark = ({ s = 22 }) => <Sparkle size={s} weight="fill" />
const social = [
  ["LinkedIn", <LinkedinLogo weight="fill" />, "https://www.linkedin.com/company/parkan-enterprises-limited/"],
  ["Instagram", <InstagramLogo weight="fill" />, "https://www.instagram.com/parkanenterprises_ltd?exln=ZnhqOHM3ejJkZ280"],
]

export default function Footer() {
  return (
<footer className="footer"><div className="wrap">
<div className="fgrid">
<div className="stack" style={{gap: "22px"}}>
<img src="/media/logo-white.png" alt="Parkan Group" style={{height: "64px", width: "auto", display: "block", alignSelf: "flex-start"}} />
<p style={{color: "#DCE4F0", maxWidth: "380px"}}>A trusted name in electrical distribution, infrastructure projects and reliable electrical solutions across Karnataka, Goa and Gujarat.</p>
<span className="fbar" aria-hidden="true"></span>
<div className="follow"><span>Follow Us</span>{social.map(([n, p, u]) => <IconButton key={n} variant="ghost" href={u} target="_blank" rel="noopener noreferrer" label={n} icon={p} />)}</div>
</div>
<div className="fcol"><h4>Company</h4><a href="/about">About Us</a><a href="/verticals">Our Business Verticals</a><a href="/products">Our Products</a><a href="/infrastructure">Our Projects</a><a href="/branches">Our Branches</a></div>
<div className="fcol"><h4>Products</h4><a href="/products">Wires &amp; Cables</a><a href="/products">Cable Accessories</a><a href="/products">Conduits &amp; Boxes</a><a href="/in-house-brand">In-house Brand</a></div>
<div className="fcol"><h4>Support</h4><a href="/contact">Send an Enquiry</a><a href="/contact">Contact Us</a><a href="/leadership">Leadership Team</a><a href="/privacy-policy">Privacy Policy</a><a href="/terms-and-conditions">Terms &amp; Conditions</a></div>
<div className="aibox">
<h4><Spark /> Find Us On AI Apps</h4>
<p className="small">Get to know Parkan Group, our products, services and projects on your favourite AI platforms.</p>
<div className="aigrid">{ai.map(([n, icon, href]) => <a key={n} href={href} target="_blank" rel="noopener noreferrer"><svg viewBox="0 0 24 24" width="26" height="26" fill="currentColor" aria-hidden="true"><path d={icon.path} /></svg>{n}</a>)}</div>
</div>
</div>
<div className="fbottom">
  <div className="row" style={{gap: "14px", flexWrap: "wrap", alignItems: "center"}}>
    <span>© 2026 Parkan Enterprises Limited. All rights reserved.</span>
    <span aria-hidden="true" style={{opacity: 0.35}}>•</span>
    <a href="/privacy-policy" style={{color: "inherit", textDecoration: "none", opacity: 0.85}}>Privacy Policy</a>
    <span aria-hidden="true" style={{opacity: 0.35}}>•</span>
    <a href="/terms-and-conditions" style={{color: "inherit", textDecoration: "none", opacity: 0.85}}>Terms &amp; Conditions</a>
  </div>
  <span className="credit" style={{display: "inline-flex", alignItems: "center", gap: "6px"}}>
    Made with <Heart size={16} weight="fill" style={{color: "#FF5A60"}} aria-label="love" /> by{" "}
    <a href="https://vertextechhouse.com" target="_blank" rel="noopener noreferrer" style={{color: "inherit", textDecoration: "underline", textUnderlineOffset: "3px", fontWeight: "600"}}>
      Vertex Tech House
    </a>
  </span>
</div>
</div></footer>
  )
}
