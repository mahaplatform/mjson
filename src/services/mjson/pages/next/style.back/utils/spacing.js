import * as utils from './utils'

const getMargin = (ruleset, selector, margin) => {
  if(margin) utils.applyRule(ruleset.standard, selector, { margin })
}

const getPadding = (ruleset, selector, padding) => {
  if(padding) utils.applyRule(ruleset.standard, selector, { padding })
}

export const getMarginLeft = (ruleset, selector, marginLeft) => {
  if(marginLeft) utils.applyRule(ruleset.standard, selector, { marginLeft })
}

export const applyMargin = (rulesets, selector, margin) => {
  if(margin) utils.applyResponsiveRule(rulesets, selector, margin, getMargin)
}

export const applyPadding = (rulesets, selector, padding) => {
  if(padding) utils.applyResponsiveRule(rulesets, selector, padding, getPadding)
}

export const applyMarginLeft = (rulesets, selector, marginLeft) => {
  if(marginLeft) utils.applyResponsiveRule(rulesets, selector, marginLeft, getMarginLeft)
}
