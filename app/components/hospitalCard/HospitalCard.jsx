import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaCheckCircle } from 'react-icons/fa';
import Link from 'next/link';

const HospitalCard = ({ name, address, phone, image, verified, slug }) => {
  return (
    <div className="bg-white border dashed rounded-xl overflow-hidden shadow hover:shadow-lg transition-all">
      <div className="relative w-full h-40">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-1">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          {verified && <FaCheckCircle className="text-green-500" title="Verified" />}
        </div>

        <p className="text-sm text-gray-600 flex items-center gap-2 mb-1">
          <FaMapMarkerAlt className="text-red-500" /> {address}
        </p>

        <p className="text-sm text-gray-600 flex items-center gap-2 mb-4">
          <FaPhoneAlt className="text-red-500" /> {phone}
        </p>

        <Link href={`/find/${slug}`}>
          <button className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HospitalCard;
