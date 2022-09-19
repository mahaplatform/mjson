import { applyResponsiveRule, applyRule } from './utils'

const getVisibility = (ruleset, selector, visibility) => {
  if(visibility !== 'hide') return
  applyRule(ruleset.standard, selector, { display: 'none' })
}

const getOverflow = (ruleset, selector, overflow) => {
  if(overflow === 'show') return
  if(overflow === 'hidden') return applyRule(ruleset.standard, selector, { overflow: 'hidden' })
  if(overflow === 'horizontal') return applyRule(ruleset.standard, selector, { maxWidth: '100vw', overflowX: 'scroll', whiteSpace: 'nowrap' })
  if(overflow === 'vertical') return applyRule(ruleset.standard, selector, { overflowY: 'scroll' })
}

export const applyVisibility = (rulesets, selector, visibility) => {
  if(visibility) applyResponsiveRule(rulesets, selector, visibility, getVisibility)
}

export const applyOverflow = (rulesets, selector, overflow) => {
  if(overflow) applyResponsiveRule(rulesets, selector, overflow, getOverflow)
}
