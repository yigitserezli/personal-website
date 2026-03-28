import { motion } from "framer-motion";
import { useState } from "react";

type PixelImageProps = {
  src: string;
  alt?: string;
  className?: string;
  customGrid?: {
    rows: number;
    cols: number;
  };
  grayscaleAnimation?: boolean;
};

export function PixelImage({
  src,
  alt = "Pixel image",
  className = "",
  customGrid = { rows: 4, cols: 6 },
  grayscaleAnimation = false,
}: PixelImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [pointer, setPointer] = useState({ x: 0.5, y: 0.5 });
  const { rows, cols } = customGrid;
  const cells = Array.from({ length: rows * cols }, (_, index) => {
    const row = Math.floor(index / cols);
    const col = index % cols;
    const x = cols === 1 ? 0 : (col / (cols - 1)) * 100;
    const y = rows === 1 ? 0 : (row / (rows - 1)) * 100;

    return {
      key: `${row}-${col}`,
      x,
      y,
      delay: (row + col) * 0.025,
      driftX: (col - (cols - 1) / 2) * 10,
      driftY: (row - (rows - 1) / 2) * 10,
      rotate: (row % 2 === 0 ? 1 : -1) * (col + 1) * 1.5,
      centerX: cols === 1 ? 0.5 : col / (cols - 1),
      centerY: rows === 1 ? 0.5 : row / (rows - 1),
    };
  });

  return (
    <div
      className={`relative h-full w-full overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setPointer({ x: 0.5, y: 0.5 });
      }}
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const nextX = (event.clientX - bounds.left) / bounds.width;
        const nextY = (event.clientY - bounds.top) / bounds.height;

        setPointer({
          x: Math.max(0, Math.min(1, nextX)),
          y: Math.max(0, Math.min(1, nextY)),
        });
      }}
      aria-label={alt}
      role="img"
    >
      <img
        src={src}
        alt={alt}
        className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 ${isHovered ? "scale-[1.06]" : "scale-100"}`}
      />

      <div
        className="absolute inset-0 grid gap-px bg-[var(--tm-outline-variant)]/50"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {cells.map((cell) => {
          const pointerOffsetX = (pointer.x - cell.centerX) * -22;
          const pointerOffsetY = (pointer.y - cell.centerY) * -22;

          return (
            <motion.div
              key={cell.key}
              className="h-full w-full bg-[var(--tm-surface-container-lowest)]"
              initial={{ opacity: 0, scale: 0.62, y: 26, rotate: cell.rotate * 1.4 }}
              animate={{
                opacity: 1,
                scale: isHovered ? 0.9 : 1,
                filter: grayscaleAnimation ? (isHovered ? "grayscale(0)" : "grayscale(1)") : "grayscale(0)",
                x: isHovered ? cell.driftX + pointerOffsetX : 0,
                y: isHovered ? cell.driftY + pointerOffsetY : 0,
                rotate: isHovered ? cell.rotate : 0,
              }}
              transition={{
                type: isHovered ? "tween" : "spring",
                stiffness: 180,
                damping: 24,
                duration: isHovered ? 0.38 : 0.72,
                delay: isHovered ? 0 : cell.delay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${cell.x}% ${cell.y}%`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                boxShadow: isHovered ? "0 0 0 1px rgba(255,255,255,0.08)" : "0 0 0 0 rgba(255,255,255,0)",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}