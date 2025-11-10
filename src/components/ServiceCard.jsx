import React, { useState, useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const ServiceCard = ({ service }) => {
  const cardRef = useRef(null);
  const [pos, setPos] = useState({ x: 150, y: 150 }); // Cursor glow position

  // Main 3D rotation + lift animation
  const [{ rotateX, rotateY, scale, z }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    z: 0,
    config: { mass: 1, tension: 200, friction: 30 },
  }));

  // Glare effect animation
  const [glareProps, glareApi] = useSpring(() => ({
    opacity: 0,
    backgroundPosition: "0% 0%",
    config: { mass: 1, tension: 300, friction: 30 },
  }));

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPos({ x, y });

    // Calculate tilt based on cursor
    const newRotateX = ((y - rect.height / 2) / 10);
    const newRotateY = ((x - rect.width / 2) / -10);

    api.start({
      rotateX: newRotateX,
      rotateY: newRotateY,
      scale: 1.05,
      z: 20,
    });

    glareApi.start({
      opacity: 0.8,
      backgroundPosition: `${(x / rect.width) * 100}% ${(y / rect.height) * 100}%`,
    });
  };

  const handleMouseLeave = () => {
    api.start({ rotateX: 0, rotateY: 0, scale: 1, z: 0 });
    glareApi.start({ opacity: 0 });
    setPos({ x: 150, y: 150 });
  };

  return (
    <animated.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) translateZ(${z}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        willChange: "transform",
      }}
      className="relative group w-[300px] h-[220px] m-4 rounded-2xl 
      bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 
      border border-gray-200 dark:border-gray-700 shadow-xl 
      transition-all duration-300 ease-out cursor-pointer overflow-hidden"
    >
      {/* 💫 Glare Effect */}
      <animated.div
        className="absolute inset-0 rounded-2xl pointer-events-none z-20"
        style={{
          opacity: glareProps.opacity,
          background: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,255,255,0.4) 0%, transparent 50%)`,
          backgroundPosition: glareProps.backgroundPosition,
          backgroundSize: "200% 200%",
          willChange: "opacity, background-position",
        }}
      ></animated.div>

      {/* 🌈 Glow Following Cursor */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.25), transparent 80%)`,
        }}
      ></div>

      {/* 💎 Card Content */}
      <div className="relative z-30 flex flex-col items-center justify-center h-full px-6 py-4 text-center space-y-3">
        {/* Icon Section */}
        <div
          className="group/icon flex items-center justify-center w-16 h-16 rounded-full 
          bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 
          dark:from-indigo-400/10 dark:via-purple-400/10 dark:to-pink-400/10 
          shadow-inner transition-all duration-300 ease-out
          group-hover:shadow-[0_0_20px_rgba(99,102,241,0.5)] 
          group-hover:scale-110"
        >
          <img
            src={service.icon}
            alt={service.title}
            className="w-10 h-10 object-contain transition-transform duration-300 
            group-hover/icon:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg transition-colors duration-300 group-hover:text-indigo-400">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed max-w-[240px]">
          {service.description}
        </p>
      </div>

      {/* Border highlight */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-md"></div>
    </animated.div>
  );
};

export default ServiceCard;
