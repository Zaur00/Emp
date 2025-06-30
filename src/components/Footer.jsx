import React from "react";
import "../CSS/Footer.css"; // Stil faylı ayrıca izah ediləcək
import { SiContactlesspayment } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { FaCcMastercard } from "react-icons/fa6";
import { FaCcVisa } from "react-icons/fa";
import { LiaCcMastercard } from "react-icons/lia";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom"; // React Router istifadə edərək linklər yaratmaq üçün
const Footer = () => {
    return (
        <div className="container">
            <footer className="footer">
                <div className="footer-top">
                    <div className="info-box"> <SiContactlesspayment /> SAFE & EASY PAYMENTS</div>
                    <div className="info-box"> <TbTruckDelivery /> Express delivery</div>
                    <div className="info-box"> <TbTruckReturn /> Quick & easy returns </div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>EMPORİUM</h4>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/store">Store Information</Link></li>
                        </ul>

                    </div>

                    <div>
                        <h4>CUSTOMER SERVICE</h4>
                        <ul>
                            <li><Link to="/gift-cards">Gify Cards</Link></li>
                            <li><Link to="/loyalty">Loyalty</Link></li>
                            <li><Link to="/faq">FAQ</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>ONLINE SHOPPING</h4>
                        <ul>
                            <li><Link to="/delivery">DELIVERY TERMS</Link></li>
                            <li><Link to="/returns">RETURN AND EXCHANGE</Link></li>
                            <li><Link to="/payment">PAYMENT METHODS</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h4>STORE CONTACT</h4>
                        <ul>
                            <li>+994 51 225 96 96</li>
                            <li>NEFTCHILER AVENUE 51, 153</li>
                        </ul>
                    </div>

                    <div>
                        <h4>EMPORIUM ACCEPTS</h4>
                        <div className="payments">
                            <span><LiaCcMastercard /></span>
                            <span><FaCcMastercard /></span>
                            <span><FaCcVisa /> </span>
                        </div>
                        <h4>SOCIAL MEDIA</h4>
                        <div className="social">
                            <span><FaFacebookF /></span>
                            <span>< FaInstagram /></span>
                            <span>< FaWhatsapp /></span>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom" style={{ textAlign: "left" }}>
                    © Copyright 2025 Emporium.
                </div>
            </footer>
        </div>
    );
};

export default Footer;
