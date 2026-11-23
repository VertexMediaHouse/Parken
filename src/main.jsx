import { createRoot, hydrateRoot } from 'react-dom/client'
import { IconContext } from '@phosphor-icons/react'
import './index.css'
import routes from './routes.json'
import { startMotion } from './motion.js'

const pages = import.meta.glob('./pages/*.jsx') // one chunk per page
const name = Object.keys(routes).find(n => routes[n] === location.pathname.replace(/\/+$/, '') || (n === 'Main' && location.pathname === '/'))
const Page = (await pages[`./pages/${name ?? 'Main'}.jsx`]()).default

const app = <IconContext.Provider value={{ weight: 'duotone' }}><Page /></IconContext.Provider>
const el = document.getElementById('root')
// prerendered pages hydrate; the dev server renders from scratch
if (el.firstElementChild) hydrateRoot(el, app)
else createRoot(el).render(app)
requestAnimationFrame(startMotion)
