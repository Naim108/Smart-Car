import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import './Banner.css'

const Banner = () => {
    return (
       <div className="banner">
           <Header></Header>
            <div >
            <div className="row container">
                <div className="col-md-7 banner-details">
                    <h1>SMART CAR </h1>
                    <h1>TAKE YOUR DESIRE CAR </h1>
                    <p>A car (or automobile) is a wheeled motor vehicle used for transportation. <br />
                         Most definitions of cars say that they run primarily on roads,  seat one-to-eight <br /> people, 
                        have four wheels and mainly transport people rather than goods. </p> <br />
                    <Link to="/explore"><button className="details-btn">Explore</button></Link>
                </div>
                <div className="col-md-5">
                </div>
            </div>
        </div>
       </div>
    );
};

export default Banner;
