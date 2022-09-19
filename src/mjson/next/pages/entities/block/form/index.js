import PropTypes from 'prop-types'
import React from 'react'

class Form extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <form>
        { config.content.fields.map((field, index) => (
          <div className="`field_${index}`">
            { field.label }
          </div>
        )) }
      </form>
    )
  }

}

export default Form
