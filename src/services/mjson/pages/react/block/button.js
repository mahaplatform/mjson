import PropTypes from 'prop-types'
import React from 'react'

class Text extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <table className="button" id="<%- config.id %>">
        <tbody>
          <tr>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td><a href="#">{ config.content.text }</a></td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    )
  }

}

export default Text
