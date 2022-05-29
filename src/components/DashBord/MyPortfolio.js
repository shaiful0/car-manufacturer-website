import React from 'react';
import me from '../../image/me.jpg'

const MyPortfolio = () => {
  return (
    <div>
      <h3 className='text-3xl text-center'>My protfolio</h3>
      <div className='flex p-5 m-5'>
        <div>
          <p className='p-5 '>Hey! I'm Shariful islam I am student.
            My mission this year is to be a web developer. I am constantly working hard for this and hopefully I will be able to reach my destination.</p>
          <p>Email:shariful0401@gmail.com</p>
          <p>Education:University 4th year (Communication Engimeering)</p>
          <ul>
            <p className='text-2xl'>List of Technologies</p>
           <li>1.HTML</li>
           <li>2.CSS</li>
           <li>2.Bootstrap</li>
           <li>2.Tailwind</li>
           <li>2.Javascript</li>
           <li>2.JS React</li>
           <li>2.Node JS</li>
           <li>2.MongoDB</li>
          </ul>

          <p className='text-2xl'>Live site Links:</p>
          <ul>
            <li><a href="https://perfume-house-6d883.web.app/">1.https://perfume-house-6d883.web.app/</a></li>
            <li><a href="https://personal-website-dr-mich-260f3.web.app/">2.https://personal-website-dr-mich-260f3.web.app/</a></li>
            <li><a href="https://bespoke-douhua-429389.netlify.app/">3.https://bespoke-douhua-429389.netlify.app/</a></li>
            <li><a href="https://sad-allen-9ee8b8.netlify.app/">4.https://sad-allen-9ee8b8.netlify.app/</a></li>
            <li><a href="https://venerable-bonbon-639db3.netlify.app/">5.https://venerable-bonbon-639db3.netlify.app/</a></li>
          </ul>
        </div>
        <img style={{ height: '200px' }} src={me} alt="" />
      </div>

    </div>
  );
};

export default MyPortfolio;