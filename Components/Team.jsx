import React from 'react'
import Image from 'next/image'

export default function Team() {
    return (
        <div className="mx-auto max-w-7xl lg:max-w-full px-2 md:px-0 lg:mb-10">
            <div className="lg:my-4">
                <h1 className="text-4xl text-[#FF735C] text-center font-extrabold mx-auto md:text-5xl lg:pt-0 pt-8">Our Team</h1>
                <br />
                <div className='flex justify-center align-middle items-center'>
                    <p className=" mt-2 text-[black] lg:text-lg lg:w-[50%] text-center">
                    Meet our dedicated team of innovators, passionate about turning ideas into impactful solutions. With diverse expertise and a shared vision, we work together to bring our project to life and create meaningful change.
                    </p>
                </div>
                <br />
            </div>
            <div className="flex justify-center align-middle items-center flex-wrap gap-12 lg:gap-60">
                

                <div className="card card-compact bg-base-100 w-72 shadow-xl border border-solid border-[#1A2238]">
                    <figure className="overflow-hidden">
                        <img
                            src="/Rudalph_Image.jpg"
                            alt="Shoes"
                            className='h-64 w-full transition-transform duration-500 ease-in-out transform hover:scale-110'
                            />
                    </figure>
                    <div className="card-body h-28">
                        <h2 className="card-title text-[#1A2238]"><a href="https://linkedin.com/in/rudalphgonsalves">Rudalph Gonsalves</a></h2>
                        <p className='text-base text-[#D45028]'>Team Leader - Full stack developer</p>
                    </div>
                </div>


                <div className="card card-compact bg-base-100 w-72 shadow-xl border border-solid border-[#1A2238]">
                    <figure className="overflow-hidden">
                        <img
                            src="/Shruti_Image.jpg"
                            alt="Shoes" 
                            className='h-64 w-full transition-transform duration-500 ease-in-out transform hover:scale-110'
                            />
                    </figure>
                    <div className="card-body h-28">
                        <h2 className="card-title text-[#1A2238]"><a href="https://www.linkedin.com/in/shrutipatil20/">Shruti Patil</a></h2>
                        <p className='text-base text-[#D45028]'>Team Member - Full stack developer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
