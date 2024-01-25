import React, { useEffect, useState } from 'react'
import preloader from '../assets/images/preloader.webp'

const Preloader = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        // Simulating data loading with a delay
        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 3500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
        return (
                <div>
                        <div className=" duration-300 w-screen h-screen bg-black fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                                <div className='flex items-center justify-center h-screen'>
                                        <div className="flex items-center justify-center  flex-colum gap-6">
                                                <div class="loader animate-bounce
aspect-square w-8 flex flex-col justify-center items-center"><img className=' h-full w-full' src={preloader} alt="#" />
                                <h2 className=' text-white text-lg font-normal pt-1 font-poppins'>LEMON<span className=' font-bold'>WARES</span></h2>
                                                </div>
                                        </div>

                                </div>
                        </div>
                </div>
        )
}

export default Preloader
