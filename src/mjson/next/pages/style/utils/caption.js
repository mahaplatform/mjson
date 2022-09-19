import * as utils from './utils'

const getImageAlignment = ({ align, layout }) => {
  if(align === 'top') return { flexDirection: 'column' }
  return { flexDirection: 'row' }
}

const getPictureAlignment = ({ align, layout }) => {
  if(align === 'top') return {}
  return align === 'left' ? { order: 1, flex: layout[0] } : { order: 2, flex: layout[layout.length - 1] }
}

const getCaptionAlignment = ({ align, layout }) => {
  if(align === 'top') return {}
  return align === 'left' ? { order: 2, flex: layout[layout.length - 1] } : { order: 1, flex: layout[0] }
}

const getCaptionLayout = (ruleset, selector, captionLayout) => {
  const align = captionLayout ? captionLayout.align : 'top'
  const layout = captionLayout ? captionLayout.layout : [12]
  utils.applyRule(ruleset.standard, `${selector}`, getImageAlignment({ align, layout }))
  utils.applyRule(ruleset.standard, `${selector}-picture`, getPictureAlignment({ align, layout }))
  utils.applyRule(ruleset.standard, `${selector}-caption`, getCaptionAlignment({ align, layout }))
}

export const applyCaptionLayout = (rulesets, selector, captionLayout) => {
  if(!captionLayout) return
  utils.applyResponsiveRule(rulesets, selector, captionLayout, getCaptionLayout)
}
