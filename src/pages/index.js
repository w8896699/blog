import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import styled from 'styled-components'

const BlogLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 4px;
  margin: 0 2px;

`
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  &:hover {
    color: #1dcaff;
  }
`


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
    <BlogLink to={node.fields.slug}>

    <BlogTitle>{node.frontmatter.title} - {node.frontmatter.date}</BlogTitle>
    </BlogLink>
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
    allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC}) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields{
            slug
          }
          excerpt
          
        }
      }
    }
  }
  
`
