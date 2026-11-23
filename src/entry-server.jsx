import { renderToString } from 'react-dom/server'
import { IconContext } from '@phosphor-icons/react'
import { headTags } from './seo.js'
export { SITE_URL } from './seo.js'
import routes from './routes.json'
import { productPath, products } from './products.js'

// every prerendered page as [page name, path]: the routes plus one page per product
export const pageList = [...Object.entries(routes), ...products.map(p => ['ProductDetail', productPath(p)])]

const pages = import.meta.glob('./pages/*.jsx', { eager: true })

export function render(name, path) {
  globalThis.__path = path // Header reads this for the active nav item
  const Page = pages[`./pages/${name}.jsx`].default
  return { html: renderToString(<IconContext.Provider value={{ weight: 'duotone' }}><Page /></IconContext.Provider>), head: headTags(name, path) }
}
