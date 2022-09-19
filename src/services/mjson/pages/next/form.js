import PropTypes from 'prop-types'
import React from 'react'

class Form extends React.Component {

  static propTypes = {
    form: PropTypes.object
  }

  render() {
    const { form } = this.props
    return (
      <>
        { form.title }
      </>
    )
  }

}

export default Form
