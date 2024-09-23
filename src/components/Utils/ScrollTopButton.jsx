import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) { // You can adjust this value
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to the top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-8 right-8">
          <button
            onClick={scrollToTop}
            className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-800 transition"
            aria-label="Scroll to Top"
          >
            <FaArrowUp size={20} />
          </button>
        </div>
      )}
    </>
  );
};

export default ScrollTopButton;
