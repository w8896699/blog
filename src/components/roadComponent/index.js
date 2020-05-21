import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ProjectPage from './Project';
import StyledHero from '../StyledHero';
import project from '../../constants/projects';
import Title from '../Title';

const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/snowMount.png" }) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

const StyledProjectPageContainer = styled.div`
    display:block;
    margin-bottom:10px;
    justify-content:center;

`;

const ExperiencePage = () => {
  const { file } = useStaticQuery(query);
  return (
    <StyledHero
      height="400vh"
      img={file.childImageSharp.fluid}
    //   radius="linear-gradient(rgba(0, 0, 0, 0.43), rgba(0, 0, 0, 0.06)) 20% 30% "
    >
      <div>
        <Title SectionNumber="02" title="Projects" subtitle="Projects that I have been worked on in previous work experiences" />
        <StyledProjectPageContainer>
          {
            project.map((element) => (
              <ProjectPage key={element.id} project={element} />
            ))
         }
        </StyledProjectPageContainer>
      </div>

      This is experience page
    </StyledHero>


  );
};

export default ExperiencePage;
