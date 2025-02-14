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
            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-20">
          <div className="grid grid-cols-12 gap-4">
            {/* Main Chart */}
            <Card className="col-span-8 p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Lorem ipsum</h3>
              <LineChart width={600} height={200} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} />
                <CartesianGrid stroke="#eee" />
              </LineChart>
              <div className="flex gap-4 mt-4">
                <div>
                  <div className="text-2xl font-bold">1205</div>
                  <LineChart width={100} height={30} data={data}>
                    <Line type="monotone" dataKey="value" stroke="#fbbf24" strokeWidth={2} dot={false} />
                  </LineChart>
                </div>
                <div>
                  <div className="text-2xl font-bold">840</div>
                  <LineChart width={100} height={30} data={data}>
                    <Line type="monotone" dataKey="value2" stroke="#0ea5e9" strokeWidth={2} dot={false} />
                  </LineChart>
                </div>
              </div>
            </Card>

            {/* Small Charts */}
            <Card className="col-span-4 p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Adipiscing</h3>
              <LineChart width={250} height={100} data={data}>
                <Line type="monotone" dataKey="value" stroke="#8884d8" dot={true} />
              </LineChart>
            </Card>

            {/* Progress Circle */}
            <Card className="col-span-4 p-4 shadow-sm flex flex-col items-center justify-center">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#0ea5e9"
                    strokeWidth="3"
                    strokeDasharray="75, 100"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-bold">75%</span>
                </div>
              </div>
            </Card>

            {/* Calendar */}
            <Card className="col-span-4 p-4 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium">January</h3>
                <Calendar className="text-gray-400" />
              </div>
              <div className="grid grid-cols-7 gap-1 text-sm">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-gray-500">{day}</div>
                ))}
                {Array.from({length: 31}, (_, i) => (
                  <div key={i} className={`text-center p-1 ${i === 13 ? 'bg-sky-500 text-white rounded-full' : ''}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </Card>

            {/* Bar Chart */}
            <Card className="col-span-4 p-4 shadow-sm">
              <h3 className="text-lg font-medium mb-2">Consectetur</h3>
              <BarChart width={250} height={150} data={data}>
                <Bar dataKey="value" fill="#0ea5e9" />
                <Bar dataKey="value2" fill="#fbbf24" />
                <XAxis dataKey="name" />
              </BarChart>
            </Card>

            {/* Progress Steps */}
            <Card className="col-span-8 p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="h-2 bg-sky-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Lorem</span>
                </div>
                <div className="flex-1 mx-4">
                  <div className="h-2 bg-sky-500 rounded-full"></div>
                  <span className="text-sm text-gray-600">Dolor</span>
                </div>
                <div className="flex-1">
                  <div className="h-2 bg-gray-200 rounded-full"></div>
                  <span className="text-sm text-gray-600">Amet</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
