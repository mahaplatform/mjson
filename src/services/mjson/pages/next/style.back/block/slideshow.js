import * as utils from '../utils'

const sizes = ['h1','h2','p']

export default function ImageBlock(website, rulesets, styles, block) {

  utils.applyPadding(rulesets, `.${block.id} .block-slideshow-slide-picture`, styles.imagePadding)
  utils.applyBorder(rulesets, `.${block.id} .block-slideshow-slide-picture`, styles.imageBorder)
  utils.applyRadius(rulesets, `.${block.id} .block-slideshow-slide-picture`, styles.imageRadius)
  utils.applyFilter(rulesets, `.${block.id} .block-slideshow-slide-picture`, styles.imageFilters)
  if(block.settings.hasCaption) {
    utils.applyCaptionLayout(rulesets, `.${block.id} .block-slideshow-slide`, styles.captionLayout)
    utils.applyBackground(rulesets, `.${block.id} .block-slideshow-slide-caption`, styles.captionBackground)
    utils.applyPadding(rulesets, `.${block.id} .block-slideshow-slide-caption`, styles.captionPadding)
    sizes.map(size => {
      utils.applyText(rulesets, `.${block.id} ${size}`, styles[`caption${size}`])
    })
  }
}
