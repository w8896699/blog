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
    }

`;
const StyledSubtitle = styled(StyledInfo)`
  color: ghostwhite;
`;


const StyledSectionNum = styled.span`
 /* font-family: 'ZCOOL KuaiLe'; */
color: var(--primaryColor);;
margin:1rem;
`;

const StyledTitle = styled.span`
color:var(--offWhite);
`;


const Title = ({ SectionNumber, title, subtitle }) => (
  <StyledDiv>
    <StyledTitleWrapper>
      <StyledSectionNum>{SectionNumber}</StyledSectionNum>
      <StyledTitle>{title}</StyledTitle>
    </StyledTitleWrapper>
    <StyledSubtitle>{subtitle}</StyledSubtitle>

  </StyledDiv>
);

export default Title;
