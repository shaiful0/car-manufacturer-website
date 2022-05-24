import React from 'react';
import Banner from './Banner';
import ExtraPart from './ExtraPart';
import Review from './Review';
import Services from './Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Review></Review>
      <ExtraPart></ExtraPart>
    </div>
  );
};

export default Home;