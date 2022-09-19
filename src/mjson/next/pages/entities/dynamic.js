import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Dynamic extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <Children { ...this._getChildren() } />
    )
  }

  _getChildren() {
    const { config } = this.props
    return {
      parent: config,
      children: config.template.content.children
    }
  }

}

export default Dynamic
