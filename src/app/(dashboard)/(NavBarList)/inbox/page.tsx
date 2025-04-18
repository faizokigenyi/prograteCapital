import Inbox, { Message } from "@/components/Inbox";

const mockMessages: Message[] = [
  {
    id: "1",
    sender: "Support",
    subject: "Your ticket has been resolved",
    preview: "We’ve resolved your issue regarding payment delays...",
    time: "2h ago",
    isRead: false,
  },
  {
    id: "2",
    sender: "System",
    subject: "New login detected",
    preview: "We noticed a login to your account from a new device...",
    time: "5h ago",
    isRead: true,
  },
];

export default function InboxPage() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Inbox messages={mockMessages} />
    </div>
  );
}
