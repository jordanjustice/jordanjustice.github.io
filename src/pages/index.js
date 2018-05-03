import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components';

const HomeWrapper = styled.main`
	width: 100%;
	height: 100%;
	max-width: 1200px;
	display: grid;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(12, minmax(1fr, min-content));
	margin: 0 auto;
	align-items: stretch;
`

const Bio = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background: #0D9DB5;
	grid-column: 1 / 10;
	grid-row: 3 / 5;
	padding: 2.5rem;
	color: white;
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 1.5;

	p {
		margin-top: 0;

		&:nth-child(2) {
			margin-bottom: 0;
		}
	}

	@media (max-width: 600px) {
		grid-column: 1 / 13;
		grid-row: 1 / 12;
		padding: 1rem;
		font-size: 1.5rem;
	}
`;

const HomeLinks = styled.div`
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
	grid-column: 3 / 12;
	grid-row: 4 / 6;
	background: #F2715D;
	padding: 2rem;
	color: white;
	font-size: 2rem;
	font-weight: 700;

	a {
		z-index: 1;
		position: relative;
		color: inherit;
		text-decoration: none;
		box-shadow: none;
	}

	@media (max-width: 600px) {
		grid-column: 1 / 13;
		grid-row: 12 / 13;
		align-items: center;
		justify-content: center;
		padding: 1rem;
		font-size: 1rem;
	}
`;

const Spacer = styled.div`
	grid-row: 13;

	@media (max-width: 600px) {
		display: none;
	}
`;


class HomePage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <HomeWrapper>
        <Helmet title={siteTitle} />
				<Bio>
					<p>Jordan starts with a hunch.</p>
					<p>He takes that hunch and designs a product, inspires a culture change, and sometimes builds a community.</p>
				</Bio>
				<HomeLinks>
					<Link to="/work/">work</Link>
					<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
					<a href="https://twitter.com/jordantweetsss">twitter</a>
					<span>&nbsp;&nbsp;/&nbsp;&nbsp;</span>
					<a href="https://www.instagram.com/jordanjustice/">instagram</a>
				</HomeLinks>
				<Spacer />
      </HomeWrapper>
    )
  }
}

export default HomePage
