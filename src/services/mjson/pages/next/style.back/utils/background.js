import { applyRule, applyResponsiveRule, withUnits, toColor } from './utils'
import { toQuery } from '@core/utils/transforms'

const getParsed = (src) => {
  const parts = src.substr(1).split('/')
  const filename = parts.slice(-1)[0]
  const fileparts = filename.split('.')
  return {
    path: parts.slice(0, parts.length - 1).join('/'),
    basename: fileparts.slice(0, fileparts.length - 1).join('.'),
    extname: fileparts.slice(-1)[0]
  }
}

const imageUrl = (image, dpi, format) => {
  const parsed = getParsed(image.asset.path)
  const to = format || parsed.extname
  const transforms = image.transforms
  if(parsed.extname !== to) transforms.fm = parsed.extname
  const query = toQuery(transforms)
  return `url(${process.env.CDN_HOST}/imagecache/${query}/${parsed.path}/${parsed.basename}.${to})`
}

const getBackgroundImage = (background, dpi, format) => {
  const { image, position, repeat, size } = background
  if(!image || !image.asset) return
  const properties = {}
  properties.backgroundImage = imageUrl(image, dpi, format)
  properties.backgroundSize = size || 'cover'
  if(repeat) properties.backgroundRepeat = repeat
  if(position) properties.backgroundPosition = position
  return properties
}

const applyBackgroundColor = (ruleset, selector, background) => {
  if(!background.color) return
  applyRule(ruleset.standard, selector, {
    backgroundColor: toColor(background.color)
  })
}

const getRadialGradient = (ruleset, selector, background) => {
  const { color1, color2, origin, start, end } = background
  const properties = {}
  properties.backgroundImage = `radial-gradient(circle at ${origin}, ${toColor(color1)} ${withUnits(start, '%')}, ${toColor(color2)} ${withUnits(end, '%')})`
  return properties
}

const getLinearGradient = (ruleset, selector, background) => {
  const { color1, color2, direction, start, end } = background
  const properties = {}
  properties.backgroundImage = `linear-gradient(${withUnits(direction, 'deg')}, ${toColor(color1)} ${withUnits(start, '%')}, ${toColor(color2)} ${withUnits(end, '%')})`
  return properties
}

const applyBackgroundGradient = (ruleset, selector, background) => {
  const { color1, color2, style } = background
  if(!color1 || !color2 || !style) return
  const getter = style === 'radial' ? getRadialGradient : getLinearGradient
  applyRule(ruleset.standard, selector, getter(ruleset, selector, background))
}

const applyBackgroundImage = (ruleset, selector, background) => {
  if(!background.image) return
  applyRule(ruleset.standard, selector, getBackgroundImage(background, 1, 'webp'))
  applyRule(ruleset.retina, selector, getBackgroundImage(background, 2, 'webp'))
  applyRule(ruleset.standard, `.nwp ${selector}`, getBackgroundImage(background, 1))
  applyRule(ruleset.retina, `.nwp ${selector}`, getBackgroundImage(background, 2))
}

const applyBackgroundType = (ruleset, selector, background) => {
  if(!background) return
  if(background.type === 'color') applyBackgroundColor(ruleset, selector, background)
  if(background.type === 'gradient') applyBackgroundGradient(ruleset, selector, background)
  if(background.type === 'image') applyBackgroundImage(ruleset, selector, background)
}

export const applyBackground = (rulesets, selector, background) => {
  if(!background) return
  applyResponsiveRule(rulesets, selector, background, applyBackgroundType)
}
