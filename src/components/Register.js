import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import useToken from './hooks/useToken';

const Register = () => {
  const [signInWithGoogle, gUser, loading, gError] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const emailRef = useRef('');
  const passwordRef = useRef('');
  let signInError;
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  

  const [createUserWithEmailAndPassword , user, error] = useCreateUserWithEmailAndPassword(auth);
  const [token] = useToken(gUser || user);

 
 const handleCreateUser = async event =>{
   event.preventDefault();
   const email = emailRef.current.value;
   const password = passwordRef.current.value;
  //  console.log(email,password);
   await createUserWithEmailAndPassword(email,password);
  // navigate('/');
 }

 if (token) {
  navigate('/');
}
if(error || gError){
  signInError = <small><p className='text-red-500'>{error?.message || gError?.message}</p></small>
}

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Register</h2>
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
              {signInError}
            <input className='btn w-full max-w-xs text-white' type="submit" value='Register' />
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