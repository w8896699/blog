import React from 'react';
import styled from 'styled-components';


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
border-bottom: 1px solid var(--mainBlack);
padding: 10px;
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

`;

const StyledParagraph = styled.p`
letter-spacing: 3px;

`;


const pad = (d) => ((d < 10) ? `0${d.toString()}` : d.toString());
const ProjectPage = ({ project }) => {
  console.log('hiahia', project);
  return (
    <StyledContainer>
      <StyledTitleContainer>

        <StyledBall>
          {pad(project.id)}
        </StyledBall>

        <StyledProjectTitle href={project.url} target="_blank" rel="noopener noreferrer">
          {project.projectName}
        </StyledProjectTitle>
      </StyledTitleContainer>
      <div>

        <StyledParagraph>{project.description}</StyledParagraph>
      </div>
    </StyledContainer>
  );
};

export default ProjectPage;
