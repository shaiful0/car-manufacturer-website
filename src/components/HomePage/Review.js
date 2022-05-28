import React from 'react';

const Review = ({ review }) => {
  const { userName, userReview } = review;
  return (
    <div className="card w-96 bg-base-100 shadow-xl my-5">
      <div className="card-body">
        <h2 className="card-title">{userName}</h2>
        <p>{userReview}</p>
      </div>
    </div>
  );
};

export default Review;