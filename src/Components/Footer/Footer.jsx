import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <>
      <section className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center mb-6">
            <div className="flex items-center">
              <img src="/OIG.png" id="footer-logo" alt="Logo" className="h-20 w-20 bg-white rounded-full mr-2"/>
              <svg id="footer-portal-name" width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                <text id="footer-portal-name-svg-text" x="10" y="35" style={{ fontSize: '2rem', fontWeight: 'bold', fill: 'white' }}>FoodMania</text>
              </svg>
            </div>
          </div>
          <footer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 text-center">
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">About Us</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Navigation</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Site Map</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Popular Posts</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Recent Comments</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Privacy Policy</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Newsletter Signup</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Contact Information</Link>
            <Link to="/" className="footer-tabs text-gray-400 hover:text-white">Terms of Service</Link>
          </footer>
          <div className="mt-6 text-center text-gray-400">
            &copy; FoodMania 2023 | All rights reserved.
          </div>
        </div>
      </section>
    </>
  )
}
