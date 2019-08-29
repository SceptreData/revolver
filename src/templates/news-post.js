import React from "react"
import { Link, graphql } from "gatsby"
import moment from "moment"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const NewsPostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark
  const { title, author, date: dateStr, image, description } = frontmatter

  const date = moment(dateStr).format("DD MMMM, YYYY")
  return (
    <Layout>
      <SEO
        title={`${title} - Revolver`}
        keywords={[`Revolver`, `${title}`, `news`]}
        description={description}
      />

      <article className="news-post">
        <header>
          <h1>{title}</h1>
          <div className="news-post-info">
            <span className="news-post-author">{author}</span>
            <time>{date}</time>
          </div>
        </header>
        <Image className="news-post-img" name={image.relativePath} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </Layout>
  )
}

export default NewsPostTemplate

export const pageQuery = graphql`
  query NewsPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        templateKey
        title
        author
        date
        tags
        description
        image {
          relativePath
          publicURL
          name
        }
      }
    }
  }
`
