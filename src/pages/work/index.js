import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import styled from 'styled-components';

const Wrapper = styled.main`
	width: 100%;
	height: 100%;
	display: grid;
	grid-template-columns: minmax(0.5rem, 1fr) minmax(0, 40rem) minmax(0.5rem, 1fr);
	border-top: 8px solid #0D9DB5;
`;

const Article = styled.article`
	grid-column: 2;

	h1 {
		font-size: 2.5rem;
	}
`;

const WorkGroup = styled.div`
	padding: 2rem 0;

	a {
		color: #F2715D;
	}
`;

const WorkDate = styled.p`
	margin: 0 0 0.5rem;
	color: rgba(0,0,0,0.5);
	font-size: 0.875rem;
`;

const WorkTitle = styled.h2`
	margin-top: 0;
	margin-bottom: 1rem;
	font-size: 2rem;
`;

const WorkDescription = styled.p`
	margin-top: 0;
	line-height: 1.5;
`;

class WorkPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
			<Wrapper>
				<Article>
					<h1>Work</h1>
					<h3>Doing work—the hard and generous work—has been a great gift to me. I can only hope the things I produce are gifts to others.</h3>

					<WorkGroup>
						<WorkDate>2018 - Present</WorkDate>
						<WorkTitle>Co-founder at <a href="https://kinship.it" style={{ color: "#414DA0"}}>Kinship</a></WorkTitle>
						<WorkDescription>Building a Toledo, Ohio based software development agency focused on collaboration and craftsmanship.</WorkDescription>
					</WorkGroup>

					<WorkGroup>
						<WorkDate>2014 - 2018</WorkDate>
						<WorkTitle>Product and Platform Manager at <a href="https://www.rootinc.com" style={{color: "#A2B627"}}>Root Inc.</a></WorkTitle>
						<WorkDescription>Worked to build a digital product strategy and a team culture to execute on it, helped change the method and quality of projects for Root clients, and shipped Root's first three digital products.</WorkDescription>
					</WorkGroup>

					<WorkGroup>
						<WorkDate>2012 - 2014</WorkDate>
						<WorkTitle>Web Developer at <a href="https://concentrekgroup.com" style={{color: "#D93832"}}>Concentrek Group</a></WorkTitle>
						<WorkDescription>Led our team into building responsive sites (we had no idea of how much the web was really changing), wrangled svg browser compatibility and @2x assets (thanks Retina displays).</WorkDescription>
					</WorkGroup>

					<WorkGroup>
						<WorkDate>2010 - Present</WorkDate>
						<WorkTitle>Side Projects and Ruckus Making</WorkTitle>
						<WorkDescription>Ever since I began working on making things for the web, I've had a blast. Things like local candidate sites, failed products with friends, bike law resources, and plenty more. </WorkDescription>
					</WorkGroup>

					<WorkGroup>
						<WorkTitle>Education</WorkTitle>
						<WorkDescription>What is it for? It, being education. Specifically in this case, where you're reading about me, potentially trying to rank me among others, what is higher ed for?<br /><br />I'm an <a href="https://altmba.com/">altMBA</a> alumni (altMBA 11). It's taught me to know what I see, rather than see what I know. If this sounds like something interesting to you, I'm always available to chat about it.</WorkDescription>
					</WorkGroup>
				</Article>
			</Wrapper>
    )
  }
}

export default WorkPage
