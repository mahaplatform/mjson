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
      <table className="row collapse" id="<%- config.id %>">
        <tbody>
          <tr>
            <Children { ...this._getChildren() } />
            <th className="expander"></th>
          </tr>
        </tbody>
      </table>
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
