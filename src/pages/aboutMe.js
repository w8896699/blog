import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import StyledHero from '../components/StyledHero';
import AboutMe from '../components/aboutComponent/AboutMe.component';

const StyledStyledHero = styled(StyledHero)`
  color:var(--offWhite);
`;
const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/white-headphone.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
const aboutMe = () => {
  const { file } = useStaticQuery(query);
  return (
    <Layout>
      <StyledStyledHero
        height="50vh"
        img={file.childImageSharp.fluid}
      />
      <AboutMe />
    </Layout>
  );
};

export default aboutMe;
