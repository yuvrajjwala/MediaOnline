import React from 'react'
import Footer from '../../components/Footer/Footer'
import LightHeader from '../../components/LighHeader/LightHeader'
import ourStory from "../../assets/img/about/OurStory.png";
import './About.css'
const About = () => {
  return (
    <div>
      <LightHeader text0="ABOUT US" text1="The end-to-end solution designed for smart(er)  TV advertising" buttonText="GET STARTED" />

      <img id='ab-arr1' src={ourStory} alt='' />

      <div id='ab-arr2' className='about-padding'>
        <div className='color'>Our Community</div>
        <div className='black' id='width'>What makes us stronger is our difference.
          Headquartered in Singapore with branches in Dubai and Malaysia.
          Our organization is diverse, with members from various countries, cultures, fields, and backgrounds.
          This company creates solutions that help its customers and community.</div>
      </div>

      <div id='ab-arr3' className='about-padding'>
        <div className='color'>Our Team</div>
        <div className='ab1'>Our team is the key to our success.
        </div>
        <div className='black' id='width1'>We are a close-knit and talented group with a shared vision of delivering great results for our clients, as well as ensuring 9MO is a fun and challenging place to work.
          At 9MO, we work with talented people who share our vision and passion for helping our clients be the best they can be. We’re very proud of the team we’ve built – there are more than twenty of us now. But, it still feels like it did when there were just a few of us.  </div>
        <div className='ab1'>Our team is the key to our success.
        </div>
      </div>

      <div id='flex-area'>
        <div className='felx-about'>
          <div  className='flex-1' id='flex1'>We envision BIG and start small</div>
          <div  className='flex-2'></div>
          <div  className='flex-3'>Being proactive, making decisions, taking responsibility, and trying new things.</div>
        </div>
        <div className='felx-about'>
          <div  className='flex-1' id='flex2'>We will laugh hard, loud, and often</div>
          <div  className='flex-2'></div>
          <div  className='flex-3'>We enjoy our work and have fun while at it. We don't take ourselves too seriously.</div>
        </div>
        <div className='felx-about'>
          <div  className='flex-1' id='flex3'>We can do a lot more by doing less, better and faster</div>
          <div  className='flex-2'></div>
          <div  className='flex-3' id='long'>We always bring our best. It's focused on excellence.  We are obsessed with quality but have an iterative, fast-paced approach.</div>
        </div>
        <div className='felx-about' id='long-1'>
          <div  className='flex-1' id='flex3'>Change is the only constant. </div>
          <div  className='flex-2'></div>
          <div  className='flex-3' id='long'>We enthusiastically embrace and drive ongoing change. Furthermore, we challenge the norms and push boundaries. We don't maintain, we multiply. We are bold in what we do</div>
        </div>
        <div className='felx-about' id='long-2'>
          <div  className='flex-1' id='flex3'>We are generous givers, not self-serving takers</div>
          <div  className='flex-2'></div>
          <div  className='flex-3' id='long'>We give more than we take and are always helping. We teach and educate. We are always setting people up for success.</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default About