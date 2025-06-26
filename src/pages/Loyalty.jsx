import React from "react";
import "../CSS/FAQ.css";
import { Link } from "react-router-dom";

const Loyalty = () => {
  return (
    <>
      <div className="faq-hero">
        <img
          src="https://www.emporium.az/assets/images/pages/loyalty-large.jpg"
          alt="Loyallıq Proqramı"
        />
      </div>

      <div className="faq-container">
        <h2>Loyallıq Proqramı</h2>

        <aside className="faq-sidebar">
          <ul className="sidebar-ul-common">
            <li><Link to="/contact">Əlaqə</Link></li>
            <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
            <li className="active">Loyallıq Proqramı</li>
            <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
            <li><Link to="/payment">Ödəmə üsulları</Link></li>
            <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
            <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
          </ul>
        </aside>

        <div className="faq-body">
          <main className="faq-main">
            <p>EMPORIUM Loyallıq Proqramı sizin mağazamıza olan sadiqliyinizi qiymətləndirir!</p>
            <ul>
              <li>Kartınızı əldə etməklə siz Emporium-dan alış-veriş zamanı xallar toplayırsınız.</li>
              <li>Hər alışdan sonra müəyyən faizlə xal toplanır və növbəti alışlarda istifadə oluna bilər.</li>
              <li>Kart sahibi olmaq üçün istənilən mağazadan və ya sayt üzərindən alış-veriş yetərlidir.</li>
              <li>Xallar 1 il ərzində aktiv qalır. Bu müddətdən sonra istifadə olunmayan xallar sıfırlanır.</li>
              <li>Loyallıq kartı şəxsidir və başqası ilə paylaşılması mümkün deyil.</li>
            </ul>

            <h3>Əlavə Məlumat:</h3>
            <p>
              Əlavə suallarınız üçün bizimlə <strong>+994 51 225 96 96</strong> nömrəsi ilə və ya{" "}
              <a href="mailto:customercare@sinteks.com">customercare@sinteks.com</a> vasitəsilə əlaqə saxlayın.
            </p>

            <a
              href="https://wa.me/994512259696"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              💬 Bizə mesaj göndər
            </a>
          </main>

          <aside className="faq-help">
            <p><strong>Kömək lazımdır?</strong></p>
            <p>+994 51 225 96 96 nömrəsinə zəng edin</p>
            <a
              href="https://wa.me/994512259696"
              target="_blank"
              rel="noreferrer"
              className="whatsapp-btn"
            >
              📱 Bizə mesaj göndər
            </a>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Loyalty;
