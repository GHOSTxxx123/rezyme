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


export default function App() {  

  const [open, setOpen] = useState(true); 
  const swiperRef = useRef<SwiperClass | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const topCurtainY = open ? "-100%" : "-50%"; 
  const bottomCurtainY = open ? "100%" : "50%"; 

  const curtainColors = ["#302b63", "#1d5731", "#1e3a8a", "#78350f", "#4b5563"];
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
        // navigation={true}
        
        className="mySwiper "
        speed={800}
      >
        <SwiperSlide>
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
            handleCurtainTransition={handleCurtainTransition_r}
          />
        </SwiperSlide>
        <SwiperSlide>
        <Animshtor 
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            
          >
            <TextSlider 
              text='Проекты'
              open={open}
            />
          </Animshtor>
        </SwiperSlide>
        <SwiperSlide>
          <Animshtor 
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            
          >
            <TextSlider 
              text='Достижения'
              open={open}
            />
          </Animshtor>
        </SwiperSlide>
        <SwiperSlide>
        <Animshtor 
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            
          >
            <TextSlider 
              text='Контакты'
              open={open}
            />
            <div
            
              className='bg-green-200'
            > 
              sadghasdhjskk
            </div>
          </Animshtor>
        </SwiperSlide>
        
      {/* {open && (
            <>
               {currentSlide > 0 && (
                <BtnNavigation 
                  text='О Себе'
                  pos={currentSlide === 0 ? "md:left-[43%] max-md:left[30%]" : "md:left-[35%] max-md:left-[5%]"}
                  open={open}
                  navigation={false}
                  handleCurtainTransition={handleCurtainTransition_l}
                /> 
              )}
              {currentSlide < curtainColors.length - 1 && (
                <BtnNavigation 
                  text='Мои Навыки'
                  pos={currentSlide === 0 ? "md:left-[43%] max-md:left-[28%]" : "left-[50%]"}
                  open={open}
                  navigation={true}
                  handleCurtainTransition={handleCurtainTransition_r}
                /> 
              )}
            </>
          )} */}
      </Swiper>
    
    </>
  );
}
