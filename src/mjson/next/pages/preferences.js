import PropTypes from 'prop-types'
import React from 'react'

class Preferences extends React.Component {

  static propTypes = {
    channel: PropTypes.object
  }

  render() {
    const { channel } = this.props
    return (
      <>
        { channel.type }
      </>
    )
  }

}

export default Preferences
