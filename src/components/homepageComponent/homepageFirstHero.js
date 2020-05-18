import React from 'react';

const HomepageFirstHero = ({ children }) => {
  console.log('hiahia');
  return (
    <header className="defaultHero">
      {children}
    </header>
  );
};

export default HomepageFirstHero;
