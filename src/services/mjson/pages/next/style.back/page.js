import * as utils from './utils'
import Entity from './entity'

export default function Page(website, rules, page) {

  const styles = page.styles || {}

  utils.applyBorder(rules, `.${page.id}`, styles.border)
  utils.applyPadding(rules, `.${page.id} .page`, styles.padding)
  utils.applyBackground(rules, `.${page.id}`, styles.background)
  utils.applyBoxShadow(rules, `.${page.id}`, styles.boxShadow)
  utils.applyFilter(rules, `.${page.id}`, styles.filters)

  page.content.children.reduce((rules, child) => {
    return Entity(website, rules, child)
  }, rules)

  return rules

}
