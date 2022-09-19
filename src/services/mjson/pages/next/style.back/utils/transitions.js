import { applyResponsiveRule, applyRule } from './utils'

const getTransitions = (ruleset, selector, transitions) => {
  const { duration, delay, curve } = transitions
  applyRule(ruleset.standard, selector, {
    transitionProperty: 'all',
    ...duration ? { transitionDuration: duration } : {},
    ...delay ? { transitionDelay: delay } : {},
    ...curve ? { transitionTimingFunction: curve } : {}
  })
}

export const applyTransitions = (rulesets, selector, transitions) => {
  if(transitions) applyResponsiveRule(rulesets, selector, transitions, getTransitions)
}
