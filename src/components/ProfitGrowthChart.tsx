'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function ProfitGrowthChart() {
  const data = [
    { year: '1', value: 15 },
    { year: '2', value: 35 },
    { year: '3', value: 65 },
    { year: '5', value: 180 },
    { year: '7', value: 350 },
    { year: '10', value: 750 },
  ]

  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 40, bottom: 30 }}>
        <defs>
          <linearGradient id="profitGrowth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#10b981" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="year" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
          formatter={(value: any) => [`${value}억원`, '누적수익']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#10b981"
          fill="url(#profitGrowth)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}