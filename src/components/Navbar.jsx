import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png'
import { AuthContext } from '../provider/AuthProvider';

const Navbar = () => {
    const {user,logOut}=useContext(AuthContext)

    return (
        <div className='flex flex-wrap  justify-between py-2 items-center'>
            <div className=''></div>
            <div className='nav space-x-6 text-gray-500 font-semibold '>
                <NavLink className='hover:bg-green-400 p-2 rounded-lg hover:text-black ' to='/'> Home</NavLink>
                <NavLink className='hover:bg-green-400 p-2 rounded-lg  hover:text-black ' to='/career'>career</NavLink>
                <NavLink className='hover:bg-green-400 p-2 rounded-lg   hover:text-black' to='/about'>About</NavLink>

            </div>
            <div className='login'>
                <div className='flex items-center font-semibold gap-2'>
                    {
                        user && user?.email? <>
                        <img className='w-10 rounded-full' src={user?.photoURL} alt="" />
                        <p>{user?.displayName}</p>
                        </>:<img src={userIcon} alt="" />
                    }
                    {
                        user&& user?.email? <button onClick={logOut} className='btn btn-neutral hover:bg-green-400' >Log-Out</button>
                        : <><NavLink to='/login' className='btn btn-neutral hover:bg-green-400 hover:text-black'>Log In </NavLink>
                    <NavLink to='/rester' className='btn btn-neutral hover:bg-green-400 hover:text-black'>Restation  </NavLink></>
                    }

                    
                </div>

            </div>
            
        </div>
    );
};

export default Navbar;
