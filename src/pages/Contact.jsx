import React from "react";
import "../CSS/Contact.css"
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div className="contact-container">
            <div className="contact-hero">
                <img
                    src="https://www.emporium.az/assets/images/pages/contact-large.jpg"
                    alt="Əlaqə"
                />
            </div>

            <div className="contact-content">
                {/* Sol tab menyu */}
                <aside className="contact-sidebar">
                    <ul>
                        <li className="active">
                            Əlaqə
                        </li>
                        <Link to="/faq">Ən çox soruşulan suallar</Link>
                        <li>
                            <Link to="/loyalty"> Loyallıq Proqramı</Link>
                        </li>
                        <li>
                            <Link to="/delivery">Çatdırılma şərtləri </Link>
                        </li>
                        <li>
                            <Link to="/payment">Ödəmə üsulları </Link>
                        </li>
                        <li>
                            <Link to="/returns">Geri qaytarılma və dəyişdirmə </Link>
                        </li>
                        <li>
                            <Link to="/gift-cards">Hədiyyə kartları </Link>
                        </li>
                    </ul>
                </aside>

                {/* Sağ form və məlumatlar */}
                <main className="contact-main">
                    <h2>Bizimlə əlaqə saxlayın</h2>

                    <div className="contact-details">
                        <div>
                            <p>Emporium.az elektron ticarət satışı ilə bağlı suallar və istəklər üçün:</p>
                            <p><strong>Hər gün</strong> 10:00 - 19:00</p>
                            <p>📞 +994 51 225 96 96</p>
                        </div>

                        <div>
                            <p>Loyallıq proqramı ilə əlaqədar suallar, təkliflər və müraciətlər üçün:</p>
                            <p><strong>Bazar ertəsi - Cümə</strong> 09:00 - 18:00</p>
                            <p>📞 +994 50 271 56 66</p>
                            <p>✉️ customercare@sinteks.com</p>
                        </div>

                        <div className="contact-whatsapp">
                            <span>💬</span> <a href="https://wa.me/994512259696" target="_blank">Bizə mesaj göndər</a>
                        </div>
                    </div>

                    {/* Əlaqə forması */}
                    <form className="contact-form">
                        <label>Müraciətin növü</label>
                        <select>
                            <option value="">Müraciətin növünü seçin</option>
                            <option>Texniki Dəstək</option>
                            <option>Sifarişlə bağlı</option>
                            <option>Ümumi sual</option>
                        </select>

                        <label>Tam ad</label>
                        <input type="text" placeholder="Tam ad" />

                        <div className="form-row">
                            <input type="email" placeholder="Email" />
                            <input type="text" placeholder="Mobil nömrə" />
                        </div>

                        <label>Message</label>
                        <textarea placeholder="Mesajınız..." rows="4" />

                        <div className="form-row align-center">
                            <input type="checkbox" />
                            <label>Ben robot deyiləm</label>
                        </div>

                        <button type="submit">Göndər</button>
                    </form>
                </main>
            </div>
        </div>
    );
};

export default Contact;
