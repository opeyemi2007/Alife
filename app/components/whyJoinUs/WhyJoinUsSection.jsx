import React from 'react';
import Image from 'next/image';
import JoinImg from '/public/group-african-medical-students-posed-outdoor-against-university-door.jpg'; // Replace with your image path

const WhyJoinUs = () => {
  return (
    <section className="w-full bg-gray-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Split Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px] w-full overflow-hidden rounded-2xl">
          <div className="relative w-full h-full">
            <Image 
              src={JoinImg}
              alt="Why Join 1"
              fill
              className="object-cover object-top-left"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={JoinImg}
              alt="Why Join 2"
              fill
              className="object-cover object-top-right"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={JoinImg}
              alt="Why Join 3"
              fill
              className="object-cover object-bottom-left"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={JoinImg}
              alt="Why Join 4"
              fill
              className="object-cover object-bottom-right"
            />
          </div>
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-red-600">Why Join Us</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1 text-black">1. INCREASE BLOOD DONATIONS</h3>
            <p className="text-gray-700">
              Get more blood donors by making your hospital or blood bank easily discoverable.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1 text-black">2. SIMPLIFIED DONOR TRACKING</h3>
            <p className="text-gray-700">
              Use a unique code system to verify and track donations seamlessly.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1 text-black">3. BOOST VISIBILITY & CREDIBILITY</h3>
            <p className="text-gray-700">
              Gain recognition as a trusted donation center & attract more donors.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyJoinUs;
