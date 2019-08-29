/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `Description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      <meta name="description" content={metaDescription} />
      <meta
        name="viewport"
        content="user-scalable=yes, width=device-width, initial-scale=1.0"
      />
      <link
        // rel="preconnect"
        href="https://use.typekit.net/uga1aiv.css"
        as="style"
      />
      <meta name="apple-mobile-web-app-capable" content="yes" />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [
    {
      name: `Description`,
      content: `Revolver - Movies, Music and Pop Culture. Your one stop shop for used Vinyl and movie merchandise. We will buy your old records!`,
    },
    {
      property: `og:title`,
      content: `Revolver - Movies, Music and Pop Culture`,
    },
    {
      property: `og:description`,
      content: `Revolver - Movies, Music and Pop Culture. Your one stop shop for used Vinyl and movie merchandise. We will buy your old records!`,
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: `@DavidFBergeron`,
    },
    {
      name: `twitter:title`,
      content: `Revolver - Music, Movies and Pop Culture`,
    },
    {
      name: `twitter:description`,
      content: `Revolver - Music, Movies and Pop Culture`,
    },
  ],
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
