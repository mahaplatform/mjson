import inline from 'inline-css'
import path from 'path'
import ejs from 'ejs'
import fs from 'fs'

const email = fs.readFileSync(path.join(__dirname,'email.ejs'), 'utf8')
const foundation = fs.readFileSync(path.join(__dirname,'..','css','foundation-email.css'), 'utf8')
const override = fs.readFileSync(path.join(__dirname,'..','css','foundation-override.css'), 'utf8')

const renderEmail = async (config) => {

  const rendered = ejs.render(email, {
    foundation: foundation + override,
    includePath: path.resolve(__dirname),
    config
  })

  const inlined = await inline(rendered, {
    url: 'https://mahaplatform.com',
    preserveMediaQueries: true,
    removeHtmlSelectors: true
  })

  return inlined

}

export default renderEmail
