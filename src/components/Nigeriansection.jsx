import React from 'react'
import overimg1 from '../assets/images/over-img1.webp'
import overimg2 from '../assets/images/over-img2.webp'
import overimg3 from '../assets/images/over-img3.webp'
import overimg4 from '../assets/images/over-img4.webp'
import overimg5 from '../assets/images/over-img5.webp'
import overimg6 from '../assets/images/over-img6.webp'

const Nigeriansection = () => {
        return (
                <div id='blog' className=' pt-[45px] sm:pt-[84px]'>
                        <div className=' max-w-[1220px] mx-auto px-3'>
                                <div className=' lg:grid grid-cols-2 '>
                                        <div>
                                                <h2 className=' text-center lg:text-start text-[30px] sm:text-[48px] font-extrabold text-[#18191F] font-inter leading-[40px] sm:leading-[64px]'>We serve over 100
                                                        Nigerian Websites</h2>
                                                <p className=' mx-auto lg:mx-0 text-center lg:text-start pt-2 text-[18px] font-normal text-[#18191F] leading-[32px] font-inter max-w-[450px]'>
                                                Connect LemonWares with your favourite tools that you use daily and keep things on track.
                                                </p>
                                        </div>
                                        <div>
                                                <div className='pt-6 lg:pt-0 grid md:grid-cols-3 grid-cols-2 '>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg1} alt="#" /></div>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg2} alt="#" /></div>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg3} alt="#" /></div>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg4} alt="#" /></div>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg5} alt="#" /></div>
                                                        <div className=' flex justify-center lg:justify-start'><img src={overimg6} alt="#" /></div>
                                                </div>
                                        </div>
                                </div>
                        </div>
                </div>
        )
}

export default Nigeriansection
