import React, { useState } from 'react'
import { Righticon } from './Icons'

const Lemonsection = () => {
        const [first, setfirst] = useState("tab1")
        function tabchanges(tabs) {
                setfirst(tabs)
        }
        const packag = [
                {
                        h2: "Starter",
                        doler: "$2.80",
                        doler2: "$5.30",
                },
                {
                        h2: "Standard",
                        doler: "$4.20",
                        doler2: "$7.30",
                },
                {
                        h2: "Suprem",
                        doler: "$7.00",
                        doler2: "$10.30",
                },
        ]
        const Packagedata = packag.map((data, index) => (

                <div key={index} className=' flex items-center justify-center'>
                        {first === "tab1" &&
                                <div  className=' max-w-[299px] rounded-[15px] border-[1.5px] border-solid border-[#C4C4C4] shadow-[0_0_4px_0_rgba(0,0,0,0.25)_inset] pt-[24px] sm:pt-[34px] px-[24px] sm:px-[34px] pb-[24px] sm:pb-[48px]'>
                                        <h2 className=' text-center lg:text-start text-black text-[24px] sm:text-[28px] font-semibold leading-[25px] font-poppins'>{data.h2}</h2>
                                        <p className=' text-center lg:text-start text-black sm:leading-[18px] text-[12px] max-w-[237px] font-normal font-poppins pt-[11px] pb-[28px] '>with all your customers via all conversation channels in one central dashboard.</p>
                                        <h3 className=' text-center lg:text-start text-black text-[36px] sm:text-[42px] font-semibold leading-[32px] font-poppins pb-[11px]'>{data.doler}</h3>
                                        <p className=' text-center lg:text-start text-black text-[14px] font-light leading-[14px] font-poppins pb-[24px] sm:pb-[35px]'>Per month</p>
                                        <button className='  text-black text-[14px] leading-[32px] font-semibold font-poppins border-2 border-solid border-black rounded-[12px] py-[9px] px-[12px] w-full duration-300  hover:text-white  hover:border-2 hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] mb-[35px]'>Choose this Plan</button>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>2GB SSD</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>10GB Bandwidth</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>15 Email Accounts</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Unlimited Database</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>4 Subdomains</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>1 Parked Domain</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>2 Websites</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Free SSL</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Softaculous</p>
                                        </div>
                                </div>

                        }
                        {first === "tab2" &&
                                <div key={index} className=' max-w-[299px] rounded-[15px] border-[1.5px] border-solid border-[#C4C4C4] shadow-[0_0_4px_0_rgba(0,0,0,0.25)_inset] pt-[24px] sm:pt-[34px] px-[24px] sm:px-[34px] pb-[24px] sm:pb-[48px]'>
                                        <h2 className=' text-center lg:text-start text-black text-[24px] sm:text-[28px] font-semibold leading-[25px] font-poppins'>{data.h2}</h2>
                                        <p className=' text-center lg:text-start text-black sm:leading-[18px] text-[12px] max-w-[237px] font-normal font-poppins pt-[11px] pb-[28px] '>with all your customers via all conversation channels.</p>
                                        <h3 className=' text-center lg:text-start text-black text-[36px] sm:text-[42px] font-semibold leading-[32px] font-poppins pb-[11px]'>{data.doler2}</h3>
                                        <p className=' text-center lg:text-start text-black text-[14px] font-light leading-[14px] font-poppins pb-[24px] sm:pb-[35px]'>Per month</p>
                                        <button className=' text-black text-[14px] leading-[32px] font-semibold font-poppins border-2 border-solid border-black rounded-[12px] py-[9px] px-[12px] w-full duration-300  hover:text-white  hover:border-2 hover:border-solid hover:border-[#B00000] hover:bg-[#B00000] hover:shadow-[0_0_64px_0_rgba(176,0,0,0.30)] mb-[35px]'>Choose this Plan</button>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>2GB SSD</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>10GB Bandwidth</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>15 Email Accounts</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Unlimited Database</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>4 Subdomains</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>1 Parked Domain</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>2 Websites</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Free SSL</p>
                                        </div>
                                        <div className='flex items-center gap-6 mb-[15px]'>
                                                <Righticon />
                                                <p className='font-inter text-[#808080] text-[16px] font-bold leading-[24px]'>Softaculous</p>
                                        </div>
                                </div>
                        }

                </div>

        ))
        return (
                <div className=' pt-[50px] sm:pt-[113px]'>
                        <div className=' max-w-[1100px] mx-auto px-3'>
                                <div className=' flex items-center flex-col justify-center'>
                                        <h2 className=' text-[28px] sm:text-[50px] font-semibold text-center max-w-[660px] text-black leading-[37px] sm:leading-[60px] pb-[38px] font-poppins mx-auto'>Ready to get started with
                                                Lemon Wares?</h2>
                                        <p className=' font-poppins pb-[57px] text-center text-[22px] sm:text-[25px] font-normal leading-[25px] '>Choose the package that suits you</p>
                                        <div className=' flex items-center justify-center pb-[25px] sm:pb-[70px] '>
                                                <p className=' font-poppins text-center text-[20px] sm:text-[25px] font-normal leading-[25px]'>Monthly</p>

                                                <label className=" relative inline-block w-[40px] sm:w-[93px] h-[20px] sm:h-[50px] ml-3 sm:ml-[26px]  ">
                                                        <input type="checkbox" className="opacity-0 w-0 h-0" />
                                                        <span className="slider rounded-[50px] absolute top-0 left-0 bottom-0 right-0 cursor-pointer transition-all duration-300 ease-linear bg-[#B00000] before:absolute sm:before:h-[30px] before:h-[10px] before:w-[10px] sm:before:w-[30px] before:rounded-[30px] before:left-[6px] before:bottom-[5px] sm:before:bottom-[11px] before:bg-white before:transition-all before:duration-300 before:ease-linear"></span>
                                                </label>
                                                <p className=' font-poppins ml-2 sm:ml-[27px] text-center text-[20px] sm:text-[25px] font-normal leading-[25px] mr-[5px] sm:mr-[17px]'>Yearly</p>
                                                <div className=' bg-[#FFE87A] rounded-lg flex py-[5px] sm:py-[7px] px-[5px] sm:px-[8px]'><p className=' font-poppins text-[10px] font-medium leading-[9px] text-black'>20% discount</p></div>
                                        </div>

                                </div>
                                <div className=' w-full max-w-[886px] flex items-center mx-auto border-b-4 border-solid border-[#C4C4C4]'>
                                        <div className=' w-1/2 max-w-[443px]'>
                                                <p onClick={() => tabchanges("tab1")} className={` ${first === "tab1"} font-poppins cursor-pointer after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:bottom-[-4px]  after:h-[4px] after:bg-[#B00000] text-center pb-2 text-black text-[20px] sm:text-[30px] font-semibold leading-[40px] `}>Basic</p>
                                        </div>
                                        <div className=' w-1/2 max-w-[443px]'>
                                                <p onClick={() => tabchanges("tab2")} className={` ${first === "tab2"} font-poppins cursor-pointer after:duration-500 after:w-0 hover:after:w-full hover:after:left-0 after:absolute relative after:right-0  after:bottom-[-4px]  after:h-[4px] after:bg-[#B00000] text-center pb-2 text-black text-[20px] sm:text-[30px] font-semibold leading-[40px]`}>Premium</p>
                                        </div>
                                </div>

                                <div className=' grid lg:grid-cols-3 sm:pt-[85px] pt-[24px] gap-6 lg:gap-[100px]'>
                                        {Packagedata}
                                </div>
                        </div>
                </div>
        )
}

export default Lemonsection
