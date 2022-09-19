import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <div>event</div>
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
