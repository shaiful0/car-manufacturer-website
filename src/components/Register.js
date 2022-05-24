import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const Register = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  if (user) {
    navigate(from, { replace: true });
  }
 const handleCreateUser = event =>{
   event.preventDefault();
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
   console.log(email,password);
   createUserWithEmailAndPassword(email,password)
 }

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>
          <form onSubmit={handleCreateUser}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" ref={emailRef} placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
              <label className="label">
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" ref={passwordRef} placeholder="Your Password" className="input input-bordered w-full max-w-xs" />
              <label className="label">
              </label>
            </div>

            <input className='btn w-full max-w-xs text-white' type="submit" value='Login' />
          </form>
          <p className='text-black'>Already have an account? <Link className='text-secondary' to='/login'>Please login</Link></p>
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">Continue with Google</button>
        </div>
      </div>
    </div>
  );
};

export default Register;