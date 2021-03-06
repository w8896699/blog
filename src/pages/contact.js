import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import StyledHero from '../components/StyledHero';
import Contact from '../components/contactComponent/ContactBox';

const StyledStyledHero = styled(StyledHero)`
  color:var(--offWhite);
`;

const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/connectBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const contact = () => {
  const { file } = useStaticQuery(query);
  return (
    <Layout>
      <StyledStyledHero
        height="50vh"
        img={file.childImageSharp.fluid}
      />

      <Contact />
    </Layout>
  );
};

export default contact;
