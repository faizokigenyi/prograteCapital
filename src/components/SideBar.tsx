'use client';

import { FaChartBar, FaUsers, FaHome } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-white border-r p-5 shadow-md fixed">
      <h2 className="text-2xl font-bold mb-6 text-blue-800">Dashboard</h2>
      <nav className="flex flex-col gap-4">
        <Link href="/dashboard" className="flex items-center gap-2 text-blue-700 hover:text-blue-900">
          <FaHome /> Home
        </Link>
        <Link href="/dashboard" className="flex items-center gap-2 text-blue-700 hover:text-blue-900">
          <FaChartBar /> Audience Age
        </Link>
        <Link href="/dashboard" className="flex items-center gap-2 text-blue-700 hover:text-blue-900">
          <FaUsers /> Users
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
