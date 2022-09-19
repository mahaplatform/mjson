import PropTypes from 'prop-types'
import React from 'react'

class Product extends React.Component {

  static propTypes = {
    product: PropTypes.object
  }

  render() {
    const { product, store } = this.props
    return (
      <>
        { store.title } : { product.title }
      </>
    )
  }

}

export default Product
