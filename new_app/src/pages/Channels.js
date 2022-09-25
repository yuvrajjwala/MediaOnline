import React from 'react'
import './channels.css'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header'
import friends from '../assets/img/channel/friends.png'
import one from '../assets/img/channel/Group77.png'
import two from '../assets/img/channel/Group78.png'
import three from '../assets/img/channel/Group79.png'
import four from '../assets/img/channel/Group80.png'
import five from '../assets/img/channel/Group81.png'
import six from '../assets/img/channel/Group82.png'
import seven from '../assets/img/channel/FillRates.png'
import eight from '../assets/img/channel/Group84.png'

function Channels() {

    return (
        <>
            <Header text1="Future-Safe Ad Solution" text2=" for Channels" subtext1="" buttonText="GET STARTED" />

            <div id='c-arr1'>
                <div id='c-arr11'>Run smart tv ad campaigns in a privacy-safe environment.</div>
                <div id='c-arr12'>
                    <img src={friends} alt='' id='arr12-img' />
                    <div id='arr121'>Safeguard your audience data by creating encrypted identifiers unique to your audience.
                        9MO helps our clients in delivering high quality, privacy-safe data at scale while
                        maximizing their ad revenue. Let us help create and match your unique identifiers to a set of users that meet the
                        advertiser’s needs.</div>
                    <div id='arr122'>9MO uses first-party data and machine learning to build audience cohorts based on the
                        content users who consume content across your channel.</div>

                </div>
            </div>

            <div className='c-arr2'>
                <div className='area-left'>Hybrid Auction System</div>
                <div className='area-right'>The hybrid auction system allows for competition among
                    multiple SSPs, DSPs, Brands and Agencies. This allows impressions to
                    be sold at the highest possible price.
                    Our SSAI unified auction technology uses machine learning to optimize
                    yield, making it a safe choice for implementing programmatic solutions.</div>
            </div>
            <span className='line'></span>
            <div className='c-arr2'>
                <div className='area-left'>Maximize revenue with multi-channel tools</div>
                <div className='area-right'>Grow business by giving advertisers what they want. Leverage cuttingedge planning, packaging, sales, and measurement capabilities to extract
                    more value from your inventory.
                </div>
            </div>
            <span className='line'></span>
            <div className='c-arr2' id='margin-bottom'>
                <div className='area-left' id='length'>Dedicated Customer Support
                </div>
                <div className='area-right'>The company has a dedicated account management team to help you with
                    onboarding and optimization.
                    <ul>
                        <li>We continuously monitor ads to ensure that only brand-safe ads are shown to your
                            audience.</li>
                        <li>Unique demand from multiple SSPs, DSPs and programmatic deals</li>
                        <li>Yield analytics with aggregated data and actionable insights</li>
                    </ul>


                </div>
            </div>


            <div id='c-arr3'>
                <div id='c-head'>Auction Analytics</div>
                <div id='c-sub-head'>Robust reporting lets you keep tabs on demand partners and daily revenue</div>
                <div id='c-main-area'>
                    <div className='mini-area'>
                        <img src={one} alt=''/>
                        <div className='mini-text'>Ad Impressions</div>
                    </div>
                    <div className='mini-area'>
                        <img src={two} alt=''/>
                        <div className='mini-text'>Video Completion</div>
                    </div>
                    <div className='mini-area'>
                        <img src={three} alt=''/>
                        <div className='mini-text'>Report Scheduler</div>
                    </div>
                    <div className='mini-area'>
                        <img src={four} alt=''/>
                        <div className='mini-text'>CPMs</div>
                    </div>
                    <div className='mini-area'>
                        <img src={five} alt=''/>
                        <div className='mini-text'>Ad Requests</div>
                    </div>
                    <div className='mini-area'>
                        <img src={six} alt=''/>
                        <div className='mini-text'>Time Period</div>
                    </div>
                    <div className='mini-area'>
                        <img src={seven} alt=''/>

                    </div>
                    <div className='mini-area'>
                        <img src={eight} alt=''/>

                    </div>
                </div>
            </div>


            <div id='last-head'>Take a look at your clients</div>
            <button id='last-btn'>CUSTOMERS</button>
            <Footer />
        </>
    )
}

export default Channels;
