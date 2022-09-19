import PropTypes from 'prop-types'
import React from 'react'

class Store extends React.Component {

  static propTypes = {
    store: PropTypes.object
  }

  render() {
    const { store } = this.props
    return (
      <>
        { store.title }
      </>
    )
  }

}

export default Store
