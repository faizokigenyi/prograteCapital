'use client';

import { FaTwitter, FaLinkedin, FaFacebook, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-400 mb-4">FinDash</h2>
          <p className="text-sm text-blue-100">
            Empowering financial decisions with real-time insights and secure management tools.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Quick Links</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li><a href="/dashboard" className="hover:text-orange-400">Dashboard</a></li>
            <li><a href="/investors" className="hover:text-orange-400">Investors</a></li>
            <li><a href="/payments" className="hover:text-orange-400">Payments</a></li>
            <li><a href="/loans" className="hover:text-orange-400">Loans</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Contact</h3>
          <ul className="space-y-2 text-sm text-blue-100">
            <li className="flex items-center gap-2"><FaPhoneAlt /> +1 800 555 1234</li>
            <li className="flex items-center gap-2"><FaEnvelope /> support@findash.com</li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-orange-300">Follow Us</h3>
          <div className="flex items-center gap-4 text-xl">
            <a href="#" className="hover:text-orange-400"><FaTwitter /></a>
            <a href="#" className="hover:text-orange-400"><FaFacebook /></a>
            <a href="#" className="hover:text-orange-400"><FaLinkedin /></a>
          </div>
        </div>

      </div>

      {/* Bottom line */}
      <div className="mt-10 border-t border-blue-700 pt-6 text-center text-sm text-blue-200">
        &copy; {new Date().getFullYear()} FinDash. All rights reserved.
      </div>
    </footer>
  );
}
