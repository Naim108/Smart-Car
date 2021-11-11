import React from 'react';
import './Features.css'
import icon1 from '../../images/free-shipping.png'
import icon2 from '../../images/online-support.png'
import icon3 from '../../images/shield.png'

const Features = () => {
    return (
        <div className="container mt-5 features">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="icon" src={icon1} alt="" />
                        </div>
                        <div className="col-md-9">
                        <h4>Free Shipping</h4>
                    <p>Provide free home delivery for all product over $100</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="icon" src={icon2} alt="" />
                        </div>
                        <div className="col-md-9">
                        <h4>Online Support</h4>
                    <p>To satisfy our customer we try to give support online</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-3">
                            <img className="icon" src={icon3} alt="" />
                        </div>
                        <div className="col-md-9">
                        <h4>Secure Payment</h4>
                    <p>We ensure our product Good quality all times</p>
                        </div>
                    </div>

                </div>
                

            </div>
            
        </div>
    );
};

export default Features;