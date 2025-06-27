'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Star } from 'lucide-react';

const testimonies = [
  {
    name: 'Grace O.',
    avatar: 'https://i.pravatar.cc/150?img=47',
    text: "Thanks to ALIFE, I was able to find a blood donor for my sister in under 20 minutes. It's a life-saving platform!",
    rating: 5,
  },
  {
    name: 'Dr. Musa Ibrahim',
    avatar: 'https://i.pravatar.cc/150?img=12',
    text: "We’ve seen a 40% increase in voluntary donors since we joined ALIFE. It’s simplified our donor tracking process.",
    rating: 5,
  },
  {
    name: 'David A.',
    avatar: 'https://i.pravatar.cc/150?img=33',
    text: "As a regular donor, I love how easy ALIFE makes it to get notified when someone near me needs help. Proud to be part of this.",
    rating: 4,
  },
  {
    name: 'Fisayo R.',
    avatar: 'https://i.pravatar.cc/150?img=10',
    text: "The process is so seamless. I donated for the first time without any confusion. The hospital found me on ALIFE.",
    rating: 5,
  },
  {
    name: 'Nnenna K.',
    avatar: 'https://i.pravatar.cc/150?img=39',
    text: "I'm a nurse and I recommend ALIFE to every hospital. It’s effective and reliable.",
    rating: 4,
  },
  {
    name: 'Kabir A.',
    avatar: 'https://i.pravatar.cc/150?img=15',
    text: "This is the kind of innovation we need in healthcare. ALIFE makes donating feel good and purposeful.",
    rating: 5,
  },
];

const TestimoniesSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">What People Are Saying</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[Pagination, Navigation]}
        className="pb-10"
      >
        {testimonies.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 h-full">
              <div className="w-[90%] flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-black">{t.name}</h3>
                  <div className="flex text-yellow-500">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star
                        key={j}
                        size={16}
                        fill={j < t.rating ? 'currentColor' : 'none'}
                        strokeWidth={1.5}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{t.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimoniesSection;
