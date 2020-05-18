/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';

const StyledFooter = styled.footer`
    margin-top: auto;
    background: var(--mainBlack);
    padding: 2rem;
    text-align: center;
    color: var(--mainWhite);

`;

// const StyledNavLinks = styled.div`
//   width:50vw;
//   display: flex;
//   justify-content : space-around;
//   margin:auto;
//   list-style-type: none;
// `;

const StyledLink = styled(Link)`
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    color: var(--mainWhite);
    margin: 0.5rem 1rem;
    letter-spacing: var(--mainSpacing);
    transition: var(--mainTransition);
    font-weight: bolder;
  :hover {
  color: var(--primaryColor);
  }
`;

const StyledNavSocialLink = styled.a`
    display: inline-block;
    margin: 1rem;
    font-size: 1.3rem;
    color: var(--mainWhite);
    transition: var(--mainTransition);
    :hover {
    color: var(--primaryColor);
    }
`;

const StyledCopyRight = styled.div`
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
    line-height: 2;
`;

const Footer = () => (
  <StyledFooter>
    <div>
      {
            links.map((item, index) => (
              <StyledLink key={index} to={item.path}>
                {item.text}
              </StyledLink>
            ))

          }
    </div>
    <div>
      {
            socialIcons.map((item, index) => (
              <StyledNavSocialLink key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </StyledNavSocialLink>
            ))
          }
    </div>
    <StyledCopyRight>
      CopyRight &copy;Billy Li profile WebSide.

      {`${new Date().getFullYear()}.`}

      DO NOT COPY!
    </StyledCopyRight>

  </StyledFooter>

);
export default Footer;
