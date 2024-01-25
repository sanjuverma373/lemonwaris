import React from 'react'
import hosting1 from '../assets/images/hosting-img-1.webp'
import hosting2 from '../assets/images/hosting-img-2.webp'
import hosting3 from '../assets/images/hosting-img-3.webp'
import hosting4 from '../assets/images/hosting-img-4.webp'
import hosting5 from '../assets/images/hosting-img-5.webp'
import hosting6 from '../assets/images/hosting-img-6.webp'
import { Blazing, Ssl, Support, Uptime } from './Icons'

const Hostingsection = () => {
        const cardsmap = [
                {
                        svg: (<Uptime />),
                        h1: "99.9% Uptime",
                },
                {
                        svg: (<Blazing />),
                        h1: "Blazing Fast Web Hosting",
                },
                {
                        svg: (<Ssl />),
                        h1: "Free SSL Certificates",
                },
                {
                        svg: (<Support />),
                        h1: "24x7 Friendly Support",
                },
        ]
        const Cardsdata = cardsmap.map((pra, index) => (
                <div className=' flex items-center flex-col' key={index}>
                        <span className=' pb-[12px]'>{pra.svg}</span>
                        <h2 className=' text-black pb-2 text-[18px] sm:text-[20px] font-bold leading-normal font-poppins text-center'>{pra.h1}</h2>
                        <p className=' text-black text-[12px] font-light leading-normal font-poppins max-w-[252px] text-center'>We Keep Your Web build Online 24x7x365. Downtime not only costs you lost visitors but also damages your reputation and search engine rankings.</p>
                </div>
        ))
        return (
                <div id='about' className=' pt-[45px] sm:pt-[79px]'>
                        <div className=' max-w-[1280px] mx-auto px-3'>
                                <div className=' grid lg:grid-cols-2 '>
                                        <div>
                                                <h2 className=' text-center lg:text-start text-[28px] sm:text-[48px] font-extrabold text-[#18191F] font-inter leading-[40px] sm:leading-[64px]'>True Cloud Web  Hosting</h2>
                                                <p className='  text-center lg:text-start mx-auto pt-4 text-[15px] sm:text-[18px] font-normal text-[#18191F] leading-[23px] sm:leading-[32px] font-inter max-w-[573px]'>
                                                        True Cloud Web Hosting All of the hosting packages we offer are deployed instantly on our SSD powered cloud. We don’t use dedicated servers that operate on single pieces of hardware. Our entire infrastructure is built to be reliable, secure, and scalable.
                                                </p>
                                        </div>
                                        <div className=' pt-6'>
                                                <div className=' grid md:grid-cols-3 grid-cols-2 gap-10 px-3'>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting1} alt="#" /></div>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting2} alt="#" /></div>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting3} alt="#" /></div>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting4} alt="#" /></div>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting5} alt="#" /></div>
                                                        <div className=' items-center flex lg:justify-start justify-center'><img src={hosting6} alt="#" /></div>
                                                </div>
                                        </div>
                                </div>
                                <div className=' grid xl:grid-cols-4 sm:grid-cols-2 gap-y-6  pt-[45px] sm:pt-[122px]'>
                                        {Cardsdata}
                                </div>
                        </div>
                </div>
        )
}

export default Hostingsection
