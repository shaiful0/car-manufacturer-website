import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Review from './Review';

const Reviews = () => {
  const [user] = useAuthState(auth);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?userName=${user?.email}`)
      .then(res => res.json())
      .then(data => setReviews(data))
  }, [user])
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>User Reviews</h1>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {
          reviews.map(review => <Review
            key={review._id}
            review={review}
          ></Review>)
        }
      </div>

    </div>
  );
};

export default Reviews;