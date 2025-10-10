import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import BlogList from './BlogList';
// 3024*3493
const getBlogs = graphql`
{
    blog: allContentfulBlog {
      edges {
        node {
          id
          slug
          title
          date(formatString: "MMMM D, YYYY")
          picture {
            fluid(maxWidth: 600, quality: 85) {
                ...GatsbyContentfulFluid_withWebp
            }
            title
          }
          country
        }
      }
    }
  }
  
`;

const Blogs = () => {
  const response = useStaticQuery(getBlogs);
  const blogs = response.blog.edges;
  return (


    <BlogList blogs={blogs} />


  );
};

export default Blogs;
