import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const DashBord = () => {
  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col mx-auto">
        <h1 className='text-3xl font-bold'>My Dashbord</h1>
          <Outlet></Outlet>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open dashbord</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li><Link to='/dashbord'>My orders</Link></li>
          <li><Link to='/dashbord/review'>Add a Review</Link></li>
          <li><Link to='/dashbord/profile'>My Profile</Link></li>
          <li><Link to='/dashbord/users'>All users</Link></li>
        </ul>

      </div>
    </div>
  );
};

export default DashBord;