import { useEffect, useState } from 'react';

const UseServices = () => {
  const [services ,setServices] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/items`;
    fetch(url)
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return [services, setServices];
};

export default UseServices;