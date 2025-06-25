import React, { useState, useRef } from 'react';
import '../CSS/StoreSlider.css';

const images = [
  "https://emporium.az/assets/images/stores/emporium-carousel-1.jpg?v=1606",
  "https://emporium.az/assets/images/stores/emporium-carousel-2.jpg?v=1606",
  "https://emporium.az/assets/images/stores/emporium-carousel-3.jpg?v=1606",
  "https://emporium.az/assets/images/stores/emporium-carousel-4.jpg",
  "https://emporium.az/assets/images/stores/emporium-carousel-5.jpg",
];

const StoreSlider = () => {
  const [current, setCurrent] = useState(0);
  const startX = useRef(null);
  const endX = useRef(null);
  const isDragging = useRef(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  // TOUCH EVENTS
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    endX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    handleSwipe();
  };

  // MOUSE EVENTS
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    endX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (isDragging.current) {
      isDragging.current = false;
      handleSwipe();
    }
  };

  const handleSwipe = () => {
    if (!startX.current || !endX.current) return;
    const distance = startX.current - endX.current;

    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }

    // reset
    startX.current = null;
    endX.current = null;
  };

  return (
    <div className="slider-container">
      <button className="prev" onClick={prevSlide}>&#10094;</button>

      <div
        className="slide"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp} // mouse çıxanda da swipe tamamlanır
        style={{ cursor: "grab" }}
      >
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          draggable="false"
        />
      </div>

      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default StoreSlider;
