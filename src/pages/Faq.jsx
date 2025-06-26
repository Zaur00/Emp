import React from "react";
import "../CSS/FAQ.css";
import { Link } from "react-router-dom";

const FAQ = () => {
    return (
        <><div className="faq-hero">
            <img
                src="https://www.emporium.az/assets/images/pages/faq-large.jpg"
                alt="Ən çox soruşulan suallar"
            />
        </div>

            <div className="faq-container">

                <h2>Ən çox soruşulan suallar</h2>
                <aside className="faq-sidebar">
                    <ul className="sidebar-ul-common">
                        <li><Link to="/contact">Əlaqə</Link></li>
                        <li className="active">Ən çox soruşulan suallar</li>
                        <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
                        <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
                        <li><Link to="/payment">Ödəmə üsulları</Link></li>
                        <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
                        <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
                    </ul>
                </aside>
                <div className="faq-body">
                    <main className="faq-main">
                        <div className="faq-list">
                            <div className="faq-item">
                                <strong>1. Ölçümü necə müəyyən edim?</strong>
                                <p>Bütün məhsullar beynəlxalq ölçü sistemi üzrə təqdim olunur. Ölçüləri standart ölçüyə keçirmək üçün - hər bir məhsul səhifəsində yerləşən “ölçü cədvəli” linkinə keçid etməyiniz kifayətdir.</p>
                            </div>
                            <div className="faq-item">
                                <strong>2. Anbarda seçdiyim məhsulun olub-olmadığını necə müəyyən edim?</strong>
                                <p>Məhsul səhifələrini ziyarət edərkən bütün mövcud ölçülərin qeyd olunduğunu görəcəksiniz. İstəyinizə uyğun ölçü açılan siyahıda qeyd olunmursa, bu sizə lazımı ölçüdə məhsulun satışda olmadığını göstərir.</p>
                            </div>
                            <div className="faq-item">
                                <strong>3. Alışı necə yekunlaşdırıram?</strong>
                                <p>Məhsul səhifəsində istədiyiniz məhsulları (varsa) seçin və “Səbətə əlavə et” seçiminə basın. Daha sonra “Səbət” düyməsinə keçin. Alış-veriş səbətinə baxın və “Checkout” seçin. Göndərmə səhifəsində ünvan bölməsinə ünvanınızı daxil etdikdən sonra, “Çatdırılma Növü”, sonra isə “Ödəniş Növü” seçin və “Göndərmə” düyməsini basın. Ödəniş qəbul edildikdən sonra sifariş nömrənizi təsdiqləyən SMS göndəriləcək və nümayəndəmiz qısa müddət ərzində sizinlə əlaqə saxlayacaq.</p>
                            </div>
                            <div className="faq-item">
                                <strong>4. Online sifariş vermək nə dərəcədə təhlükəsizdir?</strong>
                                <p>Kredit kartı məlumatlarınız serverimizdə saxlanılmır. Sifarişinizi yerləşdirdikdən sonra - bizə kredit kartı vasitəsilə ödəmanı həyata keçirmək üçün sizi PashaBank təhlükəsiz şifrləmə sisteminə yönləndiririk.</p>
                            </div>
                            <div className="faq-item">
                                <strong>5. Geri qaytarmaq mümkündürmü?</strong>
                                <p>Bəli, geri qaytarma 14 gün ərzində mümkündür. Tələblər üçün “Geri qaytarılma və dəyişdirmə” bölməsinə baxın.</p>
                            </div><div className="faq-item">
                                <strong>6. SİFARİŞİMİ QAYTARA VƏ YA DƏYİŞDİRƏ BİLƏRƏM?</strong>
                                <p>Hər-hansı səbəbdən sifarişinizi qaytarmaq və ya dəyişdirmək istəsəniz, sifarişi təslim aldığınız gündən etibarən 14 təqvim günü ərzində həyata keçirə bilərsiniz. Bazar ertəsi - bazar günləri saat 10:00-dan 20:00-a qədər qeyd olunan +994 51 225-96-96 / +994 12 464-07-07 əlaqə nömrəli və ya info@emporium.az elektron ünvanı vasitəsi ilə bizimlə əlaqə saxlaya bilərsiniz.</p>
                            </div><div className="faq-item">
                                <strong>7. BÜTÜN SİFARİŞİ VƏ YA MƏHSULU QAYTARA BİLƏRƏM?</strong>
                                <p>Bütün sifarişinizi və ya hər-hansı məhsulu 14 təqvim günü ərzində qaytara bilərsiniz.</p>
                            </div><div className="faq-item">
                                <strong>8. SİFARIŞİ QAYTARDIĞIM HALDA PULU NƏ VAXT GERİ ALACAM?</strong>
                                <p>Ödəməni kart vasitəsi ilə həyata keçirmisinizsə, məbləğ 14 iş günü ərzində balansınıza geri qaytarılır. Ödəməni nağd ödəniş ilə həyata keçirmisinizsə, qaytarış talonunun təqdimatından sonra məbləğ 3 gün ərzində geri qaytarılır.</p>
                            </div>
                        </div>
                    </main>

                    <aside className="faq-help">
                        <p><strong>Kömək lazımdır?</strong></p>
                        <p>+994 51 225 96 96<br />nömrəsinə zəng edin</p>
                        <a href="https://wa.me/994512259696" target="_blank" className="whatsapp-btn">
                            BİZƏ MESAJ GÖNDƏR
                        </a>
                    </aside>
                </div>
            </div></>
    );
};

export default FAQ;
