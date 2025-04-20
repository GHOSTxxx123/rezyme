// hooks/useTypewriter.ts
import { useEffect, useState } from "react";

export function useTypewriter(texts: string[], speed = 100, pause = 1500) {
  const [displayed, setDisplayed] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (charIndex < currentText.length) {
          setDisplayed((prev) => prev + currentText[charIndex]);
          setCharIndex((prev) => prev + 1);
        } else {
          setDeleting(true);
        }
      } else {
        if (charIndex > 0) {
          setDisplayed((prev) => prev.slice(0, -1));
          setCharIndex((prev) => prev - 1);
        } else {
          setDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, deleting && charIndex === 0 ? pause : speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex, texts, speed, pause]);

  return displayed;
}
