import Body from './entities/body'
import PropTypes from 'prop-types'
import React from 'react'

class Form extends React.Component {

  static propTypes = {
    layout: PropTypes.object,
    form: PropTypes.object
  }

  render() {
    return (
      <Body { ...this._getBody() } />
    )
  }

  _getBody() {
    const { layout } = this.props
    return {
      config: layout
    }
  }

}

export default Form
