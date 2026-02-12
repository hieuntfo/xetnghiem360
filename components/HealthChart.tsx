import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceArea } from 'recharts';
import { MetricData } from '../types';

const data: MetricData[] = [
  { month: 'T1', value: 180, normalMax: 200, normalMin: 120 },
  { month: 'T3', value: 195, normalMax: 200, normalMin: 120 },
  { month: 'T6', value: 210, normalMax: 200, normalMin: 120 },
  { month: 'T9', value: 160, normalMax: 200, normalMin: 120 },
  { month: 'T12', value: 145, normalMax: 200, normalMin: 120 },
];

const HealthChart: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col">
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-800">Theo dõi Cholesterol Toàn phần</h3>
        <p className="text-sm text-gray-500">Minh họa tính năng hồ sơ sức khỏe (PHR)</p>
      </div>
      <div className="flex-grow w-full h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
            <YAxis axisLine={false} tickLine={false} tick={{fill: '#9ca3af'}} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
            />
            {/* Visual guide for "Normal Range" */}
            <ReferenceArea y1={120} y2={200} fill="#ecfdf5" fillOpacity={0.5} stroke="none" />
            
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#0ea5e9" 
              strokeWidth={3} 
              dot={{ r: 4, fill: '#0ea5e9', strokeWidth: 2, stroke: '#fff' }} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
        <div className="w-3 h-3 bg-emerald-100 rounded-sm"></div>
        <span>Vùng an toàn (120-200 mg/dL)</span>
      </div>
    </div>
  );
};

export default HealthChart;