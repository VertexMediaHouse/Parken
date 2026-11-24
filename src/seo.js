// Per-route <title>/description, written into each prerendered page at build time.
import { productAt } from './products.js'

export const SITE_URL = 'https://www.parkangroup.com' // TODO: confirm the live domain

const M = {
  Main: ['Parkan Group | Electrical distribution, infrastructure and the PARKAN brand', 'Parkan Group supplies 1,700+ dealers from 13 branches across Karnataka, Goa and Gujarat, delivers electrical works for 50+ government projects, and makes the PARKAN range.'],
  Company: ['Company | Parkan Group', 'Parkan Enterprises Limited: 23 years of electrical and infrastructure solutions, 13 branches in three states, part of the Pooja Group of Companies.'],
  About: ['About Us | Parkan Group', 'From a single store in Hubballi in 2003 to one of the region\'s largest electrical distributors, a government projects partner and the PARKAN brand.'],
  Leadership: ['Our Leadership Team | Parkan Group', 'The directors, advisors and teams behind Parkan Group across Karnataka, Goa and Gujarat.'],
  Branches: ['Our Branches | Parkan Group', '13 Parkan branches across Karnataka, Goa and Gujarat, with the head office in Hubballi.'],
  Verticals: ['Verticals | Parkan Group', 'Trading & Distribution, Infrastructure & Projects and the PARKAN in-house brand: three businesses that strengthen each other.'],
  Trading: ['Trading & Distribution | Parkan Group', 'Wholesale electrical products, lighting, appliances and specialised cables from India\'s leading brands, supplied through 13 branches to 1,700+ dealers.'],
  Infrastructure: ['Infrastructure & Projects | Parkan Group', 'Electrical infrastructure for government hospitals, public lighting and smart-city works: 50+ projects and 4,100+ streetlights installed.'],
  Manufacturing: ['PARKAN In-house Brand | Parkan Group', 'PARKAN wires, cable accessories, conduits and boxes, made through trusted contract manufacturing and backed by 23+ years of trade.'],
  Products: ['Our Products | Parkan Group', 'Browse PARKAN copper flexible wire, submersible wire, cable glands, terminals, ties, clips, flexible pipe and modular boxes.'],
  Contact: ['Contact Us | Parkan Group', 'Send an enquiry, request bulk pricing or book a meeting with Parkan Group. Call +91 92743 37813.'],
  Privacy: ['Privacy Policy | Parkan Group', 'Privacy policy for Parkan Enterprises Limited: how we collect, use, and protect your information across our website and services.'],
  Terms: ['Terms and Conditions | Parkan Group', 'Terms and conditions for Parkan Enterprises Limited: guidelines, policies, and conditions governing the use of our website and services.'],
  Admin: ['Admin | Parkan Group', 'Content admin.'],
}

export function headTags(name, path) {
  const p = name === 'ProductDetail' && productAt(path)
  const [title, description] = p ? [`PARKAN ${p.name} | Parkan Group`, p.summary] : M[name]
  const url = SITE_URL + path
  const e = s => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const tags = [
    `<title>${e(title)}</title>`,
    `<meta name="description" content="${e(description)}">`,
    `<link rel="canonical" href="${e(url)}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:site_name" content="Parkan Group">`,
    `<meta property="og:title" content="${e(title)}">`,
    `<meta property="og:description" content="${e(description)}">`,
    `<meta property="og:url" content="${e(url)}">`,
    `<meta property="og:image" content="${SITE_URL}/media/og.jpg">`,
    `<meta name="twitter:card" content="summary_large_image">`,
  ]
  if (name === 'Admin') tags.push('<meta name="robots" content="noindex">')
  if (name === 'Main') tags.push(`<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'Organization',
    name: 'Parkan Enterprises Limited', alternateName: 'Parkan Group', url: SITE_URL, logo: SITE_URL + '/media/logo.png',
    email: 'parkanenterprisesltd@gmail.com', telephone: '+91 92743 37813', foundingDate: '2003',
    address: { '@type': 'PostalAddress', addressLocality: 'Hubballi', addressRegion: 'Karnataka', addressCountry: 'IN' },
  })}</script>`)
  return tags.join('\n    ')
}
