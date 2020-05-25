import React from 'react';
import styled from 'styled-components';
import { StyledInfo } from './homepageComponent/homepageBanner';


const StyledDiv = styled.div`
    text-align:center;
    color: var(--offWhite);
   
`;

const StyledTitleWrapper = styled.h4`
Text-transform:uppercase;
font-size:2.3rem;
margin-bottom:1rem;
text-align:center;
letter-spacing: 7px;
@media screen and (max-width: 567px) {
            margin:0 0.35rem;
            font-size:1.5rem;
    }

`;
const StyledSubtitle = styled(StyledInfo)`
  color:${(props) => (props.showSub ? 'var(--mainBlack)' : 'var(--offWhite)')}
`;


const StyledSectionNum = styled.span`
 /* font-family: 'ZCOOL KuaiLe'; */
color: var(--primaryColor);;
margin:1rem;
`;

const StyledTitle = styled.span`
${(props) => (props.height ? props.height : '100vh')};
color:${(props) => (props.black ? 'var(--mainBlack)' : 'var(--offWhite)')}

`;


const Title = ({
  SectionNumber, title, subtitle, black, showSub,
}) => (
  <StyledDiv>
    <StyledTitleWrapper>
      <StyledSectionNum>{SectionNumber}</StyledSectionNum>
      <StyledTitle black={black}>{title}</StyledTitle>
    </StyledTitleWrapper>
    <StyledSubtitle showSub={showSub}>{subtitle}</StyledSubtitle>
  </StyledDiv>
);

export default Title;
