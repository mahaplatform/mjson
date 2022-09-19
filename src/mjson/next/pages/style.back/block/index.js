import Spotlight from './spotlight'
import Slideshow from './slideshow'
import * as utils from '../utils'
import Sidebar from './sidebar'
import Button from './button'
import Social from './social'
import Image from './image'
import Code from './code'
import Menu from './menu'
import Text from './text'
import Map from './map'

const blocks = ['h1','h2','h3','h4','h5','p','li']

export default function Block(website, rulesets, block) {

  const styles = block.styles || {}

  blocks.map(size => {
    utils.applyText(rulesets, `.${block.id} ${size}`, styles[size])
  })
  utils.applyText(rulesets, blocks.map(size => `${size} a`).join(','), styles.a)

  utils.applyMargin(rulesets, `.${block.id} > .block`, styles.margin)
  utils.applyAnimation(rulesets, `.${block.id} > .block > .block-box`, styles.animation)
  utils.applyBackground(rulesets, `.${block.id} > .block > .block-box`, styles.background)
  utils.applyBorder(rulesets, `.${block.id} > .block > .block-box`, styles.border)
  utils.applyRadius(rulesets, `.${block.id} > .block > .block-box`, styles.radius)
  utils.applyBoxShadow(rulesets, `.${block.id} > .block > .block-box`, styles.boxShadow)
  utils.applyPadding(rulesets, `.${block.id} > .block > .block-box`, styles.padding)
  utils.applySizing(rulesets, `.${block.id} > .block > .block-box`, styles)
  utils.applyTextAlign(rulesets, `.${block.id} > .block > .block-box`, styles.textAlign)
  utils.applyFilter(rulesets, `.${block.id} > .block > .block-box`, styles.filters)
  utils.applyTransform(rulesets, `.${block.id} > .block > .block-box`, styles.transform)
  utils.applyTransitions(rulesets, `.${block.id} > .block > .block-box`, styles.transitions)
  utils.applyVisibility(rulesets, `.${block.id} > .block > .block-box`, styles.visibility)
  utils.applyOverflow(rulesets, `.${block.id} > .block > .block-box`, styles.overflow)

  if(block.type === 'sidebar') Sidebar(website, rulesets, styles, block)
  if(block.type === 'social') Social(website, rulesets, styles, block)
  if(block.type === 'spotlight') Spotlight(website, rulesets, styles, block)
  if(block.type === 'slideshow') Slideshow(website, rulesets, styles, block)
  if(block.type === 'button') Button(website, rulesets, styles, block)
  if(block.type === 'image') Image(website, rulesets, styles, block)
  if(block.type === 'code') Code(website, rulesets, styles, block)
  if(block.type === 'text') Text(website, rulesets, styles, block)
  if(block.type === 'menu') Menu(website, rulesets, styles, block)
  if(block.type === 'map') Map(website, rulesets, styles, block)

  return rulesets

}
