import React from 'react'
import Link from 'gatsby-link'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

export default Template
