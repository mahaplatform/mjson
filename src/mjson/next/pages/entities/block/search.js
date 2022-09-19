import PropTypes from 'prop-types'
import React from 'react'

class Search extends React.Component {

  static propTypes = {
    config: PropTypes.object
  }

  state = {
    value: ''
  }

  _handleType = this._handleType.bind(this)

  render() {
    const { config } = this.props
    return (
      <div className="block-search" id={ config.id }>
        <div className="block-search-icon" id={ config.id }>
          <i className="fa fa-search" />
        </div>
        <div className="block-search-field" id={ config.id }>
          <input { ...this._getInput() } />
        </div>
      </div>
    )
  }

  _getInput() {
    const { config } = this.props
    const { value } = this.state
    return {
      type: 'text',
      placeholder: config.content.placeholder,
      value,
      onChange: this._handleType
    }
  }

  _handleType(e) {
    const value = e.target.value
    this.setState({ value })
  }

}

export default Search
