import React from 'react';
import './Contact1.css';
import bg from '../../../images/contact us/Sec1/bg.png';
import design from '../../../images/contact us/Sec1/design.png';
import Navbar from '../../Navbar/Navbar';

export const Contact1 = () => {
  return (
    <div className='bg-cover bg-center min-h-screen overflow-hidden child' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='flex items-center justify-center text-center'>
        <h1 className='Contact1-head text-white text-4xl font-black font-lato py-2 '>Contact Us</h1>
      </div>
      <div className='Contact1-data grid grid-cols-1 md:grid-cols-2 gap-4'>

        <div className='needs flex flex-col items-start justify-start p-20 m-6 my-0 mr-0 pr-44 '>
          <p className='needs-p1 text-white text-6xl font-black font-lato py-6 leading-tight'>Need AIRAI's<br/> Help?</p>
          <p className='needs-p2 text-white text-2xl font-lato font-bold'>Contact us to bring your vision to life.</p>
          <p className='needs-p2 p3 text-white text-lg font-lato '><span className='font-black'>"</span>Simply complete the form below with details about your 
          project or job requirements, and our representative will promptly get in touch with you.<span className='font-black'>"</span></p>
        </div>
        <div className='contact-rght flex items-center justify-center m-0 p-0 mb-6 py-9 ' >
        <div className="About-square">
            <span></span>
            <span></span>
            <span></span>
          <img src={design} alt="Design" className='contact1-img w-auto mt-7  md:max-w-full md:h-auto z-10' />
      </div>
        </div>
      </div>
    </div>
  );
};

export default Contact1;