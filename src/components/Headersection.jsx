import React, { useState } from 'react'
import Navsection from './Navsection'
import headerimg from '../assets/images/header-img.webp'
import trangle1 from '../assets/images/header-trangle1.webp'
import trangle2 from '../assets/images/header-trangle2.webp'
import trangle3 from '../assets/images/header-trangle3.webp'

const Headersection = () => {
  const [first, setfirst] = useState("tab1")
  function tabchanges(tabs) {
    setfirst(tabs)
  }
  return (
    <div>
      <Navsection />
      <div className=' max-w-[1220px] mx-auto px-3 pt-[45px] sm:pt-[80px]'>
        <div className='grid lg:grid-cols-2'>
          <div>
            <div className=' flex items-center gap-[23px] border-b w-[260px] mx-auto lg:mx-0 justify-center lg:justify-start '>
              <p onClick={() => tabchanges("tab1")} className={` ${first === "tab1" ? "text-red-600 relative after:duration-500  after:w-[47px] after:left-1 after:absolute  after:right-0  after:-bottom-[0.9px]  after:h-[2px] after:bg-[#B00000] hover:text-[#B00000] ":"text-[#DBD9D9]"} cursor-pointer text-[15px] font-semibold leading-normal font-poppins `}>Hosting</p>
              <p onClick={() => tabchanges("tab2")} className={` ${first === "tab2"  ? "text-red-600 relative after:duration-500  after:w-[47px] after:left-1 after:absolute  after:right-0  after:-bottom-[0.9px]  after:h-[2px] after:bg-[#B00000] hover:text-[#B00000] ":"text-[#DBD9D9]"} cursor-pointer text-[15px] font-semibold leading-normal font-poppins `}>Domain</p>
              <p onClick={() => tabchanges("tab3")} className={` ${first === "tab3"  ? "text-red-600 relative after:duration-500  after:w-[19px] after:left-1 after:absolute  after:right-0  after:-bottom-[0.9px]  after:h-[2px] after:bg-[#B00000] hover:text-[#B00000] ":"text-[#DBD9D9]"} cursor-pointer text-[15px] font-semibold leading-normal font-poppins `}>SEO </p>
              <p onClick={() => tabchanges("tab4")} className={` ${first === "tab4"  ? "text-red-600 relative after:duration-500  after:w-[32px] after:left-1 after:absolute  after:right-0  after:-bottom-[0.9px]  after:h-[2px] after:bg-[#B00000] hover:text-[#B00000] ":"text-[#DBD9D9]"} cursor-pointer text-[15px] font-semibold leading-normal font-poppins `}>Email</p>
            </div>
            {first === "tab1" &&
              <div className=' pt-[26px]'>
                <h1 className=' text-center lg:text-start pb-[20px] sm:pb-[34px] text-[#2E2E2E] text-[34px]  sm:text-[64px] font-bold leading-[45px] sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
                <p className=' text-center lg:text-start pb-[20px] mx-auto lg:mx-0  sm:pb-[60px] text-[#808080] text-[16px] font-normal leading-[27px] tracking-[0.8px] max-w-[448px] font-inter'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
                <div className=' flex items-center justify-center lg:justify-start gap-[24px]'>
                  <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[13.5px] px-[12px] duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Create an Account</button>
                  <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[18px] px-[12px]  duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Choose your plan</button>
                </div>
              </div>

            }
            {first === "tab2" &&
              <div className=' pt-[26px]'>
              <h1 className=' text-center lg:text-start pb-[20px] sm:pb-[34px] text-[#2E2E2E] text-[34px]  sm:text-[64px] font-bold leading-[45px] sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
              <p className=' text-center lg:text-start pb-[20px] mx-auto lg:mx-0  sm:pb-[60px] text-[#808080] text-[16px] font-normal leading-[27px] tracking-[0.8px] max-w-[448px] font-inter'>Blazing fast web hosting for individuals and businesses .</p>
              <div className=' flex items-center justify-center lg:justify-start gap-[24px]'>
                <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[13.5px] px-[12px] duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Create an Account</button>
                <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[18px] px-[12px]  duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Choose your plan</button>
              </div>
            </div>
            }
            {first === "tab3" &&
              <div className=' pt-[26px]'>
              <h1 className=' text-center lg:text-start pb-[20px] sm:pb-[34px] text-[#2E2E2E] text-[34px]  sm:text-[64px] font-bold leading-[45px] sm:leading-[77.5px] font-poppins'>Premium Web  Your Website</h1>
              <p className=' text-center lg:text-start pb-[20px] mx-auto lg:mx-0  sm:pb-[60px] text-[#808080] text-[16px] font-normal leading-[27px] tracking-[0.8px] max-w-[448px] font-inter'> web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className=' flex items-center gap-[24px] justify-center lg:justify-start'>
                <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[18px] px-[12px]  duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Choose your plan</button>
              </div>
            </div>
            }
            {first === "tab4" &&
              <div className=' pt-[26px]'>
              <h1 className=' text-center lg:text-start pb-[20px] sm:pb-[34px] text-[#2E2E2E] text-[34px]  sm:text-[64px] font-bold leading-[45px] sm:leading-[77.5px] font-poppins'>Premium Web Hosting for Your Website</h1>
              <p className=' text-center lg:text-start pb-[20px] mx-auto lg:mx-0  sm:pb-[60px] text-[#808080] text-[16px] font-normal leading-[27px] tracking-[0.8px] max-w-[448px] font-inter'>Blazing fast web hosting for individuals and businesses of all sizes backed by 24x7x365 Support.</p>
              <div className=' flex items-center justify-center lg:justify-start gap-[24px]'>
                <button className=' font-poppins text-[12px] sm:text-[14px] font-normal sm:leading-[24px] leading-[18px] rounded-[8px] border border-solid border-black sm:py-[12px] py-2 sm:px-[13.5px] px-[12px] duration-300 hover:text-white hover:border hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)]'>Create an Account</button>
              </div>
            </div>
            }
          </div>
          <div className=' pt-6 lg:pt-0 flex items-center justify-center'>
            <div className=' relative max-w-[501px] w-full h-full sm:min-h-[504px]'><img src={headerimg} alt="#" />
              <img className=' absolute top-[12%] right-1 sm:right-[-5%] w-[30px] sm:w-[40px]' src={trangle1} alt="#" />
              <img className=' absolute bottom-[30%] sm:bottom-[43%] left-[-4%] w-[30px] sm:w-[40px]' src={trangle2} alt="#" />
              <img className=' absolute bottom-[10%] sm:bottom-[8%] right-1 sm:right-[-5%] w-[40px] sm:w-[72px] ' src={trangle3} alt="#" />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Headersection
