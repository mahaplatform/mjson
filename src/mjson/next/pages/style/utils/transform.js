import { applyResponsiveRule, applyRule } from './utils'

const getTransform = (ruleset, selector, transform) => {
  if(!transform) return
  const { scale, skew, rotate, translate } = transform
  const transforms = []
  if(scale) {
    const { combined, x, y } = scale
    if(combined) transforms.push(`scale(${combined},${combined})`)
    if(x) transforms.push(`scaleX(${x})`)
    if(y) transforms.push(`scaleY(${y})`)
  }
  if(skew) {
    const { combined, x, y } = translate
    if(combined) transforms.push(`skew(${combined},${combined})`)
    if(x) transforms.push(`skewX(${x})`)
    if(y) transforms.push(`skewY(${y})`)
  }
  if(translate) {
    const { combined, x, y } = translate
    if(combined) transforms.push(`translate(${combined},${combined})`)
    if(x) transforms.push(`translateX(${x})`)
    if(y) transforms.push(`translateY(${y})`)
  }
  if(rotate) {
    const { x, y, z } = rotate
    if(x) transforms.push(`rotate3d(1, 0, 0, ${x})`)
    if(y) transforms.push(`rotate3d(0, 1, 0, ${y})`)
    if(z) transforms.push(`rotate3d(0, 0, 1, ${z})`)
  }
  applyRule(ruleset.standard, selector, {
    transform: transforms.join(' ')
  })
}

export const applyTransform = (rulesets, selector, transform) => {
  if(transform) applyResponsiveRule(rulesets, selector, transform, getTransform)
}
