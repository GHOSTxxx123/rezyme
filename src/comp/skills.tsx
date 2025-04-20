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

const skillData = [
  { keyword: "Python", icon: SiPython, level: 95, projects: [
    { name: "AI Генератор", image: "https://avatars.mds.yandex.net/i?id=1e6f48cf220ea3cf022e93a3e592ebdcf78ec6dc-5487054-images-thumbs&n=13" },
    { name: "Data Parser", image: "https://avatars.mds.yandex.net/i?id=bc49e901647241394e72a068110d7366bf5cebe5-4904209-images-thumbs&n=13" }
  ]},
  { keyword: "Flask", icon: SiFlask, level: 90, projects: [
    { name: "AI Генератор", image: "https://avatars.mds.yandex.net/i?id=1e6f48cf220ea3cf022e93a3e592ebdcf78ec6dc-5487054-images-thumbs&n=13" },
    { name: "Data Parser", image: "https://avatars.mds.yandex.net/i?id=bc49e901647241394e72a068110d7366bf5cebe5-4904209-images-thumbs&n=13" }
  ] },
  { keyword: "Django", icon: SiDjango, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "FastAPI", icon: SiFastapi, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "HTML5", icon: SiHtml5, level: 90, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "CSS", icon: SiCss3, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Bootstrap", icon: SiBootstrap, level: 80, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "JSON", icon: SiJson, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "ReactJS", icon: SiReact, level: 90, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Next.js", icon: SiNextdotjs, level: 70, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Vue", icon: SiVuedotjs, level: 75, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "JavaScript", icon: SiJavascript, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "jQuery", icon: SiJquery, level: 70, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Linux", icon: SiLinux, level: 80, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "MongoDB", icon: SiMongodb, level: 75, projects: [
    { name: "AI Генератор", image: "../../public/python1.png" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "GitHub", icon: SiGithub, level: 85, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Git", icon: SiGit, level: 80, projects: [
    { name: "AI Генератор", image: "/images/python1.jpg" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
  { keyword: "Tailwind", icon: SiTailwindcss, level: 80, projects: [
    { name: "AI Генератор", image: "../../public/python1.png" },
    { name: "Data Parser", image: "/images/python2.jpg" }
  ] },
];

export type Skill = typeof skillData[number];

type Props = {
  topCurtainY: string;
  bottomCurtainY: string;
  curtainColor: string;
  open: boolean;
};

export default function Skill({ topCurtainY, bottomCurtainY, curtainColor, open }: Props) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [positions, setPositions] = useState<{ top: number; left: number }[]>([]);

  const iconRef = useRef<HTMLDivElement>(null);
const [popupPosition, setPopupPosition] = useState<'top' | 'bottom'>('bottom');
const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

// 2. Определение позиции попапа + переключение картинок
useEffect(() => {
  if (!hoveredSkill) return;

  // Определить позицию всплывашки (над или под иконкой)
  if (iconRef.current) {
    const { top } = iconRef.current.getBoundingClientRect();
    setPopupPosition(top < window.innerHeight / 2 ? 'bottom' : 'top');
  }

  // Интервал смены изображений
  const interval = setInterval(() => {
    const projects = skillData.find(s => s.keyword === hoveredSkill)?.projects || [];
    setCurrentImageIndex(prev => (prev + 1) % projects.length);
  }, 2000);

  return () => clearInterval(interval);
}, [hoveredSkill]);


  const paragraph = `Я обладаю разнообразными навыками в области веб-разработки, которые включают как Frontend, так и Backend. На продвинутом уровне я работаю с Python, Flask, API, REST, JSON API и обладаю глубокими знаниями в Frontend-разработке с использованием HTML5, CSS, Bootstrap, ReactJS, Vue, а также использую JavaScript и jQuery для динамичных веб-приложений. Мой опыт включает создание серверных приложений с использованием FastAPI, Django и Django Rest Framework, а также работу с базами данных, такими как SQL, SQLite и Database. Сильный опыт в OOP, а также знакомство с GitHub, Git, Linux и CI/CD помогает мне эффективно работать в командах, следить за качеством кода и обеспечивать автоматизацию процессов. В дополнение я использую Next.js , Tailwind CSS и работаю с системами контроля версий и разработки программного обеспечения.`;

  return (
    <AnimShtor 
      topCurtainY={topCurtainY}
      bottomCurtainY={bottomCurtainY}
      curtainColor={curtainColor}
    > 
      <div className="flex item-center justify-center inset-0 z-0 overflow-hidden pointer-events-none">
        {skillData.map(({ keyword, icon: Icon, level }, i) => (
          <motion.div
            key={i}
            className={`absolute text-gray-300 ${hoveredSkill === keyword ? "opacity-100 bg-lime-700 shadow-lg rounded-lg text-white p-2 text-[60px] z-10" : "text-[40px] opacity-90 -z-10"} duration-500`}
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
            <div className="relative flex items-center justify-center">
              <Icon />
              <AnimatePresence>
                  {hoveredSkill === keyword && (
                    <motion.div
                      className={`absolute z-20 left-1/2 ${popupPosition === 'top' ? 'top-10' : 'bottom-20'} transform -translate-x-1/2 bg-white bg-opacity-90 shadow-lg p-4 rounded-lg text-black w-[300px] pointer-events-auto`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="z-10 font-bold text-lg text-center mb-2">
                        Проекты на {hoveredSkill}
                      </h3>
                
                      <article className="relative isolate overflow-hidden rounded-2xl max-w-sm mx-auto">
                        
                        <img
                          src={skillData
                            .find((s) => s.keyword === hoveredSkill)
                            ?.projects[currentImageIndex]?.image || ""}
                          alt="project"
                          className="h-48 w-full object-cover rounded-md"
                        />
                        <div className="p-2 text-center text-sm font-semibold">
                          {
                            skillData
                              .find((s) => s.keyword === hoveredSkill)
                              ?.projects[currentImageIndex]?.name
                          }
                        </div>
                      </article>
                    </motion.div>
                  )}
                </AnimatePresence>

            </div>
          </motion.div>
        ))}
        
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="flex items-center justify-center h-screen p-10 text-black"
        >
          <p className="text-xl font-bold leading-loose w-[60%] relative">
            {paragraph.split(" ").map((word, i) => {
              const cleanWord = word.replace(/[.,]/g, "");
              const skill = skillData.find(({ keyword }) => keyword === cleanWord);
              return skill ? (
                <span
                  key={i}
                  onMouseEnter={() => setHoveredSkill(skill.keyword)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="text-lime-700 font-semibold cursor-pointer mx-1 hover:underline duration-500"
                >
                  {word}
                </span>
              ) : (
                <span key={i}>{word} </span>
              );
            })}
          </p>
        </motion.div>
      )}

      <TextSlider 
        text='Навыки'
        open={open}
      />
    </AnimShtor>
  );
}
