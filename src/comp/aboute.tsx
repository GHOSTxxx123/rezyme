'use client';

import React, { useState, useRef, useEffect } from 'react';
import { SwiperSlide } from 'swiper/react';
import AnimShtor from './animshtor';
import { useTypewriter } from "@/comp/typer";
import { motion, AnimatePresence } from "framer-motion";
import TextSlider from './testslider';
import BtnNavigation from './btnnavigation';


const quotes = [
    "Я не умею делать скриншоты, потому что я обычно работаю на компьютере в текстовом режиме.",
    "В теории, теория и практика неразделимы. На практике это не так.",
    "Иногда лучше остаться спать дома в понедельник, чем провести всю неделю в отладке написанного в понедельник кода.",
    "Измерять продуктивность программиста подсчетом строк кода — это так же, как оценивать постройку самолета по его весу.",
    "Отладка кода вдвое сложнее, чем его написание. Так что если вы пишете код настолько умно, насколько можете, то вы по определению недостаточно сообразительны, чтобы его отлаживать.",
    "Большинство программ на сегодняшний день подобны египетским пирамидам из миллиона кирпичиков друг на друге и без конструктивной целостности — они просто построены грубой силой и тысячами рабов.",
    "Многие из вас знакомы с достоинствами программиста. Их всего три, и разумеется это: лень, нетерпеливость и гордыня.",
    "Большинство хороших программистов делают свою работу не потому, что ожидают оплаты или признания, а потому что получают удовольствие от программирования.",
    "Всегда пишите код так, будто сопровождать его будет склонный к насилию психопат, который знает, где вы живете.",
    "Программы должны писаться для людей, которые будут их читать, а машины, которые будут эти программы исполнять — второстепенны.",
    "Люди, которые думают, что ненавидят компьютеры, на самом деле ненавидят плохих программистов.",
    "Если вы дадите человеку программу, то займете его на один день. Если вы научите человека программировать, то займете его на всю жизнь.",
    "Язык, который не меняет вашего представления о программировании, недостоин изучения.",
    "Мы наблюдаем общество, которое все больше зависит от машин, но при этом использует их все неэффективнее.",
    "Иногда лучшие программы создаются на бумажке. Запрограммировать их — второстепенная вещь.",
    "Любой дурак сможет написать код, который поймет машина. Хорошие программисты пишут код, который сможет понять человек.",
    "Программирование — это разбиение чего-то большого и невозможного на что-то маленькое и вполне реальное.",
    "Программисты — не математики, как бы нам этого ни хотелось.",
    "Программирование — это сложно. Основные правила, на которых все строится, очень просты, но по мере разработки программа сама начинает вводить свои правила и законы. Таким образом, программист строит лабиринт, в котором сам же может и потеряться.",
    "Функции, которые производят значения, легче комбинировать новыми способами, чем те, которые производят сайд-эффекты.",
    "Если вы хотите, чтобы код было легко и быстро писать — делайте его удобным для чтения.",
    "Если вы хорошо отлаживаете программы, значит, вы провели много времени, делая это. Я не хочу уметь хорошо отлаживать программы.",
    "Работает? Не трогай.",
    "Если бы в Java действительно работала сборка мусора, большинство программ бы удаляли сами себя при первом же запуске.",
    "Есть всего два типа языков программирования: те, на которые люди всё время ругаются, и те, которые никто не использует.",
    "Неработающая программа обычно приносит меньше вреда, чем работающая плохо.",
    "Молодые специалисты не умеют работать, а опытные специалисты умеют не работать.",
    "Для каждой сложной задачи существует решение, которое является быстрым, простым и неправильным.",
    "Думаю, искусство программировать немногим сложнее других человеческих навыков. Программирование делает вас лучше точно так же, как вам помогают развиваться изучение иностранного языка, математики или чтение книг.",
    "Аналогично тому, как написание картины является искусством для души, так и написание программы является искусством для разума.",
  ];
  

type Props = {
    topCurtainY: string;
    bottomCurtainY: string;
    curtainColor: string;
    open: boolean;
    text: string;
    navigation: boolean;
    handleCurtainTransition: () => void;
  };

