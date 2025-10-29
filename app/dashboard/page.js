"use client";

import { useState } from "react";
import { Home, BookOpen, Brain, MessageSquare, Settings, LogOut, Bell, User } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();
  const [active, setActive] = useState("Dashboard");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    // Perform your logout logic here — e.g., clear auth tokens
    localStorage.removeItem("token");
    router.push("/"); // Redirect back to login page
  };

  const menuItems = [
    { name: "Dashboard", icon: <Home size={20} /> },
    { name: "Courses", icon: <BookOpen size={20} /> },
    { name: "Learning Framework", icon: <Brain size={20} /> },
    { name: "IntelliBot", icon: <MessageSquare size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  const assignments = Array(10).fill({ title: "Assignment 1", date: "10/14/25" });

  return (
    <div className="flex min-h-screen bg-[#f5f5f7] font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#253031] text-white flex flex-col justify-between p-6">
        <div>
          {/* Logo */}
          <div className="flex items-center gap-2 mb-10">
            <div className="relative w-100 h-10">
              <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </div>

          {/* Menu */}
          <nav className="space-y-4">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActive(item.name)}
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                  active === item.name ? "bg-[#FB8B24] text-black" : "hover:bg-[#2f3a3b]"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <button
          onClick={() => setShowLogoutConfirm(true)}
          className="flex items-center gap-13 bg-[#4b5961] hover:bg-[#5b6a72] px-4 py-2 rounded-lg text-sm"
        >
          <LogOut size={18} /> Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-semibold text-black">Welcome, John Doe</h1>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-[#253031] rounded-full shadow hover:bg-gray-100">
              <Bell size={20} />
            </button>
            <button className="p-2 bg-[#253031] rounded-full shadow hover:bg-gray-100">
              <User size={20} />
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Upcoming Due Dates */}
          <div className="bg-white rounded-2xl shadow p-6 md:col-span-1 text-black">
            <h2 className="text-lg font-semibold mb-4">Upcoming Due Dates</h2>
            <ul className="space-y-3 text-sm">
              {assignments.map((a, i) => (
                <li key={i} className="flex justify-between border-b pb-1">
                  <span>{a.title}</span>
                  <span className="text-gray-600">{a.date}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GPA */}
          <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-center text-center md:col-span-1">
            <div>
              <h2 className="text-lg font-semibold mb-2 text-black">GPA</h2>
              <p className="text-4xl font-bold text-[#FB8B24]">4.0</p>
            </div>
          </div>

          {/* Learning Style Breakdown */}
          <div className="bg-white rounded-2xl shadow p-6 md:col-span-1">
            <h2 className="text-lg font-semibold mb-4 text-black">Learning Style Breakdown</h2>
            <div className="flex justify-center items-center">
              <div className="relative w-100 h-75">
                <Image
                  src="/images/chart.png"
                  alt="Learning Style Chart"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <div className="mt-4 text-sm text-gray-700 text-center">
              30% Kinesthetic • 25% Read/Write • 25% Auditory • 20% Visual
            </div>
          </div>

          {/* Logout Confirmation Modal */}
            {showLogoutConfirm && (
                <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-xl p-8 shadow-xl text-center max-w-sm w-full">
                    <h2 className="text-xl font-semibold mb-4 text-[#253031]">
                    Are you sure you want to log out?
                    </h2>
                    <div className="flex justify-around mt-6">
                    <button
                        onClick={() => setShowLogoutConfirm(false)}
                        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-xl hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={handleLogout}
                        className="bg-[#FB8B24] text-white px-4 py-2 rounded-xl hover:bg-[#e27a1e] transition"
                    >
                        Yes, Log Out
                    </button>
                    </div>
                </div>
                </div>
            )}
        </div>
      </main>
    </div>
  );
}
