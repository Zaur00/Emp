import '../CSS/Store.css';
import StoreSlider from '../components/StoreSlider';
const Store = () => {
    return (
        <div className="store-container">
            <div className="store-intro">
                <img
                    src="https://www.emporium.az/assets/images/stores/mall.jpg"
                    alt="Emporium Port Baku"
                    className="store-intro-img"
                />
                <div className="store-intro-text">
                    <h2>Emporium Port Baku</h2>
                    <p>
                        EMPORIUM dəbdəbəli konsept mağazası onunla fəxr edir ki, onun şöbələri və geniş çeşidli təkliflər
                        Sizin hər bir istəyinizi təmin etməyə çalışır – dəri və bədənə qulluq üçün niş məhsulların böyük seçimi və ətirlər,
                        ön son dünya podiumlarındakı göstərilən kişi, qadın və uşaq kolleksiyaları, dəbdəbəli ev dekoru,
                        tanınmış zərgərlik brendləri və ən çox gözlənilən ayaqqabı və çanta modelləri.
                        Bu arada aktiv alış-verişinizin fasilələrində EMPORIUM Café sizi gözləyir!
                    </p>
                </div>
            </div>

            <h1>Mağaza məlumatları</h1>

            <div className="store-grid">
                <div className="store-info">
                    <p><strong>İş saatları:</strong><br /> Bazar ertəsi–Bazar: 10:00–22:00</p>
                    <p><strong>Ünvan:</strong><br /> Neftçilər prospekti 151, AZ1001, Bakı, Azərbaycan</p>
                    <p><strong>Əlaqə:</strong><br /> +994 51 225 96 96</p>
                    <a
                        href="https://www.google.com/maps?q=Port+Baku+Mall"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="map-button"
                    >
                        Xəritədə göstər
                    </a>
                </div>

                <div className="store-map">
                    <iframe
                        title="map"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=49.856%2C40.368%2C49.871%2C40.377&layer=mapnik&marker=40.373%2C49.865"
                        style={{ border: "1px solid #ccc", width: "100%", height: "250px" }}
                    />
                </div>
            </div>

            <div className="store-gallery">
                <StoreSlider />
            </div>
        </div>
    );
};

export default Store;
