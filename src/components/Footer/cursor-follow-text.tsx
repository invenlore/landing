"use client";

import { useEffect, useRef, useState } from "react";
import clsx from "clsx";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (event: MouseEvent) => {
      if (textRef.current) {
        const rect = textRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };
    window.addEventListener("mousemove", handleMouse);

    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <div
      ref={textRef}
      className={clsx(
        `animated-text  text-[17vw] text-center tracking-[-0.06em] w-full font-bold left-0 -bottom-4 absolute leading-[80%]
                 [--gradient-text-center:#F4A900] [--gradient-text-edge:#000]
                 dark:[--gradient-text-center:rgb(226,226,226)] dark:[--gradient-text-edge:rgba(0,9,12,0.1)]`,
        className
      )}
      style={
        {
          "--text-mouse-x": `${mousePosition.x}px`,
          "--text-mouse-y": `${mousePosition.y}px`,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );
};

export default AnimatedText;
