import renderEmail from '../../services/mjson/emails/html'

import path from 'path'
import fs from 'fs'

const emails = async (req, res) => {

  const config = require(path.resolve('src','data','emails',`${req.params.id}.js`)).default

  const rendered = await renderEmail(config)

  res.send(rendered)

}

export default emails
