import React from "react";
import "../CSS/FAQ.css";
import { Link } from "react-router-dom";

const Payment = () => {
  return (
    <>
      <div className="faq-hero">
        <img
          src="https://www.emporium.az/assets/images/pages/payment-large.jpg"
          alt="Ödəmə üsulları"
        />
      </div>

      <div className="faq-container">
        <h2>Ödəmə üsulları</h2>

        <aside className="faq-sidebar">
          <ul className="sidebar-ul-common">
            <li><Link to="/contact">Əlaqə</Link></li>
            <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
            <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
            <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
            <li className="active">Ödəmə üsulları</li>
            <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
            <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
          </ul>
        </aside>

        <div className="faq-body">
          <main className="faq-main">
            <p>
              Sifariş edərkən sizə iki ödaniş üsulu təklif olunur: istənilən debet
              və ya kredit kartı ilə ödəmək və ya sifarişiniz gəldikdən sonra nağd
              ödəmək.
            </p>
            <p>
              EMPORIUM onlayn alış-verişin təhlükəsizliyinə xüsusi diqqət yetirir.
              Bütün əməliyyatlar təhlükəsiz ödəniş sistemləri vasitəsilə həyata
              keçirilir. Maksİ ödaniş məlumatları şifrəli formada (SSL) birbaşa
              banka ötürülür.
            </p>
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
              📱 Bizə mesaj göndər
            </a>
          </aside>
        </div>
      </div>
    </>
  );
};

export default Payment;
