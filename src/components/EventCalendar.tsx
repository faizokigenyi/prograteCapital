"use client";

import Image from "next/image";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Tech Innovators Conference 2025",
    time: "9:00 AM - 5:00 PM",
    description: "Join industry leaders for a day of keynote speeches, panel discussions, and networking. Learn about the latest trends in AI, machine learning, and tech innovation.",
    location: "San Francisco Convention Center, CA",
    category: "Conference",
    date: "2025-05-12",
  },
  {
    id: 2,
    title: "Design Workshop: User-Centered Design",
    time: "10:00 AM - 4:00 PM",
    description: "A hands-on workshop focused on user-centered design principles. Perfect for designers and developers looking to improve their user interface and experience design skills.",
    location: "Online (Zoom)",
    category: "Workshop",
    date: "2025-05-15",
  },
  {
    id: 3,
    title: "Global Marketing Summit",
    time: "11:00 AM - 3:00 PM",
    description: "A global summit with marketing experts from around the world. Topics include digital marketing, social media strategies, and brand building in a digital age.",
    location: "The Ritz-Carlton, New York, NY",
    category: "Summit",
    date: "2025-06-05",
  },
];



const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={onChange} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
