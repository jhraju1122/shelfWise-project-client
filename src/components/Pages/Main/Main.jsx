import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Footer from '../../Footer/Footer';
import AllBooks from '../AllBooks/AllBooks';
import BookCategory from '../BookCategory/BookCategory';
import PopularBooks from '../PopularBooks/PopularBooks';
 
const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <AllBooks></AllBooks>
            <BookCategory></BookCategory>
            <PopularBooks></PopularBooks>
            <Footer></Footer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;