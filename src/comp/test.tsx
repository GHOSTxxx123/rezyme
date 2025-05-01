"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import HighlightWords  from "@/comp/HighlightWords";
import Animshtor  from "@/comp/animshtor";
import Aboute from '@/comp/aboute';
import TextSlider from './testslider';
import BtnNavigation from './btnnavigation';
import Skill from "@/comp/skills";
import 'swiper/css';
import 'swiper/css/navigation';
import '@/css/style.css';
import { motion } from "framer-motion";
import Archievements from './achievements';
import TestAb from './testab';


export default function App() {  

  const [open, setOpen] = useState(true); 
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const topCurtainY = open ? "-100%" : "-50%"; 
  const bottomCurtainY = open ? "100%" : "50%"; 

  const curtainColors = ["#302b63", "#0f2910", "#1b003a",];
  // const [curtainColor, setCurtainColor] = useState(curtainColors[0]);
  const curtainColor = curtainColors[currentSlide % curtainColors.length];


  const handleCurtainTransition_l = () => {
    
    
    setOpen(false);

    setTimeout(() => {
        swiperRef.current?.slidePrev();
        setCurrentSlide((prev) => (prev + curtainColors.length - 1) % curtainColors.length);

      setTimeout(() => {
        setOpen(true);
      }, 900);
    }, 800);
  };

  const handleCurtainTransition_r = () => {
    setOpen(false);
  
    setTimeout(() => {
      swiperRef.current?.slideNext();
      setCurrentSlide((prev) => (prev + 1) % curtainColors.length);

  
      setTimeout(() => {
        setOpen(true);
      }, 900);
    }, 800);
  };
  
  
  return (
    <>
      
      <Swiper
         onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        
        autoHeight={true}
        className="mySwiper "
        speed={800}
      >
        <SwiperSlide 
          className={``}
        >
            <Aboute
              open={open}
              topCurtainY={topCurtainY}
              bottomCurtainY={bottomCurtainY}
              curtainColor={curtainColor}
              text='Мои Навыки'
              navigation={true}
              handleCurtainTransition={handleCurtainTransition_r}
            />
            
        </SwiperSlide>
        <SwiperSlide>
          <Skill 
            open={open}
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            handleCurtainTransition_r={handleCurtainTransition_r}
            handleCurtainTransition_l={handleCurtainTransition_l}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Archievements
            open={open}
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            handleCurtainTransition_r={handleCurtainTransition_r}
            handleCurtainTransition_l={handleCurtainTransition_l}
          />
        </SwiperSlide>
        
      </Swiper>
    
    </>
  );
}
