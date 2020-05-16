import React from 'react';

const Footer = () => (
  <div>
    <footer>
      ©
      {new Date().getFullYear()}
      Footer , Built with
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  </div>
);
export default Footer;
