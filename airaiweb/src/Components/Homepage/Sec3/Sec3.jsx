import React from 'react';
import '../Sec3/Sec3.css';
import bg from '../../../images/sec 3/bg.png';
import Slider from "react-slick";
import bulb from '../../../images/sec 3/bulb1.png';
import puzzle from '../../../images/sec 3/puzzle 2.png';
import modeling from '../../../images/sec 3/3d-modeling 2.png';
import blockchain from '../../../images/sec 3/blockchain2.png';
import web from '../../../images/sec 3/web2.png';
import app from '../../../images/sec 3/icons8.png';

const Sec3 = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 996,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '0',
          dots: false,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1350,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ],
    arrows: false,
  };

  return (
    <div className='Sec3 bg-cover bg-center min-h-screen lg:p-6 child overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center '>
      <h1 className='Sec3-head text-white text-4xl font-black font-lato lg:py-6 py-3 text-center' >Our Expertise</h1>
      </div>
      <div className='slider-div flex flex-wrap justify-center items-center lg:m-2 lg:pl-12 mb-0 md:mx-10 '>
        <div className='w-full  '>
          <Slider {...settings} className="slider w-auto">
            <div>
              <div className='slide-divs draw meet '>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={bulb} alt="Bulb" className='h-24' />
                </div>
                <div className='slide-content h-46'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>User Experience and<br/> Interface Design</h1>
                <p className='text-white text-center text-lg lg:px-9 lg:pb-12 slide-p px-3 pb-3'>
                Having a user-friendly and intuitive design is crucial for any mobile game.
                 We leverage the latest methodologies to create a captivating and engaging user interface.
                </p>
              </div>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={puzzle} alt="Puzzle" className='mx-auto' />
                </div>
                <div className='slide-content h-46'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>Game Design <br/>& Development</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Create engaging and immersive gaming experiences. Our game production service
                 combines technology and creativity to create visually appealing games for various platforms.                </p>
              </div>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={modeling} alt="Modeling" className='' />
                </div>
                <div className='slide-content h-46'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>3D <br />Modelling</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                With the help of our expert modeling services, transport your audience 
                to stunning 3D landscapes. We create 3D models of things, people, and places to give your ideas depth and reality.               </p>
              </div>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={blockchain} alt="Blockchain" className='' />
                </div>
                <div className='slide-content h-46'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>Blockchain <br />Services</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Embrace the future with our blockchain development services. We use blockchain to enhance security, 
                 and efficiency in your projects with decentralized apps and smart contracts.  </p>
              </div>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet'>
                <div className="Card flex items-center justify-center w-full h-28">
                  <img src={web} alt="Web Design" className='' />
                </div>
                <div className='slide-content h-46'>
                <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>Web Design <br/>& Development</h1>
                <p className='text-white text-center text-lg lg:px-10 lg:pb-12 slide-p px-3 pb-3'>
                Boost your online visibility with our expert web development services. From sleek, responsive designs 
                to robust backend, we create websites that look stunning and perform seamlessly.   </p>
              </div>
              </div>
            </div>
            <div>
              <div className='slide-divs draw meet sm:w-84'>
                <div className="Card flex items-center justify-center w-full h-28 ">
                  <img src={app} alt="App Design" className='' />
                </div>
                <div className='slide-content h-46'>
                  <h1 className='text-white text-2xl font-bold mb-2 text-center lg:px-12 lg:py-3 pb-2 slide-h1 px-6'>Android App Design <br/> & Development</h1>
                  <p className='text-white text-center text-lg lg:px-9  lg:pb-12 lg:mb-2 slide-p px-3 pb-0'>
                  Transform your ideas into effective mobile apps. Our 
                  skilled developers specialize in creating innovative and user-friendly apps for Android and iOS.
                                    </p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Sec3;
