import React, { useContext, useState } from 'react';
import Navbar from '../components/Navbar';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Rester = () => {
    const {creatLogin,setUser,updateDataProfile}= useContext(AuthContext)
    const [error,setError]=useState({})
    const navigate =useNavigate()


    const handleSubmit=(e)=>{
        e.preventDefault()

        // get from data
        const form = new FormData(e.target)
        const name =form.get('name')
        if(name.length <5){
          setError({...error, name:'must have been 5 charecter long'})
          return;
        }
        const email =form.get('email')
        const photo =form.get('photo')
        const password =form.get('password')
        creatLogin(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            setUser(user)
            updateDataProfile({displayName:name, photoURL:photo})
            .then(()=>{
              navigate('/');

            }) .catch(err =>{
             
            })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            
            // ..
          });

    };
    return (
        <div className='bg-base-200 font-poppins'>
           <header className='w-11/12 mx-auto'>
           <Navbar></Navbar>
           </header>

            <div className="hero  min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-2xl font-bold">Register Your Account</h1>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        
      <form onSubmit={handleSubmit} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
        {
          error.name &&(
            <label className="label text-xs text-red-600">
            {error.name}
          </label>
          )
        }
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
        </div>
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
          <label className="label">
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Registation </button>
        </div>
        <p className='mt-8'>Alrady Have an Account <NavLink className='text-blue-700 font-extrabold' to='/login'>Log in</NavLink></p>
      </form>
    </div>
  </div>
            </div>
        </div>
    );
};

export default Rester;