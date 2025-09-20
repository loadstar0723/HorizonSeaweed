'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Coins, 
  TrendingUp, 
  Flame, 
  Lock,
  Users,
  Sparkles,
  Trophy,
  Gamepad2,
  ShoppingBag,
  ArrowUpRight,
  ArrowDownRight,
  Wallet,
  Globe,
  Shield,
  Zap,
  DollarSign,
  BarChart3,
  Activity,
  Award,
  CheckCircle,
  Building2,
  Rocket,
  Target,
  FileCheck,
  Calendar,
  Calculator,
  Info
} from 'lucide-react'
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip, 
  Legend,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Area,
  AreaChart,
  BarChart,
  Bar
} from 'recharts'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

const tokenDistribution = [
  { name: '생태계 보상', value: 30, color: '#3B82F6' },
  { name: '팀 & 어드바이저', value: 20, color: '#F59E0B' },
  { name: '마케팅 & 파트너십', value: 15, color: '#10B981' },
  { name: '리저브 펀드', value: 15, color: '#8B5CF6' },
  { name: '유동성 풀', value: 10, color: '#EC4899' },
  { name: '프라이빗 세일', value: 10, color: '#6366F1' },
]

const burnMechanisms = [
  {
    icon: Flame,
    title: '거래 수수료 소각',
    description: '모든 거래의 2%를 자동 소각하여 공급량 감소',
    amount: '2%',
    color: 'from-red-500 to-orange-500'
  },
  {
    icon: ShoppingBag,
    title: '제품 구매 소각',
    description: '김 제품 구매 시 사용된 토큰의 30% 소각',
    amount: '30%',
    color: 'from-blue-500 to-purple-500'
  },
  {
    icon: Trophy,
    title: 'NFT 민팅 소각',
    description: '스마트팜 NFT 발행 시 비용의 50% 소각',
    amount: '50%',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Lock,
    title: '스테이킹 보상 소각',
    description: '스테이킹 보상의 10%를 정기적으로 소각',
    amount: '10%',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Gamepad2,
    title: 'P2E 게임 소각',
    description: '게임 내 아이템 구매 및 업그레이드 시 소각',
    amount: '변동',
    color: 'from-yellow-500 to-red-500'
  }
]

const stakingTiers = [
  {
    tier: 'Bronze',
    required: '10,000',
    apy: '12%',
    benefits: ['기본 보상', '거버넌스 참여'],
    color: '#CD7F32'
  },
  {
    tier: 'Silver',
    required: '50,000',
    apy: '18%',
    benefits: ['Bronze 혜택 포함', '프리미엄 데이터 접근', 'NFT 에어드롭'],
    color: '#C0C0C0'
  },
  {
    tier: 'Gold',
    required: '100,000',
    apy: '25%',
    benefits: ['Silver 혜택 포함', '수익 공유', 'VIP 커뮤니티'],
    color: '#FFD700'
  },
  {
    tier: 'Platinum',
    required: '500,000',
    apy: '35%',
    benefits: ['모든 혜택 포함', '파트너 혜택', '독점 이벤트'],
    color: '#E5E4E2'
  }
]

const priceTargets = [
  { phase: '런칭', price: '$0.01', marketCap: '$100M' },
  { phase: '1단계', price: '$0.10', marketCap: '$1B' },
  { phase: '2단계', price: '$0.50', marketCap: '$5B' },
  { phase: '3단계', price: '$1.00', marketCap: '$10B' },
  { phase: '목표', price: '$5.00', marketCap: '$50B' }
]

// 투자 수익률 예측 데이터
const roiPrediction = [
  { month: '1개월', roi: 150, investment: 1000, value: 1500 },
  { month: '3개월', roi: 300, investment: 1000, value: 3000 },
  { month: '6개월', roi: 600, investment: 1000, value: 6000 },
  { month: '1년', roi: 1500, investment: 1000, value: 15000 },
  { month: '2년', roi: 5000, investment: 1000, value: 50000 },
  { month: '3년', roi: 10000, investment: 1000, value: 100000 }
]

// 가격 추이 차트 데이터
const priceHistory = [
  { date: 'Jan', price: 0.01, volume: 1000000 },
  { date: 'Feb', price: 0.02, volume: 2500000 },
  { date: 'Mar', price: 0.05, volume: 5000000 },
  { date: 'Apr', price: 0.08, volume: 8000000 },
  { date: 'May', price: 0.12, volume: 12000000 },
  { date: 'Jun', price: 0.15, volume: 15000000 }
]

