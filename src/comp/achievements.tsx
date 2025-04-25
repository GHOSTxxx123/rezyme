'use client';

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";
import AnimShtor from "./animshtor";
import TextSlider from "./testslider";
import '@/css/style.css'; 


type Props = {
  topCurtainY: string;
  bottomCurtainY: string;
  curtainColor: string;
  open: boolean;
  handleCurtainTransition: () => void;
};

export default function Archievements({ topCurtainY, bottomCurtainY, curtainColor, open, handleCurtainTransition }: Props) {
  const [activePaneIndex, setActivePaneIndex] = useState(3);
  const paneTitles = [
    { title: "World Skills", text: "Мобильная робототехника", color: "bg-red-500", img: "bg-world-img", img_src:"world.png",},
    { title: "Polytech", text: "Семинар по ИИ в колледже", color: "bg-purple-500", img: "bg-polytech-1-img", img_src:"polytech.png",},
    { title: "Tech CUP", text: "Проект: «Умный колледж»", color: "bg-yellow-500", img: "bg-tech-img", img_src:"techcupDark.png",},
    { title: "Polytech", text: "Продвинутые концепции", color: "bg-purple-500", img: "bg-polytech-2-img", img_src:"polytech.png", },
    { title: "Up Grade", text: "Битва инновационных идей", color: "bg-green-500", img: "bg-upgrade-img", img_src:"UpGrade.png", },
    { title: "FIRST", text: "Kурс по робототехнике", color: "bg-blue-500", img: "bg-first-img", img_src:"first-horz-rgb.png",},
    { title: "Polytech", text: "Соревнованиях по ИИ", color: "bg-purple-500", img: "bg-polytech-3-img", img_src:"polytech.png",},
    ];

    const descriptions = [
      "Мы с командой завоевали второе место на Республиканском чемпионате WorldSkills в категории мобильной робототехники. Это было крутое испытание и большой опыт!",
      "Организовал и провёл семинар по ИИ в колледже, где продемонстрировал свою реализацию облегчённой версии GPT. Получилось живо и интересно!",
      "Стали призёрами Республиканского конкурса Tech CUP, заняв 3 место с проектом «Умный колледж».",
      "Завершил курс по Python в колледже, освоив основы программирования и работы с данными.",
      "Заняли второе место на конкурсе «Битва инновационных идей UpGrade», представив проект по распознаванию жестового языка с помощью ИИ на основе алгоритма LSTM.",
      "Закончил обучающий курс по мобильной робототехнике от First Tech — освоил основы проектирования, программирования и управления мобильными роботами.",
      "Победил в колледжных соревнованиях по ИИ, представив три уникальных проекта на базе искусственного интеллекта.",
      
    ];

  const handlePaneClick = (index: number) => {
    setActivePaneIndex(index);
  };

  return (
    <AnimShtor 
      topCurtainY={topCurtainY}
      bottomCurtainY={bottomCurtainY}
      curtainColor={curtainColor}
    > 
      {open && (
        <>
          <div className="antialiased bg-gradient-to-br from-[#1b003a] via-[#3c096c] to-[#9d4edd] flex flex-col font-sans justify-center h-screen p-2 items-center">
              <div className="flex flex-col items-stretch max-w-3xl min-w-md w-full flex-row h-72 sm:overflow-hidden">
                {paneTitles.map(({title, text, color, img, img_src}, index) => (
                      <div 
                          key={index}
                          onClick={() => setActivePaneIndex(index)}
                          className={`${activePaneIndex === index ? 'active' : 'undefined'} cursor-pointer duration-700 ease-in-out flex-grow m-2 min-h-[3.5rem] min-w-[3.5rem] overflow-hidden pane relative rounded-3xl transition-all`}>
                        <div className={`absolute bg-center bg-cover ${color} ${img} bg-no-repeat duration-700 ease-in-out inset-0 scale-105 transition-all z-10 `}></div>
                        <div className="absolute bg-gradient-to-b bottom-0 duration-700 ease-in-out from-transparent inset-x-0 opacity-0 shadow to-black transform transition-all z-20 h-1/2 translate-y-1/2"></div>
                        <div className="absolute bottom-0 duration-700 ease-in-out flex label left-0 mb-2 ml-3 transition-all z-30 sm:mb-3 sm:ml-2">
                          <div className="bg-[#0f1011] flex h-10 icon items-center justify-center mr-1 rounded-full text-red-500 w-10">
                            <img src={img_src} className="w-10 h-10 object-contain bg-white rounded-full" />
                          </div>
                          <div className="content flex flex-col justify-center leading-tight text-white whitespace-pre">
                            <div className="ease-in-out font-bold duration-700 opacity-0 relative transform transition-all translate-x-2">{title}</div>
                            <div className="delay-100 duration-700 ease-in-out opacity-0 relative transform transition-all translate-x-2">{text}</div>
                          </div>
                        </div>
                      </div>
                      ))}
              </div>  
                <div className=" mt-2 flex items-center justify-center">
                  <div className="mx-auto px-4 py-8">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                            Описания
                          </span>
                        </div>
                      </div>                

                      <div className="mt-8 w-172 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {descriptions[activePaneIndex]}
                        </p>
                      </div>
                    </div>
                </div>
                <div className=" mt-2 flex items-center justify-center">
                  <div className="mx-auto px-4 py-8">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                            Контакты
                          </span>
                        </div>
                      </div>                

                      <div className="flex gap-4 mt-5">

                          <button
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-purple-900 hover:bg-purple-700 hover:text-white shadow transition duration-300`}
                            onClick={() => window.location.href = "https://wa.me/+77471776942"} 
                          >
                            WhatsApp
                          </button>   

                          <button
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-purple-900 hover:bg-purple-700 hover:text-white shadow transition duration-300`}
                            onClick={() => window.location.href = "https://t.me/+77471776942"}  
                          >
                            Telegram
                          </button>   

                          <button
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-purple-900 hover:bg-purple-700 hover:text-white shadow transition duration-300`}
                            onClick={() => window.location.href = "mailto:negmatovazam4@gmail.com"}  
                          >
                            Gmail
                          </button>   

                          <button
                            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-white bg-purple-900 hover:bg-purple-700 hover:text-white shadow transition duration-300`}
                            onClick={() => window.location.href = "/azam_negmatov.pdf"}  
                          >
                            CV
                          </button>

                      </div>
                    </div>
                </div>
                
            </div>
            
            
        </>
      )}

      <TextSlider 
        text="Достижения"
        open={open}
      />

      <div className="max-md:flex justify-center items-center h-full">
        <h3>Сайт не доступен на экранах ниже 1024px</h3>
      </div>
    </AnimShtor>
  );
}
