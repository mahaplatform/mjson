import PropTypes from 'prop-types'
import React from 'react'

class Text extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <table id="<%- config.id %>">
        <tbody>
          <tr>
            <td>{ config.content.text }</td>
          </tr>
        </tbody>
      </table>
    )
  }

}

export default Text
