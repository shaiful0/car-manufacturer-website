import React from 'react';
import banner from '../../image/banner.jpeg'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} class="md:w-2/4 sm:w-1/4 lg:w-2/4 rounded-lg " />
        <div>
          <h1 class="text-5xl font-bold">LETEST & POWERFUL PRODUCTS</h1>
          <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button class="btn btn-primary cir">SHOP NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;