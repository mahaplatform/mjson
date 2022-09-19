import Page from '../../../mjson/next/pages/page'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <Page { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const website = await fetchData(`websites/${slug[0]}`)
  const page = await fetchData(`websites/${slug[0]}/pages/${slug[2]}`)
  return {
    props: {
      website,
      page
    }
  }
}
