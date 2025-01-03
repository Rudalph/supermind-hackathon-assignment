"use client"
import { useState } from "react"

const Video = () => {


    const [isVideoPoppedUp, setVideoPopUp] = useState(false)

    return (
        <div>
            <section>
                <div className="max-w-screen-xl mx-auto px-4 py-28 gap-12 text-gray-600 md:px-8 xl:flex items-center align-middle">
                    <div className="flex-1 max-w-xl mx-auto xl:mt-0">
                        <div className="relative">
                            <img src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="rounded-lg" alt="" />
                            <button className="absolute w-16 h-16 rounded-full inset-0 m-auto duration-150 bg-[#F53838] ring-offset-2 focus:ring text-white"
                                onClick={() => setVideoPopUp(true)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 m-auto">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="space-y-5 max-w-2xl mx-auto text-center lg:text-right items-end block justify-center">

                        <h1 className="text-4xl text-[#FF735C] font-extrabold mx-auto md:text-5xl lg:pt-0 pt-8">
                            Watch the Video
                        </h1>
                        <p className="max-w-xl mx-auto xl:mx-0 text-center lg:text-right text-black">
                            Watch the video to explore everything about our project! Discover its purpose, features, and the innovative solutions it brings to the table. Don't miss out on understanding how it can make a difference!
                        </p>

                    </div>

                </div>
                {
                    isVideoPoppedUp ? (
                        <div className="fixed inset-0 w-full h-full flex items-center justify-center">
                            <div className="absolute inset-0 w-full h-full bg-black/50" onClick={() => setVideoPopUp(false)}></div>
                            <div className="px-4 relative">
                                <video className="rounded-lg w-full max-w-2xl" controls autoPlay={true}>
                                    <source src="https://raw.githubusercontent.com/sidiDev/remote-assets/main/FloatUI.mp4" type="video/mp4" />
                                </video>
                                <button
                                    className="w-12 h-12 mb-5 rounded-full duration-150 bg-gray-800 hover:bg-gray-700 text-white"
                                    onClick={() => setVideoPopUp(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 m-auto">
                                        <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ) : ""
                }
            </section>
        </div>
    )
}

export default Video