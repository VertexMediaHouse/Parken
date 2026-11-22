import { IconButton } from './Button.jsx'
const ASK = 'Tell me about Parkan Group (Parkan Enterprises Limited), the electrical distributor and infrastructure company headquartered in Hubballi, Karnataka.'
const q = encodeURIComponent(ASK)
const ai = [
  ['ChatGPT', `https://chatgpt.com/?q=${q}`],
  ['Claude', `https://claude.ai/new?q=${q}`],
  ['Perplexity', `https://www.perplexity.ai/search?q=${q}`],
]
const Spark = ({ s = 22 }) => <svg viewBox="0 0 24 24" width={s} height={s} fill="currentColor" aria-hidden="true"><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"></path><path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z"></path></svg>
const social = [
  ['LinkedIn', <path key="i" d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.06c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.1c0-1.22-.02-2.78-1.7-2.78-1.7 0-1.96 1.33-1.96 2.7V21h-4z"></path>],
  ['Instagram', <path key="i" d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM12 2c-2.7 0-3.1 0-4.1.06C4.6 2.2 2.2 4.6 2.06 7.9 2 8.9 2 9.3 2 12s0 3.1.06 4.1c.15 3.3 2.54 5.7 5.84 5.84 1 .05 1.4.06 4.1.06s3.1 0 4.1-.06c3.3-.15 5.7-2.54 5.84-5.84.05-1 .06-1.4.06-4.1s0-3.1-.06-4.1C21.8 4.6 19.4 2.2 16.1 2.06 15.1 2 14.7 2 12 2zm0 1.8c2.67 0 2.99 0 4.04.06 2.4.1 3.97 1.7 4.1 4.1.05 1.05.06 1.37.06 4.04s0 2.99-.06 4.04c-.1 2.4-1.7 3.97-4.1 4.1-1.05.05-1.37.06-4.04.06s-2.99 0-4.04-.06c-2.4-.1-3.97-1.7-4.1-4.1C3.8 14.99 3.8 14.67 3.8 12s0-2.99.06-4.04c.1-2.4 1.7-3.97 4.1-4.1C9.01 3.8 9.33 3.8 12 3.8z"></path>],
  ['YouTube', <path key="i" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12z"></path>],
  ['Facebook', <path key="i" d="M14 8.5V6.6c0-.86.2-1.3 1.55-1.3H17.5V2.1A26 26 0 0 0 14.7 2C11.9 2 10 3.7 10 6.8v1.7H7v3.4h3V22h4v-10.1h3.1l.4-3.4z"></path>],
]

export default function Footer() {
  return (
<footer className="footer"><div className="wrap">
<div className="fgrid">
<div className="stack" style={{gap: "22px"}}>
<img src="/media/logo-white.png" alt="Parkan Group" style={{height: "64px", width: "auto", display: "block", alignSelf: "flex-start"}} />
<p style={{color: "#DCE4F0", maxWidth: "380px"}}>A trusted name in electrical distribution, infrastructure projects and reliable electrical solutions across Karnataka, Goa and Gujarat.</p>
<span className="fbar" aria-hidden="true"></span>
</div>
<div className="fcol"><h4>Company</h4><a href="/about">About Us</a><a href="/verticals">Our Business Verticals</a><a href="/products">Our Products</a><a href="/infrastructure">Our Projects</a><a href="/branches">Our Branches</a></div>
<div className="fcol"><h4>Products</h4><a href="/products">Wires &amp; Cables</a><a href="/products">Cable Accessories</a><a href="/products">Conduits &amp; Boxes</a><a href="/in-house-brand">In-house Brand</a></div>
<div className="fcol"><h4>Support</h4><a href="/contact">Send an Enquiry</a><a href="/contact">Contact Us</a><a href="/why-us">Careers</a><a href="/leadership">Leadership Team</a></div>
<div className="aibox">
<h4><Spark /> Find Us On AI Apps</h4>
<p className="small">Get to know Parkan Group, our products, services and projects on your favourite AI platforms.</p>
<div className="aigrid">{ai.map(([n, href]) => <a key={n} href={href} target="_blank" rel="noopener noreferrer"><Spark s={26} />{n}</a>)}</div>
</div>
</div>
<div className="fbottom"><span>© 2026 Parkan Enterprises Limited. All rights reserved.</span>
<div className="follow"><span>Follow Us</span>{social.map(([n, p]) => <IconButton key={n} variant="ghost" href="#" label={n} icon={<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">{p}</svg>} />)}</div></div>
</div></footer>
  )
}
