import React from 'react';
import './Sec41.css'
import '../Sec4/Sec4.css';
import bg from '../../../images/sec 4/bg.png';
import circle1 from '../../../images/sec 4/1.png';
import circle2 from '../../../images/sec 4/2.png';
import circle3 from '../../../images/sec 4/3.png';
import circle4 from '../../../images/sec 4/4.png';
import circle5 from '../../../images/sec 4/5.png';
const Sec41 = () => {


  return (
    <div className='Sec4 bg-cover bg-center min-h-screen p-9 child' style={{ backgroundImage: `url(${bg})` }}>
      <div className='flex items-center justify-center text-center'>
        <h1 className='Sec4-head text-white text-4xl font-black font-lato lg:py-12 py-3 text-center'>Growing Exponentially</h1>
      </div>
      <div className='Sec4-content h-auto grid grid-cols-5 md:grid-cols-2 justify-center items-center '>
        <div className='Circle1 w-full   bg-contain bg-no-repeat bg-center z-0 ' style={{backgroundImage: `url(${circle1})`}}>
          <h1 className='head1   text-center font-black font-barlow text-[#0B0933] '>50%</h1>
          <h1 className='head-P1 text-[#0B0933]  font-extrabold font-barlow  text-center '>Team of <br/>Experts</h1>
        </div>
        <div className='Circle2   bg-contain bg-no-repeat bg-center  z-10 ' style={{backgroundImage: `url(${circle2})`}}>
          <h1 className='head2 text-[#0B0933]  font-black font-barlow text-center font-extrabold'>98%</h1>
          <h1 className='head-P2 text-[#0B0933]  font-extrabold font-barlow text-center'>On - Time <br/>Delivery</h1>
        </div>
        <div className='Circle3   bg-contain bg-no-repeat bg-center  z-20 ' style={{backgroundImage: `url(${circle3})`}}>
         <h1 className='head3 text-[#0B0933]  text-center font-black sm:mt-0  font-900 font-barlow'>500+</h1>
          <h1 className='head-P3 text-[#0B0933]  font-extrabold font-barlow text-center z-200   '>Happy Clients</h1>
        </div>
        <div className='Circle4   bg-contain bg-no-repeat bg-center  z-10 ' style={{backgroundImage: `url(${circle4})`}}>
        <h1 className='head4 text-[#0B0933]   font-black font-barlow text-center font-extrabold'>300+</h1>
          <h1 className='head-P4 text-[#0B0933]  font-extrabold font-barlow text-center'>Products <br/>Delivered</h1>
        </div>
        <div className=' Circle5 w-full   bg-contain bg-no-repeat bg-center  z-0 ' style={{backgroundImage: `url(${circle5})`}}>
          <h1 className='head5 text-[#0B0933]   text-center font-extrabold font-barlow'>90%</h1>
          <h1 className='head-P5 text-[#0B0933]  font-extrabold  font-barlow  text-center '>Customer <br/>Satisfied</h1>
        </div>
      </div>
    </div>
  );
}

export default Sec41;