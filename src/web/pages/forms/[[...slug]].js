import Form from '../../../services/mjson/pages/next/form'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  return <Form { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const form = await fetchData(`forms/${slug[0]}`)
  return {
    props: {
      form
    }
  }
}
