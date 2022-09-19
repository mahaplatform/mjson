import * as utils from './utils'
import Entity from './entity'

const getBlockAlignment = (config) => {
  const align = config ? config.blockAlignment : 'top'
  if(align === 'top') return { marginTop: 0 }
  if(align === 'middle') return { marginTop: 'auto', marginBottom: 'auto' }
  if(align === 'bottom') return { marginTop: 'auto' }
}

const getBasis = (cols) => {
  if(cols === 1) return 'calc(100%/12)'
  if(cols === 2) return 'calc(100%/6)'
  if(cols === 3) return '25%'
  if(cols === 4) return 'calc(100%/3)'
  if(cols === 6) return '50%'
  if(cols === 9) return '75%'
  if(cols === 12) return '100%'
  return `calc(100%*(${cols}/12))`
}

const getColumn = (layout, cindex) => {
  if(!layout) return { flex: 1 }
  const index = cindex % layout.length
  return { flex: `0 0 ${getBasis(layout[index])}` }
}

const applyLayout = (ruleset, namespace, layout, cindex) => {
  utils.applyRule(ruleset.standard, namespace, getColumn(layout, cindex))
}

export default function Column(website, rules, column, extra = {}) {

  const { layout, index } = extra

  const styles = column.styles || {}

  utils.applyResponsiveRule(rules, `.${column.id}`, layout, applyLayout, index)

  utils.applyMargin(rules, `.${column.id} > .column`, styles.margin)
  utils.applyBorder(rules, `.${column.id} > .column`, styles.border)
  utils.applyPadding(rules, `.${column.id} > .column`, styles.padding)
  utils.applyAnimation(rules, `.${column.id} > .column`, styles.animation)
  utils.applyBackground(rules, `.${column.id} > .column`, styles.background)
  utils.applyRadius(rules, `.${column.id} > .column`, styles.radius)
  utils.applyBoxShadow(rules, `.${column.id} > .column`, styles.boxShadow)
  utils.applySizing(rules, `.${column.id} > .column`, styles)
  utils.applyTextAlign(rules, `.${column.id} > .column`, styles.textAlign)
  utils.applyFilter(rules, `.${column.id} > .column`, styles.filters)
  utils.applyVisibility(rules, `.${column.id}`, styles.visibility)
  utils.applyOverflow(rules, `.${column.id} > .column`, styles.overflow)
  utils.applyTransform(rules, `.${column.id} > .column`, styles.transform)
  utils.applyTransitions(rules, `.${column.id} > .column`, styles.transitions)

  utils.applyRule(rules.all.standard, `.${column.id} .column-position`, getBlockAlignment(styles))

  if(column.content.children) {
    rules = column.content.children.reduce((config, child) => {
      return Entity(website, config, child)
    }, rules)
  }

  return rules

}
