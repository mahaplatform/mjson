import PropTypes from 'prop-types'
import React from 'react'

class Spacer extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <table id="<%- config.id %>">
        <tbody>
          <tr>
            <td style={ this._getStyle() }>&nbsp;</td>
          </tr>
        </tbody>
      </table>
    )
  }

  _getStyle() {
    const { config } = this.props
    return {
      fontSize: config.styles.height,
      lineHeight: config.styles.height
    }
  }

}

export default Spacer
