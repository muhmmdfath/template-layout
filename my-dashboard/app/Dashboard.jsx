'use client'

import React from 'react';
import { Card } from "@/components/ui/card";
import { BarChart, Bar, Line, LineChart, XAxis, YAxis, CartesianGrid } from 'recharts';
import { Calendar } from 'lucide-react';

const data = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 200, value2: 980 },
  { name: 'Apr', value: 278, value2: 390 },
  { name: 'May', value: 189, value2: 480 },
];

export default function Dashboard() {
  return (
    <div className="bg-sky-50 min-h-screen p-4">
      {/* Main Container */}
      <div className="bg-white rounded-3xl p-6 max-w-[1200px] mx-auto">
        {/* Sidebar */}
        <div className="fixed left-0 top-0 h-full w-16 bg-white flex flex-col items-center py-6 gap-6">
          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
          <div className="flex flex-col gap-4">
            <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20">
          <div className="grid grid-cols-12 gap-4">
            {/* Cards content remains the same */}
          </div>
        </div>
      </div>
    </div>
  );
}
