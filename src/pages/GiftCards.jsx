import React from "react";
import "../CSS/GiftCards.css";
import { FaWhatsapp } from "react-icons/fa6";
import { Link } from "react-router-dom";


const GiftCards = () => {
    return (
        <div className="giftcards-container">
            <div className="giftcards-hero">
                <img
                    src="https://www.emporium.az/assets/images/pages/gift-coupon-large.jpg"
                    alt="Hədiyyə Kartı Banner"
                />
            </div>

            <div className="giftcards-content">
                <h1>Hədiyyə kartları</h1>

                <div className="giftcards-tabs">
                    <ul>
                        <Link to="/contact">Əlaqə</Link>
                        <Link to="/faq">Ən çox soruşulan suallar</Link >
                        <Link to="/loyalty">Loyallıq Proqramı </Link>
                        <Link to="/delivery">Çatdırılma şərtləri</Link>
                        <Link to="/payment">Ödəmə üsulları </Link>
                        <Link to="/returns">Geri qaytarılma və dəyişdirmə </Link>
                        <li className="active">Hədiyyə kartları</li>
                    </ul >
                </div >

                <div className="giftcards-info">
                    <div className="giftcards-left">
                        <p>
                            Bayram və özəl günlərdə kart ən yaxşı hədiyyədir! Bu kart vasitəsilə Siz həm
                            mağazalarımızda, həm də onlayn sifarişlərdə alış-veriş edə bilərsiniz. 100 azn-dən
                            başlayan istənilən dəyərdə kart sifariş edə bilərsiniz.
                        </p>

                        <h4>Hədiyyə kartlarından istifadə qaydaları:</h4>
                        <ul>
                            <li>Hədiyyə kartını veb-saytımızdan və uyğun mağazalarımızdan əldə etdikdən sonra, alış-veriş zamanı bu kartı təqdim edərək istifadə edə bilərsiniz.</li>
                            <li>Hədiyyə kartı müştərinin adına rəsmiləşdirilir və kartın balansı artırılır.</li>
                            <li>Balans tam istifadə olunduqdan sonra kart deaktiv olur.</li>
                            <li>Qaytarılmış məhsullar zamanı balans bərpa olunmur.</li>
                            <li>Nağd pula çevrilmir və itmə zamanı məsuliyyət daşınmır.</li>
                        </ul>
                    </div>

                    <div className="giftcards-right">
                        <h4>Kömək lazımdır?</h4>
                        <p>+994 51 225 96 96 nömrəsinə zəng edin</p>
                        <a
                            href="https://wa.me/994512259696"
                            className="whatsapp-button"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span><FaWhatsapp /></span> BİZƏ MESAJ GÖNDƏR
                        </a>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default GiftCards;
