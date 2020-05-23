import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
// import Background from './Background';
import Title from '../Title';
import StyledHero from '../StyledHero';
import skills from '../../constants/skills';


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

const StyledSection = styled.section`

`;

const StyledStyledHero = styled(StyledHero)`
  display:block;
  color:black;
`;

const StyledDiv = styled.div`
  font-family:Patrick Hand;
  padding:1rem 1.2rem;
  margin: 2rem auto;
  color: var(--mainWhite);
  width:55%;
  opacity:0.7;
  font-weight: bolder;
  letter-spacing: 2px;
  text-align:center;
 /* box-shadow:5px 5px 5px var(--mainBlack); */
  
`;

const StyledListContainer = styled.ul`
    list-style-type: none;
    overflow: hidden;
    padding:0;
    @media screen and (min-width: 992px) {
      height: auto;
      flex: 0 400px;
    }
`;

const StyledSkill = styled.li`
  margin:13px;
`;


const ProfessionalMe = () => {
  const { file } = useStaticQuery(query);
  return (
    <StyledSection id="professional">
      <StyledStyledHero img={file.childImageSharp.fluid} radius="linear-gradient(rgba(38, 47, 47, 0.7), rgba(21, 22, 23, 0.7))">
        i
        <Title SectionNumber="01" title="Professional" subtitle=" My Technical skills and Experienced development tools" />
        <StyledDiv>
          <StyledListContainer>
            {skills.map((element, index) => (
              <StyledSkill key={index}>{element.skill}</StyledSkill>
            ))}
          </StyledListContainer>
        </StyledDiv>
      </StyledStyledHero>
    </StyledSection>
  );
};

export default ProfessionalMe;
