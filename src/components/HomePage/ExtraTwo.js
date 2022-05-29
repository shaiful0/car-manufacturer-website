import React from 'react';

const ExtraTwo = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Subscribe and Stay With US</h1>
      <p className="py-6">Manufacturer is high end manufacturing services are a  perfect complement to today’s high tech industries. For our letest infomation and letest products news.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ExtraTwo;