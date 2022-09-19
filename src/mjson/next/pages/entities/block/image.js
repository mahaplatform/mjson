import PropTypes from 'prop-types'
import React from 'react'

class Image extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <div className="block-image" id={ config.id }>
        <img src="https://assets.mahaplatform.com/imagecache/fit=cover&w=250&h=250&dpi=2/assets/f3a8df59d28b28066fabefe6a5afe158/al-moly-jeannine1.jpeg" />
      </div>
    )
  }

}

export default Image
