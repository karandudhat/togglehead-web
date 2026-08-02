import React, { useState, useEffect, useRef } from 'react';
import './HeroSlider.css';

const slides = [
  {
    id: 1,
    title: 'Lorem ipsum',
    description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd',
    image: '/Mask Group 99.svg',
  },
  {
    id: 2,
    title: 'Consectetur Adipiscing',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    image: '/hero-slider-image/hero-slider-2.png',
  },
  {
    id: 3,
    title: 'Eiusmod Tempor',
    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    image: '/Mask Group 99.svg',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const sliderRef = useRef(null);

  const [isMouseDown, setIsMouseDown] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);

  /* ---------- Autoplay ---------- */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  /* ---------- Keyboard ---------- */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft')
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      else if (e.key === 'ArrowRight')
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  /* ---------- Touch / Swipe ---------- */
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove  = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd   = () => {
    if (touchStart - touchEnd > 50)
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    if (touchStart - touchEnd < -50)
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  /* ---------- Mouse Drag Navigation ---------- */
  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setDragStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const diff = dragStartX - e.clientX;
    if (diff > 80) {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setIsMouseDown(false);
    } else if (diff < -80) {
      setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setIsMouseDown(false);
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <section
      className="hero-section"
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ cursor: isMouseDown ? 'grabbing' : 'grab' }}
      aria-label="Hero Slider"
    >
          {/* LEFT side – gray background, text content */}
      <div className="hero-left">
        <div className="hero-text-wrapper">
          {slides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`hero-text-slide${idx === currentSlide ? ' active' : ''}`}
            >
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.description}</p>
              <button className="hero-btn">
                Know More <span className="hero-btn-icon">&#9658;</span>
              </button>
            </div>
          ))}
        </div>
      </div>

          {/* RIGHT side – blue gradient + actual image */}
          
      <div className="hero-right">
        {/* slide images */}
        {slides.map((slide, idx) => (
          <img
            key={slide.id}
            src={slide.image}
            alt={slide.title}
            className={`hero-img${idx === currentSlide ? ' active' : ''}`}
            loading={idx === 0 ? 'eager' : 'lazy'}
          />
        ))}
      </div>

      {/* Global Slider Dots at the bottom center/right of the entire hero section */}
      <div className="hero-dots">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`hero-dot${idx === currentSlide ? ' active' : ''}`}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
