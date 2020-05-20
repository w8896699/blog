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
    background:${(props) => (props.radius ? props.radius : 'none')};
    background-position: center;
    background-size:cover;
    opacity:1!important;
    display:block;
    justify-content:center;
    align-items:center;

`;
