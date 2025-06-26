import React from "react";
import "../CSS/Returns.css";
import { Link } from "react-router-dom";

const Returns = () => {
    return (
        <>
            <div className="faq-hero">
                <img
                    src="https://www.emporium.az/assets/images/pages/return-large.jpg"
                    alt="Geri qaytarılma və dəyişdirmə"
                />
            </div>

            <div className="faq-container">
                {/* Hero şəkil */}
                <h2>Geri qaytarılma və dəyişdirmə</h2>
                {/* Naviqasiya menyusu */}
                <aside className="faq-sidebar">
                    <ul className="sidebar-ul-common">
                        <li><Link to="/contact">Əlaqə</Link></li>
                        <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
                        <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
                        <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
                        <li><Link to="/payment">Ödəmə üsulları</Link></li>
                        <li className="active">Geri qaytarılma və dəyişdirmə</li>
                        <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
                    </ul>
                </aside>

                <div className="faq-body">
                    {/* Sol kontent */}
                    <main className="faq-main">

                        <p>
                            Sifarişi əldə etdikdən sonra 14 təqvim günü ərzində məhsulu müvafiq bir formanı dolduraraq geri
                            qaytarmaq imkanınız olacaq. Zəhmət olmasa, telefon və ya elektron poçt vasitəsi ilə məhsulların
                            geri qaytarılması barədə bizə məlumat təqdim edin.
                        </p>
                        <p>
                            Geri qaytarılacaq məhsul orijinal vəziyyətində, zədəsiz və qoxusuz olmalıdır. Etiketlər məhsulun
                            üzərində qalmalıdır. Məhsulda istifadə izləri olmamalıdır. Əks təqdirdə məhsul geri qəbul
                            olunmayacaq.
                        </p>
                        <p>Geri qaytarılması mümkün olmayan məhsullar:</p>
                        <ul>
                            <li>Qızıl və ya qızıl üzlü zinət əşyaları</li>
                            <li>Parça məhsulları (lent, baş örtüyü və s.)</li>
                            <li>Parfümeriya və kosmetik vasitələr</li>
                            <li>Alt geyimlər, çimərlik geyimləri</li>
                            <li>Paltaryuyan və məişət cihazları</li>
                            <li>Şəxsi gigiyena vasitələri</li>
                            <li>Uşaq oyuncaqları və açılmış yeməklər</li>
                            <li>Çorab, alt paltarları və yemək üçün plastik qablar</li>
                        </ul>
                    </main>

                    {/* Sağ – yardım hissəsi */}
                    <aside className="faq-help">
                        <p><strong>Kömək lazımdır?</strong></p>
                        <p>+994 51 225 96 96 nömrəsinə zəng edin</p>
                        <a
                            href="https://wa.me/994512259696"
                            target="_blank"
                            className="whatsapp-btn"
                            rel="noreferrer"
                        >
                            📱 BİZƏ MESAJ GÖNDƏR
                        </a>
                    </aside>
                </div>
            </div></>
    );
};

export default Returns;
