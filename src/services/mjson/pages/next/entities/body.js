import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Body extends React.Component {

  static propTypes = {
    config: PropTypes.object,
  }

  render() {
    return (
      <Children { ...this._getChildren() } />
    )
  }

  _getChildren() {
    const { config } = this.props
    return {
      children: config.content.children
    }
  }

}

export default Body
