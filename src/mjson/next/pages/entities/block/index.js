import PropTypes from 'prop-types'
import Text from './text'
import React from 'react'

class Block extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const Component = this._getComponent()
    return Component ? <Component { ...this.props } /> : null
  }

  _getComponent() {
    const { config } = this.props
    if(config.type === 'text') return Text
  }



}

export default Block
