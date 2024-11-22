import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNavbar from '../components/Layout-components/LeftNavbar';
import RightNav from '../components/Layout-components/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <div className='font-poppins'>
            {/* Header Section  */}
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto'>
                    <LatestNews></LatestNews>
                </section> 
            </header>

            {/* Navbar Section */}
            <nav>
            <section className='w-11/12 mx-auto my3'>
                    <Navbar></Navbar>
                </section>
            </nav>

            {/* Mian Section */}
            <main className='w-11/12 mx-auto my-2 grid md:grid-cols-12 gap-3'>
            <aside className='col-span-3'><LeftNavbar></LeftNavbar></aside>
            <section className=' col-span-6'><Outlet></Outlet></section>
            <aside className='col-span-3'><RightNav></RightNav></aside>

            </main>
        </div>
    );
};

export default HomeLayout;