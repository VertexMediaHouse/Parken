import { createRoot, hydrateRoot } from 'react-dom/client'
import { IconContext } from '@phosphor-icons/react'
import './index.css'
import routes from './routes.json'
import { startMotion } from './motion.js'
import { productAt } from './products.js'

const pages = import.meta.glob('./pages/*.jsx') // one chunk per page
const ALIASES = { '/privacy': 'Privacy', '/terms': 'Terms' }
const pathNorm = location.pathname.replace(/\/+$/, '')
const name = productAt(location.pathname) ? 'ProductDetail' : (ALIASES[pathNorm] || Object.keys(routes).find(n => routes[n] === pathNorm || (n === 'Main' && location.pathname === '/')))
const Page = (await pages[`./pages/${name ?? 'Main'}.jsx`]()).default

const app = <IconContext.Provider value={{ weight: 'duotone' }}><Page /></IconContext.Provider>
const el = document.getElementById('root')
// prerendered pages hydrate; the dev server renders from scratch
if (el.firstElementChild) hydrateRoot(el, app)
else createRoot(el).render(app)
requestAnimationFrame(startMotion)
