import Body from './entities/body'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Style from './style'
import React from 'react'

class Email extends React.Component {

  static propTypes = {
    email: PropTypes.object,
    foundation: PropTypes.string
  }

  render() {
    const { email, foundation } = this.props
    return (
      <>
        <Head>
          <title>{ email.meta.title }</title>
          <style dangerouslySetInnerHTML={{ __html: foundation }} />
          <Style { ...this._getStyle() } />
        </Head>
        <Body { ...this._getBody() } />
      </>
    )
  }

  _getBody() {
    const { email } = this.props
    return { config: email }
  }

  _getStyle() {
    const { email } = this.props
    return { config: email }
  }

}

export default Email
