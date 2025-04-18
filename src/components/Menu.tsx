"use client";

import Link from "next/link";
import {
  FaUserTie,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBook,
  FaSchool,
  FaMoneyBillWave,
  FaClipboardList,
  FaGift,
  FaChartLine,
  FaCalendarAlt,
  FaInbox,
  FaBullhorn,
} from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BsBank } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";

import type { IconType } from "react-icons";

type UserRole = "admin" | "manager" | "employee" | "investor";

interface MenuItem {
  icon: IconType;
  label: string;
  href: string;
  visible: UserRole[];
}

interface MenuSection {
  title?: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      { icon: MdOutlineDashboard, label: "Dashboard", href: "/admin", visible: ["admin"] },
      { icon: FaUserTie, label: "Managers", href: "/managers", visible: ["admin", "manager"] },
      { icon: IoIosPeople, label: "Employees", href: "/employees", visible: ["admin", "employee"] },
      { icon: BsBank, label: "Investors", href: "/investors", visible: ["admin", "investor"] },
      { icon: FaBook, label: "Clients", href: "/clients", visible: ["admin"] },
      { icon: FaSchool, label: "Branches", href: "/branches", visible: ["admin"] },
      { icon: FaMoneyBillWave, label: "Payments", href: "/payments", visible: ["admin"] },
      { icon: FaClipboardList, label: "Loans", href: "/loans", visible: ["admin", "manager", "employee"] },
      { icon: FaGift, label: "Promos", href: "/promos", visible: ["admin", "manager", "employee", "investor"] },
      { icon: FaChartLine, label: "Insights", href: "/insights", visible: ["admin", "manager", "employee", "investor"] },
      { icon: FaCalendarAlt, label: "Events", href: "/events", visible: ["admin", "manager", "employee", "investor"] },
      { icon: AiOutlineMessage, label: "Inbox", href: "/inbox", visible: ["admin", "manager", "employee", "investor"] },
      { icon: FaBullhorn, label: "Announcements", href: "/announcements", visible: ["admin", "manager", "employee", "investor"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { icon: FaUser, label: "Profile", href: "/profile", visible: ["admin", "manager", "employee", "investor"] },
      { icon: FaCog, label: "Settings", href: "/settings", visible: ["admin", "manager", "employee", "investor"] },
      { icon: FaSignOutAlt, label: "Logout", href: "/logout", visible: ["admin", "manager", "employee", "investor"] },
    ],
  },
];

const Menu = ({ userRole = "admin" }: { userRole?: UserRole }) => {
  return (
    <div className="pt-3 text-sm max-h-[80vh] overflow-hidden hover:overflow-auto pr-1 transition-all duration-300 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
      {menuItems.map((section) => (
        <div className="flex flex-col gap-2 mb-6" key={section.title}>
          {section.title && (
            <span className="text-gray-700 font-bold text-xs uppercase tracking-wide px-2 lg:px-3">
              {section.title}
            </span>
          )}
          {section.items.map((item) =>
            item.visible.includes(userRole) ? (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-gray-500 px-2 py-2 rounded-md hover:text-blue-600 hover:bg-blue-50 transition-all duration-150 lg:justify-start justify-center"
              >
                <item.icon className="text-lg shrink-0" />
                <span className="hidden lg:block text-sm">{item.label}</span>
              </Link>
            ) : null
          )}
        </div>
      ))}
    </div>
  );
};

export default Menu;
