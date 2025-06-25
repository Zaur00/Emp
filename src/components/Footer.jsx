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
                    <div className="info-box"> <SiContactlesspayment /> Güvənli ödəniş üsulları</div>
                    <div className="info-box"> <TbTruckDelivery /> Sürətli çatdırılma</div>
                    <div className="info-box"> <TbTruckReturn /> Sifarişin sürətli və asan qaytarılması</div>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>EMPORİUM</h4>
                        <ul>
                            <li><Link to="/about">Haqqımızda</Link></li>
                            <li><Link to="/store">Mağaza Haqqında</Link></li>
                        </ul>

                    </div>

                    <div>
                        <h4>MÜŞTƏRİ XİDMƏTİ</h4>
                        <ul>
                            <li><Link to="/gift-cards">Hədiyyə Kartları</Link></li>
                            <li><Link to="/loyalty">Loyalılıq Proqramı</Link></li>
                            <li><Link to="/faq">Ən Çox Soruşulan Suallar</Link></li>
                            <li><Link to="/contact">Əlaqə</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4>ONLINE ALIŞ-VERİŞ</h4>
                        <ul>
                            <li><Link to="/delivery">Çatdırılma Şərtləri</Link></li>
                            <li><Link to="/returns">Geri Qaytarılma və Dəyişdirmə</Link></li>
                            <li><Link to="/payment">Ödəmə Üsulları</Link></li>
                        </ul>
                    </div>


                    <div>
                        <h4>ƏLAQƏ</h4>
                        <ul>
                            <li>+994 51 225 96 96</li>
                            <li>Neftçilər Prospekti 51, 153</li>
                        </ul>
                    </div>

                    <div>
                        <h4>ÖDƏNİŞ</h4>
                        <div className="payments">
                            <span><LiaCcMastercard /></span>
                            <span><FaCcMastercard /></span>
                            <span><FaCcVisa /> </span>
                        </div>
                        <h4>SOSİAL MEDİA</h4>
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
