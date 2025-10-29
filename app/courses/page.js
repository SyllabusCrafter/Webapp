"use client";

import Image from "next/image";

export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "Mathematics",
      code: "MHF4U",
      instructor: "Mr. Anderson",
      progress: 78,
      image: "/images/math.png",
    },
    {
      id: 2,
      title: "Biology",
      code: "SBI4U",
      instructor: "Dr. Evans",
      progress: 85,
      image: "/images/biology.png",
    },
    {
      id: 3,
      title: "Chemistry",
      code: "SCH4U",
      instructor: "Mrs. Nguyen",
      progress: 88,
      image: "/images/chemistry.png",
    },
    {
      id: 4,
      title: "English",
      code: "ENG4U",
      instructor: "Ms. Taylor",
      progress: 95,
      image: "/images/ela.png",
    }
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f7] p-10 font-sans text-black">
      {/* Header */}
      <h1 className="text-4xl font-semibold mb-8">Your Courses</h1>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow hover:shadow-lg transition p-6 flex flex-col"
          >
            {/* Course Image */}
            <div className="relative w-full h-40 mb-4 rounded-xl overflow-hidden">
              <Image
                src={course.image}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Course Info */}
            <h2 className="text-lg font-semibold mb-1">{course.title}</h2>
            <p className="text-sm text-gray-600 mb-2">{course.code}</p>
            <p className="text-sm text-gray-700 mb-4">
              Instructor: {course.instructor}
            </p>

            {/* Progress Bar */}
            <div className="mt-auto">
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#FB8B24] h-2 rounded-full"
                  style={{ width: `${course.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
