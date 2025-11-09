import React, { useState } from "react";

const ServiceCard = ({ service }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const rotateX = ((pos.y - 150) / 15).toFixed(2);
  const rotateY = ((pos.x - 150) / -15).toFixed(2);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 150, y: 150 })}
      style={{
        transform: `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
      }}
      className="relative group w-[300px] h-[220px] m-4 rounded-2xl 
      bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 
      border border-gray-200 dark:border-gray-700 shadow-xl 
      transition-transform duration-300 ease-out hover:scale-[1.03]"
    >
      {/* Glow effect following cursor */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(150px circle at ${pos.x}px ${pos.y}px, rgba(99,102,241,0.25), transparent 80%)`,
        }}
      ></div>

      {/* Card Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
        <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4 shadow-inner">
          <img src={service.icon} alt={service.title} className="w-12 h-12" />
        </div>
        <h3 className="font-bold text-lg">{service.title}</h3>
        <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
      </div>

      {/* Subtle border highlight */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 blur-md"></div>
    </div>
  );
};

export default ServiceCard;
