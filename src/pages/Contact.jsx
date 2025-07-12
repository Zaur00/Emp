import React from "react";
import "../CSS/Contact.css";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div className="contact-hero">
                <img
                    src="https://www.emporium.az/assets/images/pages/contact-large.jpg"
                    alt="Əlaqə"
                />
            </div>
            <div className="contact-container">
                <div className="contact-content">
                    <aside className="contact-sidebar">
                        <ul>
                            <li className="active">Əlaqə</li>
                            <li><Link to="/faq">Ən çox soruşulan suallar</Link></li>
                            <li><Link to="/loyalty">Loyallıq Proqramı</Link></li>
                            <li><Link to="/delivery">Çatdırılma şərtləri</Link></li>
                            <li><Link to="/payment">Ödəmə üsulları</Link></li>
                            <li><Link to="/returns">Geri qaytarılma və dəyişdirmə</Link></li>
                            <li><Link to="/gift-cards">Hədiyyə kartları</Link></li>
                        </ul>
                    </aside>

                    <main className="contact-main">
                        <h2>Bizimlə əlaqə saxlayın</h2>

                        <div className="contact-table-wrapper">
                            <table className="contact-table">
                                <tbody>
                                    <tr>
                                        <td>
                                            Emporium.az elektron ticarət satışı ilə bağlı suallar və istəklər üçün:
                                        </td>
                                        <td><strong>Hər gün</strong><br />10:00 - 19:00</td>
                                        <td>+994 51 225 96 96</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Loyallıq proqramı ilə əlaqədar suallar, təkliflər və müraciətlər üçün:
                                        </td>
                                        <td><strong>Bazar ertəsi - Cümə</strong><br />09:00 - 18:00</td>
                                        <td>
                                            +994 50 271 56 66<br />
                                            customercare@sinteks.com
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <div className="contact-table-whatsapp">
                                <a href="https://wa.me/994512259696" target="_blank" rel="noreferrer">
                                    <img src="https://www.svgrepo.com/show/353655/whatsapp-icon.svg" alt="WhatsApp" />
                                    <span>Bizə mesaj göndər</span>
                                </a>
                            </div>
                        </div>

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

                            <label>Mesaj</label>
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
        </>
    );
};

export default Contact;