// 파트너십 정보
const partnerships = [
  { name: 'Polygon Network', logo: '🟣', description: '메인넷 파트너십' },
  { name: 'Binance', logo: '💛', description: '거래소 상장 예정' },
  { name: 'CoinGecko', logo: '🦎', description: '시장 데이터 제공' },
  { name: '김수출협회', logo: '🌊', description: '산업 파트너십' },
  { name: '농림수산부', logo: '🏛️', description: '정부 지원 사업' },
  { name: '글로벌 푸드테크', logo: '🌍', description: '기술 협력' }
]

// 로드맵 세부사항
const detailedRoadmap = [
  {
    quarter: '2024 Q1',
    title: '토큰 런칭',
    items: [
      '스마트 컨트랙트 배포',
      '초기 유동성 공급',
      'DEX 상장',
      '커뮤니티 구축'
    ],
    status: 'completed'
  },
  {
    quarter: '2024 Q2',
    title: '생태계 확장',
    items: [
      'CEX 거래소 상장',
      '스테이킹 프로그램 시작',
      'NFT 마켓플레이스 오픈',
      '글로벌 마케팅 캠페인'
    ],
    status: 'in-progress'
  },
  {
    quarter: '2024 Q3',
    title: '실물 경제 연결',
    items: [
      '김 제품 결제 시스템',
      'B2B 거래 플랫폼',
      '수출입 결제 시스템',
      'DeFi 프로토콜 통합'
    ],
    status: 'upcoming'
  },
  {
    quarter: '2024 Q4',
    title: '글로벌 확장',
    items: [
      '해외 거래소 추가 상장',
      '글로벌 파트너십 확대',
      'P2E 게임 런칭',
      '메타버스 진출'
    ],
    status: 'upcoming'
  }
]

// 보안 감사 정보
const securityAudits = [
  { auditor: 'CertiK', score: '98/100', date: '2024.01', status: '통과' },
  { auditor: 'SlowMist', score: '95/100', date: '2024.02', status: '통과' },
  { auditor: 'Hacken', score: '97/100', date: '2024.03', status: '진행중' }
]

