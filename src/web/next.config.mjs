import withLess from 'next-with-less'
import path from 'path'

const config = withLess({
  webpack: (config, options) => {
    const index = config.module.rules.findIndex(rule => {
      return rule.oneOf !== undefined
    })
    config.module.rules[index].oneOf[2].include.unshift(path.resolve('src','services','mjson'))
    return config
  }
})

export default config
