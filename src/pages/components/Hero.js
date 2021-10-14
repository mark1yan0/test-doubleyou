import React from 'react';

const Hero = ({ title, page }) => {
  return (
    <section className={`hero-container ${page}`}>
      <h1 className='hero-title'>{title}</h1>
    </section>
  );
};

export default Hero;
