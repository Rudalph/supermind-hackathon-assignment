import React from 'react'

const Hero = () => {

    return (
        <div className="bg-white">
            
            <section className="mt-16 mx-auto max-w-screen-xl lg:pb-12 items-center lg:flex md:px-8 px-2">
                <div className="space-y-4 flex-1 sm:text-center lg:text-left">
                    <h1 className="text-white font-bold text-4xl xl:text-5xl">
                        <span className="text-[#FF735C]"> Social Media Performance Analysis</span>
                    </h1>
                    <br />
                    <p className="text-black max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                    An analytics module using Langflow and DataStax analyzes engagement data from mock social media accounts. It processes metrics like likes, comments, and shares, offering insights to optimize content strategies.
                    </p>
                    <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start lg:mx-0 mx-20">
                        <a href="javascript:void(0)" className="px-7 py-3 w-full bg-white text-black text-center rounded-md shadow-md block sm:w-auto border border-[#F53838]">
                            Get started
                        </a>
                    </div> 
                </div>
                <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
                    <img src="https://img.freepik.com/free-vector/media-player-concept-illustration_114360-3331.jpg?t=st=1735910488~exp=1735914088~hmac=fad12785cbde9cbd4ccfcf45ad30a823653c259f406172f5379ed5dc52bcfa50&w=1060" className="w-full mx-auto sm:w-10/12  lg:w-full" />
                </div>
            </section>
        </div>
    )
}

export default Hero