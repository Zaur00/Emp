import React from "react";
import "../CSS/HomeSection.css"; 
function HomeSection() {
    const images = [
        "https://cdn-cloudflare.emporium.az/home-page/cat_228.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_65.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_1.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_189.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_297.jpg?v=1.8.40",
        "https://cdn-cloudflare.emporium.az/home-page/cat_264.jpg?v=1.8.40",
    ];

    return (
        <div className="container">
            <p style={{ marginBottom: "16px", fontWeight: "600" }}>@EMPORIUMBAKU</p>
            <div className="category">
                {images.map((image, index) => (
                    <a key={index} href={`/${index}`}>
                        <img src={image} alt={`Category ${index + 1}`} />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default HomeSection;
