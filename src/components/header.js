/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
// import { Link } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styled from 'styled-components';
import { IoIosOptions } from 'react-icons/io';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import Logo from '../images/logo/logo.svg';
// 如果缩小了, nav和body之间有一处空白,我不知道到底是咋回事


const StyledNav = styled.nav`

  @media screen and (min-width: 992px) {
    height: 72px; 
    }
    background-color:var(--mainWhite);
`;
// 992px 以上就切用这个
const StyledNavCenter = styled.div` 
margin: 0px;
position: -webkit-sticky;
position: sticky;

 @media screen and (min-width: 992px) {
      height:86px;
      max-width: 1170px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
 }
`;

// 这个是缩小了之后需要的css
const StyledNavBarHeader = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 0rem;
  
`;


const StyledMenueBtn = styled.button`
 background: transparent;
    border: none;
    outline: none;
  
  .logoBtn:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 992px) {
      display: none;
    }
`;

const StyledMenueIcon = styled(IoIosOptions)`
    color: var(--primaryColor);
    font-size: 2rem;
`;

const StyledImgLogo = styled.img`
  width:  150px;
}
`;

const StyledNavLinks = styled.ul`
    list-style-type: none;
    transition: var(--mainTransition);
    height: ${(props) => (!props.toggle ? '0' : '175px')};
    overflow: hidden;
    @media screen and (min-width: 992px) {
      height: auto;
      display: flex;
      flex: 0 600px;
    }
`;


const StyledLink = styled(AniLink)`
    display: block;
    padding: 0.7rem 1.25rem;
    text-decoration: none;
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
    font-weight: bolder;
    letter-spacing: var(--mainSpacing);
 :hover {
    color: var(--primaryColor);
  }
`;

const StyledSocialLinkContainer = styled.div`
  display:none;
  @media screen and (min-width: 992px) {
        display: flex;
        line-height: 0;
  }
`;

const StyledNavSocialLink = styled.a`

  @media screen and (min-width: 992px) {
      color: var(--primaryColor);
      margin: 0 0.5rem;
      font-size: 1.4rem;
      transition: var(--mainTransition);
      :hover {
      color: var(--mainBlack);
      transform: translateY(-10px);
    }
  }
`;


const Header = () => {
  const [isNavOpen, setNavIcon] = useState(false);
  const toggleNav = () => {
    setNavIcon(!isNavOpen);
  };
  return (
    <StyledNav>
      <StyledNavCenter>
        <StyledNavBarHeader>
          <StyledImgLogo src={Logo} alt="blog logo" />
          {/* <h4>{siteTitle}</h4> */}
          <StyledMenueBtn type="button" onClick={toggleNav}>
            <StyledMenueIcon />
          </StyledMenueBtn>
        </StyledNavBarHeader>
        <StyledNavLinks toggle={isNavOpen}>
          {
            links.map((item, index) => (
              <li key={index}>
                <StyledLink fade to={item.path}>
                  {item.text}
                </StyledLink>

              </li>
            ))

          }
        </StyledNavLinks>
        <StyledSocialLinkContainer>
          {
            socialIcons.map((item, index) => (
              <StyledNavSocialLink key={index} href={item.url} target="_blank" rel="noopener noreferrer">
                {item.icon}
              </StyledNavSocialLink>
            ))
          }
        </StyledSocialLinkContainer>
      </StyledNavCenter>
    </StyledNav>
  );
};


export default Header;
