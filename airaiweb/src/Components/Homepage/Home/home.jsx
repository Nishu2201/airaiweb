import React, { useEffect, useRef } from 'react';
import Sec1 from '../Sec1/Sec1';
import { Sec2 } from '../Sec2/Sec2';
import Sec3 from '../Sec3/Sec3';
import Sec5 from '../Sec5/Sec5';
import Sec6 from '../Sec6/Sec6';
import Sec7 from '../Sec7/Sec7';
import Sec41 from '../Sec4/Sec41';
import Sec1Copy from '../Sec1/Sec1Copy';

const Home = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const currentIndex = sectionRefs.current.indexOf(entry.target);

          if (currentIndex !== -1) {
            const nextSection = sectionRefs.current[currentIndex + 1];
            const prevSection = sectionRefs.current[currentIndex - 1];

            window.addEventListener('wheel', (event) => {
              if (event.deltaY > 0 && nextSection) {
                event.preventDefault();
                window.scrollTo({
                  top: nextSection.offsetTop,
                  behavior: 'smooth',
                });
              } else if (event.deltaY < 0 && prevSection) {
                event.preventDefault();
                window.scrollTo({
                  top: prevSection.offsetTop,
                  behavior: 'smooth',
                });
              }
            }, { once: true });
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionRefs.current.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const setRefs = (element, index) => {
    sectionRefs.current[index] = element;
  };

  return (
    <div className="panel">
      {/* <div ref={(el) => setRefs(el, 0)}><Sec1 /></div> */}
      <div ref={(el) => setRefs(el, 0)}><Sec1Copy/></div>
      
      <div ref={(el) => setRefs(el, 1)}><Sec2 /></div>
      <div ref={(el) => setRefs(el, 2)}><Sec3 /></div>
      <div ref={(el) => setRefs(el, 3)}><Sec41 /></div>
      <div ref={(el) => setRefs(el, 4)}><Sec5 /></div>
      <div ref={(el) => setRefs(el, 5)}><Sec6 /></div>
      <div ref={(el) => setRefs(el, 6)}><Sec7 /></div>
    </div>
  );
};

export default Home;
