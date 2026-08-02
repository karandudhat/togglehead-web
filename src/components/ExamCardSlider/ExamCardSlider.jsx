import React, { useState, useEffect, useRef } from 'react';
import './ExamCardSlider.css';

const initialCards = [
  {
    id: 1,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 4,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 5,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  },
  {
    id: 6,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.",
  }
];

const ExamCardSlider = () => {
  const [cardsList, setCardsList] = useState(initialCards);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [translateX, setTranslateX] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const cardRef = useRef(null);

  // Auto-play interval for 3 seconds
  useEffect(() => {
    if (isHovered || isDragging) return;
    const interval = setInterval(() => {
      handleNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, cardsList]);

  const handleNext = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 20; // card width + gap
      setIsTransitioning(true);
      setTranslateX(-cardWidth);

      // After transition finishes, move first card to the end and reset translation
      setTimeout(() => {
        setIsTransitioning(false);
        setCardsList((prevList) => {
          const updated = [...prevList];
          const first = updated.shift();
          updated.push(first);
          return updated;
        });
        setTranslateX(0);
      }, 500); // match CSS transition duration
    }
  };

  const handlePrev = () => {
    if (cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 20; // card width + gap

      // Move the last card to the beginning without transition first
      setIsTransitioning(false);
      setCardsList((prevList) => {
        const updated = [...prevList];
        const last = updated.pop();
        updated.unshift(last);
        return updated;
      });
      // Start translation from offset position and slide back to 0
      setTranslateX(-cardWidth);

      setTimeout(() => {
        setIsTransitioning(true);
        setTranslateX(0);
      }, 50);
    }
  };

  /* ---------- Mouse Drag Navigation (live follow) ---------- */
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
    setIsTransitioning(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const threshold = 80;

    if (dragOffset < -threshold) {
      // dragged left -> next card
      setIsTransitioning(true);
      setDragOffset(0);
      handleNext();
    } else if (dragOffset > threshold) {
      // dragged right -> previous card
      setIsTransitioning(true);
      setDragOffset(0);
      handlePrev();
    } else {
      // not enough drag, snap back
      setIsTransitioning(true);
      setDragOffset(0);
    }
    setIsDragging(false);
  };

  /* ---------- Touch Support (mobile) ---------- */
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
    setIsTransitioning(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };

  const handleTouchEnd = () => {
    handleMouseUp();
  };

  const handleDotClick = (targetId) => {
    if (cardsList[0].id === targetId) return;
    setIsTransitioning(true);
    setCardsList((prevList) => {
      const targetIndex = prevList.findIndex(card => card.id === targetId);
      if (targetIndex <= 0) return prevList;

      const updated = [...prevList];
      const rotated = [
        ...updated.slice(targetIndex),
        ...updated.slice(0, targetIndex)
      ];
      return rotated;
    });
  };

  const currentTranslate = translateX + dragOffset;

  return (
    <section className="exam-card-slider-section">
      <div
        className="slider-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          if (isDragging) handleMouseUp();
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        <div
          className="slider-track"
          style={{
            transform: `translateX(${currentTranslate}px)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none'
          }}
        >
          {cardsList.map((card, index) => (
            <div
              key={card.id}
              className="exam-card"
              ref={index === 0 ? cardRef : null}
            >
              {/* Decorative hexagon/honeycomb background mesh */}
              <div className="card-mesh-bg" style={{ backgroundImage: "url('/pattern.png')" }}></div>
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
              <div className="card-footer">
                <button className="card-know-more">
                  <span>Know More</span>
                  <img src="/Group 9275.svg" alt="Arrow" className="card-know-more-img" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Indicators / Dots */}
      <div className="exam-slider-dots">
        {initialCards.map((card, idx) => {
          const isActive = cardsList[0].id === card.id;
          return (
            <button
              key={card.id}
              className={`exam-dot ${isActive ? 'active' : ''}`}
              onClick={() => handleDotClick(card.id)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ExamCardSlider;