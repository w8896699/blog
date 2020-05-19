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
const StyledLinks = styled(Link)`
  margin: 10px;
  width: 20%;
`;

const StyledLinkContainer = styled.div`
  display:flex;
  justify-content: space-around
`;
const FirstHomePage = () => {
  const { file } = useStaticQuery(query);
  return (
    <FirstHomePgHero home="true" img={file.childImageSharp.fluid} height="calc(100vh - 72px)">
      <HomepageBanner title="This Billy's Everything " info="Let me show You more of Myself if you are my">
        <StyledLinkContainer>
          <StyledLinks to="/blog/" className="btn-white"> Friend</StyledLinks>
          <StyledLinks to="/blog/" className="btn-white"> Colleague</StyledLinks>
        </StyledLinkContainer>
      </HomepageBanner>
    </FirstHomePgHero>
  );
};


export default FirstHomePage;