export default function BlockchainPage() {
  const [investmentAmount, setInvestmentAmount] = useState(1000)
  const [selectedPeriod, setSelectedPeriod] = useState('1년')
  const [currentPrice, setCurrentPrice] = useState(0.15)
  const [marketCap, setMarketCap] = useState(1500000000)
  const [totalBurned, setTotalBurned] = useState(500000000)
  const [circulatingSupply, setCirculatingSupply] = useState(9500000000)
  
  // 실시간 가격 업데이트 시뮬레이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPrice(prev => {
        const change = (Math.random() - 0.5) * 0.002
        return Math.max(0.01, prev + change)
      })
    }, 3000)
    return () => clearInterval(interval)
  }, [])
  
  // 투자 수익 계산
  const calculateROI = () => {
    const period = roiPrediction.find(p => p.month === selectedPeriod)
    if (period) {
      return (investmentAmount * period.roi) / 100
    }
    return investmentAmount
  }

  return (
    <>
      <Navigation />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-gold-900/20" />
        
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 360, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-gold-500 to-orange-500 rounded-full blur-xl opacity-50"
                />
                <Coins className="w-24 h-24 text-gold-500 relative z-10" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text-gold">SEAWEED</span> 토큰
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Polygon 기반 김양식 생태계 유틸리티 토큰
            </p>
            
            {/* 실시간 가격 정보 */}
            <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-dark p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg text-gray-400">현재 가격</h3>
                  <Activity className="w-5 h-5 text-green-400 animate-pulse" />
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold gradient-text-gold">
                    ${currentPrice.toFixed(4)}
                  </span>
                  <motion.span
                    key={currentPrice}
                    initial={{ y: -10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className={`text-sm font-bold ${currentPrice > 0.15 ? 'text-green-400' : 'text-red-400'}`}
                  >
                    {currentPrice > 0.15 ? '+' : ''}{((currentPrice - 0.15) / 0.15 * 100).toFixed(2)}%
                  </motion.span>
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  24시간 거래량: ${(currentPrice * 50000000).toLocaleString()}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="glass-dark p-6 rounded-2xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg text-gray-400">시가총액</h3>
                  <TrendingUp className="w-5 h-5 text-primary-400" />
                </div>
                <div className="text-4xl font-bold gradient-text">
                  ${(currentPrice * circulatingSupply).toLocaleString()}
                </div>
                <div className="mt-2 text-sm text-gray-500">
                  시총 순위: #142 | 완전희석시총: ${(currentPrice * 10000000000).toLocaleString()}
                </div>
              </motion.div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-gold-500/20 to-orange-500/20 border border-gold-500/30 rounded-full px-6 py-3"
              >
                <span className="text-gray-400">총 발행량</span>
                <span className="text-2xl font-bold text-gold-500 ml-2">100억 개</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3"
              >
                <span className="text-gray-400">네트워크</span>
                <span className="text-2xl font-bold text-purple-500 ml-2">Polygon</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-full px-6 py-3"
              >
                <span className="text-gray-400">총 소각량</span>
                <span className="text-2xl font-bold text-red-500 ml-2">{(totalBurned / 1000000000).toFixed(1)}억 개</span>
              </motion.div>
            </div>
            
            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://app.uniswap.org"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 rounded-full font-bold text-white shadow-lg hover:shadow-gold-500/25 transition-all duration-300 flex items-center justify-center"
              >
                <Wallet className="w-5 h-5 mr-2" />
                토큰 구매하기
              </motion.a>
              <motion.button
                onClick={() => {
                  const chartSection = document.getElementById('price-chart-section')
                  if (chartSection) {
                    chartSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-bold text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center"
              >
                <BarChart3 className="w-5 h-5 mr-2" />
                차트 보기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 토큰 분배 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              토큰 <span className="gradient-text">분배</span>
            </h2>
            <p className="text-xl text-gray-400">
              투명하고 균형잡힌 토큰 이코노미
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="h-96"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={tokenDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={(entry) => `${entry.name}: ${entry.value}%`}
                    outerRadius={120}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {tokenDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              {tokenDistribution.map((item, index) => (
                <div key={index} className="glass-dark p-4 rounded-lg flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-3`} style={{ backgroundColor: item.color }} />
                    <span className="font-semibold">{item.name}</span>
                  </div>
                  <span className="text-2xl font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 투자 수익률 계산기 섹션 */}
      <section className="py-20 bg-gradient-to-br from-gold-900/10 to-purple-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              투자 수익률 <span className="gradient-text-gold">계산기</span>
            </h2>
            <p className="text-xl text-gray-400">
              예상 수익률을 확인하고 투자 계획을 세워보세요
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* 계산기 입력 부분 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold mb-6 flex items-center">
                  <Calculator className="w-6 h-6 mr-3 text-gold-500" />
                  투자 금액 설정
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-gray-400 mb-2">투자 금액 (USD)</label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                      <input
                        type="number"
                        value={investmentAmount}
                        onChange={(e) => setInvestmentAmount(Number(e.target.value))}
                        className="w-full bg-dark-300 border border-gray-700 rounded-xl pl-12 pr-4 py-4 text-xl focus:border-gold-500 focus:outline-none transition-colors"
                        min="100"
                        step="100"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-400 mb-2">투자 기간</label>
                    <div className="grid grid-cols-3 gap-3">
                      {roiPrediction.map((period) => (
                        <button
                          key={period.month}
                          onClick={() => setSelectedPeriod(period.month)}
                          className={`py-3 rounded-xl font-medium transition-all ${
                            selectedPeriod === period.month
                              ? 'bg-gradient-to-r from-gold-500 to-orange-500 text-white'
                              : 'bg-dark-300 text-gray-400 hover:bg-dark-200'
                          }`}
                        >
                          {period.month}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-400">예상 수익률</span>
                      <span className="text-2xl font-bold gradient-text-gold">
                        {roiPrediction.find(p => p.month === selectedPeriod)?.roi}%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">예상 수익</span>
                      <span className="text-3xl font-bold gradient-text">
                        ${calculateROI().toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              {/* 수익률 차트 */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-3xl"
              >
                <h3 className="text-2xl font-bold mb-6">수익률 성장 차트</h3>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={roiPrediction}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#F59E0B" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#F59E0B" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="month" stroke="#888" />
                      <YAxis stroke="#888" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                          border: '1px solid #333',
                          borderRadius: '8px'
                        }}
                      />
                      <Area 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#F59E0B" 
                        fillOpacity={1} 
                        fill="url(#colorValue)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="mt-6 p-4 bg-gold-500/10 rounded-xl border border-gold-500/30">
                  <div className="flex items-center">
                    <Info className="w-5 h-5 text-gold-500 mr-2 flex-shrink-0" />
                    <p className="text-sm text-gray-400">
                      * 예상 수익률은 과거 성과 및 시장 예측을 바탕으로 한 추정치이며, 실제 수익률과 다를 수 있습니다.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 가격 추이 차트 섹션 */}
      <section id="price-chart-section" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              가격 <span className="gradient-text">추이</span>
            </h2>
            <p className="text-xl text-gray-400">
              실시간 가격 변동 및 거래량 추이
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-3xl"
            >
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold">가격 & 거래량</h3>
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-primary-500/20 rounded-lg text-primary-400">1D</button>
                  <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">1W</button>
                  <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">1M</button>
                  <button className="px-4 py-2 hover:bg-white/10 rounded-lg transition-colors">1Y</button>
                </div>
              </div>
              
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={priceHistory}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                    <XAxis dataKey="date" stroke="#888" />
                    <YAxis yAxisId="left" stroke="#888" />
                    <YAxis yAxisId="right" orientation="right" stroke="#888" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid #333',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      yAxisId="left"
                      type="monotone" 
                      dataKey="price" 
                      stroke="#F59E0B" 
                      strokeWidth={3}
                      dot={{ fill: '#F59E0B' }}
                    />
                    <Bar yAxisId="right" dataKey="volume" fill="#3B82F6" opacity={0.3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 소각 메커니즘 섹션 */}
      <section className="py-20 bg-dark-300/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text-gold">소각</span> 메커니즘
            </h2>
            <p className="text-xl text-gray-400">
              지속적인 가치 상승을 위한 다양한 소각 정책
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {burnMechanisms.map((mechanism, index) => {
              const Icon = mechanism.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-6 rounded-2xl hover-glow"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${mechanism.color} p-0.5 mb-4`}>
                    <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{mechanism.title}</h3>
                  <p className="text-gray-400 mb-4">{mechanism.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">소각률</span>
                    <span className={`text-2xl font-bold bg-gradient-to-r ${mechanism.color} bg-clip-text text-transparent`}>
                      {mechanism.amount}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center glass-dark px-8 py-4 rounded-full">
              <Flame className="w-6 h-6 text-orange-500 mr-3" />
              <span className="text-lg">예상 연간 소각률:</span>
              <span className="text-2xl font-bold text-orange-500 ml-2">15-20%</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 스테이킹 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">스테이킹</span> 프로그램
            </h2>
            <p className="text-xl text-gray-400">
              보유량에 따른 차등 보상 시스템
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stakingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-2xl text-center hover-scale"
                style={{
                  borderTop: `4px solid ${tier.color}`
                }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: tier.color }}>
                  {tier.tier}
                </h3>
                <div className="text-3xl font-bold mb-4 gradient-text-gold">
                  {tier.apy} APY
                </div>
                <div className="mb-4">
                  <span className="text-sm text-gray-500">최소 스테이킹</span>
                  <div className="text-xl font-semibold">{tier.required} SEAWEED</div>
                </div>
                <div className="space-y-2 text-sm text-gray-400">
                  {tier.benefits.map((benefit, i) => (
                    <div key={i} className="flex items-center">
                      <Sparkles className="w-3 h-3 mr-1 text-gold-500" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 가격 목표 섹션 */}
      <section className="py-20 bg-gradient-to-br from-gold-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              가격 <span className="gradient-text-gold">로드맵</span>
            </h2>
            <p className="text-xl text-gray-400">
              단계별 성장 목표
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-5 gap-4">
              {priceTargets.map((target, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="glass-dark p-6 rounded-2xl hover-glow">
                    <h4 className="font-semibold text-gray-400 mb-2">{target.phase}</h4>
                    <div className="text-3xl font-bold gradient-text-gold mb-2">
                      {target.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      시총 {target.marketCap}
                    </div>
                    {index < priceTargets.length - 1 && (
                      <ArrowUpRight className="w-6 h-6 text-green-500 mx-auto mt-2" />
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 유틸리티 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              SEAWEED 토큰 <span className="gradient-text">유틸리티</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="glass-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  거버넌스
                </h3>
                <p className="text-gray-400">
                  스마트팜 운영 정책 및 토큰 이코노미에 대한 투표권
                </p>
              </div>
              <div className="glass-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Wallet className="w-5 h-5 text-green-500 mr-2" />
                  결제 수단
                </h3>
                <p className="text-gray-400">
                  김 제품 구매 및 스마트팜 서비스 이용료 지불
                </p>
              </div>
              <div className="glass-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Trophy className="w-5 h-5 text-gold-500 mr-2" />
                  보상 시스템
                </h3>
                <p className="text-gray-400">
                  스마트팜 운영 기여자 및 생태계 참여자 보상
                </p>
              </div>
              <div className="glass-dark p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <Globe className="w-5 h-5 text-blue-500 mr-2" />
                  글로벌 거래
                </h3>
                <p className="text-gray-400">
                  국경 없는 김 제품 거래 및 수출입 결제
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 파트너십 섹션 */}
      <section className="py-20 bg-dark-300/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              전략적 <span className="gradient-text-gold">파트너십</span>
            </h2>
            <p className="text-xl text-gray-400">
              글로벌 기업 및 기관과 함께 성장하는 SEAWEED
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {partnerships.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-2xl hover-glow text-center"
              >
                <div className="text-6xl mb-4">{partner.logo}</div>
                <h3 className="text-xl font-bold mb-2">{partner.name}</h3>
                <p className="text-gray-400">{partner.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 로드맵 상세 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              개발 <span className="gradient-text">로드맵</span>
            </h2>
            <p className="text-xl text-gray-400">
              SEAWEED 생태계의 미래 계획
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {detailedRoadmap.map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-3xl"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                        phase.status === 'in-progress' ? 'bg-gold-500/20 text-gold-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {phase.status === 'completed' ? (
                          <CheckCircle className="w-10 h-10" />
                        ) : phase.status === 'in-progress' ? (
                          <Activity className="w-10 h-10 animate-pulse" />
                        ) : (
                          <Calendar className="w-10 h-10" />
                        )}
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold">{phase.title}</h3>
                        <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          phase.status === 'completed' ? 'bg-green-500/20 text-green-400' :
                          phase.status === 'in-progress' ? 'bg-gold-500/20 text-gold-400' :
                          'bg-gray-500/20 text-gray-400'
                        }`}>
                          {phase.quarter}
                        </span>
                      </div>
                      
                      <ul className="space-y-2">
                        {phase.items.map((item, i) => (
                          <li key={i} className="flex items-center text-gray-300">
                            <CheckCircle className={`w-5 h-5 mr-3 flex-shrink-0 ${
                              phase.status === 'completed' ? 'text-green-400' :
                              phase.status === 'in-progress' ? 'text-gold-400' :
                              'text-gray-600'
                            }`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 보안 감사 섹션 */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              보안 <span className="gradient-text">감사</span>
            </h2>
            <p className="text-xl text-gray-400">
              세계적인 보안 기업의 검증을 통과한 안전한 스마트 컨트랙트
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {securityAudits.map((audit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-8 rounded-2xl text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-500/20 to-cyan-500/20 flex items-center justify-center">
                  <Shield className="w-10 h-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{audit.auditor}</h3>
                <div className="text-4xl font-bold gradient-text mb-2">{audit.score}</div>
                <p className="text-gray-400 text-sm mb-4">{audit.date}</p>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  audit.status === '통과' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-gold-500/20 text-gold-400'
                }`}>
                  {audit.status}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-bold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover-scale">
              <FileCheck className="w-5 h-5 inline mr-2" />
              감사 보고서 확인
            </button>
          </motion.div>
        </div>
      </section>

      {/* 투자자 혜택 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              토큰 홀더 <span className="gradient-text-gold">혜택</span>
            </h2>
            <p className="text-xl text-gray-400">
              SEAWEED 토큰을 보유하면 누릴 수 있는 특별한 혜택
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl text-center hover-scale"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-gold-500/20 to-orange-500/20 flex items-center justify-center">
                <Trophy className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">수익 공유</h3>
              <p className="text-gray-400">스마트팜 운영 수익의 일부를 토큰 홀더에게 분배</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl text-center hover-scale"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">거버넌스 참여</h3>
              <p className="text-gray-400">프로젝트 주요 결정사항에 대한 투표권 행사</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl text-center hover-scale"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                <Award className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">NFT 에어드롭</h3>
              <p className="text-gray-400">독점 스마트팜 NFT 및 특별 아이템 에어드롭</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-2xl text-center hover-scale"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">조기 참여 보너스</h3>
              <p className="text-gray-400">초기 투자자를 위한 추가 보상 및 인센티브</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 최종 CTA 섹션 */}
      <section className="py-20 bg-gradient-to-r from-gold-900/20 to-orange-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Coins className="w-20 h-20 text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold">
              지금 <span className="gradient-text-gold">SEAWEED</span>와 함께하세요
            </h2>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}