import { applyRule, toColor } from './utils'

export const getBoxShadow = (boxShadow) => {
  const { type, offsetX, offsetY, blur, spread, color } = boxShadow
  if(type === 'none') return 'none'
  const parts = []
  if(type === 'inner') parts.push('inset')
  parts.push(offsetX)
  parts.push(offsetY)
  if(blur !== 0) parts.push(blur)
  if(spread !== 0) parts.push(spread)
  parts.push(toColor(color))
  return parts.join(' ')
}

export const applyBoxShadow = (rulesets, selector, boxShadow) => {
  if(!boxShadow) return
  applyRule(rulesets.all.standard, selector, { boxShadow: getBoxShadow(boxShadow) })
}
