import * as utils from '../utils'

export default function TextBlock(website, rulesets, styles, block) {
  if(block.content.show_title) {
    utils.applyText(rulesets, `.${block.id} .block-text-title h2`, styles.title_text)
    utils.applyBorder(rulesets, `.${block.id} .block-text-title`, styles.title_border)
  }
  ['h1','h2','h3','h4','h5','p','li','a'].map(size => {
    if(!styles[size]) return
    utils.applyText(rulesets, `.${block.id} .block-text-body ${size}`, styles[size])
  })
}
