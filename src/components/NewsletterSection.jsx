import "../CSS/NewsletterSection.css"; // Stil faylı ayrıca izah ediləcək
const NewsletterSection = () => {
    return (
        <div className="container">
            <section className="newsletter">
                <h2>Join our newsletter</h2>
                <p>
                    By signing up to Emporium, you’ll be the first to hear about special offers, our new arrivals, new brands and fashion trends.!
                </p>
                <div className="newsletter-form">
                    <input type="email" placeholder="Enter your email address" />
                    <button>Subscribe</button>
                </div>
            </section>
        </div>
    );
};

export default NewsletterSection;
