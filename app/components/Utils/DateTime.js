"use client"
import { useState, useEffect } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-2 mx-2 bg-gray-800 text-white rounded-lg text-center flex">
      <p className="px-2 font-bold">{dateTime.toLocaleDateString()}</p>
      <p className="px-2">{dateTime.toLocaleTimeString()}</p>
    </div>
  );
}