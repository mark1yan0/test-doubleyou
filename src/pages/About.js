import React from 'react';
//components

const About = () => {
  return (
    <div className='page page-about'>
      <section className='about-content'>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
            impedit beatae possimus quas odio odit illum, iusto eveniet id dolor
            fuga recusandae obcaecati. Est amet eaque asperiores necessitatibus
            exercitationem!
          </p>
        </div>
        <img
          src='https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
          alt='office'
        />
      </section>

      <section className='about-content about-content-reverse'>
        <img
          src='https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80'
          alt='meeting'
        />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            aspernatur repudiandae totam aliquid officia ipsam harum quia nisi
            aperiam rem tempore voluptate ullam voluptates excepturi eligendi
            molestias maxime, nesciunt iure.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
