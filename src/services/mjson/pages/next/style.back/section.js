import * as utils from './utils'
import Entity from './entity'

export default function Section(website, rules, section) {

  const styles = section.styles || {}

  utils.applyMargin(rules, `.${section.id} .section`, styles.margin)
  utils.applyBorder(rules, `.${section.id} .section`, styles.border)
  utils.applyPadding(rules, `.${section.id} .section`, styles.padding)
  utils.applyAnimation(rules, `.${section.id} .section`, styles.animation)
  utils.applyBackground(rules, `.${section.id} .section`, styles.background)
  utils.applyRadius(rules, `.${section.id} .section`, styles.radius)
  utils.applyBoxShadow(rules, `.${section.id} .section`, styles.boxShadow)
  utils.applySizing(rules, `.${section.id} .section`, styles)
  utils.applyTextAlign(rules, `.${section.id} .section`, styles.textAlign)
  utils.applyFilter(rules, `.${section.id} .section`, styles.filters)
  utils.applyVisibility(rules, `.${section.id} .section`, styles.visibility)
  utils.applyOverflow(rules, `.${section.id} .section`, styles.overflow)
  utils.applyTransform(rules, `.${section.id} .section`, styles.transform)
  utils.applyTransitions(rules, `.${section.id} .section`, styles.transitions)

  if(section.content && section.content.children) {
    rules = section.content.children.reduce((config, child) => {
      return Entity(website, config, child)
    }, rules)
  }

  return rules

}
