import * as utils from './utils'
import Entity from './entity'

const blocks = ['h1','h2','h3','h4','h5','p','li']

export default function Document(website, rules, entity) {

  blocks.map(size => {
    utils.applyText(rules, `.page ${size}`, website.styles[size])
    utils.applyText(rules, `.page ${size} a`, website.styles.a)
  })

  utils.applyText(rules, '.block-menu a', website.styles.a)

  utils.applyBackground(rules, '.block-button', website.styles.buttonBackground)
  utils.applyBorder(rules, '.block-button', website.styles.buttonBorder)
  utils.applyText(rules, '.block-button', website.styles.buttonText)
  utils.applyRadius(rules, '.block-button', website.styles.buttonRadius)
  utils.applyPadding(rules, '.block-button', website.styles.buttonPadding)
  utils.applyText(rules, '.block-button a', website.styles.buttonText)
  utils.applyTransitions(rules, '.block-button', website.styles.buttonTransitions)

  website.styles.colors.map(color => {
    utils.addVariable(rules, color.code, color.hex)
  })

  website.styles.fonts.map(font => {
    utils.addFont(rules, font)
    utils.addVariable(rules, font.code, font.font.family)
  })

  return Entity(website, rules, entity)

}