export default function Aboute({ topCurtainY, bottomCurtainY, curtainColor, open, text, navigation, handleCurtainTransition }: Props) {
  
    const typedText_1 = useTypewriter(["С тех пор как я впервые написал свою строку кода в 9 классе, программирование стало для меня чем-то большим, чем просто хобби — это мой способ видеть мир иначе. Я — студент, увлечённый технологиями, и каждый день открываю для себя новые грани IT. ", "System.out.print('I love code!!!');", "Console.log('I love code!!!');", "<script> alert( 'Hello, world!' ); </script>", "program Hello; begin writeln ('Hello, world!') end.", "print('Hello, World!')"], 100, 1500);
    const quoteIndex = useRef(0);
    const idCounter = useRef(0);
    let placedPositions: { top: number; left: number; bottom: number; right: number; }[] = [];
    const [visibleQuotes, setVisibleQuotes] = useState<
      { id: number; text: string; top: string; bottom: string; right: string; left: string }[]
      >([]);
      

    const getRandomOutsideCenter = () => {
          const centerExclusion = {
            top: 20,
            bottom:80,
            left: 20,
            right: 80,
          };
      
          const elementSize = 25; 
      
          let attempt = 0;
          while (attempt < 100) {
            attempt++;

            const top = Math.random() * 90;
            const left = Math.random() * 90;

            const bottom = top + elementSize;
            const right = left + elementSize;

            // Проверка, что не попадает в центр
            const inCenter =
              top > centerExclusion.top &&
              bottom < centerExclusion.bottom &&
              left > centerExclusion.left &&
              right < centerExclusion.right;

            if (inCenter) continue;

            // Проверка на пересечение с уже размещёнными
            const isOverlapping = placedPositions.some(pos => {
              return !(
                right < pos.left ||
                left > pos.right ||
                bottom < pos.top ||
                top > pos.bottom
              );
            });
        
            if (isOverlapping) continue;
        
            const newPos = { top, left, bottom, right };
            placedPositions.push(newPos);
        
            return {
              top: `${top}%`,
              left: `${left}%`,
              bottom: `${bottom}%`,
              right: `${right}%`,
            };

          }
      
          // fallback если не нашёл подходящее место
          return { top: '0%', left: '0%', bottom: "0%", right: "0%" };
        };

        const [displayedText, setDisplayedText] = useState<string>("");
        const [currentTextIndex, setCurrentTextIndex] = useState<number>(0);

        useEffect(() => {
            const interval = setInterval(() => {
              const quote = quotes[quoteIndex.current % quotes.length];
              const pos = getRandomOutsideCenter();
              // const pos = getRandomCorner();
            
              const newQuote = {
                id: idCounter.current++,
                text: quote,
                ...pos,
              };
          
              setVisibleQuotes((prev) => {
                const updated = [...prev, newQuote];
          if (updated.length > 9) {
            const removed = updated.shift();
            if (removed) {
              placedPositions = placedPositions.filter((p) => {
                return !(
                  Math.abs(p.top - parseFloat(removed.top)) < 1 &&
                  Math.abs(p.left - parseFloat(removed.left)) < 1
                );
              });
            }
          }
          return updated;
        });
  
        quoteIndex.current++;
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  

  return (
        <AnimShtor 
            topCurtainY={topCurtainY}
            bottomCurtainY={bottomCurtainY}
            curtainColor={curtainColor}
            >
          <div className='min-h-screen bg-gradient-to-br lg:flex from-[#3a3a5a] via-[#6460a0] to-[#5c5c78]'>
            <div className="absolute inset-0 overflow-hidden">
              <AnimatePresence>
                {visibleQuotes.map((quote) => (
                
                  <motion.div
                  key={quote.id}
                  initial={{ scale: 0.9, filter: 'blur(4px)', opacity: 0 }}
                  animate={{ scale: 1.1, filter: 'blur(0.5px)', opacity: 1 }}
                  exit={{ scale: 0.9, filter: 'blur(9px)', opacity: 0 }}
                  transition={{ duration: 1 }}
                  className="absolute text-white text-xl w-2/8  px-3 py-2 rounded-lg pointer-events-none"
                  style={{ top: quote.top, bottom: quote.bottom, left: quote.left, right: quote.right, }}
                  >
                  {quote.text} 
                </motion.div>
                ))}
              </AnimatePresence>

              </div>


            {/* Контент сзади */}
            <TextSlider 
                text="О себе"
                open={open}
            />

              {open && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1,}}
                      transition={{ delay: 1.2, duration: 1 }}
                      className="relative flex md:flex-col justify-center items-center min-h-screen min-w-screen  lg:z-10">

                      <div 
                        style={{
                          backgroundImage: "url('/hero.png')",
                          filter: "brightness(0.9)",}}
                        className="max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:min-h-screen bg-cover bg-center lg:absolute rounded-xl w-[80%] h-80  lg:flex lg:flex-col items-end shadow-2xl shadow-gray-500">
                        <div 
                          className='max-lg:flex-col max-lg:justify-center items-center md:w-[56%] md:pr-50 '>
                            <div className="2xl:pt-20 xl:pt-5">
                              <p className="text-white font-bold md:text-7xl text-7xl">Негматов Азам </p>
                              <p className="text-gray-200 font-bold md:text-4xl text-4xl">Full stack development</p>
                            </div>
                              <div className="flex items-end text-end  justify-center mt-5 mb-5">
                                <button
                                  onClick={handleCurtainTransition}
                                  className="relative ml-2 inline-flex items-center justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium bg-white  transition ease-out hover:border-2 hover:border-white duration-500 rounded-full shadow-md group">
                                  
                                  <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full hover:bg-gray-400 group-hover:-translate-x-0 ease`}>
                                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                          </svg>
                                      </span>
                                      <span className={`absolute flex items-center justify-center w-full h-full text-black  transition-all  duration-500 transform group-hover:translate-x-full ease`}>Навыки</span>
                                      <span className="relative invisible">Навыки</span>  
                                </button>


                              </div>
                        </div>
                        <div className="max-lg:flex  lg:rotate-x-15 lg:-rotate-y-30 lg:absolute  lg:top-1/2 md:-translate-y-1/2 2xl:left-25 lg:left-1 xl:w-100  lg:w-90  rounded-xl shadow-2xl shadow-blue-500">
                            <div className="bg-gray-900 text-blue-400 font-mono text-sm p-4 rounded-xl shadow-lg h-102 overflow-hidden">
                              <div className="mb-2 text-red-500 font-semibold">Terminal</div>
                              <div className="animate-pulse">
                                <p><span className="text-blue-500">$</span> npm run dev</p>
                                <p>✔ Compiled successfully!</p>
                                <p>➜  Local:   http://localhost:3000</p>
                                <p>➜  Network: http://192.168.1.2:3000</p>
                                <p className='mb-6'>Press Ctrl+C to stop</p>
                              </div>
                              {typedText_1}
                              <span className="animate-pulse">▌</span>
                            </div>
                        </div>
                        </div>
                  </motion.div>
              )}
              

          </div>

          {/* <div className='max-md:flex justify-center items-center h-full'>
              <h3>
                Сайт не доступин на экранах ниже 1024px
              </h3>
          </div> */}

                  
        </ AnimShtor>
  );
}
