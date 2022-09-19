import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Row extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <div className="row" id={ config.id }>
        <div className="row-position">
          <div className="row-box">
            <div className="row-columns">
              <Children { ...this._getChildren() } />
            </div>
          </div>
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

export default Row
