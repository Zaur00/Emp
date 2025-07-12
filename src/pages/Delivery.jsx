import "../CSS/FAQ.css"; 
import { Link } from "react-router-dom";

const Delivery = () => {
  return (
    <>
      <div className="faq-hero">
        <img
          src="https://www.emporium.az/assets/images/pages/delivery-large.jpg"
          alt="Çatdırılma Şərtləri"
        />
      </div>

      <div className="faq-container">
        <h2>Çatdırılma şərtləri</h2>

        <aside className="faq-sidebar">
          <ul className="sidebar-ul-common">
            <li><Link to="/contact">Əlaqə</Link></li>
            <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
            <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
            <li className="active">Çatdırılma şərtləri</li>
            <li><Link to="/payment">Ödəmə üsulları</Link></li>
            <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
            <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
          </ul>
        </aside>

        <div className="faq-body">
          <main className="faq-main">
            <p>⚠️ Formula 1 tədbirləri ilə əlaqədar sifarişlərin çatdırılmasında gecikmələr ola bilər.</p>

            <p>Sifariş olunarkən, sizə üç çatdırılma seçimi təqdim olunur:</p>
            <ul>
              <li>Saat 16:00-a qədər sifariş olunan mallar eyni gündə çatdırılır;</li>
              <li>Saat 16:00-dan sonra sifariş olunan mallar növbəti gün çatdırılır;</li>
              <li>Sifarişinizi Port Baku Mall ünvanında yerləşən EMPORIUM mağazasından götürə bilərsiniz.</li>
            </ul>

            <p>Bayram və endirim günlərində çatdırılma iki gün ərzində yerinə yetirilir.</p>

            <p>Ümumi məbləği 100 AZN-dən yuxarı olan sifarişlər üçün çatdırılma ödənişsizdir. Aşağı olanlar üçün Bakı ərazisində 5 AZN, Abşeronda 10 AZN təşkil edir.</p>

            <p>Alışdan imtina edildikdə: Bakı – 5 AZN, Abşeron – 10 AZN.</p>

            <p>Kuryerin 30 dəqiqəyə qədər gözləməsi ödənişsizdir. Əlavə 30 dəqiqə – 5 AZN.</p>
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

export default Delivery;
