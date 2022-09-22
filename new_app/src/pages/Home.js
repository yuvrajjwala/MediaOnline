import React from 'react'
import Header from '../components/Header'
import '../components/header.css'
import '../pages/home.css'
import image1 from '../assets/img/home/TV.png'
import image2 from '../assets/img/home/Group76.png'
import image3 from '../assets/img/home/1.png'
import image4 from '../assets/img/home/2.png'
import image5 from '../assets/img/home/3.png'
import SineWaves from 'sine-waves';
import image6 from '../assets/img/home/4.png'
import image7 from '../assets/img/home/5.png'
import image8 from '../assets/img/home/6.png'
import image9 from '../assets/img/home/7.png'
import image10 from '../assets/img/home/8.png'
import image11 from '../assets/img/home/9.png'
import image12 from '../assets/img/home/10.png'
import image13 from '../assets/img/home/11.png'
import image14 from '../assets/img/home/12.png'
import tv from '../assets/img/home/tv_1.png'
import lock from '../assets/img/home/lock.png'
import cash from '../assets/img/home/cash.png'
import hamburger from '../assets/img/home/hamburger.png'
import overflow from '../assets/img/home/071.png'
import privateMarket from '../assets/img/home/PrivateMarketplace.png'
import timeline from '../assets/img/home/Timeline.1549787a14cb87462894.svg'
import circle_out from '../assets/img/home/Ellipse3.png'
import circle_mid from '../assets/img/home/Ellipse2.png'
import circle_in from '../assets/img/home/Ellipse1.png'
import logo1 from '../assets/img/home/MaskGroup.png'
import Testimonial from '../components/Testimonial/Testimonial'
import sidebg from '../../src/assets/img/home/side-bg.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()
function Home() {
    setTimeout(() => {
        var waves = new SineWaves({
            el: document.getElementById('waves'),

            speed: 2,

            ease: 'SineInOut',

            wavesWidth: '150%',

            waves: [
                // RANDOM WAVES
                // {
                //     timeModifier: 3,
                //     lineWidth: 5,
                //     amplitude: -225,
                //     wavelength: 195
                // },
                // {
                //     timeModifier: 4,
                //     lineWidth: 5,
                //     amplitude: -225,
                //     wavelength: 195
                // },
                // {
                //     timeModifier: 2,
                //     lineWidth: 5,
                //     amplitude: -225,
                //     wavelength: 195
                // },
                // {
                //     timeModifier: 3,
                //     lineWidth: 5,
                //     amplitude: -220,
                //     wavelength: 155
                // },
                // {
                //     timeModifier: 4,
                //     lineWidth: 5,
                //     amplitude: -205,
                //     wavelength: 205
                // },
                // {
                //     timeModifier: 3,
                //     lineWidth: 5,
                //     amplitude: -225,
                //     wavelength: 195
                // },
                // {
                //     timeModifier: 2,
                //     lineWidth: 4,
                //     amplitude: -205,
                //     wavelength: 175
                // },
                // {
                //     timeModifier: 4,
                //     lineWidth: 5,
                //     amplitude: -205,
                //     wavelength: 175
                // },
                // {
                //     timeModifier: 3,
                //     lineWidth: 5,
                //     amplitude: -265,
                //     wavelength: 165
                // },
                // {
                //     timeModifier: 2,
                //     lineWidth: 5,
                //     amplitude: -215,
                //     wavelength: 175
                // },
                // {
                //     timeModifier: 5,
                //     lineWidth: 5,
                //     amplitude: -125,
                //     wavelength: 195
                // },{
                //     timeModifier: 3,
                //     lineWidth: 5,
                //     amplitude: -265,
                //     wavelength: 185
                // },
                // {
                //     timeModifier: 4,
                //     lineWidth: 5,
                //     amplitude: -175,
                //     wavelength: 225
                // }
                // SINE WAVE-----------------
                {
                    timeModifier: 3,
                    lineWidth: 5,
                    amplitude: -265,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 5,
                    amplitude: -245,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 4,
                    amplitude: -225,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 4,
                    amplitude: -205,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 4,
                    amplitude: -185,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 3,
                    amplitude: -165,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 3,
                    amplitude: -145,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 3,
                    amplitude: -125,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 3,
                    amplitude: -105,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 2,
                    amplitude: -85,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 2,
                    amplitude: -65,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 2,
                    amplitude: -45,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 2,
                    amplitude: -25,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 1,
                    amplitude: 5,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 1,
                    amplitude: 25,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 1,
                    amplitude: 45,
                    wavelength: 135
                },
                {
                    timeModifier: 3,
                    lineWidth: 1,
                    amplitude: 65,
                    wavelength: 135
                }
               
               
            ],

            // Called on window resize
            resizeEvent: function () {
                var gradient = this.ctx.createLinearGradient(0, 0, this.width, 0);
                gradient.addColorStop(0, "#01868fd1");
                gradient.addColorStop(0.5, "#3D4480");
                gradient.addColorStop(1, "#770370c7");

                var index = -1;
                var length = this.waves.length;
                while (++index < length) {
                    this.waves[index].strokeStyle = gradient;
                }

                // Clean Up
                index = void 0;
                length = void 0;
                gradient = void 0;
            }
        });

    }, 500);
    return (
        <>

            <Header text1="Privacy and Performance" text2=" By Design" subtext1="Smart TV add management made simple" buttonText="GET STARTED" />
            <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300" id='arr2'>
                <div id='arr2-1'>Built for the future of smart TV Advertising</div>
                <div data-aos="zoom-in"
                data-aos-duration="2000" data-aos-delay="1000" id="container">
                    <canvas id="waves" style={{height:"400px !important"}}></canvas>
                </div>
                <img data-aos="zoom-in"
                data-aos-duration="1500" data-aos-delay="400" src={image1} alt='' id="arr2-3" />
                <div id='arr2-2'>
                    <div data-aos="fade-up"
                data-aos-duration="3000" data-aos-delay="700" id='arr2-2-1'>ARE YOU PREPARED FOR A WORLD WITHOUT THIRD-PARTY COOKIES</div>
                    <div data-aos="fade-up"
                data-aos-duration="3000" data-aos-delay="900" id='arr2-2-2'>Data fragmentation and degradation of third party cookies
                        has allowed us to harness opportunities and reimagine how
                        audience targeting, Attribution can be brought forward in a
                        privacy-focussed manner.</div>
                </div>
            </div>






            <div data-aos="fade-up"
                data-aos-duration="500" id='arr3'>
                <div data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300" id='arr3-1'>THE ONES WHO BELIEVE IN US</div>
                <div id='arr3-2'>
                    <img id='arr3-2-1' src={image2} alt="" />
                    <img id='arr3-2-2' src={image2} alt="" />
                </div>
            </div>

            <div  id="arr4">
                <div id='arr4-1'>
                    <div data-aos="fade-up"
                data-aos-duration="2000" data-aos-delay="300" id='arr4-1-1'>CHANNELS</div>
                    <div data-aos="fade-up"
                data-aos-duration="2000" data-aos-delay="500" id='arr4-1-2'>Safeguard your audience and your
                        revenue.</div>
                    <div data-aos="fade-up"
                data-aos-duration="3000" data-aos-delay="600" id='arr4-1-3'>Activate your channel audience, without exposing any data. Connect with advertisers securely. Build privacy-safe audience segments. Transfer Data without the worry of data leak.</div>
                </div>
                <div id='arr4-2'>
                    <img data-aos="fade-up"
                data-aos-duration="1000" data-aos-delay="300" id='arr4-2-1' src={image3} alt='' />
                    <img data-aos="fade-up"
                data-aos-duration="1200" data-aos-delay="350" id='arr4-2-2' src={image4} alt='' />
                    <img 
                    data-aos="fade-up"
                    data-aos-duration="1500" data-aos-delay="350" id='arr4-2-3' src={image5} alt='' />
                    <img data-aos="fade-up"
                data-aos-duration="1600" data-aos-delay="400" id='arr4-2-4' src={image6} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="1800" data-aos-delay="400" id='arr4-2-5' src={image7} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="400" id='arr4-2-6' src={image8} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="2100" data-aos-delay="500" id='arr4-2-7' src={image9} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="2500" data-aos-delay="500" id='arr4-2-8' src={image10} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="2600" data-aos-delay="500" id='arr4-2-9' src={image11} alt='' />
                    <img 
                    data-aos="fade-up"
                    data-aos-duration="2700" data-aos-delay="600" id='arr4-2-10' src={image12} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="2900" data-aos-delay="600" id='arr4-2-11' src={image13} alt='' />
                    <img
                    data-aos="fade-up"
                    data-aos-duration="3000" data-aos-delay="600" id='arr4-2-12' src={image14} alt='' />
                </div>
            </div>




            <div id='arr5'>
                <div id='arr5-1'>
                <img id='sidebg' src={sidebg} alt=""/>
                    <div id='arr5-1-1'>
                        
                        <div className='div-flex' id='arr5-1-1-1'>
                       
                            <img data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="300" className='img-block' src={tv} alt='' />
                            
                            <span data-aos="fade-up"
                    data-aos-duration="3000" data-aos-delay="500"  className='head-small'> Run smart tv campaigns in a privacy-safe
                                environment.</span>
                        </div>
                        <div data-aos="fade-up"
                    data-aos-duration="3000" data-aos-delay="500"  id='arr5-1-1-2' className='sub-text'>
                            Control how much data is exposed to other parties and ensure your
                            data is kept within an isolated environment.
                        </div>
                        {/* <div id='arr5-1-1-3'></div> */}
                    </div>
                    <div id='arr5-1-2'>
                        <div data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="500"  className='div-flex' id='arr5-1-2-1'>
                            <img className='img-block' src={lock} alt='' /><span className='head-small'> Build privacy-safe audience segments</span>
                        </div>
                        <div data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" id='arr5-1-2-2' className='sub-text'>Generate insights, build look-alike models, and support advanced
                            measurement. We help build ideal customers cohorts while complying
                            with privacy regulations.
                        </div>
                        {/* <div id='arr5-1-2-3'></div> */}
                    </div>
                    <div id='arr5-1-3'>
                        <div className='div-flex' id='arr5-1-3-1'>
                            <img data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" className='img-block' src={cash} alt='' /><span data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" className='head-small'> Maximise Ad Revenue and fill rate</span>
                        </div>
                        <div data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" id='arr5-1-3-2' className='sub-text'>Maximise revenue using our hybrid auction system that allows for
                            competition between SSPs, DSPs, Brands and Agencies through server
                            side unified auction ensuring maximum revenue and fill.</div>
                        {/* <div id='arr5-1-3-3'></div> */}
                    </div>
                </div>
                <div id='arr5-2'>
                    <div id='arr5-2-1'>
                        <div id='arr5-2-1-1'>
                            <span data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400">Transfer information without the worry of data leak.</span>
                        </div>
                        <div className='div-flex' id='arr5-2-1-2'>
                            <img data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" className='img-block' src={hamburger} alt='' />
                        </div>
                    </div>
                    <div data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="500" id='arr5-2-2'>9MO ensures safety of audience data by converting personally
                        identifiable information into unique identifiers.
                        A marketer cannot reverse engineer our unique IDs to personally
                        identifiable information (PII). This can significantly reduce the
                        amount of data subject to regulations, such as (GDPR) in Europe and
                        (CCPA) in the US, and increase opportunities for channels and brands
                        to share data in a privacy-compliant manner.</div>
                </div>
            </div>

            <div data-aos="fade-up"
                data-aos-duration="1000" id='arr6'>
                <div id='arr6-1'>
                    <img src={overflow} alt='' id='arr6-img' />
                    <div id='arr6-1-1-1' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400">Brands</div>
                    <div id='arr6-1-1'>
                        <div id='arr6-1-1-2'>
                            <div className='heading' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="500">High Precision Targeting</div>
                            <div className='subHeading' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="500">Match your own audience data across streaming channels in a privacy-safe,
                                secure environment with unprecedented audience insights</div>
                        </div>
                        <div id='arr6-1-1-3'>
                            <div className='heading' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="600">Cross Channel Cookie-less Conversions</div>
                            <div className='subHeading' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="600">9MO tracks post-click conversions on an advertiser’s site by appending
                                privacy-friendly IDs through cross channel targeting.</div>
                        </div>
                    </div>
                    <div id='arr6-1-2'>
                        <div className='heading' data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="400">A Single point of Access</div>
                        <div className='subHeading' data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="500">Reach and measure your audience across channels with
                            precision, scale, and transparency in a privacy-friendly way.
                            Optimize your media investments with a view of reach, attribution and
                            incremental impressions across TV Channels— all within a single
                            dashboard.</div>
                    </div>
                    <div id='arr6-2'>
                        <div id='arr6-2-1'>
                            <img data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400" src={privateMarket} alt='' id='arr6-2-img' />
                        </div>
                        <div id='arr6-2-2' >
                            <div  id='arr6-2-2-1' data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="300">Channels</div>
                            <div id='arr6-2-2-2' data-aos="fade-up"
                    data-aos-duration="2000" data-aos-delay="500">Brands can buy PMP inventory easily and gain immediate access to 1400 pre-negotiated deals for connected TV.
                            </div>
                            <button id='arr6-2-2-3' data-aos="fade-up"
                    data-aos-duration="3000" data-aos-delay="600">LEARN MORE</button>
                        </div>
                    </div>
                </div>

            </div>
            <div id='arr7' data-aos="fade-up"
                data-aos-duration="1000">
                <div id='arr7-1'>TESTIMONIALS</div>
                <div id='arr7-2'>The Word of Trust</div>
            </div>
            <Testimonial />

            <div data-aos="fade-up"
                data-aos-duration="1000" id='arr8-0'>How did we get here?</div>
            <div id='arr8'>
                <div id='arr8-1'>
                    <img src={timeline} alt='' />
                </div>
                <div id='arr8-2'>
                    <div id='arr8-2-1'>
                        <img src={circle_out} alt='' id='arr8-img1' className='img-absolute' />
                        <img src={circle_out} alt='' id='arr8-img2' className='img-absolute' />
                        <img src={circle_out} alt='' id='arr8-img3' className='img-absolute' />
                        <img src={logo1} alt='' id='arr8-img4' className='img-absolute' />
                    </div>
                    <div id='arr8-2-2'>
                        <div id='arr8-2-2-1'>We are prepared for a world without third-party cookies, are you?</div>
                        <button id='arr8-2-2-2'>Learn More</button>
                        <div id='arr8-2-2-3'>9MO is developing new tools, features and strategy partnerships to drive scale and performance for effective privacy-compliant advertising solutions.
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home