import React from 'react';

const ExtraOne = () => {
  return (
    <div>
      <h1 className='text-3xl text-center font-bold'>Leave a Comment</h1>
      <div className='mx-48'>
      <label class="label">
        <span class="label-text">Email</span>
      </label>
      <input type="email" placeholder="Type your Email" class="input input-bordered input-secondary w-full max-w-xs" />
      <label class="label">
        <span class="label-text">Message</span>
      </label>
      <textarea name="message"className='border input-secondary' id="" cols="50" rows="5" placeholder='write your comment'></textarea>
      </div>
    </div>
  );
};

export default ExtraOne;