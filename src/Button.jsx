// The one button for the whole site. Styles and tokens: the "button system" block in index.css.
// variant: primary | secondary | ghost | accent | link   size: sm | md | lg
// Renders <a> when given href, <button> otherwise; `as` overrides (e.g. "span" inside a card that is already a link).
const Spin = () => <span className="btn-spin" aria-hidden="true"></span>

export default function Button({ variant = 'primary', size = 'md', icon, iconRight, iconOnly, fullWidth, loading, disabled, as, className, children, ...rest }) {
  const Tag = as ?? (rest.href ? 'a' : 'button')
  const off = disabled || loading
  const state = Tag === 'button' ? { disabled: off } : off ? { 'aria-disabled': true, tabIndex: -1, href: undefined } : {}
  const cls = ['btn', 'btn-' + variant, 'btn-' + size, iconOnly && 'btn-icon', fullWidth && 'btn-full', loading && 'is-loading', className].filter(Boolean).join(' ')
  // loading: the spinner takes an icon's slot, or overlays hidden text, so the width never changes
  const overlay = loading && !icon && !iconRight
  return (
    <Tag type={Tag === 'button' ? 'button' : undefined} {...rest} {...state} className={cls} aria-busy={loading || undefined}>
      {icon && <span className="btn-l">{loading ? <Spin /> : icon}</span>}
      {overlay ? <><span className="btn-hide">{children}</span><Spin /></> : children}
      {iconRight && <span className="btn-r">{loading && !icon ? <Spin /> : iconRight}</span>}
    </Tag>
  )
}

// Square icon-only button, same heights as Button. Needs a label unless it sits inside another link (pass aria-hidden).
export const IconButton = ({ icon, label, variant = 'secondary', ...p }) => <Button variant={variant} iconOnly aria-label={label} {...p}>{icon}</Button>
