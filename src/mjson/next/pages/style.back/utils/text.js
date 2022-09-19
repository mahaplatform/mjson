import { getMarginLeft } from './spacing'
import { getColor, getBackgroundColor } from './color'
import * as utils from './utils'

const getFontSize = (ruleset, selector, fontSize) => {
  utils.applyRule(ruleset.standard, selector, { fontSize })
}

const getLineHeight = (ruleset, selector, lineHeight) => {
  utils.applyRule(ruleset.standard, selector, { lineHeight })
}

const getFontFamily = (ruleset, selector, fontFamily) => {
  utils.applyRule(ruleset.standard, selector, { fontFamily: `var(${fontFamily})` })
}

const getFormat = (ruleset, selector, format) => {
  const textDecoration = []
  if(_.includes(format, 'underline')) textDecoration.push('underline')
  if(_.includes(format, 'strikethrough')) textDecoration.push('line-through')
  utils.applyRule(ruleset.standard, selector, {
    textTransform: _.includes(format, 'uppercase') ? 'uppercase' : 'none',
    fontWeight: _.includes(format, 'bold') ? 'bold' : 'normal',
    fontStyle: _.includes(format, 'italic') ? 'italic' : 'normal',
    textDecoration: textDecoration.length > 0 ? textDecoration.join(' ') : 'none'
  })
}

export const getTextAlign = (ruleset, selector, textAlign) => {
  utils.applyRule(ruleset.standard, selector, { textAlign })
}

export const getTextTransform = (ruleset, selector, textTransform) => {
  utils.applyRule(ruleset.standard, selector, { textTransform })
}

export const getBrightness = (ruleset, selector, brightness) => {
  utils.applyRule(ruleset.standard, selector, { filter: `brightness(${1 + brightness / 100})` })
}

const getText = (ruleset, selector, text) => {
  if(!text) return
  if(text.fontFamily) getFontFamily(ruleset, selector, text.fontFamily)
  if(text.fontSize) getFontSize(ruleset, selector, text.fontSize)
  if(text.lineHeight) getLineHeight(ruleset, selector, text.lineHeight)
  if(text.backgroundColor) getBackgroundColor(ruleset, selector, text.backgroundColor)
  if(text.color) getColor(ruleset, selector, text.color)
  if(text.brightness) getBrightness(ruleset, selector, text.brightness)
  if(text.format) getFormat(ruleset, selector, text.format)
  if(text.marginLeft) getMarginLeft(ruleset, selector, text.marginLeft)
  if(text.textAlign) getTextAlign(ruleset, selector, text.textAlign)
  if(text.textTransform) getTextTransform(ruleset, selector, text.textTransform)
}

export const applyTextAlign = (rulesets, selector, align) => {
  if(align) return utils.applyResponsiveRule(rulesets, selector, align, getTextAlign)
}

export const applyTextTransform = (rulesets, selector, textTransform) => {
  if(textTransform) return utils.applyResponsiveRule(rulesets, selector, textTransform, getTextTransform)
}

export const applyFontSize = (ruleset, selector, fontSize) => {
  if(fontSize) return utils.applyResponsiveRule(ruleset, selector, fontSize, getFontSize)
}

export const applyFontFamily = (ruleset, selector, fontFamily) => {
  if(fontFamily) return utils.applyResponsiveRule(ruleset, selector, fontFamily, getFontFamily)
}

export const applyLineHeight = (ruleset, selector, lineHeight) => {
  if(lineHeight) return utils.applyResponsiveRule(ruleset, selector, lineHeight, getLineHeight)
}

export const applyFormat = (ruleset, selector, format) => {
  if(format) return utils.applyResponsiveRule(ruleset, selector, format, getFormat)
}

export const applyText = (ruleset, selector, text) => {
  if(text) return utils.applyResponsiveRule(ruleset, selector, text, getText)
}
