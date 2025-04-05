import React from 'react';

const Announcements = () => {
  const announcements = [
    {
      title: 'Company-wide Meeting on April 15th',
      date: '2025-04-10',
      description: 'Join us for a company-wide meeting to discuss upcoming projects and goals.',
    },
    {
      title: 'New Product Launch - April 2025',
      date: '2025-04-03',
      description: 'We are excited to announce the upcoming launch of our new product line this month.',
    },
    {
      title: 'Holiday Schedule Update',
      date: '2025-03-30',
      description: 'Please review the updated holiday schedule for this quarter.',
    },
  ];

  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-lg rounded-md p-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-medium">{announcement.title}</h2>
              <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
                {announcement.date}
              </span>
            </div>
            <p className="text-sm text-gray-400 mt-1">{announcement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
