"use client";
import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (accepted: boolean) => {
    localStorage.setItem("cookieConsent", accepted ? "accepted" : "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed  h-48  left-0 right-0 bottom-4 mx-auto w-screen bg-slate-900 shadow-lg rounded-lg p-4 flex flex-col items-center z-50">
      <span className="mb-2 text-gray-50 text-sm">
        This website uses cookies.
      </span>
      <div className="flex gap-2">
        <button
          className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          onClick={() => handleConsent(true)}>
          Accept
        </button>
        <button
          className="px-4 py-1 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
          onClick={() => handleConsent(false)}>
          Decline
        </button>
      </div>
    </div>
  );
}
