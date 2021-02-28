import * as React from 'react'
import { Link } from 'gatsby'
import { graphql } from "gatsby"


import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const Features = ({data}) => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Features of glowbuzzer</h1>
        <p>These are the main features of our product</p>

        <h4>{data.allMarkdownRemark.totalCount} features </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <h3>
              {node.frontmatter.title}
            </h3>
            <p>{node.excerpt}</p>
          </div>
        ))}

        <ul>
          <li>
            <Link to="/">Take me back home.</Link>
          </li>
        </ul>

      </Container>
    </Page>
  </IndexLayout>
)

export default Features

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
          }
          excerpt
        }
      }
    }
  }
`
