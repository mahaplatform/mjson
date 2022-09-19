import kebabCase from 'lodash/kebabCase'
import isEqual from 'lodash/isEqual'
import minify from './utils/minify'
import PropTypes from 'prop-types'
import Document from './document'
import React from 'react'

const getValue = (property, value) => {
  return value
}

const getRule = (selector, properties) => {
  const keys = Object.keys(properties)
  if(keys.length == 0) return ''
  const declaration = keys.map(key => {
    const kebabed = key[0] !== '-' ? kebabCase(key) : key
    return `  ${kebabed}: ${getValue(key, properties[key])}`
  }).join(';\n')
  return `${selector}{\n${declaration}\n}\n`
}

const getRules = (rules) => {
  return rules.filter(rule => {
    return rule.properties !== undefined
  }).map(rule => {
    return getRule(rule.selector, rule.properties)
  }).join('')
}

const getMediaQuery = (device, resolution, styles) => {
  if(device === 'all' && resolution == 'standard') return styles
  const params = {
    standard: 'all',
    retina: '(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)',
    desktop: '(min-width: 981px) and (min-width: 981px)',
    tablet: '(min-width: 768px) and (max-width: 980px)',
    mobile: '(max-width: 767px)'
  }
  if(device === 'all') {
    if(resolution === 'standard') return styles
    if(resolution === 'retina') return `@media ${params[resolution]}{\n${styles}}\n`
  }
  return `@media ${params[resolution]} and ${params[device]}{\n${styles}}\n`
}

const renderMediaRules = (ruleset, device, resolution) => {
  const styles = getRules(ruleset[device][resolution])
  return styles.length > 0 ? getMediaQuery(device,resolution,styles) : styles
}

const renderVariables = (variables) => [
  ':root {',
  ...Object.keys(variables).map(key => {
    return `  --${key}: ${variables[key]};`
  }),
  '}'
].join('\n')+'\n'

const renderFonts = (fonts) => {
  return fonts.map(font => {
    if(font.type === 'system') return ''
    return `@import url(https://fonts.googleapis.com/css?family=${font.font.family.replace(' ','+')}:r,b,i,bi);`
  }).join('\n')+'\n'
}

const parseRules = (website, page) => {
  return Document(website, {
    fonts: [],
    variables: [],
    all: { standard: [], retina: [] },
    desktop: { standard: [], retina: [] },
    tablet: { standard: [], retina: [] },
    mobile: { standard: [], retina: [] }
  }, page)
}

const mergeRules = (rules) => {
  return ['all','desktop','tablet','mobile'].reduce((merged, device) => ({
    ...merged,
    [device]: ['standard','retina'].reduce((merged2, resolution) => ({
      ...merged2,
      [resolution]: rules[device][resolution].reduce((merged3, rule) => {
        if(!rule.properties) return merged3
        const index = merged3.findIndex(rule2 => {
          return isEqual(rule.properties, rule2.properties)
        })
        if(index >= 0) {
          merged3[index].selector += `,${rule.selector}`
          return merged3
        }
        return [
          ...merged3,
          rule
        ]
      }, [])
    }), {})
  }), {
    fonts: rules.fonts,
    variables: rules.variables
  })
}

const render = (rules) => [
  ...renderFonts(rules.fonts),
  ...renderVariables(rules.variables),
  ...renderMediaRules(rules, 'all', 'standard'),
  ...renderMediaRules(rules, 'all', 'retina'),
  ...renderMediaRules(rules, 'desktop', 'standard'),
  ...renderMediaRules(rules, 'desktop', 'retina'),
  ...renderMediaRules(rules, 'tablet', 'standard'),
  ...renderMediaRules(rules, 'tablet', 'retina'),
  ...renderMediaRules(rules, 'mobile', 'standard'),
  ...renderMediaRules(rules, 'mobile', 'retina')
].join('')

const Style = ({ website, page }) => {

  const rules = parseRules(website, page)

  const merged = process.env.NODE_ENV === 'production' ? mergeRules(rules) : rules

  const css = render(merged)

  const minified = process.env.NODE_ENV === 'production' ? minify(css) : css

  return <style dangerouslySetInnerHTML={{ __html: minified }} />

}

Style.propTypes = {
  website: PropTypes.object,
  layout: PropTypes.object,
  page: PropTypes.object
}

export default Style
