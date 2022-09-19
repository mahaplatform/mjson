import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Email extends React.Component {

  static propTypes = {
    form: PropTypes.object
  }

  render() {
    const { email, foundation } = this.props
    return (
      <>
        <style dangerouslySetInnerHTML={{ __html: foundation }} />
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
    const { email } = this.props
    return {
      children: email.content.children
    }
  }

}

export default Email
