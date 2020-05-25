import React from 'react';
import styled from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';


const StyledContainer = styled.div`
  width:60%;
  border-top: 1px solid var(--mainBlack);
  letter-spacing: var(--mainSpacing);
  font-family: 'Lato';
  margin:0 auto;
  &:last-child{
    border-bottom: 1px solid var(--mainBlack);
        }
`;

const StyledTitleContainer = styled.div`
height:6rem;
padding: 10px;
margin: 30px;
display:flex;
justify-content: space-around;
align-items: center

`;
const StyledProjectTitle = styled.a`
  font-family: 'Lato'; 
  letter-spacing: var(--mainSpacing);
  color: var(--mainWhite);
  border: 2px solid var(--mainWhite);
  padding: 0.9rem 1.6rem;
  display: inline-block;

  transition: var(--mainTransition);
  cursor: pointer;
  :hover {
  background: var(--mainWhite);
  color: var(--primaryColor);
}
@media screen and (max-width: 567px) {
    font-size: 0.5rem;
    font-weight:bolder;
    color: var(--mainBlack);
    padding: 1rem;
    text-align: center;
    }

`;

const StyledBall = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  font-size: 2rem;
  color: var(--offWhite);
  line-height: 88px;
  text-align: center;
  background: var(--primaryColor);
  font-weight: Boldest;

  @media screen and (max-width: 567px) {
    font-size: 1rem;
    font-weight:bolder;
    width: 60px;
    height: 60px;
    line-height: 60px;
    }

`;

const StyledParagraph = styled.p`
letter-spacing: 3px;

`;
const StyledParagraphContainer = styled.div`
position: relative;
`;

const StyledExtraLink = styled.a`
  text-decoration:none;
  color: var(--offWhite);
  ${''}
  bottom: 1px;
  right: 16px;
  font-size: 1rem;
  :hover {
    color: cyan;
  }
`;


const pad = (d) => ((d < 10) ? `0${d.toString()}` : d.toString());
const ProjectPage = ({ project }) => (
  <StyledContainer>
    <StyledTitleContainer>

      <StyledBall>
        {pad(project.id)}
      </StyledBall>

      <StyledProjectTitle href={project.url} target="_blank" rel="noopener noreferrer">
        {project.projectName}
      </StyledProjectTitle>
    </StyledTitleContainer>
    <StyledParagraphContainer>

      <StyledParagraph>{project.description}</StyledParagraph>
      { project.extraUrl
        && (
        <StyledExtraLink href={project.extraUrl} target="_blank" rel="noopener noreferrer">
          Click to See an Example
          {' '}
          <IoIosArrowForward />
        </StyledExtraLink>
        ) }

    </StyledParagraphContainer>
  </StyledContainer>
);

export default ProjectPage;
