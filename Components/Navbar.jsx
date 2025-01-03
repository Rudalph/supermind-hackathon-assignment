"use client"
import { useState } from 'react'
import { Alegreya_Sans_SC } from 'next/font/google'

const orbitron = Alegreya_Sans_SC({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
});

const Navbar = () => {

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        { title: "Customers", path: "javascript:void(0)" },
        { title: "Careers", path: "javascript:void(0)" },
        { title: "Guides", path: "javascript:void(0)" },
        { title: "Partners", path: "javascript:void(0)" }
    ]

    return (
        <div className=' w-full'>
        <div className="bg-[#F7F7F7] w-full border-b md:border-0 md:static py-4 ">
            <div className='bg-white border lg:rounded-full lg:mx-40 '>
                <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">

                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a href="https://creative-techscapes.vercel.app">
                            <div className={orbitron.className}><p className='font-extrabold text-3xl text-[#F53838]'>ZenithZest</p></div>
                        </a>
                        <div className="md:hidden">
                            <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                                onClick={() => setState(!state)}
                            >
                                {
                                    state ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                        </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                    <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' : 'hidden'}`}>

                        <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">

                            {

                                navigation.map((item, idx) => {
                                    return (

                                        <li key={idx} className="text-gray-600 hover:text-[#F53838]">
                                            <a href={item.path}>
                                                {item.title}
                                            </a>
                                        </li>
                                    )
                                })
                            }

                        </ul>

                    </div>
                    <div className="hidden md:inline-block">
                        <a href="javascript:void(0)" className="py-2 px-4 text-white bg-[#F53838] rounded-md shadow">
                            Get Started
                        </a>
                    </div>
                </div>

            </div>
        </div>
        </div>
    )
}

export default Navbar