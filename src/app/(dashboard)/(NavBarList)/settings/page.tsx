// components/Settings.tsx
"use client";

import { Bell, Moon, Sun, User } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [theme, setTheme] = useState("light");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    document.documentElement.classList.toggle("dark", theme === "light");
  };

  return (
    <div className="grid grid-cols-3 gap-6 p-4 bg-gray-50 rounded-lg shadow-md">
      <div className="space-y-6">
        {/* Settings Header */}
        <div className="text-lg font-semibold text-gray-900">User Settings</div>

        {/* Theme Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Theme</span>
            <div className="flex items-center gap-2">
              <Sun
                className={`h-6 w-6 cursor-pointer ${
                  theme === "light" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
              <Moon
                className={`h-6 w-6 cursor-pointer ${
                  theme === "dark" ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
            </div>
          </div>
          <span className="text-sm text-gray-500">Current theme: {theme}</span>
        </div>

        {/* Email Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-blue-500" />
            <span className="text-sm text-gray-700">Email Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications((prev) => !prev)}
            className="toggle toggle-primary"
          />
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-green-500" />
            <span className="text-sm text-gray-700">SMS Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications((prev) => !prev)}
            className="toggle toggle-success"
          />
        </div>

        {/* Account Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-gray-700">Account</span>
          </div>
          <button type="button" className="text-sm text-primary">
            Edit
          </button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Settings Header */}
        <div className="text-lg font-semibold text-gray-900">User Settings</div>

        {/* Theme Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Theme</span>
            <div className="flex items-center gap-2">
              <Sun
                className={`h-6 w-6 cursor-pointer ${
                  theme === "light" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
              <Moon
                className={`h-6 w-6 cursor-pointer ${
                  theme === "dark" ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
            </div>
          </div>
          <span className="text-sm text-gray-500">Current theme: {theme}</span>
        </div>

        {/* Email Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-blue-500" />
            <span className="text-sm text-gray-700">Email Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications((prev) => !prev)}
            className="toggle toggle-primary"
          />
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-green-500" />
            <span className="text-sm text-gray-700">SMS Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications((prev) => !prev)}
            className="toggle toggle-success"
          />
        </div>

        {/* Account Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-gray-700">Account</span>
          </div>
          <button type="button" className="text-sm text-primary">
            Edit
          </button>
        </div>
      </div>
      <div className="space-y-6">
        {/* Settings Header */}
        <div className="text-lg font-semibold text-gray-900">User Settings</div>

        {/* Theme Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-700">Theme</span>
            <div className="flex items-center gap-2">
              <Sun
                className={`h-6 w-6 cursor-pointer ${
                  theme === "light" ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
              <Moon
                className={`h-6 w-6 cursor-pointer ${
                  theme === "dark" ? "text-gray-800" : "text-gray-400"
                }`}
                onClick={toggleTheme}
              />
            </div>
          </div>
          <span className="text-sm text-gray-500">Current theme: {theme}</span>
        </div>

        {/* Email Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-blue-500" />
            <span className="text-sm text-gray-700">Email Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications((prev) => !prev)}
            className="toggle toggle-primary"
          />
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <Bell className="h-6 w-6 text-green-500" />
            <span className="text-sm text-gray-700">SMS Notifications</span>
          </div>
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications((prev) => !prev)}
            className="toggle toggle-success"
          />
        </div>

        {/* Account Settings */}
        <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border">
          <div className="flex items-center gap-3">
            <User className="h-6 w-6 text-purple-600" />
            <span className="text-sm text-gray-700">Account</span>
          </div>
          <button type="button" className="text-sm text-primary">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}
