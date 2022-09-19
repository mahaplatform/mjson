import { applyRule, applyResponsiveRule } from './utils'

const applyHeight = (ruleset, selector, value, property) => {
  if(!value) return {}
  applyRule(ruleset.standard, selector, {
    [property]: value
  })
}

export const applySizing = (rulesets, selector, sizing) => {
  if(!sizing) return
  applyResponsiveRule(rulesets, selector, sizing.width, applyHeight, 'width')
  applyResponsiveRule(rulesets, selector, sizing.maxWidth, applyHeight, 'maxWidth')
  applyResponsiveRule(rulesets, selector, sizing.height, applyHeight, 'height')
  applyResponsiveRule(rulesets, selector, sizing.minHeight, applyHeight, 'minHeight')
  applyResponsiveRule(rulesets, selector, sizing.maxHeight, applyHeight, 'maxHeight')
}
