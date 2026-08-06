import { motion } from "framer-motion";

interface SplitTextProps {
  text?: string;
  delay?: number;
  staggerChildren?: number;
  className?: string;
  textAlign?: "left" | "center" | "right";
  duration?: number;
  initialY?: number;
  textColor?: string;
  accentClass?: string;
}

type Word = {
  text: string;
  accent: boolean;
};

const parseWords = (text: string): Word[] => {
  const segments = text.split(/\[\[|\]\]/);
  const words: Word[] = [];

  segments.forEach((segment, index) => {
    const accent = index % 2 === 1;
    segment
      .split(" ")
      .filter(Boolean)
      .forEach((word) => words.push({ text: word, accent }));
  });

  return words;
};

const SplitText = ({
  text = "Texto animado",
  delay = 0.05,
  staggerChildren = 0.015,
  className = "",
  textAlign = "center",
  duration = 0.5,
  initialY = 40,
  textColor = "",
  accentClass = "font-hand",
}: SplitTextProps) => {
  const words = parseWords(text);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: {
      y: initialY,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <motion.div
      className={`inline-block ${className}`}
      style={{ textAlign }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      variants={containerVariants}
    >
      {words.map((word, wordIndex) => (
        <span
          key={`word-${wordIndex}`}
          className={`inline-block whitespace-nowrap mr-2 ${
            word.accent ? accentClass : ""
          }`}
        >
          {word.text.split("").map((letter, letterIndex) => (
            <motion.span
              key={`letter-${wordIndex}-${letterIndex}`}
              className={`inline-block ${textColor}`}
              variants={letterVariants}
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );
};

export default SplitText;
