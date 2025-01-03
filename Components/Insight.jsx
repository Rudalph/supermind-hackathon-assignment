import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import social media icons

function Insight() {

  const socialIcons = [FaFacebook, FaTwitter, FaInstagram, FaLinkedin]; // Social media icons

  const insights = [
    {
      title: "Video Posts",
      description: "Video posts have the highest engagement rate of 33.4% and 61 shares on average!",
      buttonText: "Learn More",
    },
    {
      title: "Reels",
      description: "Reels drive the most comments, averaging 73 per post!",
      buttonText: "Explore Insights",
    },
    {
      title: "Carousel Posts",
      description: "Carousel posts have the highest likes with an average of 184 likes per post!",
      buttonText: "View Details",
    },
    {
      title: "Static Images",
      description: "Static image posts have the lowest engagement rate at 11.4%.",
      buttonText: "Improve Now",
    },
    {
      title: "Video Shares",
      description: "Video posts lead with 61 shares on average, the highest among all formats!",
      buttonText: "Check Insights",
    },
    {
      title: "Reels Engagement",
      description: "Reels have the highest engagement among non-video formats at 24.5%.",
      buttonText: "Analyze Now",
    },
    {
      title: "Consistent Carousel",
      description: "Carousel posts show consistent engagement with an average rate of 18.3%.",
      buttonText: "Learn Strategy",
    },
  ];

  return (
    <div className="flex justify-center flex-wrap gap-12 p-6 bg-gray-100 align-middle items-center" >
      {insights.map((insight, index) => {
        return (
          <div
            key={index}
            className="card bg-gradient-to-r from-[#F53855] to-[#FD846D] w-96 h-70 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 ease-in-out transform"
          >
            {/* Social Media Icons */}
            <div className="flex justify-between p-4">
              {socialIcons.map((Icon, idx) => (
                <Icon key={idx} className="text-white text-2xl hover:text-gray-300 transition-all duration-300 cursor-pointer" />
              ))}
            </div>

            <div className="card-body flex flex-col justify-between p-6 bg-white rounded-b-2xl shadow-xl">
              <h2 className="card-title text-2xl font-bold text-[#0B132A] mb-4">{insight.title}</h2>
              <p className="text-[#4F5665] text-sm mb-6">{insight.description}</p>
              <div className="card-actions justify-center">
                <button className="btn bg-gradient bg-[#F53855] text-white px-6 py-3 rounded-full shadow-lg hover:bg-gradient-to-l hover:from-orange-500 hover:to-pink-500 transition-all duration-300">
                  {insight.buttonText}
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
