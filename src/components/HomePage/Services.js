import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://afternoon-hamlet-58806.herokuapp.com/items')
      .then(res => res.json())
      .then(data => setItems(data))
  }, [])
  return (
    <div>
      <h2 className='text-3xl text-center font-bold text-green-500'>Our Parts</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5 p-5 '>
        {
          items.slice(0,6)?.map(item => <Service
            key={item._id}
            item={item}
          ></Service>)
        }
      </div>
    </div>
  );
};

export default Services;