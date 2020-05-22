import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import ProjectPage from './Project';
import StyledHero from '../StyledHero';
import project from '../../constants/projects';
import Title from '../Title';
import Experiences from './Experiences';

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

const StyledExperienceContainer = styled.div`
    margin-top: 10rem;
    @media screen and (max-width: 992px) {
      margin-top: 3rem; 
    }
`;

const ExperiencePage = () => {
  const { file } = useStaticQuery(query);
  return (
    <StyledHero
      height="400vh"
      img={file.childImageSharp.fluid}
      radius="linear-gradient(rgba(66, 63, 99, 0.88), rgba(45, 54, 70, 0.55)) 20% 30% "
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
      <StyledExperienceContainer>
        <Title SectionNumber="03" title="Experience" subtitle="My Education and work experience so far" />
        <Experiences />
      </StyledExperienceContainer>
    </StyledHero>


  );
};

export default ExperiencePage;
