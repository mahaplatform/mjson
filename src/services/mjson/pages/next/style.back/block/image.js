import * as utils from '../utils'

const sizes = ['h1','h2','p']

const getImageAlignment = (config) => {
  const align = config.justifyContent || 'left'
  if(align === 'left') return { justifyContent: 'flex-start' }
  if(align === 'center') return { justifyContent: 'center' }
  if(align === 'right') return { justifyContent: 'flex-end' }
}

export default function ImageBlock(website, rulesets, styles, block) {
  utils.applyPadding(rulesets, `.${block.id} .block-image-picture`, styles.imagePadding)
  utils.applyBorder(rulesets, `.${block.id} .block-image-picture`, styles.imageBorder)
  utils.applyRadius(rulesets, `.${block.id} .block-image-picture`, styles.imageRadius)
  utils.applyFilter(rulesets, `.${block.id} .block-image-picture`, styles.imageFilters)

  utils.applyRule(rulesets.all.standard, `.${block.id} .block-image`, getImageAlignment(styles))

  if(block.settings.hasCaption) {
    utils.applyCaptionLayout(rulesets, `.${block.id} .block-image`, styles.captionLayout)
    utils.applyPadding(rulesets, `.${block.id} .block-image-caption`, styles.captionPadding)
    sizes.map(size => {
      utils.applyText(rulesets, `.${block.id} ${size}`, styles[`caption${size}`])
    })
  }
}
