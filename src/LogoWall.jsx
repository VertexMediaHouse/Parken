// Real brand logos Parkan distributes, used where a warehouse photo would go until Parkan supplies one.
export const brands = [
  ['Legrand', '/img/bb655788983d8312f5e27df0b0b861ab.png'],
  ['Havells', '/img/91f5465a7beff9a9bc08e94d746a572b.png'],
  ['Polycab', '/img/c2975ec5fafc9efa04ea0dafb0d79fc8.png'],
  ['Schneider Electric', '/img/5cbf90197cd62d520d7188a1a9ae4aec.png'],
  ['L&T', '/img/60390122cc428563d22f78a5d5537020.png'],
  ['ABB', '/img/3dac94a9407069ab3df0d2f02e8ba9f9.png'],
  ['Finolex Cables', '/img/fb7d2b883345ef8033c8006f80516a3c.png'],
  ['KEI Wires & Cables', '/img/11a0412345e15fbcb8f2f67f8c630bf1.png'],
  ['Crompton', '/img/b0842fc18c0402c890e8a9df537ad0c1.png'],
  ['Orient Electric', '/img/b0e7f6671ac7d4033cd7bcb40fa28550.png'],
  ['V-Guard', '/img/4b6154a31877fa31b514ca79a7b9615d.png'],
  ['RR Kabel', '/img/ae56375d436b0eafdec75d53f5d1717e.png'],
  ['GM', '/img/bf32904fbc02b38a1bf0fc2daa4ebefa.png'],
  ['Goldmedal', '/img/c40e25a975012704d1ae27ad98b161da.png'],
  ['GreatWhite', '/img/498d805f2b1ea1e0c4d59ff0e72e90f6.png'],
  ['Norisys', '/img/6312172bc9927bd274ac03c16cd9d871.png'],
]

export default function LogoWall({ n = 12, style }) {
  return (<div className={"logowall"} style={style} role={"img"} aria-label={"Brands stocked at Parkan branches"}>
    {brands.slice(0, n).map(([name, src]) => <img key={name} src={src} alt={""} loading={"lazy"} />)}
  </div>)
}
