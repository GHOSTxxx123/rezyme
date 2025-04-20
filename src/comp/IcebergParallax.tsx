'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Home from './home';
import TextSlider from './testslider';

const IcebergParallax = () => {
  const [leftPaneWidth, setLeftPaneWidth] = useState('50%');
  const [rightPaneWidth, setRightPaneWidth] = useState('50%');
  const [open, setOpen] = useState(false);
  

  const handleLeftPaneToggle = () => {
    setLeftPaneWidth('0%');
    setRightPaneWidth('100%');
    setOpen(true);
    
  };

  const handleRightPaneToggle = () => {
    setLeftPaneWidth('100%');
    setRightPaneWidth('0%');
    setOpen(true);
  };

  return (
          
          <div className="flex h-screen relative overflow-hidden">

            <motion.div
              style={{
                background: 'lightblue',
                height: '100%',
                overflow: 'hidden',
              }}
              animate={{ width: leftPaneWidth }}
              transition={{ duration: 1 }} 
              className=" w-1/2  text-white text-center relative">
              <div className="absolute flex items-center h-screen right-0 w-48">
                <div 
                  style={{
                    background: 'lightgreen',
                  }} 
                  onClick={handleLeftPaneToggle} 
                  className="w-full h-48  flex items-center cursor-pointer transition duration-500 hover:bg-gray-300 bg-white text-white flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor"  viewBox="0 0 16 16">
                    <path d="M6 12.796V3.204L11.481 8zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753"/>
                  </svg>
                </div>
                
              </div>
              <div className="flex items-center justify-center p-48 h-screen font-bold text-3xl">
                <motion.div 
                  initial={{ y: 0, opacity: 1, display: "flex" }}
                  animate={{
                    y: open ? -200 : 0,    // смещаем вверх, если open
                    opacity: open ? 0 : 1,
                    display: open ? "none" : "flex", // исчезает при open
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className=" justify-center items-center p-48 h-screen font-bold text-3xl"
                >
                  О себе
                </motion.div>
                
                <Home
                  text='sdasd'
                  open={open}
                >

                </Home>
              </div>
            </motion.div>
            <motion.div
              style={{
                background: 'lightgreen',
                height: '100%',
                overflow: 'hidden',
              }}
              animate={{ width: rightPaneWidth }}
              transition={{ duration: 1 }}
              className=" w-1/2 text-white text-center relative ">
              <div className="absolute flex items-center h-screen left-0 w-48 z-50">
                <div 
                  style={{
                    background: 'lightblue',
                  }}
                  onClick={handleRightPaneToggle} 
                  className="w-full h-48  flex items-center cursor-pointer transition duration-500  hover:bg-gray-700 bg-black text-white flex justify-center items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M10 12.796V3.204L4.519 8zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753"/>
                  </svg>
                </div>
              </div>
                <motion.div 
                  initial={{ y: 0, opacity: 1, display: "flex" }}
                  animate={{
                    y: open ? -200 : 0,
                    opacity: open ? 0 : 1,    
                    display: open ? "none" : "flex", // исчезает при open
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className=" justify-center items-center p-48 h-screen font-bold text-3xl"
                >
                  Навыки и Достижения
                </motion.div>
              
              
            </motion.div>
          </div>
  );
};

export default IcebergParallax;
