"use client";

import React from "react";
import { BsDot } from "react-icons/bs";

export interface Message {
  id: string;
  sender: string;
  subject: string;
  preview: string;
  time: string;
  isRead: boolean;
}

interface InboxProps {
  messages: Message[];
  onSelectMessage?: (id: string) => void;
}

const Inbox: React.FC<InboxProps> = ({ messages, onSelectMessage }) => {
  return (
    <div className="w-full h-full bg-white rounded-none md:rounded-2xl shadow-sm md:shadow-lg overflow-hidden flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Inbox</h2>
      </div>

      {/* Messages List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`py-3 px-3 rounded-lg cursor-pointer transition hover:bg-gray-100 ${
              !msg.isRead ? "bg-gray-50" : ""
            }`}
            onClick={() => onSelectMessage?.(msg.id)}
          >
            <div className="flex justify-between items-center mb-1">
              <p className="text-sm font-medium text-gray-700">{msg.sender}</p>
              <p className="text-xs text-gray-500">{msg.time}</p>
            </div>
            <p className="text-sm font-semibold text-gray-800">{msg.subject}</p>
            <div className="flex items-start gap-1">
              {!msg.isRead && <BsDot className="text-blue-500 text-xl mt-0.5" />}
              <p className="text-sm text-gray-600 line-clamp-1">{msg.preview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inbox;
