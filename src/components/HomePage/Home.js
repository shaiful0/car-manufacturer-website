import React from 'react';
import Banner from './Banner';
import Services from './Services';
import Reviews from './Reviews';
import Summary from './Summary';
import ExtraOne from './ExtraOne';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Reviews></Reviews>
      <Summary></Summary>
      <ExtraOne></ExtraOne>
    </div>
  );
};

export default Home;