import React from 'react';
import { Link, graphql } from 'gatsby';

import styled from 'styled-components';
import Layout from '../components/layout';
// import Image from "../components/image"
import SEO from '../components/seo';
import FirstHomePage from '../components/homepageComponent/FirstHomePage';
import ExperiencePage from '../components/homepageComponent/roadComponent/index';
import ProfessionalMe from '../components/homepageComponent/ProfessionalMe';


export default () => (
  <Layout>
    <SEO title="Home" />
    <FirstHomePage />
    <ProfessionalMe />
    <ExperiencePage />

  </Layout>
);


// export const query = graphql`
//   query{
//     allMarkdownRemark(sort:{ fields: [frontmatter___date], order: DESC}) {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date
//           }
//           fields{
//             slug
//           }
//           excerpt

//         }
//       }
//     }
//   }

// `;

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
