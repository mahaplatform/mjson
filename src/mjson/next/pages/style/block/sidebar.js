import * as utils from '../utils'

export default function SpotlightBlock(website, rulesets, styles, block) {
  if(block.content.scheme) {
    utils.applyRule(rulesets.all.standard, `.${block.id} > .block > .block-box`, {
      backgroundColor: `var(${block.content.scheme})`
    })

    utils.applyRule(rulesets.all.standard, `.${block.id} > .block > .block-box > .block-sidebar *`, {
      color: '#FFFFFF'
    })
    utils.applyRule(rulesets.all.standard, `.${block.id} > .block > .block-box > .block-sidebar > .block-sidebar-title`, {
      borderColor: '#FFFFFF'
    })
  }
  utils.applyText(rulesets, `.${block.id} .block-sidebar-title h2`, styles.title_text)
  utils.applyBorder(rulesets, `.${block.id} .block-sidebar-title`, styles.title_border)
  // ['h1','h2','h3','h4','h5','p','li','a'].map(size => {
  //   if(!styles[size]) return
  //   utils.applyText(rulesets, `.${block.id} .block-text-body ${size}`, styles[size])
  // })
}
