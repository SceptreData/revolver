import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

const Image = ({ name, objectFit = "cover", alt = "" }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 1920, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
                originalName
              }
            }
          }
        }
      }
    `}
    render={data => {
      if (name && name.includes("/")) {
        const path = name.split("/")
        name = path[path.length - 1]
      }
      const img = data.allImageSharp.edges.find(
        edge => edge.node.fluid.originalName === name
      )

      if (!img) {
        return null
      }
      return (
        <Img
          fluid={img.node.fluid}
          imgStyle={{ objectFit: objectFit }}
          alt={alt !== "" ? alt : name}
        />
      )
    }}
  />
)

export default Image
