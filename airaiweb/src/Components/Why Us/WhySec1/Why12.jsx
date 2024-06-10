import React from 'react';
import './Why1.css';
import bg from '../../../images/why choose us/sec 1/bg.png';
import design from '../../../images/why choose us/sec 1/design_.png';
import Navbar from '../../Navbar/Navbar';

export const Why12 = () => {
  return (
    <div className='why12 bg-cover bg-center min-h-screen overflow-hidden' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <h1 className='why-head'>Why Choose Us?</h1>
      <div className='Choose grid grid-cols-1 xl:grid-cols-2 gap-4'>
        <div className='left'>
          <h1 className='font-Myraid'>AIRAI is your one <br/>stop shop for custom solutions.</h1>
          <h3>"Transform Your Brand with Engaging Visual Experiences"</h3>
          <a href='/contact'>
          {/* <button className='why-btn bg-gradient-to-r from-sky-800 to-sky-400 rounded-full w-84'>
            <p>Schedule Meeting</p>
          </button> */}
          <button className='why-button text-white text-[16px] font-lato font-bold  text-center rounded-full bg-gradient-to-r from-[#015eea] to-[#00c0fa] py-2 sm:py-1 px-9 sm:px-14 mt-2 text-white text-lg font-bold '>
            <p className='why-btn text-white text-[16px] font-lato font-bold  text-center'>
              Schedule Meeting
              </p>
          </button>
          </a>
        </div>
        <div className='right flex items-center justify-center m-0 p-0 mb-6' >
          <div className="why-square">
            <span></span>
            <span></span>
            <span></span>
            <img src={design} alt="Design" className='relative z-10 w-3/4 why-img' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why12;
