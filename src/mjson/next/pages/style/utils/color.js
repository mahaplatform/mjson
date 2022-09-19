import * as utils from './utils'

export const getBackgroundColor = (ruleset, selector, backgroundColor) => {
  utils.applyRule(ruleset.standard, selector, { backgroundColor: utils.toColor(backgroundColor) })
}

export const getColor = (ruleset, selector, color) => {
  utils.applyRule(ruleset.standard, selector, { color: utils.toColor(color) })
}

export const appyBackgroundColor = (rulesets, selector, backgroundColor) => {
  if(backgroundColor) utils.applyResponsiveRule(rulesets, selector, backgroundColor, getBackgroundColor)
}

export const applyColor = (rulesets, selector, color) => {
  if(color) utils.applyResponsiveRule(rulesets, selector, color, getColor)
}
