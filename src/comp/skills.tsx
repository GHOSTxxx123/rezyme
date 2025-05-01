// SkillsHoverIcons.tsx
import { AnimatePresence, motion } from "framer-motion";
import AnimShtor from "./animshtor";
import TextSlider from "./testslider";
import {
  SiPython,
  SiFlask,
  SiDjango,
  SiFastapi,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiJson,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiJavascript,
  SiJquery,
  SiLinux,
  SiPostgresql,
  SiSqlite,
  SiSqlalchemy,
  SiGithub,
  SiGit,
  SiTypescript,
  SiTailwindcss,
  SiGooglemaps,
  SiOpenstreetmap,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


const skillData = [
  { keyword: "HTML5", icon: SiHtml5, level: 90 },
  { keyword: "CSS", icon: SiCss3, level: 85 },
  { keyword: "JavaScript", icon: SiJavascript, level: 85 },
  { keyword: "TypeScript", icon: SiTypescript, level: 85 },
  { keyword: "ReactJS", icon: SiReact, level: 90 },
  { keyword: "Vue", icon: SiVuedotjs, level: 75 },
  { keyword: "Next.js", icon: SiNextdotjs, level: 70 },
  { keyword: "Bootstrap", icon: SiBootstrap, level: 80 },
  { keyword: "Tailwind", icon: SiTailwindcss, level: 80 },
  { keyword: "jQuery", icon: SiJquery, level: 70 },
  { keyword: "Python", icon: SiPython, level: 95 },
  { keyword: "Flask", icon: SiFlask, level: 90 },
  { keyword: "Django", icon: SiDjango, level: 85 },
  { keyword: "FastAPI", icon: SiFastapi, level: 85 },
  { keyword: "PostgreSQL", icon: SiPostgresql, level: 75 },
  { keyword: "SQLAlchemy", icon: SiSqlalchemy, level: 75 },
  { keyword: "SQlite", icon: SiSqlite, level: 75 },
  { keyword: "Git", icon: SiGit, level: 80 },
  { keyword: "GitHub", icon: SiGithub, level: 85 },
  { keyword: "Linux", icon: SiLinux, level: 80 },
  { keyword: "JSON", icon: SiJson, level: 85 },
  { keyword: "GoogleMaps", icon: SiGooglemaps, level: 85 },
  { keyword: "OpenStreetMap", icon: SiOpenstreetmap, level: 85 },
];

const Frontend = [
  { keyword: "HTML5", icon: SiHtml5, level: 90 },
  { keyword: "CSS", icon: SiCss3, level: 85 },
  { keyword: "JavaScript", icon: SiJavascript, level: 85 },
  { keyword: "TypeScript", icon: SiTypescript, level: 85 },
  { keyword: "ReactJS", icon: SiReact, level: 90 },
  { keyword: "Vue", icon: SiVuedotjs, level: 75 },
  { keyword: "Next.js", icon: SiNextdotjs, level: 70 },
  { keyword: "Bootstrap", icon: SiBootstrap, level: 80 },
  { keyword: "Tailwind", icon: SiTailwindcss, level: 80 },
  { keyword: "jQuery", icon: SiJquery, level: 70 },
];

const Backend = [
  { keyword: "Python", icon: SiPython, level: 95 },
  { keyword: "Flask", icon: SiFlask, level: 90 },
  { keyword: "Django", icon: SiDjango, level: 85 },
  { keyword: "FastAPI", icon: SiFastapi, level: 85 },
  { keyword: "PostgreSQL", icon: SiPostgresql, level: 75 },
  { keyword: "SQLAlchemy", icon: SiSqlalchemy, level: 75 },
  { keyword: "SQlite", icon: SiSqlite, level: 75 },
];

const Ytil = [
  { keyword: "Git", icon: SiGit, level: 80 },
  { keyword: "GitHub", icon: SiGithub, level: 85 },
  { keyword: "Linux", icon: SiLinux, level: 80 },
  { keyword: "JSON", icon: SiJson, level: 85 },
  { keyword: "GoogleMaps", icon: SiGooglemaps, level: 85 },
  { keyword: "OpenStreetMap", icon: SiOpenstreetmap, level: 85 },
];

export type Skill = typeof skillData[number];

type Props = {
  topCurtainY: string;
  bottomCurtainY: string;
  curtainColor: string;
  open: boolean;
  handleCurtainTransition_r: () => void;
  handleCurtainTransition_l: () => void;
};

export default function Skill({ topCurtainY, bottomCurtainY, curtainColor, open, handleCurtainTransition_l, handleCurtainTransition_r }: Props) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [usedSkills, setUsedSkills] = useState<string[]>([]);
  
  const progressCircle = useRef<SVGSVGElement | null>(null);

  const progressContent = useRef<HTMLSpanElement>(null); // если там текст

  
  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  


useEffect(() => {
  // 1. Размещение иконок
  const containerWidth = window.innerWidth * 0.9;
  const containerHeight = window.innerHeight * 0.9;

  const textZone = {
    top: window.innerHeight * 0.2,
    bottom: window.innerHeight * 0.8,
    left: window.innerWidth * 0.2,
    right: window.innerWidth * 0.8,
  };

  const usedPositions: { top: number; left: number }[] = [];

  const newPositions = skillData.map(() => {
    let top: number, left: number;
    let attempts = 0;
    do {
      top = Math.random() * (containerHeight - 100) + 50;
      left = Math.random() * (containerWidth - 100) + 50;

      const inTextZone =
        top > textZone.top &&
        top < textZone.bottom &&
        left > textZone.left &&
        left < textZone.right;

      const overlaps = usedPositions.some(
        (p) => Math.abs(p.top - top) < 100 && Math.abs(p.left - left) < 200
      );

      attempts++;
      if (!inTextZone && !overlaps) break;
    } while (attempts < 100);

    usedPositions.push({ top, left });
    return { top, left };
  });

  setPositions(newPositions);
}, []);


const descriptions = [
  { index: 1, 
    project: "Онлайн Магазин со всеми возможностями современных маркетплейсов 3 роли Покупатель/Продавец/Курьер + Сайт/iOS/Android",
    skills: ["Next.js", "Tailwind", "JavaScript", "TypeScript", "HTML5", "CSS", "Git", "JSON", "Python", "Flask", "SQlite", "SQLAlchemy"],
  },
  {
    index: 2, 
    project: "Мобильно серверное приложение имеющее две в версии Заказчик и Водитель + DistanceMatrixAPI",
    skills: ["Kivy", "Python", "GoogleMaps", "OpenStreetMap", "Flask"],
  },
  {
    index: 3, 
    project: "Кампайн для EVO, созданная под Kaztelecom и Tele2: умные голосовые боты ведут диалог с должниками, обучаясь на ходу и превращая холодные вызовы в точечные взыскания.",
    skills: ["SQLAlchemy", "Python", "SQlite", "Flask", "Git", "Linux", "JSON", "Bootstrap", "Vue", "CSS", "HTML5"]
  },
  {
    index: 4, 
    project: "Stenograf для компании EVO — надежное и эффективное решение для точной и быстрой записи переговоров и судебных заседаний. Обеспечивает надежную документацию, необходимую для юридической точности и анализа.",
    skills: ["ReactJS", "Tailwind", "CSS", "HTML5", "TypeScript", "PostgreSQL", "Git", "JSON", "Linux"]
  },
  {
    index: 5, 
    project: "Три стильных и функциональных лейдинг-пейджа: два для бизнеса и один — для личных проектов, с четким фокусом на простоту и результат",
    skills: ["HTML5", "CSS", "JQuery", "Bootstrap", "Git"]
  },
  
];

const handleSlideChange = (swiper: any) => {
  setCurrentSlide(swiper.realIndex);
  setHoveredSkill(swiper.realIndex);
  setUsedSkills(descriptions[swiper.realIndex]?.skills || []);
};

  return (
    <AnimShtor 
    topCurtainY={topCurtainY}
      bottomCurtainY={bottomCurtainY}
      curtainColor={curtainColor}
    > 
    <div className="relative max-lg:pb-10 bg-gradient-to-br from-[#0f2910] via-[#2b6330] to-[#243e24]">
      <div className="flex  item-center justify-center  inset-0 z-0 overflow-hidden pointer-events-none">
        {skillData.map(({ keyword, icon: Icon, level }, i) => (
          <motion.div
            key={i}
            className={`absolute  text-gray-300 ${hoveredSkill === keyword ? "opacity-100 bg-lime-700 shadow-lg rounded-lg text-white p-2 text-[60px] z-10" : "text-[40px] opacity-90 -z-1"} duration-500`}
            // key={i}
            // className={`absolute text-gray-300 ${
            //     hoveredSkill === keyword || usedSkills.includes(keyword)
            //       ? "opacity-100 bg-lime-700 shadow-lg rounded-lg text-white p-2 text-[60px] z-10"
            //       : "text-[40px] opacity-90 -z-1"
            //   } duration-500`}
            style={{
              top: positions[i]?.top ?? 0,
              left: positions[i]?.left ?? 0,
            }}
            animate={{
              y: [0, 8, -8, 0],
              x: [0, 4, -4, 0],
            }}
            transition={{
              duration: 8,
              delay: 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className=" relative flex items-center justify-center">
              <Icon />
              
            </div>
          </motion.div>
        ))}
        
      </div>

      {open && (
        
          <div className="flex max-lg:mt-10 10 lg:min-h-screen items-center justify-center text-white ">
            <div className="flex  max-lg:flex-col items-center lg:max-w-4xl max-lg:max-w-xl  rounded-xl border-black bg-white shadow-md shadow-green-100">
              <div className="w-1/2 flex flex-col justify-center items-center ml-2">
                <p className="flex text-black mt-5">P R O J E C T S</p>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  onSlideChange={handleSlideChange}
                  className="mySwiper h-[300px]  mt-5 "
                >
                  <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <img src="/factori-price.jpg" alt="" className="max-w-full max-h-full object-contain rounded-xl" />
                  </SwiperSlide>
                  
                  <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <img src="/taxi.jpg" alt="" className="max-w-full max-h-full object-contain rounded-xl" />
                  </SwiperSlide>
                  
                  <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <img src="/evo-compain.jpg" alt="" className="max-w-full max-h-full object-contain rounded-xl" />
                  </SwiperSlide>
                  
                  <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <img src="/stenograf-exo.jpg" alt="" className="max-w-full max-h-full object-contain rounded-xl" />
                  </SwiperSlide>
                  
                  <SwiperSlide className="w-full h-full flex items-center justify-center">
                    <img src="/leding.jpg" alt="" className="max-w-full max-h-full object-contain rounded-xl" />
                  </SwiperSlide>
                
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle} >
                      <circle  cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
                <div className=" mt-2 flex items-center justify-center">
                  <div className="md:mx-auto max-md:w-screen px-4 py-8">
                      <div className="relative">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full   border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                            Описания
                          </span>
                        </div>
                      </div>                

                      <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            {descriptions[currentSlide]?.project}
                        </p>
                      </div>
                    </div>
                </div>
              
              </div>




              <div className="flex-col justify-center items-center lg:w-2/4 max-lg:w-[70%] space-y-4 rounded-xl bg-white text-black">
                <div className="space-y-4 lg:ml-7 mt-5">
                  <p className=" ">S K I L L S</p>
                          <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center">
                              <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                                Frontend
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                              {Frontend.map((skill, index) => (
                                <button
                                    onMouseEnter={() => setHoveredSkill(skill.keyword)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    key={index}
                                    onClick={() => setHoveredSkill(skill.keyword)}
                                    // className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                                      usedSkills.includes(skill.keyword)
                                        ? "text-white bg-lime-700"
                                        : "bg-white text-black hover:bg-lime-700 hover:text-white"
                                    }  shadow transition duration-300`}
                                  >
                                    <skill.icon className="w-5 h-5" />
                                    {skill.keyword}
                                  </button>
                              ))} 
                          </div>
                          <div className="relative mb-2">
                            <div className="absolute inset-0 flex items-center" aria-hidden="true">
                              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                            </div>
                            <div className="relative flex justify-center">
                              <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                                Backend
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-wrap gap-4">
                              {Backend.map((skill, index) => (
                                <button
                                    onMouseEnter={() => setHoveredSkill(skill.keyword)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    key={index}
                                    onClick={() => setHoveredSkill(skill.keyword)}
                                    // className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                                    className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                                      usedSkills.includes(skill.keyword)
                                        ? "text-white bg-lime-700"
                                        : "bg-white text-black hover:bg-lime-700 hover:text-white"
                                    }  shadow transition duration-300`}
                                  >
                                    <skill.icon className="w-5 h-5" />
                                    {skill.keyword}
                                  </button>
                              ))} 
                          </div>
                      

                      <div className="relative mb-2">
                        <div className="absolute inset-0 flex items-center" aria-hidden="true">
                          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
                        </div>
                        <div className="relative flex justify-center">
                          <span className="px-3 bg-gray-100 dark:bg-gray-800 text-lg font-medium rounded-xl text-gray-900 dark:text-gray-100">
                            Утилити
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                          {Ytil.map((skill, index) => (
                            <button
                                onMouseEnter={() => setHoveredSkill(skill.keyword)}
                                onMouseLeave={() => setHoveredSkill(null)}
                                key={index}
                                onClick={() => setHoveredSkill(skill.keyword)}
                                // className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                                className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                                  usedSkills.includes(skill.keyword)
                                    ? "text-white bg-lime-700"
                                    : "bg-white text-black hover:bg-lime-700 hover:text-white"
                                }  shadow transition duration-300`}
                              >
                                <skill.icon className="w-5 h-5" />
                                {skill.keyword}
                              </button>
                          ))} 
                      </div>
                      
                </div>

                <div className="flex items-end text-end  justify-center mt-5 mb-5">
                <button
                          onClick={handleCurtainTransition_l}
                          className={`mr-2 relative inline-flex items-center justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium transition ease-out hover:border-2 hover:border-[#1d5731]  duration-500 rounded-full shadow-md group`}
                        >
                            <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 translate-x-full hover:bg-[#1d5731] group-hover:translate-x-0 ease">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                            <span className={`absolute flex items-center justify-center w-full h-full text-[#1d5731] transition-all  duration-500 transform group-hover:-translate-x-full ease`}>О себе</span>
                            <span className="relative invisible">О себе</span>
                        </button>
                  <button
                    onClick={handleCurtainTransition_r}
                    className="relative ml-2 inline-flex items-center justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium  transition ease-out hover:border-2 hover:border-[#1d5731] duration-500 rounded-full shadow-md group">
                
                    <span className={`absolute inset-0 flex items-center justify-center w-full h-full text-white duration-500 -translate-x-full hover:bg-[#1d5731] group-hover:-translate-x-0 ease`}>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                            </svg>
                        </span>
                        <span className={`absolute flex items-center justify-center w-full h-full text-[#1d5731]  transition-all  duration-500 transform group-hover:translate-x-full ease`}>Достижения</span>
                        <span className="relative invisible">Достижения</span>  
                  </button>

                  
                </div>
              </div>
            </div>
          </div>
      )}

      <TextSlider 
        text='Навыки'
        open={open}
      />
      </div>
      {/* <div className='max-md:flex justify-center items-center h-full'>
              <h3>
                Сайт не доступин на экранах ниже 1024px
              </h3>
      </div> */}

    </AnimShtor>
  );
}
