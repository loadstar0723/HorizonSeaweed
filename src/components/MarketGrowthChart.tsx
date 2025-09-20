'use client'

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function MarketGrowthChart() {
  const data = [
    { year: '2020', value: 1.2 },
    { year: '2021', value: 1.35 },
    { year: '2022', value: 1.5 },
    { year: '2023', value: 1.7 },
    { year: '2024', value: 1.95 },
    { year: '2025', value: 2.3 },
  ]

  return (
    <ResponsiveContainer width="100%" height={180}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 30 }}>
        <defs>
          <linearGradient id="marketGrowth" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.2}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
        <XAxis dataKey="year" stroke="#888" />
        <YAxis stroke="#888" />
        <Tooltip 
          contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #333' }}
          formatter={(value: any) => [`${value}조원`, '시장규모']}
        />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#3b82f6"
          fill="url(#marketGrowth)"
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}