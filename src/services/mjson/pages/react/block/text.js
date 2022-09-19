import PropTypes from 'prop-types'
import React from 'react'

class Text extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <>{ config.content.text }</>
    )
  }

}

export default Text
