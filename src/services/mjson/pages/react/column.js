import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Column extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <div className="column" id={ config.id }>
        <div className="column-position">
          <Children { ...this._getChildren() } />
        </div>
      </div>
    )
  }

  _getChildren() {
    const { config } = this.props
    return {
      parent: config,
      children: config.content.children
    }
  }

}

export default Column
