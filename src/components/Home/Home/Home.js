import React from 'react';
import Features from '../../Features/Features';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews'

const Home = () => {
    return (
        <div>
           
           <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
           <Features></Features>
           <Footer></Footer>
           
        </div>
    );
};

export default Home;