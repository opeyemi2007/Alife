// TeamSection.jsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaGithub,
} from "react-icons/fa";
import Image from "next/image";

const team = [
  {
    name: "Tolu Benson",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?img=58",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Ada Eze",
    role: "Product Designer",
    image: "https://i.pravatar.cc/150?img=48",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Opeyemi Adio",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=33",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Chidi Obi",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=34",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Ruth Ahmed",
    role: "Frontend Developer",
    image: "https://i.pravatar.cc/150?img=54",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Samuel Ojo",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=55",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
  {
    name: "Blessing Uche",
    role: "Backend Developer",
    image: "https://i.pravatar.cc/150?img=45",
    links: {
      linkedin: "#",
      facebook: "#",
      github: "#",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-4">Meet the Team</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        A group of young, passionate, and driven individuals dedicated to
        creating impactful solutions.
      </p>

      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Navigation]}
      >
        {team.map((member, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 rounded-xl p-6 shadow-md text-center hover:shadow-lg transition-all">
              <div className="w-24 h-24 mx-auto mb-4 relative rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-sm text-gray-600">
                <a href={member.links.linkedin} target="_blank" rel="noreferrer">
                  <FaLinkedinIn />
                </a>
                <a href={member.links.facebook} target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href={member.links.github} target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TeamSection;
