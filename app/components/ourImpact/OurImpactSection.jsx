import React from 'react';
import Image from 'next/image';
import ImpactImg from '/public/africa-humanitarian-aid-doctor-taking-care-patient2.jpg';


const OurImpactSection = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        
        <div>
          <h2 className="text-4xl font-bold mb-6 text-red-600">Our Impact</h2>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1 text-black">1. Life-Saving Connections</h3>
            <p className="text-gray-700">
              ALIFE bridges the gap between blood donors and hospitals in critical moments, ensuring no life is lost due to shortage.
            </p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-1 text-black">2. Community Power</h3>
            <p className="text-gray-700">
              We empower everyday heroes to save lives by making blood donation accessible, safe, and simple.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-1 text-black">3. Real-Time Support</h3>
            <p className="text-gray-700">
              With real-time alerts and location-based requests, we ensure help is always just a few clicks away.
            </p>
          </div>
        </div>

        {/* Split Image */}
        <div className="grid grid-cols-2 grid-rows-2 gap-2 h-[400px] w-full overflow-hidden rounded-2xl">
          <div className="relative w-full h-full">
            <Image 
              src={ImpactImg}
              alt="Impact 1"
              fill
              className="object-cover object-top-left"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={ImpactImg}
              alt="Impact 2"
              fill
              className="object-cover object-top-right"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={ImpactImg}
              alt="Impact 3"
              fill
              className="object-cover object-bottom-left"
            />
          </div>
          <div className="relative w-full h-full">
            <Image 
              src={ImpactImg}
              alt="Impact 4"
              fill
              className="object-cover object-bottom-right"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurImpactSection;
