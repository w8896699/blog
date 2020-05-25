import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

const StyledSection = styled.section`
  padding: 4rem 0;
`;
const StyledCentreDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media screen and (min-width: 992px) {
    width: 50vw;
    margin: 0 auto;

}
`;

const StyledInput = styled.input`
font-family: 'Patrick Hand';
letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
}
`;

const StyledTextArea = styled.textarea`
font-family: 'Patrick Hand';
letter-spacing: 1px;
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
`;
const StyledSubmit = styled.input`
  letter-spacing: 3px;
  font-family: 'Patrick Hand';
  font-weight: bolder;
  background-color: var(--primaryColor);
  border-color: var(--primaryColor);
  text-transform: uppercase;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  cursor: pointer;

  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;

  :hover {
  background: var(--darkGrey);
  color: var(--mainWhite);
  border-color: var(--darkGrey);
}
`;
const StyledLabel = styled.label`
  text-transform: capitalize;
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 900;
`;
const Contact = () => (
  <StyledSection>

    <Title
      SectionNumber="04"
      title="Contact Me"
      subtitle="非诚勿扰啊~"
      black
    />
    <StyledCentreDiv>
      <form action="https://formspree.io/627463434@qq.com" method="POST">
        <div>
          <StyledLabel htmlFor="name">Name</StyledLabel>
          <StyledInput type="text" name="name" id="name" placeholder="whats ur name" />
        </div>
        <div>
          <StyledLabel htmlFor="name">Email</StyledLabel>
          <StyledInput type="email" name="email" id="email" placeholder="email@email.com" />
        </div>
        <div>
          <StyledLabel htmlFor="name">Message</StyledLabel>
          <StyledTextArea rows="10" type="text" name="message" id="message" placeholder="Wanna Say Something to Me?" />
        </div>
        <div>
          <StyledSubmit type="submit" value="submit here" />
        </div>
      </form>
    </StyledCentreDiv>
  </StyledSection>
);

export default Contact;
