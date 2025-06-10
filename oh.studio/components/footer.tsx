"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Oh Studio. All rights reserved.
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>
        </li>
        <li>
          <a href="/terms" className="hover:underline">
            Terms of Service
          </a>
        </li>
      </ul>
    </footer>
  );
}