import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import routes from './routes.json'
import { startMotion } from './motion.js'

const pages = import.meta.glob('./pages/*.jsx') // one chunk per page
const name = Object.keys(routes).find(n => routes[n] === location.pathname.replace(/\/+$/, '') || (n === 'Main' && location.pathname === '/'))
const Page = (await pages[`./pages/${name ?? 'Main'}.jsx`]()).default

const el = document.getElementById('root')
// prerendered pages hydrate; the dev server renders from scratch
if (el.firstElementChild) hydrateRoot(el, <Page />)
else createRoot(el).render(<Page />)
requestAnimationFrame(startMotion)
