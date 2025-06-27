// pages/contact.jsx

import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <section className="w-full py-16 px-6 md:px-20 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left: Contact Details */}
        <div>
          <h2 className="text-4xl font-bold text-red-600 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            We'd love to hear from you. Whether you have a question about donations, hospitals, or anything else — our team is ready to answer all your questions.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700">
              <FaEnvelope className="text-red-500" /> <span>support@alife.ng</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaPhone className="text-red-500" /> <span>+234 800 000 0000</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <FaMapMarkerAlt className="text-red-500" /> <span>Lagos, Nigeria</span>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-semibold text-gray-600 mb-2">Follow Us:</h4>
            <div className="flex gap-4 text-gray-500">
              <a href="#" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover:text-red-600" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaTwitter className="hover:text-red-600" />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FaLinkedinIn className="hover:text-red-600" />
              </a>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-700 mb-1">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Tell us how we can help you"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Map */}
      <div className="mt-20 w-full">
        <iframe
          title="ALIFE Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15852.832387662594!2d3.3792059!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c6c2d2dd1e9%3A0x3a29ccaa4e3343d2!2sLagos!5e0!3m2!1sen!2sng!4v1719155501245"
          width="100%"
          height="350"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl border mt-8"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
