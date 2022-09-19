import { applyResponsiveRule, applyRule, withUnits } from './utils'

const getFilters = ({ hue, saturation, brightness, contrast, invert, sepia, opacity, blur }) => {
  const filters = []
  if(hue) filters.push(`hue-rotate(${withUnits(hue, 'deg')})`)
  if(saturation) filters.push(`saturate(${withUnits(saturation, '%')})`)
  if(brightness) filters.push(`brightness(${withUnits(brightness, '%')})`)
  if(contrast) filters.push(`contrast(${withUnits(contrast, '%')})`)
  if(invert) filters.push(`invert(${withUnits(invert, '%')})`)
  if(sepia) filters.push(`sepia(${withUnits(sepia, '%')})`)
  if(opacity) filters.push(`opacity(${withUnits(opacity, '%')})`)
  if(blur) filters.push(`blur(${withUnits(blur, 'px')})`)
  return filters.join(' ')
}

export const getFilter = (rulesets, selector, filter) => {
  if(!filter) return
  if(filter) applyRule(rulesets.standard, selector, { filter: getFilters(filter) })
  if(filter.blendMode) applyRule(rulesets.standard, selector, { mixBlendMode: filter.blendMode })
}

export const applyFilter = (rulesets, selector, filter) => {
  if(filter) applyResponsiveRule(rulesets, selector, filter, getFilter)
}
