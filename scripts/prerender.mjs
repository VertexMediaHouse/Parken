// Writes one static HTML file per route (dist/<path>/index.html) with its own <head> tags.
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { pathToFileURL } from 'node:url'

const { render, routes, SITE_URL } = await import(pathToFileURL('dist-ssr/entry-server.js').href)
const tpl = readFileSync('dist/index.html', 'utf8')

for (const [name, path] of Object.entries(routes)) {
  const { html, head } = render(name, path)
  const out = tpl.replace(/<!--head-->[\s\S]*?<!--\/head-->/, head).replace('<!--app-->', html)
  const dir = path === '/' ? 'dist' : `dist${path}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(`${dir}/index.html`, out)
  if (path !== '/') writeFileSync(`dist${path}.html`, out) // hosts that map /about to about.html
}

const urls = Object.entries(routes).filter(([n]) => n !== 'Admin').map(([, p]) => `  <url><loc>${SITE_URL}${p}</loc></url>`)
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`)
writeFileSync('dist/robots.txt', `User-agent: *\nDisallow: /admin\nSitemap: ${SITE_URL}/sitemap.xml\n`)
rmSync('dist-ssr', { recursive: true, force: true })
console.log(`prerendered ${Object.keys(routes).length} routes`)
