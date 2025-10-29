"use client";

import { useState } from "react";
import { assessmentQuestions } from "./assessmentQuestions"; // adjust path

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(
    Array(assessmentQuestions.length).fill("")
  );
  const [result, setResult] = useState("");
  const [percentages, setPercentages] = useState<Record<string, number>>({});

  const handleAnswer = (type: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = type;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) return;
    if (currentQuestion < assessmentQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
    }
  };

  const calculateResult = () => {
    const counts: Record<string, number> = {
      Read: 0,
      Listen: 0,
      See: 0,
      Do: 0,
    };
    answers.forEach((a) => {
      if (a) counts[a]++;
    });
    const total = answers.filter((a) => a).length;
    const perc: Record<string, number> = {};
    for (const key in counts) {
      perc[key] = Math.round((counts[key] / total) * 100);
    }
    setPercentages(perc);

    let topType = "Read";
    let max = 0;
    for (const key in counts) {
      if (counts[key] > max) {
        max = counts[key];
        topType = key;
      }
    }
    setResult(topType);
  };

  const learningSummaries: Record<string, string> = {
    Read: "Prefers reading and writing to learn. Enjoys books, notes, and lists.",
    Listen:
      "Prefers learning by listening. Enjoys lectures, discussions, and podcasts.",
    See: "Prefers visual learning. Likes diagrams, charts, and videos.",
    Do: "Prefers kinesthetic learning. Learns by doing, practicing, and hands-on activities.",
  };

  const progressPercent = Math.round(
    ((currentQuestion + 1) / assessmentQuestions.length) * 100
  );

  return (
    <div className="bg-white rounded-3xl shadow-md p-8 max-w-3xl mx-auto mt-15">
      {!result ? (
        <div className="flex flex-col gap-6">
          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div
              className="bg-[#FB8B24] h-3 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            {currentQuestion + 1}.{" "}
            {assessmentQuestions[currentQuestion].question}
          </h2>

          <div className="flex flex-col gap-4">
            {assessmentQuestions[currentQuestion].options.map((opt, idx) => (
              <button
                key={idx}
                className={`px-5 py-3 text-left border-2 rounded-xl font-medium transition-all text-gray-900 ${
                  answers[currentQuestion] ===
                  assessmentQuestions[currentQuestion].types[idx]
                    ? "bg-[#FB8B24] border-[#FB8B24] text-black shadow"
                    : "border-gray-300 hover:border-[#FB8B24] hover:bg-gray-50"
                }`}
                onClick={() =>
                  handleAnswer(assessmentQuestions[currentQuestion].types[idx])
                }
              >
                {opt}
              </button>
            ))}
          </div>

          <button
            className={`self-end px-6 py-3 bg-[#FB8B24] text-black font-semibold rounded-xl shadow transition-colors ${
              !answers[currentQuestion]
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-[#e07b1c]"
            }`}
            onClick={handleNext}
          >
            {currentQuestion === assessmentQuestions.length - 1
              ? "Submit"
              : "Next"}
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Your dominant learning style is: {result}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.keys(percentages).map((type) => (
              <div
                key={type}
                className="p-4 border rounded-xl shadow-sm flex flex-col items-center"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {type}
                </span>
                <span className="text-xl font-bold text-[#FB8B24]">
                  {percentages[type]}%
                </span>
                <p className="text-center text-gray-900 mt-2">
                  {learningSummaries[type]}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
