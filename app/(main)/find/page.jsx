// pages/find.jsx
'use client'

import React, { useState } from 'react';
import HospitalCard from '../components/hospitalCard/HospitalCard';
import mockHospitals from '@/data/hospitals.json'

const FindPage = () => {
  const [search, setSearch] = useState('');
  const [filterVerified, setFilterVerified] = useState('all');

  const filteredHospitals = mockHospitals.filter(hospital => {
    const matchSearch = hospital.name.toLowerCase().includes(search.toLowerCase());
    const matchVerified =
      filterVerified === 'all' ||
      (filterVerified === 'verified' && hospital.verified) ||
      (filterVerified === 'unverified' && !hospital.verified);
    return matchSearch && matchVerified;
  });

  return (
    <section className="w-full py-12 px-6 md:px-20 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-red-600 mb-6">Find Hospitals & Blood Banks</h1>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
        <input
          type="text"
          placeholder="Search by name..."
          className="w-full md:w-1/2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={filterVerified}
          onChange={(e) => setFilterVerified(e.target.value)}
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          <option value="all">All Hospitals</option>
          <option value="verified">Verified Only</option>
          <option value="unverified">Unverified Only</option>
        </select>
      </div>

      {filteredHospitals.length === 0 ? (
        <p className="text-center text-gray-500">No hospitals found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHospitals.map((hospital, index) => (
            <HospitalCard key={index} {...hospital} />
          ))}
        </div>
      )}
    </section>
  );
};

export default FindPage;
