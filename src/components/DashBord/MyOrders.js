import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyOrders = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://afternoon-hamlet-58806.herokuapp.com/orders?userEmail=${user.email}`)
        .then(res => res.json())
        .then(data => setOrders(data));
    }
  }, [user])

  const handleDelete = id => {
    const sure = window.confirm('are you want to cancle your order?');
    if (sure) {
      const url = `https://afternoon-hamlet-58806.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          const remaining = orders.filter(o => o._id !== id);
          setOrders(remaining)
        });
    }
  };

  return (
    <div>
      <h2>This is my order:{orders.length}</h2>
      <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Product Name</th>
        <th>User Email</th>
        <th>Delete orders</th>
      </tr>
    </thead>
    <tbody>
    {
          orders.map(o => <tr>
            <th>1</th>
            <td>{o.userName}</td>
            <td>{o.orderName}</td>
            <td>{o.userEmail}</td>
            <button onClick={ ()=>handleDelete(o._id)} className='btn btn-circle'>X</button>
          </tr>)
        }
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default MyOrders;