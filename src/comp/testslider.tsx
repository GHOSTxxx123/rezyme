'use client';


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";


type Props = {
    text: string;
    open: boolean;
};

export default function TextSlider({ text, open }: Props) {
  


  return (
        <motion.div
          initial={{ y: 0 }}
          animate={open
            ? 
            {  position: 'absolute', top: 'calc(var(--spacing)* 75)', color: "transparent", opacity: 0} 
            :
            { position: 'absolute', top: 'calc(var(--spacing)* 100)', color: "transparent", opacity: 1} 
          }
          transition={{ duration: 0.8 }}
          className="absolute top-100 left-[48.5%] -translate-x-1/2 text-7xl font-bold z-10 pointer-events-none outline-text"
        >
            {text}
        </motion.div>
  );
}
