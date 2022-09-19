import PropTypes from 'prop-types'
import Children from './children'
import React from 'react'

class Column extends React.Component {

  static propTypes = {
    config: PropTypes.object,
    index: PropTypes.number,
    total: PropTypes.number
  }

  render() {
    const { config } = this.props
    return (
      <th className={ this._getClass() } id="<%- config.id %>">
        <Children { ...this._getChildren() } />
      </th>
    )
  }

  _getChildren() {
    const { config } = this.props
    return {
      parent: config,
      children: config.content.children
    }
  }

  _getClass() {
    const { index, total } = this.props
    const classes = ['columns']
    if(index === 0) classes.push('first')
    if(index === total - 1) classes.push('last')
    classes.push(this._getSize('mobile'))
    classes.push(this._getSize('desktop'))
    return classes.join(' ')
  }

  _getSize(screen) {
    const { parent, index, total } = this.props
    const layout = parent.content.layout
    if(screen === 'desktop') {
      const columns = layout.desktop ? layout.desktop : layout
      const width = columns[index % columns.length]
      return `large-${width}`
    }
    if(screen === 'mobile') {
      const columns = layout.mobile ? layout.mobile : layout
      const width = columns[index % columns.length]
      return `small-${width}`
    }
  }

}

export default Column
