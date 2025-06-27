// pages/hospitals/[slug].jsx

import Image from 'next/image';
import hospitals from '@/data/hospitals.json';
import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

export default function HospitalDetail({ params }){

  const hospital = hospitals.find((h) => h.slug === params.slug);

  if (!hospital) return <p className="text-center py-20">Loading hospital data...</p>;

  return (
    <section className="px-6 py-16 md:px-20 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-8">
          <Image src={hospital.image} alt={hospital.name} fill className="object-cover" />
        </div>

        <h1 className="text-3xl font-bold text-red-600 mb-2 flex items-center gap-2">
          {hospital.name}
          {hospital.verified && <FaCheckCircle className="text-green-500" title="Verified" />}
        </h1>
        <p className="text-gray-700 mb-4 flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" /> {hospital.address}
        </p>
        <p className="text-gray-700 mb-8 flex items-center gap-2">
          <FaPhoneAlt className="text-red-500" /> {hospital.phone}
        </p>

        <p className="text-gray-600 leading-relaxed">
          {hospital.description || 'This is a verified hospital or blood bank available to help with safe, accessible blood donations. ALIFE helps patients connect to these trusted facilities for efficient and life-saving support.'}
        </p>

        <div className="mt-10">
          <Link href="/find" legacyBehavior>
            <a className="text-red-600 font-semibold hover:underline">← Back to Find Page</a>
          </Link>
        </div>
      </div>
    </section>
  );
};
