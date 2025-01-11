// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

// function Insight() {
//   const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin]; // Social media icons

//   const insights = [
//     {
//       title: "Video Posts",
//       description: "Video posts have the highest engagement rate of 33.4% and 61 shares on average!",
//       buttonText: "Learn More",
//     },
//     {
//       title: "Reels",
//       description:
//         "Reels provide an excellent opportunity for quick engagement with followers, and they often get a better reach compared to static posts or stories!",
//       buttonText: "Explore Insights",
//     },
//     {
//       title: "Carousel Posts",
//       description:
//         "Carousel posts allow users to swipe through multiple images or videos, providing a dynamic way to present content.",
//       buttonText: "View Details",
//     },
//     {
//       title: "Static Images",
//       description: "Static images are visually appealing and perform well in certain niches.",
//       buttonText: "Improve Now",
//     },
//     {
//       title: "Video Shares",
//       description: "Videos are highly shareable, making them a preferred choice for brands aiming to go viral.",
//       buttonText: "Check Insights",
//     },
//     {
//       title: "Reels Engagement",
//       description:
//         "Engagement rates for reels are skyrocketing due to their short and engaging format, which captures attention quickly.",
//       buttonText: "Analyze Now",
//     },
//     {
//       title: "Consistent Carousel",
//       description:
//         "Consistency in carousel posts ensures audience retention and better storytelling through multiple slides.",
//       buttonText: "Learn Strategy",
//     },
//   ];

//   return (
//     <div className="flex justify-center flex-wrap gap-8 p-6 bg-gray-100 align-middle items-center">
//       {insights.map((insight, index) => {
//         return (
//           <div
//             key={index}
//             className="card bg-gradient-to-r from-[#F53855] to-[#FD846D] w-80 h-60 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out transform"
//           >
//             {/* Social Media Icons */}
//             <div className="flex justify-between p-2">
//               {socialIcons.map((Icon, idx) => (
//                 <Icon key={idx} className="text-white text-xl hover:text-gray-300 transition-all duration-300 cursor-pointer" />
//               ))}
//             </div>

//             <div className="card-body flex flex-col justify-between p-4 bg-white rounded-b-2xl shadow-xl">
//               <h2 className="card-title text-lg font-bold text-[#0B132A] mb-2">{insight.title}</h2>
//               {/* Scrollable Description with Hidden Scrollbar */}
//               <div className="mb-4 h-16 overflow-y-auto scrollbar-hide">
//                 <p className="text-[#4F5665] text-sm">{insight.description}</p>
//               </div>
//               <div className="card-actions justify-center">
//                 <button className="btn bg-gradient bg-[#F53855] text-white px-4 py-2 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-orange-500 hover:to-pink-500 transition-all duration-300">
//                   {insight.buttonText}
//                 </button>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Insight;

'use client';
import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function Insight() {
  const [insights, setInsights] = useState([]); // State to hold the fetched insights
  const [loading, setLoading] = useState(true); // State to manage loading state

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin]; // Social media icons

  // Fetch the insights data from the backend API
  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const response = await fetch('https://supermind-assignment-backend-2.onrender.com/generate-insights');
        const data = await response.json();
        // Assuming your backend returns insights as an array of objects
        const formattedInsights = data.json_output; // Convert points object to an array
        const parsedData = JSON.parse(formattedInsights)
        const insightsArray = Object.values(parsedData);
        console.log(parsedData);
        console.log(typeof(parsedData));
        // console.log(typeof(formattedInsights));
        setInsights(insightsArray);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching insights:', error);
        setLoading(false);
      }
    };

    fetchInsights();
  }, []);

  if (loading) {
    return(<><div className='flex justify-evenly align-middle items-center mt-24 flex-wrap'>
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      </div>
      
      <div className='flex justify-evenly align-middle items-center mt-24 flex-wrap'>
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
  
      <div className="flex w-52 flex-col gap-4">
      <div className="skeleton h-32 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
      </div>
      
      </div></>) 
  }

  return (
    <div className="flex justify-center flex-wrap gap-8 p-6 align-middle items-center mt-12">
      <div className="lg:my-4">
                <h1 className="text-4xl text-[#FF735C] text-center font-extrabold mx-auto md:text-5xl lg:pt-0 pt-8">Insigths</h1>
                <br />
                <div className='flex justify-center align-middle items-center'>
                    <p className=" mt-2 text-[black] lg:text-lg lg:w-[50%] text-center">
                    Meet our dedicated team of innovators, passionate about turning ideas into impactful solutions. With diverse expertise and a shared vision, we work together to bring our project to life and create meaningful change.
                    </p>
                </div>
                <br />
            </div>
      {insights.map((insight, index) => {
        return (
          <div
            key={index}
            className="card bg-gradient-to-r from-[#F53855] to-[#FD846D] w-80 h-72 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out transform"
          >
            {/* Social Media Icons */}
            <div className="flex justify-between p-2">
              {socialIcons.map((Icon, idx) => (
                <Icon key={idx} className="text-white text-xl hover:text-gray-300 transition-all duration-300 cursor-pointer" />
              ))}
            </div>

            <div className="card-body flex flex-col justify-between p-4 bg-white rounded-b-2xl shadow-xl">
              <div className='overflow-y-auto scrollbar-hide h-36'>
              <h2 className="card-title text-lg font-bold text-[#0B132A] mb-4">{insight.title}</h2>
              {/* Scrollable Description with Hidden Scrollbar */}
              
              <div className="mb-4 h-16 ">
                <p className="text-[#4F5665] text-sm">{insight.description}</p>
              </div>
              </div>
              <div className="card-actions justify-center">
                <button className="btn bg-gradient bg-[#F53855] text-white px-4 py-2 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-orange-500 hover:to-pink-500 transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Insight;
