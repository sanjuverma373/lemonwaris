import React from 'react'
import crdicon1 from '../assets/images/story-crd-icon1.webp'
import crdicon2 from '../assets/images/story-crd-icon2.webp'
import crdicon3 from '../assets/images/story-crd-icon3.webp'
import hdotsimg from '../assets/images/heading-cimg.webp'
import { Minidot } from './Icons'

const Storiessection = () => {
  return (
    <div className=' pt-[45px] sm:pt-[161px]'>
       <div className=' max-w-[1020px] px-3 mx-auto'>
        <div className=' grid lg:grid-cols-2 '>
                <div className='lg:ml-[60px] px-3'>
                        <div className='relative'>
                                <h3 className=' text-[30px] sm:text-[48px] font-extrabold text-[#18191F] font-inter leading-[45px] sm:leading-[64px] pb-2 text-center lg:text-start'>Real Stories from Real Customers</h3>
                                <img className=' w-[60px] sm:w-[142px] sm:h-[120px] h-[60px] absolute top-[-22%] sm:top-[-37%] left-[-6%] sm:left-[-23%]' src={hdotsimg} alt="#" />
                        </div>
                        <p className=' text-center lg:text-start pb-[24px] font-inter text-[18px] font-normal leading-[32px]'>Get inspired by these stories.</p>
                        <div className=' flex justify-center lg:flex lg:justify-end'>
                        <div className=' bg-white rounded-[8px] shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] pl-[34px] sm:pl-[64px] pr-[25px] sm:pr-[32px] sm:pt-[7px] pb-[36px] sm:pb-[86px]'>
                            <img src={crdicon1} alt="#" />
                            <div className=' flex  relative'>
                                <span className=' absolute left-[-10%]'>
                                        <Minidot />
                                </span>
                                <p className=' text-[16px] font-normal leading-[32px] font-inter max-w-[254px] pb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                            </div>
                                <h4 className=' text-[#18191F] font-inter text-[18px] font-bold leading-[28px]'>Floyd Miles</h4>
                                <p className=' text-[14px] font-medium font-inter leading-[24px] text-[#969BAB]'>Vice President, CLI</p>
                        </div>
                </div>
                </div>
                <div className=' px-3 mt-[24px] sm:mt-[48px]'>
                        <div className=' flex justify-center lg:justify-start'>
                                <div className=' bg-white rounded-[8px] shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] pl-[34px] sm:pl-[64px] pr-[24px] sm:pr-[32px] pt-[24px] sm:pt-[39px] pb-[10px] sm:pb-[14px]'>
                                        <img src={crdicon2} alt="#" />
                                        <div className=' flex  pt-[15px] relative'>
                                                <span className=' absolute left-[-8%]'>
                                                        <Minidot />
                                                </span>
                                                <p className=' text-[16px] font-normal leading-[32px] font-inter max-w-[349px] pb-[24px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elem</p>
                                            </div>
                                            <h4 className=' text-[#18191F] font-inter text-[18px] font-bold leading-[28px]'>Jane Cooper</h4>
                                                <p className=' text-[14px] font-medium font-inter leading-[24px] text-[#969BAB]'>CEO, JPNL</p>
                                </div>
                        </div>
                        <div className=' flex justify-center lg:justify-start'>
                                <div className=' bg-white rounded-[8px] max-w-[350px] shadow-[0_10px_20px_0_rgba(41,41,42,0.07)] pl-[34px] sm:pl-[64px] pr-[24px] sm:pr-[32px] pt-24px sm:pt-[41px] pb-[24px] sm:pb-[32px] mt-[32px]'>
                                        <img src={crdicon3} alt="#" />
                                        <div className=' flex  relative'>
                                                <span className=' absolute left-[-8%]'>
                                                        <Minidot />
                                                </span>
                                                <p className=' text-[16px] font-normal leading-[32px] font-inter max-w-[254px] pb-[24px]'>LemonWares saved our time in Hosting my company page.</p>
                                            </div>
                                            <h4 className=' text-[#18191F] font-inter text-[18px] font-bold leading-[28px]'>Kristin Watson</h4>
                                                <p className=' text-[14px] font-medium font-inter leading-[24px] text-[#969BAB]'>Co-Founder, LeeveOn Branding</p>
                                </div>
                        </div>
                </div>                
        </div>
       </div>
    </div>
  )
}

export default Storiessection
