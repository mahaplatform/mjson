import Body from './entities/body'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Style from './style'
import React from 'react'

class Page extends React.Component {

  static propTypes = {
    page: PropTypes.object,
  }

  render() {
    const { page } = this.props
    return (
      <>
        <Head>
          <link rel="stylesheet" href="/static/css/font-awesome.min.css" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="theme-color" content="#FFFFFF" />
          <title>{ page.meta.title }</title>
          <Style { ...this._getStyle() } />
        </Head>
        <Body { ...this._getBody() } />
      </>
    )
  }

  _getBody() {
    const { page } = this.props
    return { config: page }
  }

  _getStyle() {
    const { page } = this.props
    return { page }
  }

}

export default Page
