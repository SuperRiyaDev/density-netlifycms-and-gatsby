import * as React from "react"
import { graphql } from "gatsby"
// import { getImage, GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  // const featuredImg = getImage(data.content.edges.map(
  //   ({ node }) => node.frontmatter.featuredImg.childImageSharp.fluid
  // ))

  // console.log("ji", featuredImg)
  return (
    <div>
      <div>hello world</div>
      <ul>
        {data.fileInformation.edges.map(({ node }) => (
          <li key={node.id}>{node.base}</li>
        ))}
      </ul>
      {data.content.edges.map(({ node }) => (
        <div>
          <div key={node.id} dangerouslySetInnerHTML={{ __html: node.html }} />
          {/* <div>{node.frontmatter.featuredImg}</div> */}
          <p>
            {/* <GatsbyImage image={getImage(node.frontmatter.featuredImg)} /> */}
          </p>
        </div>
      ))}
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    fileInformation: allFile {
      edges {
        node {
          id
          base
          prettySize
        }
      }
    }
    content: allMarkdownRemark {
      edges {
        node {
          html
          rawMarkdownBody
          frontmatter {
            featuredImg {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
