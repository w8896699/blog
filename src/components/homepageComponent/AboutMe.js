/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import SelfIntro from './roadComponent/SelfIntro';
import Title from '../Title';
import StyledHero from '../StyledHero';
import skills from '../../constants/skills';
import './Typist.css';


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


const StyledStyledHero = styled(StyledHero)`
  display:block;
  color:black;
`;

const StyledDiv = styled.div`
  font-family:Patrick Hand;
  padding:1rem 1.2rem;
  margin: -1rem auto;
  color: var(--mainWhite);
  width:70%;
  opacity:0.7;
  font-weight: bolder;
  letter-spacing: 2px;
  ${''}

 /* box-shadow:5px 5px 5px var(--mainBlack); */
  
`;
const StyledContainer = styled.div`
  height: 6rem;
@media screen and (max-width: 899px) {
  display:none;
}
`;

const StyledListContainer = styled.ul`
    list-style-type: none;
    overflow: hidden;
    padding:0;
    text-align: center;
    
    @media screen and (min-width: 992px) {
      margin-block-start: 3rem;
      height: auto;
      flex: 0 400px;
    }
`;

const StyledSkill = styled.li`
  margin:13px;
`;


const AboutMe = () => {
  const { file } = useStaticQuery(query);
  // const [onview, ChangeView] = useState(false);

  return (
    <section id="AboutMe">
      <StyledStyledHero img={file.childImageSharp.fluid} radius="linear-gradient(rgba(38, 47, 47, 0.7), rgba(21, 22, 23, 0.7))">
        i
        <Title SectionNumber="01" title="About Me" subtitle=" My Technical skills and Experienced development tools" />
        <StyledDiv>
          <StyledContainer>
            <SelfIntro />
          </StyledContainer>
          <StyledListContainer>
            {skills.map((element, index) => (
              <StyledSkill key={index}>{element.skill}</StyledSkill>
            ))}
          </StyledListContainer>
        </StyledDiv>
      </StyledStyledHero>
    </section>
  );
};


export default AboutMe;
