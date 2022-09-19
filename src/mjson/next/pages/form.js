import Body from './entities/body'
import PropTypes from 'prop-types'
import React from 'react'

class Form extends React.Component {

  static propTypes = {
    form: PropTypes.object
  }

  render() {
    return (
      <Body { ...this._getBody() } />
    )
  }

  _getBody() {
    const { form } = this.props
    return {
      config: form
    }
  }

}

export default Form
