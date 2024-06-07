import React from 'react'
import { Service1 } from '../ServiceSec1/Service1'
import { Service2 } from '../ServiceSec2/Service2/Service2'
import WebPortfolio from '../ServiceSec2/Portfolio/WebPortfolio'
import MobPortfolio from '../ServiceSec2/Mobile-Portfolio/MobPortfolio'
import GamePortfolio from '../ServiceSec2/GamePortfolio/GamePortfolio'
import MarqueeEffect from '../Marquee/MarqueeEeffect'

const Services = () => {
  return (
   <>
   <div>
    
    <Service1 /></div>
    <MarqueeEffect/>
    <WebPortfolio/>
    <MobPortfolio/>
    <GamePortfolio/>
   {/* <Service2 /> */}
   </>
  )
}

export default Services