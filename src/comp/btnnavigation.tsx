'use client';


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";


type Props = {
    text: string;
    pos: string;
    open: boolean;
    navigation: boolean;
    handleCurtainTransition: () => void;
};

export default function BtnNavigation({ text, pos, navigation, open, handleCurtainTransition }: Props) {
  


  return (
    <>
        {open && (
              <motion.div 
                initial={{ y: 0 }}
                animate={open
                  ? 
                  {  position: 'absolute', top: 'calc(var(--spacing)* 50)', color: "transparent", opacity: 1} 
                  :
                  { position: 'absolute', top: 'calc(var(--spacing)* 80)', color: "transparent"} 
                }
                transition={{ duration: 1.2 }}
                className={`absolute md:top-90 ${pos}  z-10 `}
    
              >
                { navigation ? (
                    <button
                      onClick={handleCurtainTransition}
                      className="relative inline-flex items-center  justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium text-blue-400 transition ease-out hover:border-2 hover:border-blue-300 duration-500 rounded-full shadow-md group"
                    >   
                    
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full bg-blue-200 group-hover:-translate-x-2 ease">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-blue-300 transition-all  duration-500 transform group-hover:translate-x-full ease">{text}</span>
                        <span className="relative invisible">{text}</span>
                    </button>
                    )
                    : (
                        <button
                          onClick={handleCurtainTransition}
                          className="relative inline-flex items-center  justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium text-blue-400 transition ease-out hover:border-2 hover:border-blue-300 duration-500 rounded-full shadow-md group"
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 translate-x-full bg-blue-200 group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                            <span className="absolute flex items-center justify-center w-full h-full text-blue-300 transition-all  duration-500 transform group-hover:-translate-x-full ease">{text}</span>
                            <span className="relative invisible">{text}</span>
                        </button>
                    )}
                    
                  
              </motion.div>
        )}
    </>
  );
}
