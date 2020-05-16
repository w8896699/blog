import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { AiOutlineUnorderedList } from 'react-icons';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  text-transform: capitalize;
  padding: 0 4px;
  margin: 0 2px;

`;
const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <StyledLink
          to="/"
        >
          {siteTitle}
        </StyledLink>
      </h1>

    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
