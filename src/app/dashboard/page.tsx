'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  BarChart3, 
  TrendingUp, 
  Droplets, 
  Thermometer,
  Activity,
  Zap,
  Clock,
  AlertCircle,
  Brain,
  Leaf,
  DollarSign,
  Bell,
  AlertTriangle,
  CheckCircle,
  Waves,
  Wind,
  Sun,
  Cloud,
  Gauge,
  Target,
  Award,
  TrendingDown,
  Coins,
  TreePine,
  Users,
  Package,
  Wifi
} from 'lucide-react'
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

// 실시간 데이터 (실제로는 API에서 가져옴)
const initialTankData = [
  { id: 1, temp: 12.5, ph: 8.1, oxygen: 8.2, status: '정상', salinity: 3.2, flow: 95 },
  { id: 2, temp: 13.0, ph: 8.0, oxygen: 8.5, status: '정상', salinity: 3.1, flow: 98 },
  { id: 3, temp: 12.8, ph: 8.2, oxygen: 8.3, status: '최적', salinity: 3.3, flow: 96 },
  { id: 4, temp: 14.2, ph: 7.9, oxygen: 7.8, status: '주의', salinity: 3.0, flow: 88 },
  { id: 5, temp: 12.6, ph: 8.1, oxygen: 8.4, status: '정상', salinity: 3.2, flow: 97 },
  { id: 6, temp: 12.9, ph: 8.0, oxygen: 8.1, status: '정상', salinity: 3.2, flow: 94 },
  { id: 7, temp: 13.1, ph: 8.2, oxygen: 8.3, status: '정상', salinity: 3.1, flow: 96 },
  { id: 8, temp: 12.7, ph: 8.1, oxygen: 8.5, status: '최적', salinity: 3.2, flow: 99 },
  { id: 9, temp: 12.4, ph: 8.0, oxygen: 8.0, status: '정상', salinity: 3.1, flow: 93 },
  { id: 10, temp: 13.3, ph: 8.3, oxygen: 8.6, status: '최적', salinity: 3.2, flow: 100 }
]

const productionData = [
  { month: '1월', production: 450, target: 400, efficiency: 88 },
  { month: '2월', production: 520, target: 480, efficiency: 92 },
  { month: '3월', production: 480, target: 450, efficiency: 90 },
  { month: '4월', production: 590, target: 550, efficiency: 94 },
  { month: '5월', production: 620, target: 600, efficiency: 95 },
  { month: '6월', production: 680, target: 650, efficiency: 97 }
]

const qualityData = [
  { name: 'A등급', value: 65, color: '#10B981' },
  { name: 'B등급', value: 25, color: '#F59E0B' },
  { name: 'C등급', value: 10, color: '#EF4444' }
]

const stats = [
  { icon: Activity, label: '가동률', value: '98.5%', change: '+2.3%', color: 'from-green-500 to-emerald-500' },
  { icon: TrendingUp, label: '일일 생산량', value: '2.4톤', change: '+5.2%', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: '전력 효율', value: '92%', change: '+1.8%', color: 'from-yellow-500 to-orange-500' },
  { icon: Droplets, label: '물 사용량', value: '1,250L', change: '-3.1%', color: 'from-purple-500 to-pink-500' },
  { icon: Coins, label: 'SEAWEED 수익', value: '₩5.8M', change: '+12.5%', color: 'from-gold-500 to-yellow-500' },
  { icon: Leaf, label: 'CO2 감축량', value: '2.1톤', change: '+4.7%', color: 'from-green-600 to-emerald-600' },
  { icon: Package, label: '수확 예정', value: '3일 후', change: '정상', color: 'from-indigo-500 to-purple-500' },
  { icon: Wifi, label: 'IoT 연결', value: '100%', change: '안정', color: 'from-cyan-500 to-blue-500' }
]

// 실시간 온도 트렌드 데이터
const tempTrendData = [
  { time: '00:00', temp: 12.5, optimal: 12.8 },
  { time: '04:00', temp: 12.6, optimal: 12.8 },
  { time: '08:00', temp: 12.8, optimal: 12.8 },
  { time: '12:00', temp: 13.0, optimal: 12.8 },
  { time: '16:00', temp: 12.9, optimal: 12.8 },
  { time: '20:00', temp: 12.7, optimal: 12.8 },
  { time: '24:00', temp: 12.6, optimal: 12.8 }
]

