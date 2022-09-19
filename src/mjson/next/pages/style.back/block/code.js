import * as utils from '../utils'

export default function TextBlock(website, rulesets, styles, block) {
  ['h1','h2','h3','h4','h5','p','li','a'].map(size => {
    if(!styles[size]) return
    utils.applyText(rulesets, `.${block.id} .block-code ${size}`, styles[size])
  })
}
