import React from 'react';

const MissionVisionSection = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold text-red-600 text-center mb-12">Our Mission & Vision</h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Mission */}
        <div className="bg-white-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">🎯 Our Mission</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To build a reliable, fast, and life-saving connection between hospitals and blood donors using real-time, smart technology.
            We aim to ensure that no patient dies due to a lack of blood by empowering a strong donation network.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white-50 p-6 rounded-xl shadow">
          <h3 className="text-2xl font-semibold text-red-700 mb-4">🚀 Our Vision</h3>
          <p className="text-gray-700 text-base leading-relaxed">
            To become Nigeria’s most trusted and efficient blood donation platform, uniting communities to save millions of lives through technology, transparency, and compassion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;