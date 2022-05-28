import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navbar = () => {
  const [user] = useAuthState(auth);
  const userSignOut = () =>{
    signOut(auth)
    localStorage.removeItem('accessToken')
  }
  return (
<div className="navbar justify-between">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>DashBord</a></li>
        <li><a>DashBord</a></li>
        <li><a>DashBord</a></li>
        <li><a>DashBord</a></li>
      </ul>
    </div>
    <h1 className="text-2xl font-bold">Car Home</h1>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 mx-10">
      <li><Link to='/'>Home</Link></li>
      {user && <li><Link to='/purchaes/itemId'>Purchase</Link></li>}
      {
        user && <li><Link to='/dashbord'>Dashbord</Link></li>
      }
      <li><Link to='/blogs'>Blogs</Link></li>
  
      {user &&  <li><Link to='/addproduct'>Add Products</Link></li>}
      {
        user?
        <button className='btn btn-accent btn-circle' onClick={userSignOut}>sign out</button>
        :
        <li><Link to='/login'>Login</Link></li>
        }
    </ul>
  </div>
</div>
  );
};

export default Navbar;