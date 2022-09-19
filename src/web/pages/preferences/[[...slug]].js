import Preferences from '../../../mjson/next/pages/preferences'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <Preferences { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const channel = await fetchData(`channels/${slug[0]}`)
  const program = await fetchData(`programs/${channel.program_id}`)
  return {
    props: {
      channel,
      program
    }
  }
}
