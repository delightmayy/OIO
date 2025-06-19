import React from "react";

export default function InfoCard({ value, label, color }) {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-2 rounded-xl bg-white shadow-md w-28 sm:w-32 md:w-36">
      <p className={`text-xl font-bold ${color}`}>{value}</p>
      <span className="text-sm text-gray-700 text-center">{label}</span>
    </div>
  );
}
