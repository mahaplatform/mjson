import * as utils from '../utils'

export default function Menu(website, rulesets, styles, block) {
  if(block.content.show_title) {
    utils.applyText(rulesets, `.${block.id} .block-menu-title`, styles.title_text)
    utils.applyBorder(rulesets, `.${block.id} .block-menu-title`, styles.title_border)
  }
  if(block.content.separator && block.content.separator.length > 0) {
    utils.applyRule(rulesets.all.standard, `.${block.id} .block-menu-item:after`, {
      content: `'${block.content.separator}'`,
      color: block.styles.separatorColor,
      margin: '0 5px'
    })
  }
  if(styles.linkText) {
    utils.applyText(rulesets, `.${block.id} a`, styles.linkText)
  }
  if(styles.activeText) {
    utils.applyText(rulesets, `.${block.id} a.active`, styles.activeText)
  }
  if(block.content.layout === 'slidein') {
    utils.applyColor(rulesets, `.${block.id} .block-menu-icon`, styles.iconColor)
    utils.applyPadding(rulesets, `.${block.id} .block-menu-icon`, styles.iconPadding)
    utils.applyBackground(rulesets, `.${block.id} .block-menu-icon`, styles.iconBackground)
    utils.applyFilter(rulesets, `.${block.id} .block-menu-icon`, styles.iconFilters)
    utils.applyBackground(rulesets, `.${block.id}.block-menu-panel`, styles.panelBackground)
  }
  if(styles.linkPadding) utils.applyPadding(rulesets, `.${block.id} a`, styles.linkPadding)
}
