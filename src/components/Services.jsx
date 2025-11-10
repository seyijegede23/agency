import React from "react";
import assets from "../assets/assets";
import ServiceCard from "./ServiceCard";
import Title from "./Title";

export const Services = () => {
  const servicesdata = [
    {
      title: "Design",
      description:
        "Creative, strategic, and impactful designs that elevate your brand identity.",
      icon: assets.design,
    },
    {
      title: "AI & Machine Learning",
      description:
        "Smart AI systems that automate, predict, and optimize your business decisions.",
      icon: assets.aiicon,
    },
    {
      title: "Web Development",
      description:
        "Fast, modern, and scalable websites built for performance and impact.",
      icon: assets.webicon,
    },
    {
      title: "Mobile Development",
      description:
        "High-performance mobile apps that blend sleek design with smooth functionality.",
      icon: assets.mobileicon,
    },
    {
      title: "Cybersecurity",
      description:
        "Robust protection for your data and systems against evolving cyber threats.",
      icon: assets.cybericon,
    },
  ];

  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-8 px-4 sm:px-12 lg:px-24 xl:px-20 pt-24 text-gray-700 dark:text-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute w-[700px] h-[700px] bg-indigo-500/10 blur-[160px] rounded-full -z-10 top-10 left-20"></div>
      <div className="absolute w-[500px] h-[500px] bg-purple-500/10 blur-[150px] rounded-full -z-10 bottom-0 right-10"></div>

      {/* Background image (light mode only) */}
      <img
        src={assets.bgImage2}
        alt=""
        className="absolute -top-80 -left-60 -z-10 dark:hidden"
      />

      <Title
        title="Got an Idea? Let’s Bring It to Life"
        desc="We turn ideas into reality with innovative solutions, creative design, and cutting-edge technology. Let’s collaborate and make your project come alive."
      />

      {/* Card Grid */}
      <div className="flex flex-wrap justify-center gap-6 mt-6">
        {servicesdata.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};
