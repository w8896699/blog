import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import { FaMap } from 'react-icons/fa';
import Img from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'; // https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/
import styles from './single-blog.module.css';
import Layout from '../components/layout';
import StyledHero from '../components/StyledHero';


const StyledSection = styled.section`
  padding: 4rem 0;
  h2, 
  h4{
  text-transform: capitalize;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 1rem;
}
`;

const StyledCentreDiv = styled.div`
  width: 80vw;
  margin: 0 auto;
  @media screen and (min-width: 1200px) {
    width: 90vw;
    max-width: 1170vw;
  }
`;


const StyledImagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  margin-bottom: 2rem;
  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-column-gap: 50px;
}
`;

const StyledImg = styled(Img)`
  box-shadow: var(--lightShadow);
  max-height: 30.5rem;
  @media screen and (min-width: 1200px) {
    max-height: 21.5rem;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    grid-column-gap: 50px;
}
`;

const StyledInfo = styled.h3`
  display: flex;
  flex-wrap: wrap;
  letter-spacing: 2px;
`;

const StyledLocation = styled.div`
  display: flex;
  ${''}
  align-items: center;
  margin-right: 2rem;
  text-transform: capitalize;
`;


const StyledIcon = styled(FaMap)`
  color: var(--primaryColor);
  font-size: 1.4rem;
  margin-right: 0.5rem;
`;

const StyledLongText = styled.p`
  font-family: 'ZCOOL KuaiLe';
  letter-spacing: 2px;
`;
const contentfulBlog = ({ data }) => {
  const {
    title, date, country, longText: { longText }, picture,
  } = data.blog;
  const [mainPicture, ...blogImages] = picture;

  return (
    <Layout>
      <StyledHero img={mainPicture.fluid} height="50vh" />
      <StyledSection>
        <StyledCentreDiv>
          <StyledImagesContainer>
            {blogImages.map((image) => (
              <StyledImg key={image.id} fluid={image.fluid} alt="single image" />
            ))}
          </StyledImagesContainer>
          <h2>{title}</h2>
          <StyledInfo>
            <StyledLocation>
              <StyledIcon />
              {country}
            </StyledLocation>
          </StyledInfo>
          <h4>
            Last Updated on
            {' '}
            {date}
          </h4>
          <StyledLongText>
            {longText}
          </StyledLongText>
          <AniLink fade="true" to="/aboutMe" className="btn-primary">Go Back</AniLink>
        </StyledCentreDiv>
      </StyledSection>

    </Layout>
  );
};

export const query = graphql`
query getBlog($slug: String!) {
  blog: contentfulBlog(slug: {eq: $slug}) {
    title
    date(formatString: "MMMM D, YYYY")
    country
    longText {
      longText
    }
    picture{
      fluid{
        ...GatsbyContentfulFluid
      }
      id
    }
  }
}
`;

export default contentfulBlog;
