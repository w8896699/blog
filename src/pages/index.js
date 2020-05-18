import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import HomepageFirstHero from '../components/homepageComponent/homepageFirstHero';
import HomepageBanner from '../components/homepageComponent/homepageBanner';


const BlogLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 4px;
  margin: 0 2px;

`;
const BlogTitle = styled.h3`
  margin-bottom: 20px;
  &:hover {
    color: #1dcaff;
  }
`;

const StyledLinks = styled(Link)`
  margin: 10px;
  width: 20%;
`;

const StyledLinkContainer = styled.div`
  display:flex;
  justify-content: space-around
`;
export default ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HomepageFirstHero>
      <HomepageBanner title="This Billy's Everything " info="Let me show You more of Myself if you are my">
        <StyledLinkContainer>
          <StyledLinks to="/blog/" className="btn-white"> Friend</StyledLinks>
          <StyledLinks to="/blog/" className="btn-white"> Colleague</StyledLinks>
        </StyledLinkContainer>
      </HomepageBanner>
    </HomepageFirstHero>

  </Layout>
);


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
  
`;

// {
//   data.allMarkdownRemark.edges.map(({ node }) => (
//     <div key={node.id}>
//       <BlogLink to={node.fields.slug}>

//         <BlogTitle>
//           {node.frontmatter.title}
//           --
//           {node.frontmatter.date}
//         </BlogTitle>
//       </BlogLink>
//       <p>
//         {node.excerpt}
//       </p>
//     </div>
//   ))
// }
