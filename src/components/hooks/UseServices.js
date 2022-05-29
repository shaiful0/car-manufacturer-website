import { useEffect, useState } from 'react';

const UseServices = () => {
  const [services ,setServices] = useState([]);
  useEffect(() => {
    const url = `https://afternoon-hamlet-58806.herokuapp.com/items`;
    fetch(url)
    .then(res => res.json())
    .then(data => setServices(data))
  },[])
  return [services, setServices];
};

export default UseServices;