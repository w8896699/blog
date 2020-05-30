import React from 'react';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';

import HomepageBanner from './homepageBanner';
import StyledHero from '../StyledHero';

const query = graphql`
  query {
    file(relativePath: { eq: "backgrounds/homePageBG.jpg" }) {
      childImageSharp {
        fluid(quality:90, maxWidth:4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
const FirstHomePgHero = styled(StyledHero)`
    display:flex;
    justify-content:center;
    align-items:center;
`;
export const StyledLinks = styled(Link)`
  margin: 10px;
  width: 30%;
  @media screen and (max-width: 567px) {
    font-size: 0.7rem;
    font-weight:bolder;
    }
`;

const StyledLinkContainer = styled.div`
  display:flex;
  justify-content: space-around;
  @media screen and (max-width: 567px) {
    display:flex;
    justify-content: space-between;
    }
  
`;

// TODO SCROLL EFFECT : https://scotch.io/tutorials/implementing-smooth-scrolling-in-react
//  https://www.youtube.com/watch?v=7f0QXAgFtrE

const FirstHomePage = () => {
  const { file } = useStaticQuery(query);
  return (
    <FirstHomePgHero
      home="true"
      img={file.childImageSharp.fluid}
      height="calc(100vh - 72px)"
      radius="linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))"
      id="FirstHomepage"
    >
      <HomepageBanner title="This Billy's Everything " info="Let me show You more of Myself if you are my">
        <StyledLinkContainer>
          <StyledLinks to="#AboutMe" className="btn-white"> Colleague</StyledLinks>
          <StyledLinks to="/interest/" className="btn-white"> Friend</StyledLinks>
        </StyledLinkContainer>
      </HomepageBanner>
    </FirstHomePgHero>
  );
};


export default FirstHomePage;
