import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    if (location.pathname === '/') {
      header = (
        <h1
          style={{
            marginBottom: rhythm(1.5),
            marginTop: 0,
            fontWeight: 900
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Jordan Justice
          </Link>
        </h1>
      )
    } else {
      header = (
        <h1
          style={{
            marginTop: 0,
            fontWeight: 900
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            Jordan Justice
          </Link>
        </h1>
      )
    }
    return (
      <Container
        style={{
            maxWidth: rhythm(24),
            margin: `0 auto`,
            padding: `${rhythm(1)} ${rhythm(3 / 4)}`,
          }}
        >
        {header}
        {children()}
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.function,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
