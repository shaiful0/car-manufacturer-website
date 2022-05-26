import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ item }) => {
  
  const { _id, name, img, description, price,quantity} = item;


const navigate = useNavigate();
  const bookNow = id =>{
    navigate(`/purchaes/${id}`)
  }
  return (
    <div>
      <div class="card w-96 my-5 bg-base-100 shadow-xl">
        <figure><img className='h-40 rounded' src={img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">{name}</h2>
          <p>Discription:{description}</p>
          <p>Price:{price}</p>
          <p>Quantity:{quantity}</p>
          <div class="card-actions justify-end">
            <button onClick={() => bookNow(_id)} class="btn btn-primary items-center">Book Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;