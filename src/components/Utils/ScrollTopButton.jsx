import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
            className="p-3 bg-[#FF6600] text-white rounded-full shadow-lg transition duration-300 hover:bg-[#ffa365]"
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
