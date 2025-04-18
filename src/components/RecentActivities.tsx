"use client";

import {
  BsBell,
  BsWallet,
  BsBoxArrowInRight,
  BsCalendar2Event,
  BsCreditCard2Back,
} from "react-icons/bs";

const activities = {
  today: [
    {
      time: "11:45 AM",
      icon: <BsBell />,
      text: "Reviewed alerts for low balance",
    },
    {
      time: "09:22 AM",
      icon: <BsWallet />,
      text: "Checked account balance",
    },
    {
      time: "07:15 AM",
      icon: <BsBoxArrowInRight />,
      text: "Logged in from mobile device",
    },
  ],
  yesterday: [
    {
      time: "05:50 PM",
      icon: <BsCalendar2Event />,
      text: "Scheduled a recurring utility payment",
    },
    {
      time: "03:30 PM",
      icon: <BsCreditCard2Back />,
      text: "Updated payment method",
    },
  ],
};

export default function RecentActivities() {
  return (
    <div className="w-full rounded-2xl p-6 bg-white shadow-md ">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Activities
        </h2>
        <div className="text-gray-500 text-xl cursor-pointer">⋯</div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-4">Today</h3>
          <ul className="space-y-4">
            {activities.today.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-200 text-lime-900 flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{item.time}</p>
                  <p className="text-sm text-gray-800">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-600 mb-4">
            Yesterday
          </h3>
          <ul className="space-y-4">
            {activities.yesterday.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="flex-none w-8 h-8 rounded-full bg-blue-200 text-lime-900 flex items-center justify-center text-base">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{item.time}</p>
                  <p className="text-sm text-gray-800">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
