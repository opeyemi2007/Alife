import React from 'react';
import Image from 'next/image';

const achievements = [
  {
    title: '10,000+ Lives Saved',
    description: 'Connecting patients with life-saving blood donations.',
    image: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
  },
  {
    title: '5,000+ Donors Registered',
    description: 'Making blood donation seamless and accessible.',
    image: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
  },
  {
    title: '200+ Verified Hospitals & Blood Banks',
    description: 'Ensuring safe and reliable donations.',
    image: 'https://cdn-icons-png.flaticon.com/512/3203/3203071.png',
  },
  {
    title: 'Real Time Blood Availability',
    description: 'Helping hospitals manage and update blood supply efficiently.',
    image: 'https://cdn-icons-png.flaticon.com/512/3075/3075977.png',
  },
  {
    title: 'Donor Incentives Program Launched',
    description: 'Encourage more donors through health checkups and wellness perks.',
    image: 'https://cdn-icons-png.flaticon.com/512/679/679922.png',
  },
];

const AchievementsSection = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Our Achievements</h2>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((item, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center"
          >
            <div className="w-20 h-20 mx-auto mb-4">
              <Image
                src={item.image}
                alt={item.title}
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-red-700 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
