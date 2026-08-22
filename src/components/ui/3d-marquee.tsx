"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip";

export const ThreeDMarquee = ({
  images,
  tooltips = [],
  className,
  imageSize = 200,
}: {
  images: string[];
  tooltips?: string[];
  className?: string;
  imageSize?: number;
}) => {
  const chunkSize = 4;      // 4 filas
  const desiredColumns = 4; // 4 columnas

  // 1) Emparejamos imagen + tooltip por índice
  const items: { src: string | null; tooltip: string }[] = images.map(
    (src, index) => ({
      src,
      tooltip: tooltips[index] ?? "",
    })
  );

  // 2) Rellenamos con placeholders hasta completar grid (4x4 = 16)
  while (items.length < chunkSize * desiredColumns) {
    items.push({ src: null, tooltip: "" });
  }

  // 3) Hacemos los chunks por columnas
  const chunks = Array.from({ length: desiredColumns }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return items.slice(start, start + chunkSize);
  });

  const baseWidth = 4 * imageSize;
  const baseHeight = 4 * imageSize;
  const stageSize = Math.max(baseWidth, baseHeight);

  return (
    <div className={cn("mx-auto block h-full w-full", className)}>
      <div className="flex h-full w-full items-center justify-center overflow-hidden">
        <div
          className="relative shrink-0"
          style={{ width: stageSize, height: stageSize }}
        >
          <div
            style={{
              transform: "rotateX(50deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className={cn(
              "absolute inset-0 grid origin-center grid-cols-4 gap-6 transform-3d"
            )}
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                key={colIndex + "marquee"}
                animate={{ y: colIndex % 2 === 0 ? 50 : -50 }} // desplazamiento suave
                transition={{
                  duration: colIndex % 2 === 0 ? 15 : 20,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="flex flex-col items-center gap-6"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((item, itemIndex) => (
                  <div
                    className="relative"
                    key={`${colIndex}-${itemIndex}-${item.src ?? "placeholder"}`}
                    style={{
                      width: imageSize,
                      height: imageSize,
                    }}
                  >
                    {item.src && (
                      <>
                        <GridLineHorizontal
                          className="-top-4"
                          offset="20px"
                        />
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <motion.img
                              whileHover={{ y: -10 }}
                              transition={{
                                duration: 0.3,
                                ease: "easeInOut",
                              }}
                              src={item.src}
                              alt={item.tooltip || "Skill icon"}
                              className="aspect-[970/700] rounded-lg object-contain ring ring-gray-950/5 hover:shadow-2xl"
                              width={imageSize}
                              height={imageSize}
                            />
                          </TooltipTrigger>
                          <TooltipContent side="bottom" sideOffset={6}>
                            {item.tooltip}
                          </TooltipContent>
                        </Tooltip>
                      </>
                    )}
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};



const GridLineHorizontal = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",
          "--offset": offset || "200px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};

const GridLineVertical = ({
  className,
  offset,
}: {
  className?: string;
  offset?: string;
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",
          "--offset": offset || "150px", //-100px if you want to keep the line inside
          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude",
        } as React.CSSProperties
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}
    ></div>
  );
};
