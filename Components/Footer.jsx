import React from 'react'
import { Alegreya_Sans_SC } from 'next/font/google'

const orbitron = Alegreya_Sans_SC({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const Footer = () => {
    return (
        <div>
            <footer className="footer-center bg-[#F7F7F7] text-base-content p-4">
                <a href="https://creative-techscapes.vercel.app">
                    <div className={orbitron.className}><p className='font-extrabold text-3xl text-[#F53838] pb-5'>ZenithZest</p></div>
                </a>
                <aside>
                    <p className='text-base'>Copyright © {new Date().getFullYear()} - All right reserved by ZenithZest</p>
                </aside>
            </footer>
        </div>
    )
}

export default Footer