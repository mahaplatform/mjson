import Product from '../../../mjson/next/pages/product'
import Store from '../../../mjson/next/pages/store'
import fetchData from '../../lib/fetch'

export default function Document(props) {
  if(props.product) return <Product { ...props } />
  return <Store { ...props } />
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export async function getStaticProps(context) {
  const { slug } = context.params
  const store = await fetchData(`stores/${slug[0]}`)
  const product = slug[2] ? await fetchData(`stores/${slug[0]}/products/${slug[2]}`) : null
  return {
    props: {
      store,
      product
    }
  }
}
