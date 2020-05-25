import React from 'react';
import styled from 'styled-components';

const StyledTimePeriod = styled.div`
color: var(--primaryColor);
letter-spacing: 3px;
`;
const StyledInstitution = styled.h4`
color: var(--offWhite);
margin: 0 0 1.6rem 0;
font-size: 1.2rem;
`;
const StyledRole = styled.div`
    font-weight: bolder;
    font-family:'Lato';
    font-size: 1rem;
`;
const StyledDescription = styled.p`
    letter-spacing:2px;
    font-family:'Poppins';
`;
const Experience = ({ experience }) => (
    <div>
      <span className="circle" />
      <StyledTimePeriod>
        {experience.timePeriod}
      </StyledTimePeriod>
      <StyledInstitution>
        {experience.institution}
      </StyledInstitution>
      <StyledRole>
        {experience.role}
      </StyledRole>
      <StyledDescription>
        {experience.description}
      </StyledDescription>
    </div>
  );

export default Experience;
