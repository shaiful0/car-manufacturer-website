import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddReview = () => {
  const [user] = useAuthState(auth);


  const reviewRef = useRef()


  const postReview = event => {
    event.preventDefault();

    const review = reviewRef.current.value
    const reviews = {
      userName: user.displayName,
      userReview: review
    }
    fetch('https://afternoon-hamlet-58806.herokuapp.com/reviews', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviews)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
  }


  return (
    <div>
      <h1 className='text-3xl'>Add a Review</h1>
      <form onSubmit={postReview}>
        <div className='flex '>
          <div className="card w-80 shadow-xl">
            <div className="card-body">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" value={user?.displayName} placeholder="name" className="input input-bordered input-success w-full max-w-xs" />
              <label className="label">
                <span className="label-text">write your review</span>
              </label>
              <input type="text" ref={reviewRef} placeholder="Type your review" className="input input-bordered input-success w-full max-w-xs" />
              <button className="btn btn-primary">Post Review</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;