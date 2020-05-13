import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: default;
  color: red;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 4px;
  margin: 0 2px;
`;

export default ({data}) => {
  console.log(data)
  return(
  <Layout>
    <SEO title="Home" />
    <div>
      <h1> Haohang Li's stuff</h1>
    </div>
    <h1>Hi people</h1>
{
  data.allMarkdownRemark.edges.map(({node})=>(
    <div key={node.id}> 
    <span>{node.frontmatter.title} - {node.frontmatter.date}</span>
    <p>
      {node.excerpt}
    </p>
    </div>
  ))
}
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <StyledLink to="/page-2/">Go to page 2</StyledLink>
    <StyledLink to="/page-3/">Go to page 3</StyledLink> */}
  </Layout>
)
}



export const query = graphql`
  query{
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
          
        }
      }
    }
  }
  
`
