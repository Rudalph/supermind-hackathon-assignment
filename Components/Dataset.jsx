import React from "react";

// Define your data
const postData = [
    { PostID: 1, PostType: "Carousel", Likes: 150, Shares: 20, Comments: 35, EngagementRate: 15.6 },
    { PostID: 2, PostType: "Reels", Likes: 230, Shares: 45, Comments: 65, EngagementRate: 23.4 },
    { PostID: 3, PostType: "Static Image", Likes: 120, Shares: 15, Comments: 25, EngagementRate: 12.3 },
    { PostID: 4, PostType: "Video", Likes: 300, Shares: 50, Comments: 80, EngagementRate: 30.5 },
    { PostID: 5, PostType: "Carousel", Likes: 180, Shares: 25, Comments: 40, EngagementRate: 18.5 },
    { PostID: 6, PostType: "Reels", Likes: 260, Shares: 55, Comments: 70, EngagementRate: 25.1 },
    { PostID: 7, PostType: "Static Image", Likes: 110, Shares: 12, Comments: 20, EngagementRate: 10.8 },
    { PostID: 8, PostType: "Video", Likes: 320, Shares: 60, Comments: 90, EngagementRate: 32.7 },
    { PostID: 9, PostType: "Carousel", Likes: 170, Shares: 22, Comments: 38, EngagementRate: 16.8 },
    { PostID: 10, PostType: "Reels", Likes: 240, Shares: 50, Comments: 68, EngagementRate: 24.5 },
    { PostID: 11, PostType: "Static Image", Likes: 100, Shares: 10, Comments: 18, EngagementRate: 9.8 },
    { PostID: 12, PostType: "Video", Likes: 310, Shares: 55, Comments: 85, EngagementRate: 31.2 },
    { PostID: 13, PostType: "Carousel", Likes: 190, Shares: 30, Comments: 42, EngagementRate: 19.3 },
    { PostID: 14, PostType: "Reels", Likes: 270, Shares: 60, Comments: 75, EngagementRate: 26.3 },
    { PostID: 15, PostType: "Static Image", Likes: 125, Shares: 18, Comments: 28, EngagementRate: 13.7 },
    { PostID: 16, PostType: "Video", Likes: 340, Shares: 65, Comments: 95, EngagementRate: 34.9 },
    { PostID: 17, PostType: "Carousel", Likes: 160, Shares: 20, Comments: 36, EngagementRate: 16.2 },
    { PostID: 18, PostType: "Reels", Likes: 250, Shares: 48, Comments: 67, EngagementRate: 24.8 },
    { PostID: 19, PostType: "Static Image", Likes: 115, Shares: 14, Comments: 22, EngagementRate: 11.3 },
    { PostID: 20, PostType: "Video", Likes: 330, Shares: 62, Comments: 88, EngagementRate: 33.2 },
    { PostID: 21, PostType: "Carousel", Likes: 140, Shares: 18, Comments: 30, EngagementRate: 14.3 },
    { PostID: 22, PostType: "Reels", Likes: 220, Shares: 40, Comments: 60, EngagementRate: 22.1 },
    { PostID: 23, PostType: "Static Image", Likes: 105, Shares: 12, Comments: 20, EngagementRate: 10.4 },
    { PostID: 24, PostType: "Video", Likes: 280, Shares: 50, Comments: 75, EngagementRate: 28.9 },
    { PostID: 25, PostType: "Carousel", Likes: 130, Shares: 15, Comments: 28, EngagementRate: 13.4 },
    { PostID: 26, PostType: "Reels", Likes: 210, Shares: 38, Comments: 55, EngagementRate: 20.7 },
    { PostID: 27, PostType: "Static Image", Likes: 95, Shares: 10, Comments: 18, EngagementRate: 9.2 },
    { PostID: 28, PostType: "Video", Likes: 290, Shares: 52, Comments: 78, EngagementRate: 29.4 },
    { PostID: 29, PostType: "Carousel", Likes: 155, Shares: 22, Comments: 35, EngagementRate: 15.8 },
    { PostID: 30, PostType: "Reels", Likes: 245, Shares: 49, Comments: 62, EngagementRate: 23.2 },
    { PostID: 31, PostType: "Static Image", Likes: 120, Shares: 15, Comments: 25, EngagementRate: 12.5 },
    { PostID: 32, PostType: "Video", Likes: 315, Shares: 58, Comments: 84, EngagementRate: 31.5 },
    { PostID: 33, PostType: "Carousel", Likes: 165, Shares: 25, Comments: 38, EngagementRate: 16.9 },
    { PostID: 34, PostType: "Reels", Likes: 255, Shares: 53, Comments: 68, EngagementRate: 24.6 },
    { PostID: 35, PostType: "Static Image", Likes: 110, Shares: 13, Comments: 22, EngagementRate: 11.4 },
    { PostID: 36, PostType: "Video", Likes: 335, Shares: 63, Comments: 89, EngagementRate: 33.8 },
    { PostID: 37, PostType: "Carousel", Likes: 175, Shares: 28, Comments: 40, EngagementRate: 18.3 },
    { PostID: 38, PostType: "Reels", Likes: 265, Shares: 57, Comments: 73, EngagementRate: 26 },
    { PostID: 39, PostType: "Static Image", Likes: 135, Shares: 18, Comments: 30, EngagementRate: 14.6 },
    { PostID: 40, PostType: "Video", Likes: 345, Shares: 68, Comments: 92, EngagementRate: 35.2 },
    { PostID: 41, PostType: "Carousel", Likes: 185, Shares: 32, Comments: 45, EngagementRate: 19.7 },
    { PostID: 42, PostType: "Reels", Likes: 275, Shares: 60, Comments: 78, EngagementRate: 27.2 },
    { PostID: 43, PostType: "Static Image", Likes: 140, Shares: 20, Comments: 32, EngagementRate: 15.2 },
    { PostID: 44, PostType: "Video", Likes: 355, Shares: 72, Comments: 96, EngagementRate: 36.1 },
    { PostID: 45, PostType: "Carousel", Likes: 195, Shares: 35, Comments: 48, EngagementRate: 20.9 },
    { PostID: 46, PostType: "Reels", Likes: 285, Shares: 65, Comments: 80, EngagementRate: 28.3 },
    { PostID: 47, PostType: "Static Image", Likes: 150, Shares: 25, Comments: 35, EngagementRate: 16.8 },
    { PostID: 48, PostType: "Video", Likes: 365, Shares: 75, Comments: 100, EngagementRate: 37.5 },
    { PostID: 49, PostType: "Carousel", Likes: 205, Shares: 40, Comments: 52, EngagementRate: 22.4 },
    { PostID: 50, PostType: "Reels", Likes: 295, Shares: 70, Comments: 85, EngagementRate: 29.6 },
];


