import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Body extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config, foundation } = this.props
    return (
      <>
        <table className="body">
          <tbody>
            <tr>
              <td className="float-center" align="center" valign="top">
                <Children { ...this._getChildren() } />
              </td>
            </tr>
          </tbody>
        </table>
      </>
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
