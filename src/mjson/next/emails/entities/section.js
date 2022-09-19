import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Section extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <table className="container" align="center" id="<%- config.id %>">
        <tbody>
          <tr>
            <td>
              <Children { ...this._getChildren() } />
            </td>
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

export default Section
