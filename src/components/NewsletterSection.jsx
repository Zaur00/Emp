import "../CSS/NewsletterSection.css"; // Stil faylı ayrıca izah ediləcək
const NewsletterSection = () => {
    return (
        <div className="container">
            <section className="newsletter">
                <h2>Xəbərlərimizi izləyin</h2>
                <p>
                    Emporium-da qeydiyyatdan keçməklə, xüsusi təkliflər, yeniliklər, yeni brendlər və dəb trendləri haqqında ilk eşidən Siz olacaqsınız!
                </p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Email ünvanınızı daxil edin" />
                    <button>ABUNƏ OLUN</button>
                </div>
            </section>
        </div>
    );
};

export default NewsletterSection;
