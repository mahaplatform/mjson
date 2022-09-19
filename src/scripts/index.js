#!/usr/bin/env npx swc-node
import swcConfig from './swc.config.js'
import register from '@swc/register'

register(swcConfig)

const args = process.argv.slice(2)
const command = args[0]

try {

  const processor = require(`./${command}`).default

  processor()

} catch(e) {
  console.log(e)
}
