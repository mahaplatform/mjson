import Email from '../../../services/mjson/emails/next/email'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <Email { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const email = await fetchData(`emails/${slug[0]}`)
  const path = require('path')
  const fs = require('fs')
  const foundation = fs.readFileSync(path.join('src','services','mjson','emails','css','foundation.css'), 'utf8')
  const maha = fs.readFileSync(path.join('src','services','mjson','emails','css','maha.css'), 'utf8')
  return {
    props: {
      email,
      foundation: foundation + maha
    }
  }
}
