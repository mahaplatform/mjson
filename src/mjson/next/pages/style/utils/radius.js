import { applyRule, applyResponsiveRule } from './utils'

const getRadius = (ruleset, selector, borderRadius) => {
  applyRule(ruleset.standard, selector, {
    borderRadius,
    overflow: 'hidden'
  })
}

export const applyRadius = (rulesets, selector, radius) => {
  if(!radius) return
  applyResponsiveRule(rulesets, selector, radius, getRadius)
}
