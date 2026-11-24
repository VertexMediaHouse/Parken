// Section tabs under a page hero. Desktop: a row of tabs. Phone (CSS swaps them): one full-width picker,
// because four long labels never fit a 320-390px row.
// items: [{ label, href }] for links (current page = href === current), or [{ label, on, pick }] for in-page filters.
import { CaretDown } from '@phosphor-icons/react'
import Button from './Button.jsx'

export const COMPANY = [['Overview', '/company'], ['About Us', '/about'], ['Our Leadership Team', '/leadership'], ['Our Branches', '/branches']].map(([label, href]) => ({ label, href }))
export const VERTICALS = [['Overview', '/verticals'], ['Trading & Distribution', '/trading'], ['Infrastructure & Projects', '/infrastructure'], ['In-house Brand', '/in-house-brand']].map(([label, href]) => ({ label, href }))

export default function SubNav({ label, kicker, items, current, variant = 'ghost' }) {
  const isOn = i => i.href ? i.href === current : i.on
  const sel = Math.max(0, items.findIndex(isOn))
  const go = e => { const i = items[e.target.value]; i.href ? location.assign(i.href) : i.pick() }
  return (
    <nav className="subnav" aria-label={label}>
      <div className="wrap">
        {items.map(i => <Button key={i.label} variant={variant} size="sm" href={i.href} onClick={i.pick} className={isOn(i) ? 'on' : undefined}
          aria-current={i.href && isOn(i) ? 'page' : undefined} aria-pressed={i.href ? undefined : !!i.on}>{i.label}</Button>)}
      </div>
      <label className="subpick">
        <span className="subpick-k">{kicker}</span>
        <select value={sel} onChange={go} aria-label={label}>
          {items.map((i, n) => <option key={i.label} value={n}>{i.label}</option>)}
        </select>
        <CaretDown className="subpick-c" size={18} weight="bold" aria-hidden="true" />
      </label>
    </nav>
  )
}
