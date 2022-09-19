import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Section extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  render() {
    const { config } = this.props
    return (
      <div className="section" id={ config.id }>
        <Children { ...this._getChildren() } />
      </div>
    )
  }

  _getChildren() {
    const { config } = this.props
    return {
      parent: config,
      children: config.content.children
    }
  }

}

export default Section
