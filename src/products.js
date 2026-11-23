// The PARKAN range: one record per product, shared by the listing, the product pages and the in-house brand page.
// Every product gets its own page at productPath(p). Specs below are the standard trade values: confirm before launch.
export const productPath = p => '/products/' + p.slug

export const categories = [['all', 'All products'], ['wire', 'Wires & Cables'], ['acc', 'Cable Accessories'], ['box', 'Conduits & Boxes']]

const IS694 = ['IS 694:2010', 'PVC insulated cables for working voltages up to and including 1,100 V.']
const IS8130 = ['IS 8130:2013', 'Conductors for insulated electric cables and flexible cords.']

export const products = [
  {
    slug: 'copper-flexible-wire', c: 'wire', name: 'Copper Flexible Wire', code: 'PK-CFW',
    img: '/media/copper-flexible-wire.webp', alt: 'PARKAN multi-core copper flexible cable with coloured insulation',
    spec: 'Multi-strand copper · 0.75–6 sq mm · 90 m coils',
    summary: 'Flexible copper wire with PVC insulation for house wiring, control panels and appliance connections. Fine copper strands make it easy to pull through conduit and bend around corners.',
    desc: [
      'PARKAN Copper Flexible Wire is made from fine strands of annealed bare copper, insulated with PVC in colour-coded cores. The flexible conductor routes easily through conduit and junction boxes, and it holds up to repeated bending in panels and appliance leads.',
      'Use it for concealed and surface house wiring, distribution boards and control panels, and connections to fans, lights and home appliances.',
    ],
    features: ['Fine-stranded annealed copper for easy routing', 'PVC insulation, with flame-retardant (FR) and FR-LSH options', 'Colour-coded cores for phase, neutral and earth', '1,100 V grade for homes, offices and shops', 'Supplied in 90 m coils'],
    specs: [['Conductor', 'Annealed bare copper, multi-strand (Class 5 flexible)'], ['Cores', 'Single core; 2, 3 and 4 core'], ['Sizes', '0.75 to 6 sq mm'], ['Insulation', 'PVC, FR, FR-LSH'], ['Voltage grade', 'Up to 1,100 V'], ['Colours', 'Red, yellow, blue, black, green'], ['Coil length', '90 m'], ['Standard', 'IS 694:2010']],
    certs: [IS694, IS8130],
  },
  {
    slug: 'aluminium-wire', c: 'wire', name: 'Aluminium Wire', code: 'PK-ALW',
    img: '/media/aluminium-wire.webp', alt: 'PARKAN stranded aluminium wire',
    spec: 'Stranded aluminium · 2.5–25 sq mm · 90 m coils',
    summary: 'PVC insulated stranded aluminium wire: a lighter, lower-cost conductor for service connections, sub-mains and LT distribution.',
    desc: [
      'PARKAN Aluminium Wire uses stranded electrical-grade aluminium with tough PVC insulation. It is lighter than copper and costs less per metre, which makes it a practical choice for longer runs.',
      'Typical uses are service connections from the pole to the meter, sub-main wiring, pump and motor feeders, and temporary site supply.',
    ],
    features: ['Stranded electrical-grade aluminium', 'Lighter and more economical than copper on long runs', 'Tough PVC insulation', '1,100 V grade', 'Supplied in 90 m coils'],
    specs: [['Conductor', 'Electrical-grade aluminium, stranded'], ['Cores', 'Single core'], ['Sizes', '2.5 to 25 sq mm'], ['Insulation', 'PVC'], ['Voltage grade', 'Up to 1,100 V'], ['Colours', 'Red, yellow, blue, black'], ['Coil length', '90 m'], ['Standard', 'IS 694:2010']],
    certs: [IS694, IS8130],
  },
  {
    slug: 'submersible-wire', c: 'wire', name: 'Submersible Wire', code: 'PK-SBW',
    img: '/media/submersible-wire.webp', alt: 'PARKAN flat three-core submersible pump cable',
    spec: 'Flat 3-core copper · 1.5–25 sq mm · 100 m coils',
    summary: 'Flat three-core copper cable for submersible pumps in borewells and open wells, with a PVC sheath that keeps water out.',
    desc: [
      'PARKAN Submersible Wire is a flat three-core cable with flexible copper conductors, PVC insulation and an outer PVC sheath. The flat shape lies close to the pump pipe, and the sheath keeps water out during long periods under water.',
      'It powers submersible pumps in borewells, open wells and sumps for farms, homes and apartments.',
    ],
    features: ['Flat profile lies close to the pump pipe', 'Flexible multi-strand copper conductors', 'PVC insulation with an outer PVC sheath', 'Made for continuous use under water', '1,100 V grade'],
    specs: [['Conductor', 'Annealed bare copper, multi-strand'], ['Cores', '3 core, flat'], ['Sizes', '1.5 to 25 sq mm'], ['Insulation', 'PVC, with outer PVC sheath'], ['Voltage grade', 'Up to 1,100 V'], ['Coil length', '100 m'], ['Standard', 'IS 694:2010']],
    certs: [IS694, IS8130],
  },
  {
    slug: 'nylon-cable-ties', c: 'acc', name: 'Nylon Cable Ties', code: 'PK-NCT',
    img: '/media/nylon-cable-ties.webp', alt: 'PARKAN black nylon cable tie',
    spec: 'Nylon 6/6 · 100–450 mm · Black and natural',
    summary: 'Self-locking nylon cable ties for bundling and securing wires in panels, cable trays and installations.',
    desc: [
      'PARKAN Nylon Cable Ties are moulded from nylon 6/6 with a one-piece self-locking head. They hold cables firmly and keep wiring tidy in distribution boards, cable trays and machines.',
      'Black ties are UV-stabilised for outdoor and exposed runs. Natural (white) ties suit indoor panels.',
    ],
    features: ['Nylon 6/6: strong and flexible', 'One-piece self-locking head', 'UV-stabilised black for outdoor use', 'Rounded edges protect cable insulation', 'Packs of 100'],
    specs: [['Material', 'Nylon 6/6 (polyamide)'], ['Lengths', '100, 150, 200, 250, 300, 370 and 450 mm'], ['Colours', 'Black (UV-stabilised), natural'], ['Locking', 'One-piece self-locking head'], ['Working temperature', '−40 °C to 85 °C'], ['Pack', '100 pieces']],
    certs: [],
  },
  {
    slug: 'pvc-cable-clips', c: 'acc', name: 'PVC Cable Clips', code: 'PK-PCC',
    img: '/media/pvc-cable-clips.webp', alt: 'PARKAN white PVC cable clips with steel nails',
    spec: 'With steel nails · 4–25 mm · Packs of 100',
    summary: 'PVC cable clips with a hardened steel nail for fixing wires and cables neatly to walls and ceilings.',
    desc: [
      'PARKAN PVC Cable Clips come with a pre-fitted hardened steel nail, so each clip fixes in one stroke on brick, plaster or wood. The clip holds the cable snugly without crushing its insulation.',
      'Use them for surface wiring, TV and data cables, and neat runs along skirting and ceilings.',
    ],
    features: ['Pre-fitted hardened steel nail', 'Holds cables firmly without damaging insulation', 'Fixes to brick, plaster and wood', 'Round and flat profiles', 'Packs of 100'],
    specs: [['Material', 'PVC with hardened steel nail'], ['Sizes', '4 to 25 mm'], ['Types', 'Round (round cables), flat (flat twin cables)'], ['Colours', 'White, grey'], ['Pack', '100 pieces']],
    certs: [],
  },
  {
    slug: 'cable-terminals', c: 'acc', name: 'Aluminium & Copper Terminals', code: 'PK-TRM',
    img: '/media/cable-terminals.webp', alt: 'PARKAN ring, pin and fork cable terminals',
    spec: 'Ring, pin, fork and tube lugs · 1.5–400 sq mm',
    summary: 'Crimp lugs in copper and aluminium for secure, low-resistance cable terminations in panels, switchgear and motors.',
    desc: [
      'PARKAN terminals include tinned copper lugs, aluminium lugs and bimetallic lugs for joining aluminium cable to copper busbars. Each lug is sized to its conductor, so a correct crimp gives a firm, low-resistance joint.',
      'They are used in distribution boards, switchgear, transformers, motor connections and earthing.',
    ],
    features: ['Tinned electrolytic copper resists corrosion', 'Aluminium and bimetallic (Al–Cu) options', 'Ring, pin, fork and tube types', 'Sized for a firm, low-resistance crimp', 'From 1.5 sq mm control wiring to 400 sq mm power cable'],
    specs: [['Material', 'Electrolytic copper, aluminium, bimetallic (Al–Cu)'], ['Types', 'Ring, pin, fork, tube'], ['Conductor sizes', '1.5 to 400 sq mm'], ['Finish', 'Tin plated (copper lugs)'], ['Fixing', 'Crimp, with hand or hydraulic tool']],
    certs: [],
  },
  {
    slug: 'compression-glands', c: 'acc', name: 'Single & Double Compression Glands', code: 'PK-CGL',
    img: '/media/compression-glands.webp', alt: 'PARKAN brass compression cable glands in several sizes',
    spec: 'Brass · Single and double compression · 20–75 mm',
    summary: 'Brass cable glands that seal and grip cables where they enter panels, junction boxes and motors.',
    desc: [
      'PARKAN compression glands are machined from brass. A single compression gland seals on the outer sheath. A double compression gland also grips the armour and inner sheath, for armoured cable in industrial and outdoor use.',
      'They keep dust and water out of the enclosure, hold the cable against pull, and give an earth path through the armour.',
    ],
    features: ['Machined brass body', 'Single compression for unarmoured cable', 'Double compression for armoured cable', 'Seals out dust and water', 'Supplied with neoprene seals'],
    specs: [['Material', 'Brass'], ['Types', 'Single compression, double compression'], ['Thread sizes', '20 to 75 mm'], ['Finish', 'Natural or nickel-plated brass'], ['Seal', 'Neoprene rubber'], ['Standard', 'BS 6121']],
    certs: [['BS 6121', 'Mechanical cable glands for armoured and unarmoured cables.']],
  },
  {
    slug: 'flexible-pipe', c: 'box', name: 'Flexible Pipe', code: 'PK-FXP',
    img: '/media/flexible-pipe.webp', alt: 'Coil of PARKAN white corrugated flexible pipe',
    spec: 'Corrugated PVC · 20–50 mm · 50 m coils',
    summary: 'Corrugated PVC conduit that protects wiring and bends around corners without fittings.',
    desc: [
      'PARKAN Flexible Pipe is a corrugated PVC conduit. The ribbed wall lets it bend by hand around beams and corners while it keeps its round shape, so wires still pull through easily.',
      'It is used for concealed wiring in walls and slabs, false ceilings, and short flexible runs between rigid conduit and equipment.',
    ],
    features: ['Bends by hand, with no elbows or fittings', 'Ribbed wall resists crushing', 'Smooth inside for an easy wire pull', 'Light and quick to install', 'Supplied in 50 m coils'],
    specs: [['Material', 'PVC, corrugated'], ['Diameters', '20, 25, 32, 40 and 50 mm'], ['Colour', 'White'], ['Coil length', '50 m'], ['Use', 'Concealed and surface wiring']],
    certs: [],
  },
  {
    slug: 'modular-boxes', c: 'box', name: 'Surface & Modular Boxes', code: 'PK-MBX',
    img: '/media/modular-boxes.webp', alt: 'PARKAN surface box and concealed modular box',
    spec: '1 to 18 module · Surface and concealed',
    summary: 'PVC boxes that house switches, sockets and modular plates, for surface-mounted and concealed wiring.',
    desc: [
      'PARKAN boxes come in two kinds. Surface boxes mount on the wall, for surface wiring and renovation work. Concealed (flush) modular boxes sit inside the wall and take modular switch plates.',
      'Knock-outs on every side let conduit enter from any direction, and fixing inserts hold the plate screws firmly.',
    ],
    features: ['Surface and concealed (flush) types', 'Sizes from 1 to 18 modules', 'Knock-outs on every side for conduit entry', 'Fixing inserts hold plate screws firmly', 'Fits common modular switch plates'],
    specs: [['Material', 'PVC'], ['Types', 'Surface, concealed (flush)'], ['Sizes', '1, 2, 3, 4, 6, 8, 12, 16 and 18 module'], ['Conduit entry', 'Knock-outs for 20 and 25 mm conduit'], ['Colour', 'White'], ['Standard', 'IS 14772']],
    certs: [['IS 14772', 'Enclosures for accessories for household and similar fixed electrical installations.']],
  },
].map(p => ({ ...p, cat: categories.find(c => c[0] === p.c)[1] }))

// product page for a path such as /products/aluminium-wire
export const productAt = path => products.find(p => productPath(p) === path.replace(/\/+$/, ''))
