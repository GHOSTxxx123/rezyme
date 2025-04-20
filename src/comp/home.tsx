'use client';


import { motion } from "framer-motion";
import { useEffect, useState } from "react";



type Props = {
    text: string;
    open: boolean;
};

export default function Home({ text, open }: Props) {
  
    function getRandomColor() {
        const colors = [
          "#14b8a6", // teal-400
          "#a855f7", // purple-400
          "#facc15", // yellow-400
          "#ef4444", // red-400
          "#22c55e", // green-400
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }
      

  return (
    <>        
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
  <div className="w-full h-full grid grid-cols-20 grid-rows-12 gap-3 opacity-30 scale-150">
    {Array.from({ length: 240 }).map((_, i) => (
      <div key={i} className="flex items-center justify-center">
        <div
          className={`animate-spin rounded-full`}
          style={{
            width: `${Math.random() * 4 + 7}px`,
            height: `${Math.random() * 6 + 9}px`,
            backgroundColor: getRandomColor(),
          }}
        ></div>
      </div>
    ))}
  </div>
</div>

    <motion.div 
                 initial={{ y: 0, opacity: 0 }}
                 animate={{
                   y: open ? 0 : -200,    // смещаем вверх, если open
                   opacity: open ? 1 : 0, // исчезает при open
                 }}
                 transition={{ duration: 0.8, ease: "easeInOut" }}

        className="relative  text-white overflow-hidden opacity-0 ">
      <div className="absolute inset-0  opacity-50"></div>
      <div
        
        >

        </div>

      <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
        <div className="flex flex-col md:flex-row items-center justify-around">
          <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
            <h1 className="text-5xl md:text-8xl font-bold leading-tight ">
              Negmatov Azam
              <br />
              <span className="md:text-4xl bg-gradient-to-r from-blue-700 via-green-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                Full Stack development
              </span>
            </h1>

            <p className="text-xl mb-5 text-gray-300 ">
            С тех пор как я впервые написал свою строку кода в 9 классе, программирование стало для меня чем-то большим, чем просто хобби — это мой способ видеть мир иначе. 
            Я — студент, увлечённый технологиями, и каждый день открываю для себя новые грани IT. 

            </p>
                       
          </div>

          <div className="w-full md:w-2/5 md:pl-12 ">
            <div className="bg-white bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative  rounded-xl p-8 shadow-2xl">
              <h2 className="text-2xl font-semibold mb-6">Why Choose Us?</h2>
              <img
                src="img/leadsNexTech-logo-transparent.png"
                alt="Logo"
                className="h-16 right-2 top-2 drop_shadow lg:block md:block hidden  absolute"
              />
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-yellow-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                  <span>Data-Driven EarthTech Solutions</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    ></path>
                  </svg>
                  <span>Human-Centric AI & Analytics</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-3 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                    ></path>
                  </svg>
                  <span>NextGen Technology for a Sustainable Future</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div> */}
    </motion.div>

    </>
  );
}
