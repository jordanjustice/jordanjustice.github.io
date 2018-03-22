import React from 'react'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components';

injectGlobal`
  html, body {
		height: 100%;
	}

  body {
    margin: 0;
		font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

		> div {
			height: 100%;

			> div {
				height: 100%;
			}
		}
  }
`;

class landingPage extends React.Component {
  render() {
		const { location, children } = this.props

    return (
      <div>
        {children()}
      </div>
    )
  }
}

export default landingPage
