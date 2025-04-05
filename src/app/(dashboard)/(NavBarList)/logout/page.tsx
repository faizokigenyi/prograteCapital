"use client";

import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Clear localStorage or cookies if you have a session
    localStorage.removeItem("userSession"); // Example for localStorage session storage
    sessionStorage.removeItem("userSession");

    // Redirect to login page after logout
    router.push("/sign-in");
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Logout</h1>
        <p className="mb-6">Are you sure you want to log out?</p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleLogout}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Yes, Log out
          </button>
          <button
            type="button"
            onClick={() => router.push("/admin")}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
