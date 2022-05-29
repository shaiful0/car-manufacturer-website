import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../ParchasePage/Loading';
import UserRow from './UserRow';

const Users = () => {
  // const {data: users, isLoading} = useQuery('users', () => fetch('https://afternoon-hamlet-58806.herokuapp.com/user').then(res => res.json()))

  // if(isLoading){
  //   return <Loading></Loading>
  // }
  const [users, setUsers,] = useState([]);
  useEffect(() =>{
    fetch('https://afternoon-hamlet-58806.herokuapp.com/user')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h3>All users:{users.length}</h3>
      <div className="overflow-x-auto">
  <table className="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Make admin</th>
        <th>Remove admin</th>
      </tr>
    </thead>
    <tbody>
    {
      users.map(user => <UserRow
      key={user._id}
      user={user}
      
      ></UserRow>)
    }
    </tbody>
  </table>
</div>
    </div>
  );
};

export default Users;