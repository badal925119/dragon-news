import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const {signIn,setUser}=useContext(AuthContext)
  const [error,setError]= useState({})
  const location = useLocation()
  const navigate =useNavigate()
  const handleLogin =(e)=>{
    e.preventDefault()
    const form =e.target;
    const email=form.email.value;
    const password =form.password.value;
    signIn(email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      setUser(user)
      navigate(location?.state? location.state :'/')
      // ...
    })
    .catch((err) => {
      setError({...error, login:err.code})
      const errorMessage = error.message;
    });

  }
    return (
        <div className='bg-base-200 font-poppins'>
            <header className='w-11/12 mx-auto'>
            <Navbar></Navbar>
            </header>

            <div className="hero min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Login Your Account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          {
            error.login && (
              <label className="label text-sm text-red-600">
            {error.login}
          </label>
            )
          }
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p className='mt-8'>Please Registation <NavLink className='text-red-500 font-extrabold' to='/rester'>Registation </NavLink></p>
      </form>
    </div>
  </div>
            </div>
            
        </div>
    );
};

export default Login;