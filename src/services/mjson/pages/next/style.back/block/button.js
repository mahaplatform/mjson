import * as utils from '../utils'

export default function ButtonBlock(website, rulesets, styles, block) {
  if(styles.buttonText) {
    utils.applyText(rulesets, `.${block.id} .block-button`, styles.buttonText)
  }
  utils.applyBackground(rulesets, `.${block.id} .block-button`, styles.buttonBackground)
  utils.applyPadding(rulesets, `.${block.id} .block-button`, styles.buttonPadding)
  utils.applyBorder(rulesets, `.${block.id} .block-button`, styles.buttonBorder)
  utils.applyRadius(rulesets, `.${block.id} .block-button`, styles.buttonRadius)
  utils.applyAnimation(rulesets, `.${block.id} .block-button`, styles.animation)
  utils.applyTransitions(rulesets, `.${block.id} .block-button`, styles.transitions)
}
