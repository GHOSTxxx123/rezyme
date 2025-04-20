import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  highlights: string[];
};

export default function HighlightWords({ text, highlights }: Props) {
  const [activeWord, setActiveWord] = useState<string | null>(null);

  useEffect(() => {
    if (highlights.length === 0) return;

    let i = 0;
    const interval = setInterval(() => {
      setActiveWord(highlights[i]);
      i = (i + 1) % highlights.length;
    }, 1000); // каждые 2 сек выделяется следующее слово

    return () => clearInterval(interval);
  }, [highlights]);

  // разбиваем текст на слова и отображаем
  const words = text.split(" ");

  return (
    <p className="text-xl leading-loose">
      {words.map((word, i) => {
        const cleanWord = word.replace(/[.,!?]/g, ""); // без знаков
        const isActive = cleanWord === activeWord;

        return (
          <span key={i} className="relative inline-block mx-1">
            <motion.span
              animate={{
                backgroundColor: isActive ? "#cce5ff" : "transparent",
              }}
              transition={{ duration: 0.2 }}
              className="px-1 rounded"
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </p>
  );
}
