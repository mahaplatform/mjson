import PropTypes from 'prop-types'
import React from 'react'

class Event extends React.Component {

  static propTypes = {
    event: PropTypes.object
  }

  render() {
    const { event } = this.props
    return (
      <>
        { event.title }
      </>
    )
  }

}

export default Event
