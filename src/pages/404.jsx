import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6">Oops! The page you're looking for doesn’t exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
      >
        Go Home
      </Link>
    </div>
  );
}
