import * as utils from '../utils'

export default function SocialBlock(website, rulesets, styles, block) {
  utils.applyRule(rulesets.all.standard, `.${block.id} .block-social-link .fa`, { fontSize: utils.withUnits(styles.iconSize,'px') })
  utils.applyColor(rulesets, `.${block.id} .block-social-link a`, styles.iconColor)
  utils.applyColor(rulesets, `.${block.id} .block-social-link a:hover`, styles.iconColor)
  utils.applyBorder(rulesets, `.${block.id} .block-social-link a`, styles.iconBorder)
  utils.applyRadius(rulesets, `.${block.id} .block-social-link a`, styles.iconRadius)
  utils.applyBackground(rulesets, `.${block.id} .block-social-link a`, styles.iconBackground)
  utils.applyPadding(rulesets, `.${block.id} .block-social-link a`, styles.iconPadding)

}
