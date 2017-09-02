import React from "react"
import Link from "gatsby-link"
import get from "lodash/get"
import Helmet from "react-helmet"

import Bio from "../components/Bio"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title")
    const posts = get(this, "props.data.allMarkdownRemark.edges")

    return (
      <div>
        <Helmet title={get(this, "props.data.site.siteMetadata.title")} />
        <Bio />
        {posts.map(post => {
          if (post.node.path !== "/404/") {
            const title = get(post, "node.frontmatter.title") || post.node.path
            return (
              <article
                style={{
                  marginBottom: rhythm(4)
                }}
              >
                <h2
                  key={post.node.frontmatter.path}
                  style={{
                    marginBottom: rhythm(1 / 4),
                  }}
                >
                  <Link
                    style={{
                      boxShadow: "none",
                      textDecoration: "none",
                      color: "inherit"
                    }}
                    to={post.node.frontmatter.path}
                  >
                    {post.node.frontmatter.title}
                  </Link>
                </h2>
                <p>
                  <small>
                    <time dateTime={post.node.frontmatter.date}>{post.node.frontmatter.date}</time>
                  </small>
                </p>
                <p dangerouslySetInnerHTML={{ __html: post.node.html }} />
              </article>
            )
          }
        })}
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          frontmatter {
            path
            date(formatString: "MMMM D, YYYY")
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
