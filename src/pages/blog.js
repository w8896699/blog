// Gatsby supports TypeScript natively!
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import StyledHero from '../components/StyledHero';
import Layout from '../components/layout';
// import SEO from '../components/seo';
import Blogs from '../components/BlogComponent/Blogs.component';
import Title from '../components/Title';

const StyledTitle = styled(Title)`
    padding-top: 7rem!important;
`;
const StyledStyledHero = styled(StyledHero)`
  color:var(--offWhite);

  @media screen and (min-width: 992px) {
    text-align: center;
    }
`;
const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/black-and-silver-film-camera-on-brown-wooden-surface-733853.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const BlogPage = () => {
  const { file } = useStaticQuery(query);
  return (
    <Layout>
      <StyledStyledHero
        height="60vh"
        img={file.childImageSharp.fluid}
      >
        <StyledTitle
          SectionNumber="03"
          title="All Blogs"
          subtitle="Pictures that I like to share."
        />
      </StyledStyledHero>
      <Blogs />
    </Layout>
  );
};

export default BlogPage;
