import PropTypes from 'prop-types'
import Search from './search'
import Image from './image'
import Text from './text'
import React from 'react'
import Form from './form'
import Cart from './cart'

class Block extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const Component = this._getComponent()
    return Component ? <Component { ...this.props } /> : null
  }

  _getComponent() {
    const { type } = this.props.config
    if(type === 'search') return Search
    if(type === 'image') return Image
    if(type === 'text') return Text
    if(type === 'form') return Form
    if(type === 'cart') return Cart
  }



}

export default Block
