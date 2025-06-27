import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    title: 'Verified & Trusted Network',
    description: 'We partner only with accredited hospitals and blood banks.',
    icon: 'https://cdn-icons-png.flaticon.com/512/6331/6331578.png',
  },
  {
    title: 'Real Time Donor Availability',
    description: 'Hospitals can instantly see where donors are available.',
    icon: 'https://cdn-icons-png.flaticon.com/512/10352/10352564.png',
  },
  {
    title: 'Seamless Donor Experience',
    description: 'From easy registration to tracking donation history.',
    icon: 'https://cdn-icons-png.flaticon.com/512/10445/10445245.png',
  },
  {
    title: 'Incentives for Donors',
    description: 'Health checkups & wellness perks for donors.',
    icon: 'https://cdn-icons-png.flaticon.com/512/7472/7472986.png',
  },
  {
    title: 'Impact-Driven Mission',
    description: 'Every donation directly saves lives.',
    icon: 'https://cdn-icons-png.flaticon.com/512/11636/11636907.png',
  },
];

const WhatMakesUsBestSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">What Makes Us the Best</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-red-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4">
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-red-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <Link
          href="/get-listed" // Change this route to your actual Get Listed page
          className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-red-700 transition"
        >
          Get Listed
        </Link>
      </div>
    </section>
  );
};

export default WhatMakesUsBestSection;