// AI 인사이트 데이터
const aiInsights = [
  { type: 'success', icon: TrendingUp, message: '수조 10번의 김 성장률이 평균보다 28% 높습니다.', time: '5분 전' },
  { type: 'warning', icon: AlertTriangle, message: '수조 4번의 pH 수치가 하락 중입니다. 조정이 필요합니다.', time: '12분 전' },
  { type: 'info', icon: Brain, message: 'AI 예측: 수조 3, 8, 10번은 3일 후 수확 권장됩니다.', time: '30분 전' },
  { type: 'success', icon: Coins, message: 'SEAWEED 토큰 가격이 5% 상승했습니다.', time: '1시간 전' }
]

// 환경 지표 데이터
const environmentData = [
  { subject: 'CO2 감축', A: 85, B: 90, fullMark: 100 },
  { subject: '물 절약', A: 92, B: 78, fullMark: 100 },
  { subject: '에너지 효율', A: 88, B: 72, fullMark: 100 },
  { subject: '폐기물 감소', A: 95, B: 65, fullMark: 100 },
  { subject: '지속가능성', A: 90, B: 80, fullMark: 100 }
]

// 날씨 데이터
const weatherData = {
  temp: 18,
  humidity: 65,
  condition: '맑음',
  icon: Sun
}

