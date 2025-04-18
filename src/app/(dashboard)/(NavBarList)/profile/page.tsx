'use client';

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserShield,
  FaBriefcase, FaBuilding, FaChartLine, FaUserCheck,
  FaCalendarAlt, FaMoneyBillWave, FaGlobe
} from "react-icons/fa";

type UserRole = "admin" | "manager" | "employee" | "investor";

type Profile = {
  id: string;
  name: string;
  email: string;
  phone: string;
  photo: string;
  coverPhoto: string;
  address: string;
  role: UserRole;
  branch?: string;
  department?: string;
  employeeId?: string;
  investmentPortfolio?: string;
  joinedDate?: string;
  nationality?: string;
  status?: string;
  salary?: string;
};

const mockProfiles: Profile[] = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane.doe@example.com",
    phone: "+1234567890",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3744&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    coverPhoto:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmluYW5jaWFsJTIwb2ZmaWNlfGVufDB8fDB8fHww",
    address: "123 Wall Street, New York, NY",
    role: "manager",
    branch: "Downtown Branch",
    department: "Finance",
    employeeId: "MGR-001",
    joinedDate: "2022-03-01",
    nationality: "USA",
    status: "Active",
    salary: "$95,000",
  },
];

const ProfilePage = () => {
  const params = useSearchParams();
  const id = params.get("id") || "1";
  const profile = mockProfiles.find((p) => p.id === id);

  if (!profile) {
    return <div className="p-6">Profile not found.</div>;
  }

  return (
    <div className="w-full max-w-full bg-white shadow overflow-y-auto h-full">
      {/* Full-width Cover Photo */}
      <div className="relative w-full h-48 md:h-60 lg:h-72">
        <Image
          src={profile.coverPhoto}
          alt="Cover"
          fill
          className="object-cover"
        />
        {/* Profile Image (floating over cover bottom) */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="mt-20 px-6 pb-10 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold">{profile.name}</h2>
        <p className="text-gray-500 capitalize">{profile.role}</p>

        <div className="mt-8 text-left grid grid-cols-1 sm:grid-cols-2 gap-6">
          <DetailItem icon={<FaEnvelope />} label="Email" value={profile.email} />
          <DetailItem icon={<FaPhone />} label="Phone" value={profile.phone} />
          <DetailItem icon={<FaMapMarkerAlt />} label="Address" value={profile.address} />
          <DetailItem icon={<FaGlobe />} label="Nationality" value={profile.nationality || "N/A"} />
          <DetailItem icon={<FaCalendarAlt />} label="Joined" value={profile.joinedDate || "N/A"} />
          <DetailItem icon={<FaUserCheck />} label="Status" value={profile.status || "N/A"} />

          {profile.role === "manager" && (
            <>
              <DetailItem icon={<FaBriefcase />} label="Department" value={profile.department!} />
              <DetailItem icon={<FaBuilding />} label="Branch" value={profile.branch!} />
              <DetailItem icon={<FaUserShield />} label="Employee ID" value={profile.employeeId!} />
              <DetailItem icon={<FaMoneyBillWave />} label="Salary" value={profile.salary!} />
            </>
          )}

          {profile.role === "investor" && (
            <DetailItem icon={<FaChartLine />} label="Portfolio" value={profile.investmentPortfolio!} />
          )}
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-start gap-4">
    <div className="text-primary text-xl pt-1">{icon}</div>
    <div>
      <p className="text-sm text-gray-500">{label}</p>
      <p className="text-base font-medium">{value}</p>
    </div>
  </div>
);

export default ProfilePage;
