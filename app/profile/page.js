"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Edit3, Save, User, Mail, Award, Brain } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();

  const [editing, setEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "john.doe@email.com",
    gpa: "4.0",
    learningStyle: "Kinesthetic",
  });

  const handleChange = (field, value) => {
    setUserData({ ...userData, [field]: value });
  };

  const toggleEdit = () => setEditing(!editing);

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-10 font-sans text-black">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 bg-[#253031] text-white px-4 py-2 rounded-lg hover:bg-[#2f3a3b]"
        >
          <ArrowLeft size={18} /> Back
        </button>

        <h1 className="text-3xl font-semibold text-[#253031]">
          Profile Settings
        </h1>

        <button
          onClick={toggleEdit}
          className="flex items-center gap-2 bg-[#FB8B24] text-black px-4 py-2 rounded-lg hover:bg-[#ff9e3d]"
        >
          {editing ? <Save size={18} /> : <Edit3 size={18} />}
          {editing ? "Save Changes" : "Edit Profile"}
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-3xl shadow-xl p-8 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Picture */}
          <div className="relative w-40 h-40">
            <Image
              src="/images/Tom.png"
              alt="Profile Picture"
              fill
              className="object-cover rounded-full border-4 border-[#FB8B24]"
            />
          </div>

          {/* Info Section */}
          <div className="flex-1 w-full space-y-6">
            {/* Name */}
            <div className="flex items-center gap-3">
              <User size={22} className="text-[#253031]" />
              {editing ? (
                <input
                  type="text"
                  value={userData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                />
              ) : (
                <p className="text-lg font-semibold">{userData.name}</p>
              )}
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail size={22} className="text-[#253031]" />
              {editing ? (
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
                />
              ) : (
                <p className="text-gray-700">{userData.email}</p>
              )}
            </div>

            {/* GPA (Read-only) */}
            <div className="flex items-center gap-3">
              <Award size={22} className="text-[#253031]" />
              <p className="text-gray-700">
                <strong>GPA:</strong> {userData.gpa}
              </p>
            </div>

            {/* Learning Style (Read-only) */}
            <div className="flex items-center gap-3">
              <Brain size={22} className="text-[#253031]" />
              <p className="text-gray-700">
                <strong>Learning Style:</strong> {userData.learningStyle}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-300" />

        {/* Learning Summary */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-[#253031]">
            Learning Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f9fafb] rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-[#FB8B24] mb-2">Courses Taken:</p>
              <p className="text-gray-700">
                Mathematics | Biology | Chemistry | English-Language-Arts
              </p>
            </div>
            <div className="bg-[#f9fafb] rounded-xl p-6 shadow-sm">
              <p className="font-semibold text-[#FB8B24] mb-2">
                Recent Feedback:
              </p>
              <p className="text-gray-700">
                Excellent work on adapting to multiple assessment types!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
