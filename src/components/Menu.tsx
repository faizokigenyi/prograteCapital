import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import {
  FaUserTie,
  FaUserFriends,
  FaUserGraduate,
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

import { IconType } from "react-icons";

type UserRole = "admin" | "manager" | "employee" | "investor";

interface MenuItem {
  icon: IconType;
  label: string;
  href: string;
  visible: UserRole[];
}

interface MenuSection {
  title: string;
  items: MenuItem[];
}

const menuItems: MenuSection[] = [
  {
    title: "MENU",
    items: [
      {
        icon: MdOutlineDashboard,
        label: "Dashboard",
        href: "/admin",
        visible: ["admin"],
      },
      {
        icon: FaUserTie,
        label: "Managers",
        href: "/managers",
        visible: ["admin", "manager"],
      },
      {
        icon: IoIosPeople,
        label: "Employees",
        href: "/employees",
        visible: ["admin", "employee"],
      },
      {
        icon: BsBank,
        label: "Investors",
        href: "/investors",
        visible: ["admin", "investor"],
      },
      {
        icon: FaBook,
        label: "Clients",
        href: "/clients",
        visible: ["admin"],
      },
      {
        icon: FaSchool,
        label: "Branches",
        href: "/branches",
        visible: ["admin"],
      },
      {
        icon: FaMoneyBillWave,
        label: "Payments",
        href: "/payments",
        visible: ["admin"],
      },
      {
        icon: FaClipboardList,
        label: "Loans",
        href: "/loans",
        visible: ["admin", "manager", "employee"],
      },
      {
        icon: FaGift,
        label: "Promos",
        href: "/promos",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: FaChartLine,
        label: "Insights",
        href: "/insights",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: FaCalendarAlt,
        label: "Events",
        href: "/events",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: AiOutlineMessage,
        label: "Inbox",
        href: "/inbox",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: FaBullhorn,
        label: "Announcements",
        href: "/announcements",
        visible: ["admin", "manager", "employee", "investor"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: FaUser,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: FaCog,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "manager", "employee", "investor"],
      },
      {
        icon: FaSignOutAlt,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "manager", "employee", "investor"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-10 pt-3 text-sm max-h-[80vh] overflow-scroll no-scrollbar">
      {menuItems.map((i) => (
        <div className="flex flex-col gap-2" key={i.title}>
          <span className="hidden lg:block text-gray-800 font-bold my-4">
            {i.title}
          </span>
          {i.items.map((item) => {
            if (item.visible.includes("admin")) {
              return (
                <Link
                  href={item.href}
                  key={item.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                >
                  <item.icon className="text-lg" />
                  <span className="hidden lg:block">{item.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;
