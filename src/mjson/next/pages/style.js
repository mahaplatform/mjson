import PropTypes from 'prop-types'
import React from 'react'

class Style extends React.Component {

  static propTypes = {
    page: PropTypes.object,
  }

  render() {
    return <style dangerouslySetInnerHTML={{ __html: this._getStyle() }} />
  }

  _getStyle() {
    return ''
  }

}

export default Style
