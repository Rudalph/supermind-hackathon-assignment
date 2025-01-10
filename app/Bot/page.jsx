"use client"
import React, { useState } from 'react';
import { RiSendPlaneFill } from "react-icons/ri";
import { BsFillClipboardDataFill } from "react-icons/bs";
import { LuNewspaper } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

const Page = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/ask', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setAnswer(data.answer);
      console.log(data.answer);
      setChatHistory([...chatHistory, { question, answer: data.answer }]);
      setQuestion(""); 
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
  <div className="w-full fixed bottom-0 flex justify-center items-center mb-6 px-4 sm:px-6 lg:px-8">
    <div className="flex w-full max-w-3xl items-center space-x-2 relative">
      <input
        type="text"
        placeholder="Talk to our data"
        value={question}
        onChange={handleQuestionChange}
        className="p-4 sm:p-6 border border-gray-300 focus:border-gray-300 input input-bordered w-full"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="shadow-none absolute right-2 sm:right-4 px-2 py-1 bg-transparent hover:bg-transparent text-[#F53838]"
      >
        <RiSendPlaneFill size={27} />
      </button>
    </div>
  </div>

  <div className="mt-8 sm:mt-10">
    <div className="flex justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <div className="w-full sm:w-4/5 items-center align-middle h-[500px] overflow-y-scroll no-scrollbar">
        {chatHistory.map((chat, index) => (
          <div key={index}>
            <div className="chat chat-start">
              <div className="chat-image avatar">
                <div className=" text-[#F53838]">
                  <FaRegUser size={30}  />
                </div>
              </div>
              <div className="chat-bubble bg-[#fed4ce] text-black">{chat.question}</div>
            </div>

            <div className="chat chat-end p-4 sm:p-5">
              <div className="chat-image avatar">
                <div className="text-[#F53838]">
                  <RiRobot2Line size={40} />
                </div>
              </div>
              <div className="chat-bubble bg-[#fed4ce] text-black">{chat.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>

  );
};

export default Page;
