import React from 'react';

const ExtraTwo = () => {
  return (
    <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Subscribe and Stay With US</h1>
      <p class="py-6">Manufacturer is high end manufacturing services are a  perfect complement to today’s high tech industries. For our letest infomation and letest products news.</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control mt-6">
          <button class="btn btn-primary">subscribe</button>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};

export default ExtraTwo;