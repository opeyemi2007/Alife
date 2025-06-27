import React from 'react';
import Image from 'next/image';
import image1 from '../../../public/group-african-medical-students-posed-outdoor-against-university-door.jpg'
import image2 from '../../../public/medium-shot-health-worker-wearing-mask.jpg'
import image3 from '../../../public/africa-humanitarian-aid-nurser-getting-ready-work.jpg'
import image4 from '../../../public/black-guy-isolated-white-background-is-going-have-covid-vaccination.jpg'

const AboutHeroSection = () => {
  return (
    <section className="w-full py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl font-bold text-red-600 mb-6">About ALIFE</h1>
          <p className="text-lg text-gray-700 mb-4">
            ALIFE is a digital lifeline connecting willing blood donors to hospitals in need — saving lives, one match at a time.
          </p>
          <p className="text-md text-gray-600">
            We're on a mission to make blood donation faster, safer, and more accessible across Nigeria through smart technology and community.
          </p>
        </div>

        {/* Image/Avatar Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-48 relative rounded-xl overflow-hidden">
            <Image
              src={image1}
              alt="Donor 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-48 relative rounded-xl overflow-hidden">
            <Image
              src={image2}
              alt="Donor 2"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-48 relative rounded-xl overflow-hidden">
            <Image
              src={image3}
              alt="Donor 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full h-48 relative rounded-xl overflow-hidden">
            <Image
              src={image4}
              alt="Donor 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
