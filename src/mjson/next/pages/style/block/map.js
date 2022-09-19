import * as utils from '../utils'

const sizes = ['h1','h2','p']

const getRatio = (settings) => {
  const ratio = settings.ratio || 1
  return `calc(100% / ${ratio})`
}

export default function MapBlock(website, rulesets, styles, block) {
  utils.applyRule(rulesets.all.standard, `.${block.id} .block-map-picture`, { paddingBottom: getRatio(config.settings) })
  if(block.settings.hasCaption) {
    utils.applyCaptionLayout(rulesets, `.${block.id} .block-map`, styles.captionLayout)
    utils.applyPadding(rulesets, `.${block.id} .block-map-caption`, styles.captionPadding)
    sizes.map(size => {
      utils.applyFontFamily(rulesets, `.${block.id} ${size}`, styles[`caption${size}FontFamily`])
      utils.applyFontSize(rulesets, `.${block.id} ${size}`, styles[`caption${size}FontSize`])
      utils.applyColor(rulesets, `.${block.id} ${size}`, styles[`caption${size}Color`])
      utils.applyFormat(rulesets, `.${block.id} ${size}`, styles[`caption${size}Format`])
      utils.applyTextAlign(rulesets, `.${block.id} ${size}`, styles[`caption${size}TextAlign`])
    })
  }

}
