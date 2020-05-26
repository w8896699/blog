import React, { useState } from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { FaMap } from 'react-icons/fa';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { PropTypes } from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

const getDefaultImage = graphql`
query {
  file(relativePath: { eq: "defaultPic.JPG" }) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`;

const StyledArticle = styled.article`
  max-height: 25rem;
  box-shadow: var(--lightShadow);
  transition: var(--mainTransition);
  :hover {
  box-shadow: var(--darkShadow);
}
`;

const StyledImage = styled(Image)`
    max-height: 19.5rem;
 transition: var(--mainTransition);

`;

const StyledAniLink = styled(AniLink)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
 
  border: 2px solid var(--mainWhite);
  padding: 0.5rem 0.7rem;
  display: inline-block;
  transition: var(--mainTransition);
  cursor: pointer;
  background: var(--mainWhite);
  color: var(--primaryColor);
  :hover {
    color: var(--offWhite);
  background: var(--primaryColor);

}
`;

const StyledImageContainer = styled.div`
  position: relative;
  background: var(--offWhite);
  transition: var(--mainTransition);
  :hover ${StyledImage}{
  opacity: 0.3;
}
:hover ${StyledAniLink}{
  opacity: 1;
}

`;

const StyledFooter = styled.div`
  padding: 1rem;
  text-align: left;
`;
const StyledInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-transform: uppercase;
  align-items: center;
  margin-top: 0.5rem;
 h5,
 h4 {
  margin: 0;
}
`;
const StyledTitle = styled.h3`
  text-transform: capitalize;
  margin: 0;
`;

const StyledIcon = styled(FaMap)`
  margin-right: 0.4rem;
`;

const StyledLocation = styled.h5`
  text-transform: capitalize;
  color: var(--primaryColor);
  display: flex;
  align-items: center;
`;

const StyledDate = styled.div`
  color: var(--darkGrey);
  text-transform: uppercase;
  text-align: right;
}
`;
const ContentfulCard = ({ blog, currentSlug }) => {
  // const [displayImage, setDisplayImage] = useState(null); //用不了不知道为啥,
  const defaultImageData = useStaticQuery(getDefaultImage);
  const defaultImage = defaultImageData.file.childImageSharp.fluid;
  const {
    title, slug, updatedAt, picture, country,
  } = blog;

  let displayImage;
  if (picture) {
    displayImage = picture[0].fluid;
  } else {
    displayImage = defaultImage;
  }

  // if (picture) {
  //   setDisplayImage(picture[0].fluid);
  // } else {
  //   setDisplayImage(defaultImage);
  // }
  return (
    <StyledArticle>
      <StyledImageContainer>
        <StyledImage id="img" fluid={displayImage} alt="Cover Picture" />
        <StyledAniLink fade to={`/${currentSlug}/${slug}`}>Details</StyledAniLink>
      </StyledImageContainer>
      <StyledFooter>
        <StyledTitle>{title}</StyledTitle>
        <StyledInfo>
          {country
          && (
          <StyledLocation>
            <StyledIcon />
            {country}
          </StyledLocation>
          ) }

          <StyledDate>
            {updatedAt.slice(0, 10)}
          </StyledDate>
        </StyledInfo>
      </StyledFooter>
    </StyledArticle>
  );
};


ContentfulCard.prototype = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    picture: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};

export default ContentfulCard;
