import MEmail from '../../services/mjson/emails/react/email'
import MPage from '../../services/mjson/pages/react/page'
import Link from 'next/link'

export default function Page(props) {
  if(props.config.entity === 'email') return <MEmail { ...props } />
  if(props.config.entity === 'page') return <MPage { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const slug = `/${context.params.slug ? context.params.slug.join('/') : ''}`
  console.log(`loading ${slug}`)
  const path = require('path')
  const fs = require('fs')
  const config = require(`../../data${slug}`).default
  const email = fs.readFileSync(path.join('src','services','mjson','emails','css','foundation-email.css'), 'utf8')
  const override = fs.readFileSync(path.join('src','services','mjson','emails','css','foundation-override.css'), 'utf8')
  const foundation = email + override
  return {
    props: {
      config,
      foundation
    }
  }
}
