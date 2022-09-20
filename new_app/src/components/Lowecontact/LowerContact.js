import React from 'react'
import './LowerContact.css'
import lowerfooteLogos from '../../assets/img/home/lowerfooteLogos.png'
import getademo from '../../assets/img/home/Get a Demo.png'
const LowerContact = () => {
  return (
    <div>
      <p className='heading-lower-contact'>98% of our ads are delivered to individuals,<br></br> not to cookies.</p>
      <div className='lower-conten-box'>
         <div className='lower-content-left' data-aos="fade-up"
     data-aos-duration="1000">
            <div>9MO tracks post-click conversions on an advertiser’s site by appending privacy-friendly IDs through cross channel targeting.</div>
            <div><img src={lowerfooteLogos}></img></div>
         </div>
         <div className='lower-conter-right' data-aos="fade-up"
     data-aos-duration="1000">
          <div className='get-a-demo-border'>
           <div className='get-a-demo-form'>
              <p id='get-1'>Get a Demo</p>
              <p>Email</p>
              <input name='email' type="email"></input>
              <p>Message</p>
              <input id='input-2' type="text"></input><br></br>
              <button>SUBMIT</button>
              <p className='lower-text-contact'>To learn how Clearbit handles your information, please see our <a href='#'>privacy policy.</a></p>
           </div>
         </div>
         </div>
      </div>
    </div>
  ) 
}

export default LowerContact