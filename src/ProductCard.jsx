import Button from './Button.jsx'
import { productPath } from './products.js'

// The product card used on the listing and in "Related products".
export default function ProductCard({ p }) {
  return (
<article className={"card card-flat"}><img src={p.img} alt={p.alt} loading={"lazy"} style={{width: "100%", height: "200px", objectFit: "contain", background: "#FFFFFF", borderBottom: "1px solid #DDE2EA", display: "block"}} />
<div className={"body"}><div className={"row"} style={{gap: "6px"}}><span className={"tag"}>{p.cat}</span><span className={"tag tag-red"}>PARKAN</span></div>
<h3 className={"h4"}>{p.name}</h3>
<p className={"small"}>{p.spec}</p>
<div className={"row"} style={{gap: "8px", marginTop: "6px"}}><Button variant="secondary" size="sm" href={productPath(p)}>View Details</Button><Button variant="secondary" size="sm" href={"/contact"}>Enquire Now</Button></div></div></article>
  )
}
