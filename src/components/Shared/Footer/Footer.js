import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className=" footer mt-5 row p-5">
                <div className="col-md-3">
                <h4>Smart Car</h4>
                <p className="mt-5">+880 (6565) 890</p>
                <p>smartcar@gmail.com</p>
                <p>Dhaka,Bangladesh</p>
                </div>
                <div className="col-md-3">
                    <h4>Links</h4>
                    <p className="mt-5">Home</p>
                    <p>About us</p>
                    <p>Payment</p>
                    <p>Contact us</p>
                </div>

                <div className="col-md-3">
                    <h4 >SUPPORT</h4>
                    <p className="mt-5">Contact Us</p>
                    <p>Visit Our car shop</p>
                    <p>Refund Policy</p>
                    <p>Client satisfied</p>
                </div>
                <div className="col-md-3">
                    <h4 >Visit car details</h4>
                    <p className="mt-5">Contact Us</p>
                    <p>Visit Our car shop</p>
                    <p>Refund Policy</p>
                    <p>Client satisfied</p>
                </div>

            </div>
            <div className=" text-center footer-text ">
                <p>© 2021 Smart Car</p>
            </div>
            
        </div>
    );
};

export default Footer;