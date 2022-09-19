import * as utils from '../utils'

const sizes = ['h1','h2','p']

export default function SpotlightBlock(website, rulesets, styles, block) {
  utils.applyPadding(rulesets, `.${block.id} .block-spotlight-picture`, styles.imagePadding)
  utils.applyBorder(rulesets, `.${block.id} .block-spotlight-picture`, styles.imageBorder)
  utils.applyRadius(rulesets, `.${block.id} .block-spotlight-picture`, styles.imageRadius)
  utils.applyFilter(rulesets, `.${block.id} .block-spotlight-picture`, styles.imageFilters)
  utils.applyPadding(rulesets, `.${block.id} .block-spotlight-caption`, styles.captionPadding)
  utils.applyColor(rulesets, `.${block.id} .block-spotlight-caption h2`, styles.captionColor)
  utils.applyColor(rulesets, `.${block.id} .block-spotlight-caption p`, styles.captionColor)
  sizes.map(size => {
    utils.applyText(rulesets, `.${block.id} ${size}`, styles[`caption${size}`])
  })
}