const Dataset = () => {
    return (
        <>
            <div className="my-4">
                <h1 className="text-4xl text-[#FF735C] text-center font-extrabold mx-auto md:text-5xl lg:pt-0 pt-8 mt-12 lg:mt-36">Social Media Engagement</h1>
                <br />
                <div className='flex justify-center align-middle items-center'>
                    <p className=" mt-2 text-[black] lg:text-lg lg:w-[50%] text-center">
                    The Social Media Engagement Dataset showcases metrics like Post Type, Likes, Shares, Comments, and Engagement Rate (%), offering insights into content performance to optimize social media strategies.
                    </p>
                </div>
                <br />
            </div>
            <div className="flex items-center justify-center px-1 pb-10">
                <div className="overflow-x-auto max-h-[500px] w-full max-w-6xl border border-black rounded-lg p-4">

                    <table className="table-auto w-full border-collapse border border-gray-200">

                        <thead className="bg-gray-200">
                            <tr>
                                <th className="border border-gray-300 px-4 py-2 text-left">Post ID</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Post Type</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Likes</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Shares</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Comments</th>
                                <th className="border border-gray-300 px-4 py-2 text-left">Engagement Rate (%)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Map through the data and generate rows */}
                            {postData.map((post, index) => (
                                <tr key={index} className="hover:bg-gray-100">
                                    <td className="border border-gray-300 px-4 py-2">{post.PostID}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.PostType}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.Likes}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.Shares}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.Comments}</td>
                                    <td className="border border-gray-300 px-4 py-2">{post.EngagementRate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default Dataset;