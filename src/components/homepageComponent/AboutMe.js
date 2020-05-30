/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled, { keyframes } from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
// import Background from './Background';
import Typical from 'react-typical';
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

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: orange }
`;


const StyledAutoType = styled.div`
  color: #fff;
  font-family: monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    ${typing} 3.5s steps(30, end),
    ${blinkCaret} .5s step-end infinite;

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
  width:55%;
  opacity:0.7;
  font-weight: bolder;
  letter-spacing: 2px;
  text-align:center;
 /* box-shadow:5px 5px 5px var(--mainBlack); */
  
`;
const StyledContainer = styled.div`
  ${''}
  height: 6rem;
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


const AboutMe = () => {
  const { file } = useStaticQuery(query);
  return (
    <section id="AboutMe">
      <StyledStyledHero img={file.childImageSharp.fluid} radius="linear-gradient(rgba(38, 47, 47, 0.7), rgba(21, 22, 23, 0.7))">
        i
        <Title SectionNumber="01" title="About Me" subtitle=" My Technical skills and Experienced development tools" />
        <StyledDiv>
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
