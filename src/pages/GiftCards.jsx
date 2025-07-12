import React from "react";
import "../CSS/FAQ.css";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa6";

const GiftCards = () => {
  return (
    <>
      <div className="faq-hero">
        <img
          src="https://www.emporium.az/assets/images/pages/gift-coupon-large.jpg"
          alt="Hədiyyə Kartı Banner"
        />
      </div>

      <div className="faq-container">
        <h2>Hədiyyə kartları</h2>

        <aside className="faq-sidebar">
          <ul className="sidebar-ul-common">
            <li><Link to="/contact">Əlaqə</Link></li>
            <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
            <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
            <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
            <li><Link to="/payment">Ödəmə üsulları</Link></li>
            <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
            <li className="active">Hədiyyə kartları</li>
          </ul>
        </aside>

        <div className="faq-body">
          <main className="faq-main">
            <p>
              Bayram və özəl günlərdə kart ən yaxşı hədiyyədir! Bu kart vasitəsilə Siz həm
              mağazalarımızda, həm də onlayn sifarişlərdə alış-veriş edə bilərsiniz.
              100 azn-dən başlayan istənilən dəyərdə kart sifariş edə bilərsiniz.
            </p>

            <h4>Hədiyyə kartlarından istifadə qaydaları:</h4>
            <ul>
              <li>Hədiyyə kartını veb-saytımızdan və uyğun mağazalarımızdan əldə etdikdən sonra, alış-veriş zamanı bu kartı təqdim edərək istifadə edə bilərsiniz.</li>
              <li>Hədiyyə kartı müştərinin adına rəsmiləşdirilir və kartın balansı artırılır.</li>
              <li>Balans tam istifadə olunduqdan sonra kart deaktiv olur.</li>
              <li>Qaytarılmış məhsullar zamanı balans bərpa olunmur.</li>
              <li>Nağd pula çevrilmir və itmə zamanı məsuliyyət daşınmır.</li>
            </ul>
          </main>

          <aside className="faq-help">
            <p><strong>Kömək lazımdır?</strong></p>
            <p>+994 51 225 96 96 nömrəsinə zəng edin</p>
            <a
              href="https://wa.me/994512259696"
              target="_blank"
              className="whatsapp-btn"
              rel="noreferrer"
            >
              <FaWhatsapp /> BİZƏ MESAJ GÖNDƏR
            </a>
          </aside>
        </div>
      </div>
    </>
  );
};

export default GiftCards;
