import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
// import Background from './Background';
import Title from '../Title';
import StyledHero from '../StyledHero';


const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/computer-notebook.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const ProfessionalMe = () => {
  const { file } = useStaticQuery(query);
  return (
    <section>
      <StyledHero img={file.childImageSharp.fluid}>
        This is about page
        <Title SectionNumber="01" title="Professional" subtitle="My experienced development technology" />
      </StyledHero>
    </section>
  );
};

export default ProfessionalMe;
