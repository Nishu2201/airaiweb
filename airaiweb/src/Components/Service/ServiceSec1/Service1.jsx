import React from 'react';
import './Service1.css';

import '../Marquee/MarqueeEffect.css';
import Marquee from 'react-fast-marquee';
import cSharp from '../../../images/Service/marquee/c-sharp.png';
import unity from '../../../images/Service/marquee/unity.png';
import maya from '../../../images/Service/marquee/maya.png';
import blender from '../../../images/Service/marquee/blender.png';
import ps from '../../../images/Service/marquee/photoshop.png';
import ai from '../../../images/Service/marquee/illustrator.png';
import figma from '../../../images/Service/marquee/figma.png';
import react from '../../../images/Service/marquee/react.png';
import node from '../../../images/Service/marquee/node.png';
import flutter from '../../../images/Service/marquee/flutter.png';
import bg from '../../../images/Service/sec 1/bg.png';
import design from '../../../images/Service/sec 1/design_.png';
import Navbar from '../../Navbar/Navbar';

export const Service1 = () => {
  return (
    <div className='Services bg-cover bg-center min-h-screen overflow-hidden child relative' style={{ backgroundImage: `url(${bg})` }}>
      <Navbar />
      <div className='flex items-center justify-center text-center'>
        <h1 className='Service1-h1 text-white text-4xl font-black font-lato py-6 pb-2 text-center'>Our Services</h1>
      </div>
      <div className='Service1-data grid grid-cols-1 xl:grid-cols-2 gap-4'>
        <div className='service-content flex flex-col items-start justify-start p-20 pb-0 m-6 my-0 mr-0 pr-6'>
          <p className='service-p text-white text-[16px] font-lato '>We provide a comprehensive suite of digital services to meet 
            all your creative and technical needs. Our <span>game design</span> and <span>development</span> team brings your gaming visions to life, creating 
            immersive and engaging experiences across multiple platforms.Our <span>web design and development services</span> ensure your 
            online presence is both stunning and functional, with responsive designs that work seamlessly on any device. 
            We offer robust <span>frontend and backend solutions,</span> creating scalable and secure web applications. Our <span>UI/UX services </span>
            focus on designing intuitive and engaging user interfaces that enhance user satisfaction. Additionally, our graphic design 
            services tell your brand's story through compelling visuals. Finally, our <span>blockchain services</span> provide secure, decentralized 
            solutions for the modern digital landscape. Whether you're a startup or an established business, our diverse 
            offerings are designed to help you succeed.</p>
        </div>
        <div className='Service-pic flex items-center justify-center m-0 p-9 mb-6 py-0 pl-6 md:w-auto h-auto ' >
          <div className="Service-square">
            <span></span>
            <span></span>
            <span></span>
            <img src={design} alt="Design" className='w-auto mt-4 ml-3 md:max-w-full md:w-auto h-auto Serv-pics relative z-10' />
          </div>
        </div>
      </div>
      <div className='relative bottom-0'>
      <section className="Marquee bg-white  ">
          <h1 className="text-center font-lato font-black text-2xl py-3 ">Technologies we  use</h1>
        <div>
            <Marquee className="marquee-container flex justify-between pb-6" speed={250}>
              <div className="image-wrapper" >
              <img src={cSharp} alt="pics" />
              </div>
              
            <div className="image-wrapper" >
            <img src={maya} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={blender} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={unity} alt="pics" height={70} />
            </div>
            <div className="image-wrapper">
            <img src={ps} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={figma} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={ai} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={react} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={node} alt="pics" height={70}/>
            </div>
            <div className="image-wrapper">
            <img src={flutter} alt="pics" height={70}/>
            </div>
            </Marquee>
          </div>
          </section>
          </div>
    </div>
  );
};
