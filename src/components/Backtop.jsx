import React, { useState } from 'react'
import backtop from '../assets/images/backtop.webp'

const Backtop = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                });
        };

        window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        });
        return (
                <div>                                
                        <button className={`back-to-top ${isVisible ? 'visible' : ''} fixed bottom-[20px] right-[20px] z-[9]`}
                                onClick={scrollToTop}
                                style={{ display: isVisible ? 'block' : 'none', }} >
                                <div className='w-[40px] h-[40px] xs:w-[50px] xs:h-[50px] cursor-pointer rounded-full bg-[#FFFFFF] flex justify-center items-center'>
                                        <img src={backtop} alt="#" />
                                </div>
                        </button>
                </div>
        )
}

export default Backtop
