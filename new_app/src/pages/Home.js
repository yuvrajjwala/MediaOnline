import React from 'react'
import Header from '../components/Header'
import '../components/header.css'
import '../pages/home.css'
import image1 from '../assets/img/home/TV.png'
import image2 from '../assets/img/home/Group76.png'
import image3 from '../assets/img/home/Group62.png'
import tv from '../assets/img/home/tv_1.png'
import lock from '../assets/img/home/lock.png'
import cash from '../assets/img/home/cash.png'
import hamburger from '../assets/img/home/hamburger.png'
function Home() {
    return (
        <>
            <Header text1="Privacy and Performance" text2=" By Design" subtext1="Smart TV add management made simple" buttonText="GET STARTED" />
            <div id='arr2'>
                <div id='arr2-1'>Built for the future of smart TV Advertising</div>
                <img src={image1} alt='' id="arr2-3" />
                <div id='arr2-2'>
                    <div id='arr2-2-1'>ARE YOU PREPARED FOR A WORLD WITHOUT THIRD-PARTY COOKIES</div>
                    <div id='arr2-2-2'>Data fragmentation and degradation of third party cookies
                        has allowed us to harness opportunities and reimagine how
                        audience targeting, Attribution can be brought forward in a
                        privacy-focussed manner.</div>
                </div>
            </div>

            <div id='arr3'>
                <div id='arr3-1'>THE ONES WHO BELIEVE IN US</div>
                <div id='arr3-2'>
                    <img id='arr3-2-1' src={image2} alt="" />
                    <img id='arr3-2-2' src={image2} alt="" />
                </div>
            </div>

            <div id="arr4">
                <div id='arr4-1'>
                    <div id='arr4-1-1'>CHANNELS</div>
                    <div id='arr4-1-2'>Safeguard your audience and your
                        revenue.</div>
                    <div id='arr4-1-3'>Activate your channel audience, without exposing any data. Connect with advertisers securely. Build privacy-safe audience segments. Transfer Data without the worry of data leak.</div>
                </div>
                <div id='arr4-2'>
                    <img id='arr4-2-1' src={image3} alt='' />
                </div>
            </div>




            <div id='arr5'>
                <div id='arr5-1'>
                    <div id='arr5-1-1'>
                        <div id='arr5-1-1-1'>
                            <img src={tv} alt=''/>
                            <span className='head-small'> Run smart tv campaigns in a privacy-safe
                            environment.</span>
                        </div>
                        <div id='arr5-1-1-2' className='sub-text'>
                        Control how much data is exposed to other parties and ensure your
data is kept within an isolated environment.
                        </div>
                        {/* <div id='arr5-1-1-3'></div> */}
                    </div>
                    <div id='arr5-1-2'>
                        <div id='arr5-1-2-1'>
                            <img src={lock} alt=''/><span className='head-small'> Build privacy-safe audience segments</span>
                        </div>
                        <div id='arr5-1-2-2' className='sub-text'>Generate insights, build look-alike models, and support advanced
measurement. We help build ideal customers cohorts while complying
with privacy regulations.
</div>
                        {/* <div id='arr5-1-2-3'></div> */}
                    </div>
                    <div id='arr5-1-3'>
                        <div id='arr5-1-3-1'>
                            <img src={cash} alt=''/><span className='head-small'> Maximise Ad Revenue and fill rate</span>
                        </div>
                        <div id='arr5-1-3-2' className='sub-text'>Maximise revenue using our hybrid auction system that allows for
competition between SSPs, DSPs, Brands and Agencies through server
 side unified auction ensuring maximum revenue and fill.</div>
                        {/* <div id='arr5-1-3-3'></div> */}
                    </div>
                </div>
                <div id='arr5-2'>
                    <div id='arr5-2-1'>
                        <div id='arr5-2-1-1'>
                            <span>Transfer information without the worry of data leak.</span>
                        </div>
                        <div id='arr5-2-1-2'>
                            <img src={hamburger} alt=''/>
                        </div>
                    </div>
                    <div id='arr5-2-2'>9MO ensures safety of audience data by converting personally
identifiable information into unique identifiers.
A marketer cannot reverse engineer our unique IDs to personally
identifiable information (PII). This can significantly reduce the
 amount of data subject to regulations, such as (GDPR) in Europe and
(CCPA) in the US, and increase opportunities for channels and brands
to share data in a privacy-compliant manner.</div>
                </div>
            </div>

        </>
    )
}

export default Home