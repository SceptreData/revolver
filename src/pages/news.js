import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NewsRoll from "../components/NewsRoll"

const NewsPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const posts = allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <Layout>
      <SEO
        title="News - Revolver"
        keywords={[
          `Revolver`,
          `News`,
          `The Latest`,
          `Music`,
          `Movies`,
          `Pop Culture`,
          `Records`,
          `CDs`,
          `Vinyl`,
          `Trade`,
          `Sell`,
        ]}
      />
      <NewsRoll posts={posts} />
    </Layout>
  )
}

export default NewsPage

export const pageQuery = graphql`
  query NewsPosts {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "news-post" } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 6
    ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            date
            author
            tags
            image {
              relativePath
              name
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
