import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';


// home props means the size and ingredians
const StyledHero = ({
  img, className, children, home, height,
}) => (
  <BackgroundImage className={className} fluid={img} home={home} height={height}>
    {children}
  </BackgroundImage>
);

export default styled(StyledHero)`
    min-height:${(props) => (props.height ? props.height : '100vh')};
    background:${(props) => (props.home ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))' : 'none')};
    background-position: center;
    background-size:cover;
    opacity:1!important;
`;
