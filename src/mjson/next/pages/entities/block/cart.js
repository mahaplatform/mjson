import PropTypes from 'prop-types'
import React from 'react'

class Cart extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <div className="block-cart" id={ config.id }>
        <i className="fa fa-shopping-cart" />
      </div>
    )
  }

}

export default Cart
