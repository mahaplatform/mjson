import Event from '../../../mjson/next/pages/event'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <Event { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const event = await fetchData(`events/${slug[0]}`)
  return {
    props: {
      event
    }
  }
}
