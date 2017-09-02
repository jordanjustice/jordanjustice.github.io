import React from 'react'

import { rhythm } from '../utils/typography'

class Bio extends React.Component {
  render() {
    return (
      <p
        style={{
          marginBottom: rhythm(2.5),
        }}
      >
        I'm a social architect &amp; designer working to create spaces where we can collectively act on what matters.{' '}
        <a href="https://twitter.com/jordantweetsss">
          Follow me on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
