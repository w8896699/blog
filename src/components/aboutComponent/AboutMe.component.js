import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { element } from 'prop-types';
import styled from 'styled-components';
import Title from '../Title';
import ContentfulCard from '../cardComponent/ContentfulCard';

const getInterest = graphql`
query {
  interest: allContentfulInterest {
    edges {
      node {
        id
        slug
        title
        picture {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
          description
          title
          contentful_id
        }
        updatedAt
      }
    }
  }
}

`;

export const StyledTourSection = styled.section`
  padding: 4rem 0;
  text-align: center;
`;
export const StyledCenterBox = styled.div`
  width: 80vw;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
  @media screen and (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(368.66px, 1fr));
  }
  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 1170px;
}
`;
const AboutMe = () => {
  const response = useStaticQuery(getInterest);
  const interests = response.interest.edges;
  // console.log(interests);
  return (
    <StyledTourSection>
      <Title
        SectionNumber="02"
        title="About Me"
        subtitle="Things that I like"
        black
        showSub
      />
      <StyledCenterBox>
        {
          interests.map(({ node }) => (
            <ContentfulCard key={node.contentful_id} interest={node} />
          ))
        }
      </StyledCenterBox>
    </StyledTourSection>
  );
};

export default AboutMe;
