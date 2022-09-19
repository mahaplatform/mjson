import { applyRule, applyResponsiveRule, toColor } from './utils'

const getBorder = (ruleset, selector, border) => {
  const { width, color, style } = border
  const type = border.type === 'full' ? '' : _.capitalize(border.type)
  applyRule(ruleset.standard, selector, {
    [`border${type}`]: `${width} ${style} ${toColor(color)}`
  })
}

export const applyBorder = (rulesets, selector, border) => {
  if(!border) return
  applyResponsiveRule(rulesets, selector, border, getBorder)
}