export default function DashboardPage() {
  const [tankData, setTankData] = useState(initialTankData)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [selectedTank, setSelectedTank] = useState(1)

  // 실시간 시간 업데이트
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // 실시간 데이터 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setTankData(prevData => 
        prevData.map(tank => ({
          ...tank,
          temp: tank.temp + (Math.random() - 0.5) * 0.1,
          ph: tank.ph + (Math.random() - 0.5) * 0.02,
          oxygen: tank.oxygen + (Math.random() - 0.5) * 0.1,
          flow: Math.min(100, Math.max(85, tank.flow + (Math.random() - 0.5) * 2))
        }))
      )
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  스마트팜 <span className="gradient-text">실시간 대시보드</span>
                </h1>
                <p className="text-xl text-gray-400">AI 기반 실시간 모니터링 및 분석 시스템</p>
              </div>
              <div className="flex items-center gap-4">
                {/* 날씨 위젯 */}
                <div className="glass-dark px-4 py-3 rounded-xl flex items-center gap-3">
                  <Cloud className="w-8 h-8 text-gray-400" />
                  <div className="text-sm">
                    <p className="font-semibold">{weatherData.temp}°C</p>
                    <p className="text-gray-400">습도 {weatherData.humidity}%</p>
                  </div>
                </div>
                {/* 시간 표시 */}
                <div className="glass-dark px-4 py-3 rounded-xl">
                  <p className="text-sm text-gray-400">현재 시간</p>
                  <p className="text-lg font-semibold">{currentTime.toLocaleTimeString()}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 통계 카드 - 그리드 개선 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="glass-dark p-6 rounded-2xl cursor-pointer hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} p-0.5`}
                    >
                      <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </motion.div>
                    <span className={`text-sm font-medium ${
                      stat.change.startsWith('+') ? 'text-green-400' : 
                      stat.change.startsWith('-') ? 'text-red-400' : 
                      'text-blue-400'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>

          {/* AI 인사이트 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Brain className="w-6 h-6 text-primary-400 mr-2" />
              AI 실시간 인사이트
            </h2>
            <div className="grid lg:grid-cols-4 gap-4">
              {aiInsights.map((insight, index) => {
                const Icon = insight.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`glass-dark p-4 rounded-xl border-l-4 ${
                      insight.type === 'success' ? 'border-green-500' :
                      insight.type === 'warning' ? 'border-yellow-500' :
                      'border-blue-500'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        insight.type === 'success' ? 'text-green-400' :
                        insight.type === 'warning' ? 'text-yellow-400' :
                        'text-blue-400'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm leading-relaxed">{insight.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{insight.time}</p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* 차트 섹션 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 생산량 추이 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <BarChart3 className="w-5 h-5 text-primary-400 mr-2" />
                월별 생산량 (톤)
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={productionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Bar dataKey="production" fill="#3B82F6" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* 품질 분포 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Activity className="w-5 h-5 text-primary-400 mr-2" />
                품질 등급 분포
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={qualityData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {qualityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                {qualityData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.name}: {item.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* 추가 차트 섹션 */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* 온도 트렌드 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Thermometer className="w-5 h-5 text-primary-400 mr-2" />
                24시간 온도 추이
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={tempTrendData}>
                    <defs>
                      <linearGradient id="tempGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="optimalGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="time" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" domain={[12, 13.5]} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Area
                      type="monotone"
                      dataKey="optimal"
                      stroke="#10B981"
                      fillOpacity={1}
                      fill="url(#optimalGradient)"
                      strokeDasharray="5 5"
                    />
                    <Area
                      type="monotone"
                      dataKey="temp"
                      stroke="#3B82F6"
                      fillOpacity={1}
                      fill="url(#tempGradient)"
                      strokeWidth={2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                  <span className="text-sm">실제 온도</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2" />
                  <span className="text-sm">최적 온도</span>
                </div>
              </div>
            </motion.div>

            {/* 환경 지표 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Leaf className="w-5 h-5 text-primary-400 mr-2" />
                환경 지속가능성 지표
              </h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={environmentData}>
                    <PolarGrid stroke="#374151" />
                    <PolarAngleAxis dataKey="subject" stroke="#9CA3AF" />
                    <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#9CA3AF" />
                    <Radar name="현재" dataKey="A" stroke="#3B82F6" fill="#3B82F6" fillOpacity={0.6} />
                    <Radar name="업계평균" dataKey="B" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#F3F4F6' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2" />
                  <span className="text-sm">현재 성과</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2" />
                  <span className="text-sm">업계 평균</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* 수조별 상태 - 개선된 버전 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-6 rounded-2xl mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <Waves className="w-5 h-5 text-primary-400 mr-2" />
                수조별 실시간 상태
              </h3>
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center text-sm text-green-400"
              >
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2" />
                실시간 모니터링 중
              </motion.div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {tankData.map((tank, index) => (
                <motion.div
                  key={tank.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  onClick={() => setSelectedTank(tank.id)}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedTank === tank.id
                      ? 'border-primary-400 bg-primary-400/10'
                      : tank.status === '주의'
                      ? 'border-yellow-500 bg-yellow-500/10'
                      : tank.status === '최적'
                      ? 'border-green-500 bg-green-500/10'
                      : 'border-gray-700 bg-gray-800/50'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-lg">수조 {tank.id}</h4>
                    <motion.div
                      animate={{
                        scale: tank.status === '주의' ? [1, 1.2, 1] : 1,
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: tank.status === '주의' ? Infinity : 0,
                      }}
                    >
                      {tank.status === '주의' && <AlertTriangle className="w-5 h-5 text-yellow-500" />}
                      {tank.status === '최적' && <Award className="w-5 h-5 text-green-500" />}
                      {tank.status === '정상' && <CheckCircle className="w-5 h-5 text-blue-500" />}
                    </motion.div>
                  </div>
                  
                  <div className="space-y-3">
                    {/* 온도 */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">온도</span>
                        <span className="font-medium">{tank.temp.toFixed(1)}°C</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, Math.max(0, ((tank.temp - 10) / 5) * 100))}%` }}
                          className={`h-1.5 rounded-full ${
                            tank.temp > 14 || tank.temp < 12 
                              ? 'bg-yellow-500' 
                              : 'bg-green-500'
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* pH */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">pH</span>
                        <span className="font-medium">{tank.ph.toFixed(1)}</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, Math.max(0, ((tank.ph - 7.5) / 1) * 100))}%` }}
                          className={`h-1.5 rounded-full ${
                            tank.ph < 7.8 || tank.ph > 8.3 
                              ? 'bg-yellow-500' 
                              : 'bg-blue-500'
                          }`}
                        />
                      </div>
                    </div>
                    
                    {/* 산소 */}
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs text-gray-400">산소</span>
                        <span className="font-medium">{tank.oxygen.toFixed(1)}mg/L</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-1.5 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${Math.min(100, Math.max(0, ((tank.oxygen - 7) / 3) * 100))}%` }}
                          className={`h-1.5 rounded-full ${
                            tank.oxygen < 7.5 
                              ? 'bg-yellow-500' 
                              : 'bg-cyan-500'
                          }`}
                        />
                      </div>
                    </div>

                    {/* 유속 */}
                    <div className="pt-2 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1">
                          <Gauge className="w-3 h-3 text-gray-400" />
                          <span className="text-xs text-gray-400">유속</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          >
                            <Wind className="w-3 h-3 text-cyan-400" />
                          </motion.div>
                          <span className="text-sm font-medium text-cyan-400">{tank.flow}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 선택된 수조 상세 정보 */}
            {selectedTank && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-dark-300 rounded-xl"
              >
                <h4 className="font-semibold mb-2 text-primary-400">수조 {selectedTank} 상세 정보</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">염도</span>
                    <p className="font-medium">{tankData.find(t => t.id === selectedTank)?.salinity}‰</p>
                  </div>
                  <div>
                    <span className="text-gray-400">김 밀도</span>
                    <p className="font-medium">85%</p>
                  </div>
                  <div>
                    <span className="text-gray-400">성장률</span>
                    <p className="font-medium text-green-400">+15%/일</p>
                  </div>
                  <div>
                    <span className="text-gray-400">예상 수확일</span>
                    <p className="font-medium">3일 후</p>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* 실시간 알림 피드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-6 rounded-2xl mb-8"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold flex items-center">
                <Bell className="w-5 h-5 text-primary-400 mr-2" />
                실시간 알림
              </h3>
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-sm text-gray-400"
              >
                자동 업데이트 중
              </motion.span>
            </div>

            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { type: 'success', message: '수조 10번 김 성장률이 목표치를 초과했습니다.', time: '방금 전', icon: TrendingUp },
                { type: 'info', message: 'AI 예측: 내일 오후 2시경 수조 3, 8, 10번 수확 권장', time: '2분 전', icon: Brain },
                { type: 'warning', message: '수조 4번 pH 수치 조정이 필요합니다.', time: '5분 전', icon: AlertTriangle },
                { type: 'success', message: '전체 시스템 효율성 95% 달성 (10개 수조 평균)', time: '15분 전', icon: Zap },
                { type: 'success', message: '수조 9번 신규 가동 시작, 모든 지표 정상', time: '20분 전', icon: CheckCircle },
                { type: 'info', message: '날씨 예보: 내일 맑음, 양식장 환경 최적', time: '30분 전', icon: Sun },
                { type: 'success', message: 'SEAWEED 토큰 거래량 30% 증가', time: '1시간 전', icon: Coins },
                { type: 'info', message: '정기 점검 완료: 10개 수조 센서 모두 정상 작동', time: '2시간 전', icon: CheckCircle },
                { type: 'warning', message: '수조 7번 유속 감소 감지, 점검 예정', time: '3시간 전', icon: Wind },
                { type: 'success', message: '수조 1-5번 구역 김 밀도 85% 도달', time: '4시간 전', icon: Leaf },
              ].map((alert, index) => {
                const Icon = alert.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start gap-3 p-3 rounded-lg ${
                      alert.type === 'success' ? 'bg-green-500/10 border-l-4 border-green-500' :
                      alert.type === 'warning' ? 'bg-yellow-500/10 border-l-4 border-yellow-500' :
                      'bg-blue-500/10 border-l-4 border-blue-500'
                    }`}
                  >
                    <Icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      alert.type === 'success' ? 'text-green-400' :
                      alert.type === 'warning' ? 'text-yellow-400' :
                      'text-blue-400'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm">{alert.message}</p>
                      <p className="text-xs text-gray-500 mt-1">{alert.time}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

        </div>
      </section>
      <ScrollToTop />
    </>
  )
}