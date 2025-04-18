"use client";

import Image from "next/image";

export type Role = "admin" | "manager" | "employee" | "investor";

export type UserProfile = {
  id: number;
  name: string;
  photo: string;
  email: string;
  phone: string;
  role: Role;
  address: string;
  branch?: string;
  department?: string;
  joinedAt: string;
  lastLogin?: string;
  status?: "Active" | "Suspended" | "Pending";
  managedEmployees?: number;
  kycVerified?: boolean;
  portfolioValue?: string;
  performanceRating?: string;
};

interface ProfileSidebarDetailsProps {
  user: UserProfile;
}

const ProfileSidebarDetails: React.FC<ProfileSidebarDetailsProps> = ({ user }) => {
  return (
    <div className="w-full h-full overflow-y-auto bg-white px-6 py-8 space-y-6 rounded-l-xl shadow-md">
      {/* Profile Header */}
      <div className="flex items-center gap-4">
        <Image
          src={user.photo}
          alt="Profile"
          width={64}
          height={64}
          className="rounded-full object-cover w-16 h-16"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
          <p className="text-sm text-gray-500 capitalize">{user.role}</p>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-sm text-gray-700">
        <div><span className="font-semibold">Email:</span> {user.email}</div>
        <div><span className="font-semibold">Phone:</span> {user.phone}</div>
        <div><span className="font-semibold">Address:</span> {user.address}</div>
        <div><span className="font-semibold">Branch:</span> {user.branch || "N/A"}</div>
        <div><span className="font-semibold">Joined:</span> {user.joinedAt}</div>
        {user.lastLogin && (
          <div><span className="font-semibold">Last Login:</span> {user.lastLogin}</div>
        )}
        {user.status && (
          <div>
            <span className="font-semibold">Status:</span>{" "}
            <span className={`font-medium px-2 py-0.5 rounded-full text-xs ${
              user.status === "Active"
                ? "bg-green-100 text-green-700"
                : user.status === "Suspended"
                ? "bg-red-100 text-red-600"
                : "bg-yellow-100 text-yellow-600"
            }`}>
              {user.status}
            </span>
          </div>
        )}
      </div>

      {/* Role-Specific Info */}
      <div className="space-y-2 text-sm text-gray-700">
        {user.role === "admin" && (
          <>
            <h3 className="text-sm font-semibold text-gray-600">Admin Permissions</h3>
            <ul className="list-disc list-inside text-gray-600">
              <li>Manage users</li>
              <li>Approve transactions</li>
              <li>Configure system settings</li>
            </ul>
          </>
        )}

        {user.role === "manager" && (
          <>
            <h3 className="text-sm font-semibold text-gray-600">Manager Info</h3>
            <div><span className="font-semibold">Department:</span> {user.department}</div>
            <div><span className="font-semibold">Employees Managed:</span> {user.managedEmployees}</div>
          </>
        )}

        {user.role === "employee" && (
          <>
            <h3 className="text-sm font-semibold text-gray-600">Employee Info</h3>
            <div><span className="font-semibold">Department:</span> {user.department}</div>
            <div><span className="font-semibold">Performance:</span> {user.performanceRating}</div>
          </>
        )}

        {user.role === "investor" && (
          <>
            <h3 className="text-sm font-semibold text-gray-600">Investor Info</h3>
            <div><span className="font-semibold">Portfolio Value:</span> {user.portfolioValue}</div>
            <div><span className="font-semibold">KYC Verified:</span> {user.kycVerified ? "Yes" : "No"}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProfileSidebarDetails;
