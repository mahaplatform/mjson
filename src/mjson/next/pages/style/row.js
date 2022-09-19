import * as utils from './utils'
import Entity from './entity'

const getRowAlignment = (align) => {
  if(align === 'left') return { margin: '0 auto 0 0' }
  if(align === 'center') return { margin: '0 auto' }
  if(align === 'right') return { margin: '0 0 0 auto' }
}

const getColumnAlignment = (config) => {
  const align = config ? config.columnAlignment : 'center'
  if(align === 'left') return { justifyContent: 'flex-start' }
  if(align === 'center') return { justifyContent: 'center' }
  if(align === 'right') return { justifyContent: 'flex-end' }
}

const getCustomWidth = (config) => {
  if(!config) return {}
  const { rowAlignment, rowWidth } = config
  if(!rowWidth) return {}
  const align = rowAlignment || 'center'
  return {
    flex: `0 0 ${rowWidth}`,
    ...getRowAlignment(align)
  }
}

const getGutter = (gutterWidth) => {
  if(!gutterWidth) return {}
  return gutterWidth > 0 ? { padding: `0 ${gutterWidth}` } : {}
}

const applyGutter = (ruleset, namespace, gutterWidth) => {
  utils.applyRule(ruleset.standard, namespace, getGutter(gutterWidth))
}

const getOverflow = (overflow) => {
  if(!overflow) return { flexWrap: 'wrap'}
  if(overflow === 'hidden') return { overflow: 'hidden' }
  if(overflow === 'horizontal') return { overflowX: 'scroll' }
  if(overflow === 'vertical') return { overflowY: 'scroll' }
}

const applyOverflow = (ruleset, namespace, overflow) => {
  utils.applyRule(ruleset.standard, namespace, getOverflow(overflow))
}

const applyRowStyles = (rules, row, styles) => {
  utils.applyBackground(rules, `.${row.id}`, styles.background)
  utils.applyMargin(rules, `.${row.id}`, styles.margin)
  utils.applyRule(rules.desktop.standard, `.${row.id} > .row-position`, getCustomWidth(styles))
  utils.applyBoxShadow(rules, `.${row.id} > .row-position > .row`, styles.boxShadow)
  utils.applyAnimation(rules, `.${row.id} > .row-position > .row`, styles.animation)
  utils.applyBorder(rules, `.${row.id} > .row-position > .row`, styles.border)
  utils.applyRadius(rules, `.${row.id} > .row-position > .row`, styles.radius)
  utils.applyPadding(rules, `.${row.id} > .row-position > .row`, styles.padding)
  utils.applySizing(rules, `.${row.id} > .row-position > .row`, styles)
  utils.applyTextAlign(rules, `.${row.id} > .row-position > .row`, styles.textAlign)
  utils.applyFilter(rules, `.${row.id} > .row-position > .row`, styles.filters)
  utils.applyVisibility(rules, `.${row.id} > .row-position > .row`, styles.visibility)

  utils.applyTransform(rules, `.${row.id} > .row-position > .row`, styles.transform)
  utils.applyTransitions(rules, `.${row.id} > .row-position > .row`, styles.transitions)

  utils.applyResponsiveRule(rules, `.${row.id} > .row-position > .row`, styles.gutterWidth, applyGutter)
  utils.applyResponsiveRule(rules, `.${row.id} > .row-position > .row > .row-box > .row-columns`, styles.overflow || null, applyOverflow)
  utils.applyRule(rules.all.standard, `.${row.id} > .row-position > .row > .row-box > .row-columns`, getColumnAlignment(styles))
}

export default function Row(website, rules, row) {

  applyRowStyles(rules, row, row.styles)

  rules = row.content.children.reduce((rules, child, cindex) => {
    return Entity(website, rules, child, { layout: row.content.layout, index: cindex })
  }, rules)

  return rules

}
