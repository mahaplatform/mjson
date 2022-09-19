import PropTypes from 'prop-types'
import Entity from './entity'
import React from 'react'

class Children extends React.Component {

  static propTypes = {
    children: PropTypes.array,
    parent: PropTypes.object
  }

  render() {
    const { children } = this.props
    return (
      <>
        { children.map((child, index) => (
          <Entity { ...this._getEntity(child, index) } key={`child_${index}`} />
        )) }
      </>
    )
  }

  _getEntity(config ,index) {
    const { children, parent } = this.props
    return {
      config,
      index,
      parent,
      total: children.length
    }
  }

}

export default Children
