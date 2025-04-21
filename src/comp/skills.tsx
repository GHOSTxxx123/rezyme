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
  SiMongodb,
  SiGithub,
  SiGit,
  SiNodedotjs,
  SiTailwindcss,
} from "react-icons/si";
import { useEffect, useRef, useState } from "react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import BtnNavigation from "./btnnavigation";

const skillData = [
  { keyword: "HTML5", icon: SiHtml5, level: 90 },
  { keyword: "CSS", icon: SiCss3, level: 85 },
  { keyword: "JavaScript", icon: SiJavascript, level: 85 },
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
  { keyword: "MongoDB", icon: SiMongodb, level: 75 },
  { keyword: "Git", icon: SiGit, level: 80 },
  { keyword: "GitHub", icon: SiGithub, level: 85 },
  { keyword: "Linux", icon: SiLinux, level: 80 },
  { keyword: "JSON", icon: SiJson, level: 85 },
];

const Frontend = [
  { keyword: "HTML5", icon: SiHtml5, level: 90 },
  { keyword: "CSS", icon: SiCss3, level: 85 },
  { keyword: "JavaScript", icon: SiJavascript, level: 85 },
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
  { keyword: "MongoDB", icon: SiMongodb, level: 75 },
];

const Ytil = [
  { keyword: "Git", icon: SiGit, level: 80 },
  { keyword: "GitHub", icon: SiGithub, level: 85 },
  { keyword: "Linux", icon: SiLinux, level: 80 },
  { keyword: "JSON", icon: SiJson, level: 85 },
];

export type Skill = typeof skillData[number];

type Props = {
  topCurtainY: string;
  bottomCurtainY: string;
  curtainColor: string;
  open: boolean;
  handleCurtainTransition: () => void;
};

export default function Skill({ topCurtainY, bottomCurtainY, curtainColor, open, handleCurtainTransition }: Props) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  const iconRef = useRef<HTMLDivElement>(null);
  const [popupPosition, setPopupPosition] = useState<'top' | 'bottom'>('bottom');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const progressCircle = useRef<SVGCircleElement | null>(null);

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
        (p) => Math.abs(p.top - top) < 100 && Math.abs(p.left - left) < 100
      );

      attempts++;
      if (!inTextZone && !overlaps) break;
    } while (attempts < 100);

    usedPositions.push({ top, left });
    return { top, left };
  });

  setPositions(newPositions);
}, []);


  return (
    <AnimShtor 
    topCurtainY={topCurtainY}
      bottomCurtainY={bottomCurtainY}
      curtainColor={curtainColor}
    > 
    <div className="relative z-0 bg-gradient-to-br from-[#0f2910] via-[#2b6330] to-[#243e24]">
      <div className="max-lg:hidden flex item-center justify-center  inset-0 z-0 overflow-hidden pointer-events-none">
        {skillData.map(({ keyword, icon: Icon, level }, i) => (
          <motion.div
            key={i}
            className={`absolute  text-gray-300 ${hoveredSkill === keyword ? "opacity-100 bg-lime-700 shadow-lg rounded-lg text-white p-2 text-[60px] z-10" : "text-[40px] opacity-90 -z-1"} duration-500`}
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
        
          <div className="max-lg:hidden flex min-h-screen items-center justify-center text-white ">
            <div className="flex max-w-4xl rounded-xl border-black bg-white">
              <div className="w-1/2 flex flex-col justify-center items-center ml-2">
                <p className="flex text-black mt-5">P R O J E C T S</p>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper h-[300px] mt-5 "
                >
                  <SwiperSlide>
                    <img src="https://i.pinimg.com/originals/b8/59/ef/b859efc3d0f233861668dd03ea9eddc1.jpg" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://upload-os-bbs.hoyolab.com/upload/2023/06/01/329402116/e2d84cf968710b95186e262ce2d3bee5_2436149229872694004.jpeg" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://i.pinimg.com/originals/6e/03/21/6e0321597039afa3bc11d02d52fdfa6e.jpg" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://i.pinimg.com/originals/cd/a5/a2/cda5a288883071b783cd97d68195df5f.jpg" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://avatars.mds.yandex.net/i?id=8607e051544f16aab59566e84c3f2cc2f00129b8-5166690-images-thumbs&n=13" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://avatars.mds.yandex.net/i?id=fce1ad80d95f1d94671921743483371b_l-5305969-images-thumbs&n=13" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://avatars.mds.yandex.net/i?id=75a6b3d224ec3b93276f78a1cbfc1a52_l-9065783-images-thumbs&n=13" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://i.pinimg.com/originals/b0/36/63/b03663786fdf4c65fa4338a8fd169ead.jpg" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <SwiperSlide>
                  <img src="https://avatars.mds.yandex.net/i?id=269b804272c0ac9647db72395e12412b_l-5205087-images-thumbs&n=13" alt="" className=" rounded-xl " />
                  </SwiperSlide>
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" >
                      <circle ref={progressCircle} cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
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

                      <div className="mt-8 text-center">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          This is the content of the first paragraph. You can add your text here.
                          The divider above separates this section from the previous content.
                        </p>
                      </div>
                    </div>
                </div>
              
              </div>




              <div className="w-2/4 space-y-4 rounded-xl bg-white text-black">
                <div className="space-y-4 ml-7 mt-5">
                  <p className=" ">S K I L L S</p>
                      <div className="relative">
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
                                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                              >
                                <skill.icon className="w-5 h-5" />
                                {skill.keyword}
                              </button>
                          ))} 
                      </div>
                      <div className="relative">
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
                                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                              >
                                <skill.icon className="w-5 h-5" />
                                {skill.keyword}
                              </button>
                          ))} 
                      </div>
                      <div className="relative">
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
                                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-lime-700 hover:bg-lime-600 text-white shadow transition duration-300"
                              >
                                <skill.icon className="w-5 h-5" />
                                {skill.keyword}
                              </button>
                          ))} 
                      </div>
                </div>

                <div className="flex items-end text-end  justify-center mt-5">
                  <button
                    onClick={handleCurtainTransition}
                    className="relative inline-flex items-center ${bg} justify-center text-2xl p-4 px-6 py-3 overflow-hidden font-medium  transition ease-out hover:border-2 hover:border-[#1d5731] duration-500 rounded-full shadow-md group">
                
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
      <div className='max-md:flex justify-center items-center h-full'>
              <h3>
                Сайт не доступин на экранах ниже 1024px
              </h3>
      </div>

    </AnimShtor>
  );
}
