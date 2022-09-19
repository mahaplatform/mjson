import PropTypes from 'prop-types'
import Section from './section'
import Dynamic from './dynamic'
import Column from './column'
import Block from './block'
import React from 'react'
import Row from './row'

class Entity extends React.Component {

  static propTypes = {
    config: PropTypes.object,
    index: PropTypes.number,
    parent: PropTypes.object,
    total: PropTypes.number
  }

  render() {
    const Component = this._getComponent()
    return <Component { ...this.props } />
  }

  _getComponent() {
    const { config } = this.props
    if(config.entity === 'section') return Section
    if(config.entity === 'row') return Row
    if(config.entity === 'column') return Column
    if(config.entity === 'block') return Block
    if(config.entity === 'dynamic') return Dynamic
  }

}

export default Entity
