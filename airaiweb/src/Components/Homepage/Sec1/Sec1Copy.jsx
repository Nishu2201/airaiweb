import React from 'react';
import './Sec1Copy.css';
import Navbar from '../../Navbar/Navbar';
import { Link } from 'react-router-dom';
import bg from '../../../images/sec 1/bg.png';
import line1 from '../../../images/sec 1/line 1.png';
import line2 from '../../../images/sec 1/line 2.png';
import shape1 from '../../../images/sec 1/shape 1.png';
import shape2 from '../../../images/sec 1/shape 2.png';
import shape3 from '../../../images/sec 1/shape 3.png';
import Pic1 from '../../../images/sec 1/design2.png';
import stars from '../../../images/sec 1/stars.png';

const Sec1Copy = () => {
  return (
    <div className='home1 bg-cover bg-center min-h-screen  relative child ' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='home-sec1 grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 lg:px-24  mb-0 md: mx-9 mb-0 sm:py-auto'>
        <div className='Sec1-left  z-20 pt-6 '>
          <div className='Sec1-h1 bg-gradient-to-tl bg-no-repeat items-left justify-center bg-contain' style={{ backgroundImage: `url(${shape1})` }}>
            <h1 className='Sec1-h uppercase font-barlow font-black text-[#0B0933]'>
              crafting
            </h1>
          </div>
          <div className=' Sec1-h2  bg-gradient-to-tl bg-no-repeat  items-left justify-center bg-contain' style={{ backgroundImage: `url(${shape2})` }}>
            <h1 className='Sec1-h  uppercase font-barlow font-black text-[#0B0933]'>
              digital
            </h1>
          </div>
          <div className='Sec1-h3  bg-gradient-to-tl bg-no-repeat  items-left justify-center bg-contain ' style={{ backgroundImage: `url(${shape3})` }}>
            <h1 className='Sec1h3  uppercase font-barlow font-black text-[#0B0933]'>
              realities
            </h1>
          </div>
          <blockquote className='quote text-white pt-3 pl-2 m-0 text-lg md:text-xl md:my-4'>
            <p className='font-semibold'>"From Games to Apps and Beyond"</p>
          </blockquote>
          <a href='/contact'>
          <button className='home-button rounded-full bg-gradient-to-r from-[#015eea] to-[#00c0fa] py-3 sm:py-3 px-9 sm:px-14 mt-2 text-white text-lg font-bold '>
            <p className='text-white text-[16px] font-lato font-bold  '>
              Schedule Meeting
              </p>
          </button>
          </a>
        </div>
        {/* <div className='absolute inset-x-0 bottom-0 ml-2 z-0 w-auto'>
          <img src={line2} alt="" className='h-full line2' />
        </div> */}
        <div className=' Sec1-rght  ' style={{ backgroundImage: `url(${stars})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
          {/* <div className='absolute inset-y-0 top-0 -ml-48 z-0' >
            <img src={line1} alt="" className='line1' />
          </div> */}
          <div className='Sec1-img  '>
            <img src={Pic1} alt="Design" className='home-pic   z-10' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sec1Copy;
