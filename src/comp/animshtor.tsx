'use client';


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";


type Props = {
    topCurtainY: string;
    bottomCurtainY: string;
    curtainColor: string;
    children: ReactNode;
};

export default function AnimShtor({ topCurtainY, bottomCurtainY, curtainColor, children }: Props) {
  


  return (
            <div className="relative w-full h-screen  overflow-hidden">
            {/* Верхняя штора с анимацией */}
            <motion.div
              initial={false}
              animate={{ y: topCurtainY, backgroundColor: curtainColor }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-1/2  z-10"
            />
    
            {/* Нижняя штора с анимацией */}
            <motion.div
              initial={false}
              animate={{ y: bottomCurtainY, backgroundColor: curtainColor }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute bottom-0 left-0 w-full h-1/2  z-10"
            />
    
            <motion.div
              initial={false}
              animate={{ x: topCurtainY, backgroundColor: curtainColor }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-1/2 h-full  z-10"
            />
    
            {/* Нижняя штора с анимацией */}
            <motion.div
              initial={false}
              animate={{ x: bottomCurtainY, backgroundColor: curtainColor }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-1/2 h-full  z-10"
            />
    
            {/* Контент сзади */}
            {children}
          </div>
              

  );
}
