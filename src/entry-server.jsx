import { renderToString } from 'react-dom/server'
import { headTags } from './seo.js'
export { SITE_URL } from './seo.js'
export { default as routes } from './routes.json'

const pages = import.meta.glob('./pages/*.jsx', { eager: true })

export function render(name, path) {
  globalThis.__path = path // Header reads this for the active nav item
  const Page = pages[`./pages/${name}.jsx`].default
  return { html: renderToString(<Page />), head: headTags(name, path) }
}
