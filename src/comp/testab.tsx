'use client';


import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SwiperSlide } from 'swiper/react';
import { ReactNode } from "react";
import { useTypewriter } from "./typer";


type Props = {
    topCurtainY: string;
    bottomCurtainY: string;
    curtainColor: string;
  };

export default function TestAb({ topCurtainY, bottomCurtainY, curtainColor }: Props) {
  const typedText_1 = useTypewriter(["С тех пор как я впервые написал свою строку кода в 9 классе, программирование стало для меня чем-то большим, чем просто хобби — это мой способ видеть мир иначе. Я — студент, увлечённый технологиями, и каждый день открываю для себя новые грани IT. ", "System.out.print('I love code!!!');", "Console.log('I love code!!!');", "<script> alert( 'Hello, world!' ); </script>", "program Hello; begin writeln ('Hello, world!') end.", "print('Hello, World!')"], 100, 1500);
      


  return (
    
    <section className="">
    <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
      <div className="mx-auto mb-12 w-full max-w-3xl text-center md:mb-16 lg:mb-20">
        <h1 className="mb-4 text-4xl font-semibold md:text-6xl">The Website You Want Without The <span className="bg-[url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6390526ac2a607693620c97b_Rectangle%2010.svg')] bg-cover bg-center px-4 text-white">Dev Time</span>.</h1>
        <p className="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus</p>
        <div className="flex justify-center">
          <a href="#" className="mr-5 inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px] md:mr-6">Get Started</a>
          <a href="#" className="flex max-w-full flex-row items-center justify-center rounded-xl border border-solid border-[#1353fe] px-6 py-3 font-semibold text-[#1353fe] [box-shadow:rgb(19,_83,_254)_6px_6px]">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905a575ec39b6784fc687c_Play.svg" alt="" className="mr-2 inline-block w-6" />
            <p className="text-black">View Showreel</p>
          </a>
        </div>
      </div>
      <div className="relative mx-auto h-[512px]">
                            <div className="flex-col justify-center items-center text-center bg-gray-700 text-blue-400 font-mono text-sm p-4  h-full w-full rounded-xl sm:rounded-2xl overflow-hidden">
                              <div className="mb-2 text-red-500 font-semibold">Terminal</div>
                              <div className="animate-pulse">
                                <p><span className="text-blue-500">$</span> npm run dev</p>
                                <p>✔ Compiled successfully!</p>
                                <p>➜  Local:   http://localhost:3000</p>
                                <p>➜  Network: http://192.168.1.2:3000</p>
                                <p className='mb-6'>Press Ctrl+C to stop</p>
                              </div>
                              <div className="max-w-80 ">
                                  <h2 className="">
                                    {typedText_1}<span className="animate-pulse">▌</span>
                                  </h2>
                                </div>
                              </div>
                        {/* </div> */}
        {/* <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63915d247ab06a755ee4aaee_magicpattern-KfFmwa7m5VQ-unsplash.jpg" alt="" className="inline-block h-full w-full rounded-xl object-cover sm:rounded-2xl" /> */}
        <div className="absolute bottom-0 left-4 right-0 top-4 -z-10 h-full w-full rounded-2xl bg-black"></div>
      </div>
    </div>
    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg" alt="" className="absolute bottom-0 left-0 right-auto top-auto -z-10 inline-block md:bottom-1/2 md:left-0 md:right-auto md:top-auto" />
    <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg" alt="" className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:inline-block" />
  </section>

  );
}
