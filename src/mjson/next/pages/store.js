import Body from './entities/body'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Style from './style'
import React from 'react'

class Store extends React.Component {

  static propTypes = {
    store: PropTypes.object
  }

  render() {
    const { store } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
          <title>{ store.title }</title>
          <Style { ...this._getStyle() } />
        </Head>
        <Body { ...this._getBody() } />
      </>
    )
  }

  _getBody() {
    const { store } = this.props
    return { config: store }
  }

  _getStyle() {
    const { store } = this.props
    return {
      page: store
    }
  }

}

export default Store
