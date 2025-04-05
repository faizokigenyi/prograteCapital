import  React from "react";

import { Message } from "src/types/types.ts";

interface InboxProps {
  messages: Message[];
  onSelectMessage?: (id: string) => void;
}

const Inbox: React.FC<InboxProps> = ({ messages, onSelectMessage }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow p-4">
      <h2 className="text-xl font-semibold mb-4">Inbox</h2>
      <div className="space-y-2 max-h-[400px] overflow-y-auto">
        {messages.length === 0 ? (
          <div className="text-gray-500 text-center">No messages</div>
        ) : (
          messages.map((msg) => (
            <button
              key={msg.id}
              type="button"
              onClick={() => onSelectMessage?.(msg.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  onSelectMessage?.(msg.id);
                }
              }}
              className={`text-left w-full cursor-pointer rounded-xl p-3 hover:bg-gray-100 transition flex justify-between items-start ${
                msg.isRead ? "bg-white" : "bg-blue-50"
              }`}
            >
              <div>
                <div className="font-medium">{msg.sender}</div>
                <div className="text-sm text-gray-600">{msg.subject}</div>
                <div className="text-xs text-gray-400">{msg.preview}</div>
              </div>
              <div className="text-xs text-gray-400 ml-2 text-right">
                <div>{msg.time}</div>
                {!msg.isRead && (
                  <span className="inline-block mt-1 w-2 h-2 bg-blue-500 rounded-full" />
                )}
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  );
};

export default Inbox;
