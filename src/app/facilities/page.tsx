'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { 
  Layers, 
  Activity, 
  Droplets, 
  Wind,
  Sun,
  Wifi,
  Camera,
  Shield,
  Gauge,
  CircuitBoard,
  Cpu,
  Settings,
  ChevronRight,
  Check,
  ArrowRight,
  Waves,
  Factory,
  Database,
  Building2,
  FileImage,
  ZoomIn,
  TrendingUp,
  Calculator,
  PiggyBank,
  BarChart3,
  Users,
  Zap,
  Package,
  DollarSign,
  Calendar,
  X,
  Trophy,
  Lock,
  Star,
  Crown,
  Rocket,
  Globe,
  Clock
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import { useRouter } from 'next/navigation'

// Dynamic import for Chart components
const MarketGrowthChart = dynamic(() => import('@/components/MarketGrowthChart'), { 
  ssr: false,
  loading: () => <div className="h-48 flex items-center justify-center text-gray-400">차트 로딩중...</div>
})

const ProfitGrowthChart = dynamic(() => import('@/components/ProfitGrowthChart'), { 
  ssr: false,
  loading: () => <div className="h-48 flex items-center justify-center text-gray-400">차트 로딩중...</div>
})

export default function FacilitiesPage() {
  const [activeTab, setActiveTab] = useState('investment')
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const router = useRouter()

  const tabs = [
    { id: 'investment', label: '시설비용', icon: TrendingUp },
    { id: 'blueprints', label: '특허 도면', icon: FileImage },
    { id: 'overview', label: '시설 개요', icon: Building2 },
    { id: 'cultivation', label: '양식 시스템', icon: Layers },
    { id: 'iot', label: 'IoT 제어 시스템', icon: CircuitBoard },
  ]

  const cultivationFeatures = [
    {
      title: '다층 수조 시스템',
      description: '특허 받은 다층 구조로 공간 효율성을 극대화하고 생산성을 3배 향상시킵니다',
      details: [
        '수직 적층형 5층 구조',
        '층별 독립 환경 제어',
        '자동 순환 시스템',
        '최적 광 전달 설계'
      ],
      icon: Layers,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: '환경 제어 시스템',
      description: '각 층별로 최적화된 환경을 자동으로 유지하여 김의 품질을 향상시킵니다',
      details: [
        '온도: 10-20°C 정밀 제어',
        'pH: 7.8-8.3 자동 조절',
        '용존산소: 8-10mg/L 유지',
        '광도: 2000-3000 lux 조절'
      ],
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: '자동 급수/배수 시스템',
      description: '특허 받은 자동화 시스템으로 수질을 최적 상태로 유지합니다',
      details: [
        '실시간 수질 모니터링',
        '자동 여과 시스템',
        '영양분 자동 공급',
        '폐수 재활용 시스템'
      ],
      icon: Droplets,
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  const iotFeatures = [
    {
      title: 'AI 기반 통합 제어',
      description: '머신러닝을 활용한 예측 제어로 최적의 생육 환경을 자동으로 조성합니다',
      components: ['TensorFlow AI 모델', 'Edge Computing', '실시간 데이터 분석', '예측 제어 알고리즘'],
      icon: Cpu
    },
    {
      title: '센서 네트워크',
      description: '수조 전체를 모니터링하는 고정밀 센서로 실시간 데이터를 수집합니다',
      components: ['수온/pH 센서', '용존산소 센서', '탁도/염도 센서', '광량 센서'],
      icon: Activity
    },
    {
      title: '무선 통신 시스템',
      description: 'LoRa와 5G를 활용한 안정적인 데이터 전송과 원격 제어가 가능합니다',
      components: ['LoRa WAN', '5G 통신', 'MQTT 프로토콜', '보안 암호화'],
      icon: Wifi
    },
    {
      title: '영상 모니터링',
      description: 'AI 영상 분석으로 김의 성장 상태를 실시간으로 파악합니다',
      components: ['4K 수중 카메라', '적외선 야간 촬영', 'AI 이미지 분석', '이상 감지 알림'],
      icon: Camera
    }
  ]

  const specifications = [
    { label: '총 재배 면적', value: '3,000㎡', icon: Factory },
    { label: '수조 개수', value: '10개 (5층×2동)', icon: Layers },
    { label: '일일 생산량', value: '500kg/일', icon: Gauge },
    { label: '연간 생산량', value: '180톤/년', icon: Database },
  ]

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">최첨단 김 양식 시설</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              특허받은 다층 재배 시스템과 IoT 기술을 결합한 국내 최고 수준의 스마트팜 시설입니다
            </p>
          </motion.div>

          {/* 탭 네비게이션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex gap-2 p-2 glass-dark rounded-2xl">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white shadow-lg shadow-primary-500/25'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  {tab.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* 컨텐츠 영역 */}
          <AnimatePresence mode="wait">
            {/* 시설 개요 탭 */}
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                {/* 주요 사양 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                  {specifications.map((spec, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-dark p-6 rounded-2xl text-center group hover:shadow-lg hover:shadow-primary-500/20 transition-all duration-300"
                    >
                      <spec.icon className="w-8 h-8 mx-auto mb-3 text-primary-400 group-hover:scale-110 transition-transform" />
                      <div className="text-2xl font-bold gradient-text mb-1">{spec.value}</div>
                      <div className="text-sm text-gray-400">{spec.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* 시설 특징 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary-400" />
                    특허 기술 적용 시설
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary-400">다층 재배 수조 시스템 (특허 제10-2023-141800호)</h3>
                      <ul className="space-y-2">
                        {[
                          '수직 공간 활용으로 단위면적당 생산량 3배 증대',
                          '층별 독립 환경 제어로 최적 생육 조건 유지',
                          '자동 순환 시스템으로 에너지 효율 극대화',
                          'LED 조명 시스템으로 균일한 광 환경 제공'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-lg font-semibold text-primary-400">IoT 통합 제어 시스템 (특허 제10-2023-141801호)</h3>
                      <ul className="space-y-2">
                        {[
                          'AI 기반 예측 제어로 최적 환경 자동 유지',
                          '실시간 원격 모니터링 및 제어 가능',
                          '이상 상황 자동 감지 및 즉시 알림',
                          '빅데이터 분석을 통한 생산성 지속 개선'
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300">
                            <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* 시설 안내 도면 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="glass-dark p-8 rounded-3xl"
                >
                  <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Factory className="w-6 h-6 text-primary-400" />
                    시설 구성도
                  </h2>
                  
                  {/* 전체 시설 레이아웃 */}
                  <div className="bg-dark-300 rounded-2xl p-8 mb-6">
                    <h3 className="text-lg font-semibold mb-4 text-center">김 양식장 전체 구성도</h3>
                    <div className="grid grid-cols-2 gap-8">
                      {/* A동 */}
                      <div className="border-2 border-primary-500/30 rounded-2xl p-6 bg-primary-500/5">
                        <h4 className="text-center font-semibold mb-4 text-primary-400">A동 (5층 수조)</h4>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map(floor => (
                            <div key={floor} className="bg-dark-400 rounded-lg p-3 flex items-center justify-between">
                              <span className="text-sm">{floor}층</span>
                              <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map(tank => (
                                  <div key={tank} className="w-8 h-8 bg-blue-500/20 border border-blue-500/50 rounded flex items-center justify-center text-xs">
                                    {tank}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* B동 */}
                      <div className="border-2 border-cyan-500/30 rounded-2xl p-6 bg-cyan-500/5">
                        <h4 className="text-center font-semibold mb-4 text-cyan-400">B동 (5층 수조)</h4>
                        <div className="space-y-2">
                          {[5, 4, 3, 2, 1].map(floor => (
                            <div key={floor} className="bg-dark-400 rounded-lg p-3 flex items-center justify-between">
                              <span className="text-sm">{floor}층</span>
                              <div className="flex gap-1">
                                {[6, 7, 8, 9, 10].map(tank => (
                                  <div key={tank} className="w-8 h-8 bg-cyan-500/20 border border-cyan-500/50 rounded flex items-center justify-center text-xs">
                                    {tank}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    {/* 부속 시설 */}
                    <div className="mt-6 grid grid-cols-3 gap-4">
                      <div className="bg-dark-400 rounded-lg p-4 text-center border border-gray-600">
                        <Settings className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">기계실</p>
                      </div>
                      <div className="bg-dark-400 rounded-lg p-4 text-center border border-gray-600">
                        <CircuitBoard className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">제어실</p>
                      </div>
                      <div className="bg-dark-400 rounded-lg p-4 text-center border border-gray-600">
                        <Database className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm">저장실</p>
                      </div>
                    </div>
                  </div>

                  {/* 수조 단면도 */}
                  <div className="bg-dark-300 rounded-2xl p-8">
                    <h3 className="text-lg font-semibold mb-4 text-center">다층 수조 단면도</h3>
                    <div className="relative">
                      {/* 수조 구조 */}
                      <div className="border-2 border-gray-600 rounded-lg">
                        {[5, 4, 3, 2, 1].map((floor, idx) => (
                          <div key={floor} className={`relative h-20 border-b-2 border-gray-600 ${idx === 4 ? 'border-b-0' : ''}`}>
                            {/* 층 표시 */}
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-semibold">{floor}층</div>
                            
                            {/* 수조 내부 */}
                            <div className="absolute left-24 right-24 top-2 bottom-2 bg-blue-900/20 rounded flex items-center justify-center">
                              <Waves className="w-8 h-8 text-blue-400/50" />
                            </div>
                            
                            {/* LED 조명 */}
                            <div className="absolute right-4 top-2 flex flex-col gap-1">
                              <Sun className="w-4 h-4 text-yellow-400" />
                              <span className="text-xs">LED</span>
                            </div>
                            
                            {/* 센서 */}
                            <div className="absolute right-16 bottom-2">
                              <Activity className="w-4 h-4 text-green-400" />
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* 배관 시스템 표시 */}
                      <div className="absolute -left-12 top-0 bottom-0 w-8">
                        <div className="h-full border-2 border-blue-500 rounded-full bg-blue-500/10 relative">
                          <div className="absolute top-2 left-1/2 -translate-x-1/2">
                            <ArrowRight className="w-4 h-4 text-blue-500 rotate-90" />
                          </div>
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                            <ArrowRight className="w-4 h-4 text-blue-500 -rotate-90" />
                          </div>
                        </div>
                        <p className="text-xs mt-2 text-center">급수</p>
                      </div>
                      
                      <div className="absolute -right-12 top-0 bottom-0 w-8">
                        <div className="h-full border-2 border-red-500 rounded-full bg-red-500/10 relative">
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                            <ArrowRight className="w-4 h-4 text-red-500 rotate-90" />
                          </div>
                        </div>
                        <p className="text-xs mt-2 text-center">배수</p>
                      </div>
                    </div>
                    
                    {/* 범례 */}
                    <div className="flex justify-center gap-6 mt-6">
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 bg-blue-500/20 border border-blue-500"></div>
                        <span className="text-sm">해수</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sun className="w-4 h-4 text-yellow-400" />
                        <span className="text-sm">LED 조명</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Activity className="w-4 h-4 text-green-400" />
                        <span className="text-sm">센서</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* 양식 시스템 탭 */}
            {activeTab === 'cultivation' && (
              <motion.div
                key="cultivation"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {cultivationFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      onHoverStart={() => setHoveredFeature(idx)}
                      onHoverEnd={() => setHoveredFeature(null)}
                      className="glass-dark p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-300"
                    >
                      {/* 배경 그라디언트 */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                      />

                      {/* 아이콘 */}
                      <motion.div
                        animate={{
                          scale: hoveredFeature === idx ? 1.1 : 1,
                          rotate: hoveredFeature === idx ? 360 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} p-4 mb-6 relative`}
                      >
                        <feature.icon className="w-full h-full text-white" />
                      </motion.div>

                      <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                      <p className="text-gray-400 mb-6">{feature.description}</p>
                      
                      <ul className="space-y-3">
                        {feature.details.map((detail, detailIdx) => (
                          <motion.li
                            key={detailIdx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 + detailIdx * 0.05 }}
                            className="flex items-center gap-3 text-gray-300"
                          >
                            <ChevronRight className="w-5 h-5 text-primary-400 flex-shrink-0" />
                            <span>{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* 다층 수조 구조 설명 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-dark p-8 rounded-3xl mt-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Layers className="w-6 h-6 text-primary-400" />
                    5층 수직 재배 시스템 구조
                  </h3>
                  <div className="grid md:grid-cols-5 gap-4">
                    {[5, 4, 3, 2, 1].map((layer) => (
                      <motion.div
                        key={layer}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + (5 - layer) * 0.1 }}
                        className="bg-dark-300 rounded-2xl p-6 text-center border border-primary-500/20 hover:border-primary-500/50 transition-colors"
                      >
                        <div className="text-3xl font-bold gradient-text mb-2">{layer}층</div>
                        <div className="text-sm text-gray-400 mb-3">수심 1.2m</div>
                        <div className="space-y-1">
                          <div className="text-xs text-gray-500">온도: 15°C</div>
                          <div className="text-xs text-gray-500">pH: 8.1</div>
                          <div className="text-xs text-gray-500">DO: 9mg/L</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-gray-400">
                      각 층은 독립적인 환경 제어 시스템을 갖추고 있으며, 최적의 생육 조건을 자동으로 유지합니다
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* IoT 제어 시스템 탭 */}
            {activeTab === 'iot' && (
              <motion.div
                key="iot"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  {iotFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-dark p-8 rounded-3xl hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 p-3 flex-shrink-0">
                          <feature.icon className="w-full h-full text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-gray-400">{feature.description}</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {feature.components.map((component, compIdx) => (
                          <div
                            key={compIdx}
                            className="bg-dark-300 rounded-xl px-4 py-3 text-sm text-gray-300 flex items-center gap-2"
                          >
                            <ArrowRight className="w-4 h-4 text-primary-400 flex-shrink-0" />
                            {component}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* 시스템 아키텍처 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-dark p-8 rounded-3xl mt-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <CircuitBoard className="w-6 h-6 text-primary-400" />
                    통합 제어 시스템 아키텍처
                  </h3>
                  <div className="bg-dark-300 rounded-2xl p-8">
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* 센서 레이어 */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 p-5">
                          <Activity className="w-full h-full text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">센서 레이어</h4>
                        <p className="text-sm text-gray-400">
                          50개 이상의 고정밀 센서가 실시간으로 데이터를 수집합니다
                        </p>
                      </div>

                      {/* 제어 레이어 */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary-500 to-cyan-500 p-5">
                          <Cpu className="w-full h-full text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">제어 레이어</h4>
                        <p className="text-sm text-gray-400">
                          AI 엔진이 데이터를 분석하고 최적의 제어 명령을 생성합니다
                        </p>
                      </div>

                      {/* 액추에이터 레이어 */}
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-5">
                          <Settings className="w-full h-full text-white" />
                        </div>
                        <h4 className="font-semibold mb-2">액추에이터 레이어</h4>
                        <p className="text-sm text-gray-400">
                          자동 밸브, 펌프, 조명 등이 환경을 정밀하게 제어합니다
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* IoT 시스템 구성도 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-dark p-8 rounded-3xl mt-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Wifi className="w-6 h-6 text-primary-400" />
                    IoT 네트워크 구성도
                  </h3>
                  
                  <div className="bg-dark-300 rounded-2xl p-8">
                    {/* 중앙 제어 서버 */}
                    <div className="flex justify-center mb-8">
                      <div className="relative">
                        <div className="w-32 h-32 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
                          <Database className="w-16 h-16 text-white" />
                        </div>
                        <div className="absolute -bottom-6 left-0 right-0 text-center">
                          <p className="font-semibold">중앙 제어 서버</p>
                          <p className="text-xs text-gray-400">AI 분석 & 제어</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 연결선 */}
                    <div className="relative h-32 mb-8">
                      <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-primary-500 to-transparent"></div>
                      <div className="absolute left-1/4 top-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent"></div>
                    </div>
                    
                    {/* 하위 시스템들 */}
                    <div className="grid grid-cols-4 gap-4 mb-8">
                      {[
                        { name: '수온 센서', icon: Sun, count: '10개', color: 'from-orange-500 to-red-500' },
                        { name: 'pH 센서', icon: Droplets, count: '10개', color: 'from-blue-500 to-cyan-500' },
                        { name: '산소 센서', icon: Wind, count: '10개', color: 'from-green-500 to-emerald-500' },
                        { name: '카메라', icon: Camera, count: '20개', color: 'from-purple-500 to-pink-500' }
                      ].map((item, idx) => (
                        <div key={idx} className="text-center">
                          <div className={`w-16 h-16 mx-auto mb-2 rounded-xl bg-gradient-to-br ${item.color} p-3 relative`}>
                            <item.icon className="w-full h-full text-white" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-dark-400 rounded-full flex items-center justify-center text-xs border border-gray-600">
                              {item.count.replace('개', '')}
                            </div>
                          </div>
                          <p className="text-sm font-medium">{item.name}</p>
                          <p className="text-xs text-gray-400">{item.count}</p>
                        </div>
                      ))}
                    </div>
                    
                    {/* 통신 프로토콜 */}
                    <div className="border-t border-gray-700 pt-6">
                      <h4 className="text-center font-semibold mb-4">통신 프로토콜</h4>
                      <div className="flex justify-center gap-8">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">LoRa WAN</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">5G Network</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-sm">MQTT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 제어 플로우 다이어그램 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="glass-dark p-8 rounded-3xl mt-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Activity className="w-6 h-6 text-primary-400" />
                    실시간 제어 플로우
                  </h3>
                  
                  <div className="bg-dark-300 rounded-2xl p-8">
                    <div className="space-y-4">
                      {/* 데이터 수집 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-green-400">1</span>
                        </div>
                        <div className="flex-1 bg-dark-400 rounded-lg p-4 border border-green-500/30">
                          <h4 className="font-semibold mb-1">센서 데이터 수집</h4>
                          <p className="text-sm text-gray-400">수온, pH, 용존산소, 조도 등 실시간 측정</p>
                        </div>
                      </div>
                      
                      <div className="ml-6 border-l-2 border-gray-600 h-4"></div>
                      
                      {/* AI 분석 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-blue-400">2</span>
                        </div>
                        <div className="flex-1 bg-dark-400 rounded-lg p-4 border border-blue-500/30">
                          <h4 className="font-semibold mb-1">AI 분석 처리</h4>
                          <p className="text-sm text-gray-400">머신러닝 모델로 최적 환경 조건 예측</p>
                        </div>
                      </div>
                      
                      <div className="ml-6 border-l-2 border-gray-600 h-4"></div>
                      
                      {/* 제어 명령 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-purple-400">3</span>
                        </div>
                        <div className="flex-1 bg-dark-400 rounded-lg p-4 border border-purple-500/30">
                          <h4 className="font-semibold mb-1">제어 명령 전송</h4>
                          <p className="text-sm text-gray-400">펌프, 밸브, 조명 등 자동 제어</p>
                        </div>
                      </div>
                      
                      <div className="ml-6 border-l-2 border-gray-600 h-4"></div>
                      
                      {/* 피드백 */}
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-cyan-400">4</span>
                        </div>
                        <div className="flex-1 bg-dark-400 rounded-lg p-4 border border-cyan-500/30">
                          <h4 className="font-semibold mb-1">결과 모니터링</h4>
                          <p className="text-sm text-gray-400">환경 변화 추적 및 효과 검증</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 사이클 표시 */}
                    <div className="mt-6 text-center">
                      <p className="text-sm text-gray-400">
                        이 과정은 <span className="text-primary-400 font-semibold">24시간 365일</span> 실시간으로 반복됩니다
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* 투자 정보 탭 */}
            {activeTab === 'investment' && (
              <motion.div
                key="investment"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                {/* 투자 하이라이트 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    <span className="gradient-text">스마트 김양식장 350평 1동 시설 비용</span>
                  </h3>
                  <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
                    국내 최고 수준의 특허 기술로 구현된 육상 김양식 사업의 
                    <span className="text-primary-400 font-semibold"> 안정적이고 높은 수익성</span>을 경험하세요
                  </p>
                </motion.div>

                {/* 핵심 투자 지표 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
                >
                  {[
                    { label: '연간 매출액', value: '4.32억', subtitle: '1동 350평 기준', icon: Calculator, color: 'from-blue-500 to-cyan-500' },
                    { label: '월평균 매출', value: '3,600만원', subtitle: '1동 350평 기준', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
                    { label: '10일 생산량', value: '4,000kg', subtitle: '1동 350평 기준', icon: PiggyBank, color: 'from-purple-500 to-pink-500' },
                    { label: '투자 비용', value: '15억', subtitle: '1동 350평 기준', icon: BarChart3, color: 'from-orange-500 to-red-500' }
                  ].map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="glass-dark p-6 rounded-2xl hover:shadow-xl hover:shadow-primary-500/20 transition-all duration-300"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} p-3 mb-4`}>
                        <stat.icon className="w-full h-full text-white" />
                      </div>
                      <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                      {stat.subtitle && (
                        <div className="text-xs text-gray-500 mt-1">{stat.subtitle}</div>
                      )}
                    </motion.div>
                  ))}
                </motion.div>

                {/* 시설 규격 및 투자 비용 */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-dark p-8 rounded-3xl"
                  >
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Factory className="w-6 h-6 text-primary-400" />
                      시설 규격
                    </h4>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-400">건평 규모</span>
                        <span className="font-semibold text-lg">350평 (1,157㎡)</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-400">재배망 규격</span>
                        <span className="font-semibold text-lg">2m × 40m</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-400">총 재배망 수</span>
                        <span className="font-semibold text-lg">40망</span>
                      </div>
                      <div className="flex justify-between items-center py-3 border-b border-gray-700">
                        <span className="text-gray-400">수조 배치</span>
                        <span className="font-semibold text-lg">5층 × 8열 (40개)</span>
                      </div>
                      <div className="flex justify-between items-center py-3">
                        <span className="text-gray-400">총 재배 면적</span>
                        <span className="font-semibold text-xl gradient-text">3,200㎡</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="glass-dark p-8 rounded-3xl"
                  >
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <DollarSign className="w-6 h-6 text-primary-400" />
                      투자 비용
                    </h4>
                    <div className="mb-6">
                      <div className="text-center p-6 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-2xl border border-primary-500/30">
                        <p className="text-sm text-gray-400 mb-2">1동 시설 공사비</p>
                        <p className="text-4xl font-bold gradient-text">15억원</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-4 bg-dark-300 rounded-xl">
                        <p className="text-sm text-gray-400 mb-1">건축비</p>
                        <p className="font-semibold">7.5억원</p>
                      </div>
                      <div className="p-4 bg-dark-300 rounded-xl">
                        <p className="text-sm text-gray-400 mb-1">수조 및 배관 시스템</p>
                        <p className="font-semibold">4.5억원</p>
                      </div>
                      <div className="p-4 bg-dark-300 rounded-xl">
                        <p className="text-sm text-gray-400 mb-1">IoT 자동화 시스템</p>
                        <p className="font-semibold">3억원</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 운영 비용 및 수익 구조 */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-dark p-8 rounded-3xl"
                  >
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Zap className="w-6 h-6 text-primary-400" />
                      월간 운영 비용
                    </h4>
                    <div className="space-y-4">
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Zap className="w-5 h-5 text-yellow-400" />
                            <span>전기료</span>
                          </div>
                          <span className="font-semibold">180~200만원</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-yellow-400 rounded-full" style={{ width: '25%' }}></div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-400" />
                            <span>인건비 (2명)</span>
                          </div>
                          <span className="font-semibold">600만원</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-blue-400 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                            <Package className="w-5 h-5 text-green-400" />
                            <span>기타 운영비</span>
                          </div>
                          <span className="font-semibold">100만원</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                          <div className="h-full bg-green-400 rounded-full" style={{ width: '12%' }}></div>
                        </div>
                      </div>
                      
                      <div className="mt-6 pt-6 border-t border-gray-700">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold">총 운영비</span>
                          <span className="text-2xl font-bold text-red-400">880~900만원</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="glass-dark p-8 rounded-3xl"
                  >
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Package className="w-6 h-6 text-primary-400" />
                      생산 및 수익 구조
                    </h4>
                    <div className="space-y-6">
                      <div className="text-center p-6 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-2xl border border-green-500/30">
                        <p className="text-sm text-gray-400 mb-2">월간 총 생산량</p>
                        <p className="text-4xl font-bold text-green-400">12,000kg</p>
                        <p className="text-sm text-gray-500 mt-2">10일마다 4,000kg 수확 (월 3회)</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-dark-300 rounded-xl text-center">
                          <p className="text-sm text-gray-400 mb-2">10일 수확량</p>
                          <p className="text-xl font-semibold">4,000kg</p>
                          <p className="text-xs text-gray-500">40망 × 100kg</p>
                        </div>
                        <div className="p-4 bg-dark-300 rounded-xl text-center">
                          <p className="text-sm text-gray-400 mb-2">월 매출액</p>
                          <p className="text-xl font-semibold text-green-400">3,600만원</p>
                          <p className="text-xs text-gray-500">1,200만원 × 3회</p>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-primary-500/10 border border-primary-500/30 rounded-xl">
                        <div className="flex justify-between items-center">
                          <span className="text-lg">월간 순수익</span>
                          <span className="text-2xl font-bold gradient-text">2,700만원</span>
                        </div>
                        <p className="text-xs text-gray-400 mt-2">※ 매출 3,600만원 - 운영비 900만원</p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* 수익성 개선 전략 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <TrendingUp className="w-6 h-6 text-primary-400" />
                    수익성 개선 전략
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-dark-300 rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 p-3 mb-4">
                        <BarChart3 className="w-full h-full text-white" />
                      </div>
                      <h5 className="text-lg font-semibold mb-3">생산성 향상</h5>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>AI 최적화로 생산량 30% 증대</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>수확 주기 단축 (10일→7일)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>품질 향상으로 단가 상승</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-dark-300 rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 p-3 mb-4">
                        <DollarSign className="w-full h-full text-white" />
                      </div>
                      <h5 className="text-lg font-semibold mb-3">비용 절감</h5>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>태양광 발전으로 전기료 50% 절감</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>자동화로 인건비 최소화</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>규모의 경제 실현</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-dark-300 rounded-2xl p-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 p-3 mb-4">
                        <Package className="w-full h-full text-white" />
                      </div>
                      <h5 className="text-lg font-semibold mb-3">부가가치 창출</h5>
                      <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>프리미엄 제품 라인 개발</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>가공 제품 사업 확장</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>직거래 판매망 구축</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* 독보적 경쟁력 - 365일 연속 생산 시스템 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="glass-dark p-8 rounded-3xl mb-8 bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30"
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Calendar className="w-6 h-6 text-primary-400" />
                    독보적 경쟁력 - 365일 연속 생산 시스템
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    {/* 생산 주기 비교 차트 */}
                    <div className="bg-dark-300 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold mb-4">일반 농작물 vs 스마트 김양식</h5>
                      <div className="space-y-4">
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">벼농사</span>
                            <span className="text-sm text-gray-400">연 1회 수확 (6개월)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div className="h-full bg-red-400 rounded-full" style={{ width: '8.3%' }}></div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">시설채소</span>
                            <span className="text-sm text-gray-400">연 3-4회 (3개월)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div className="h-full bg-orange-400 rounded-full" style={{ width: '25%' }}></div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm">버섯재배</span>
                            <span className="text-sm text-gray-400">연 6회 (2개월)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <div className="h-full bg-yellow-400 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                        </div>
                        <div className="relative">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-bold text-primary-400">스마트 김양식</span>
                            <span className="text-sm text-primary-400 font-bold">연 36회 (10일)</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full" 
                              style={{ width: '100%' }}
                              animate={{ opacity: [0.7, 1, 0.7] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            ></motion.div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-primary-500/20 rounded-xl border border-primary-500/30">
                        <p className="text-sm text-center">
                          <span className="font-bold text-primary-400">36배</span> 더 많은 수확 기회
                        </p>
                      </div>
                    </div>
                    
                    {/* 운영비 비교 */}
                    <div className="bg-dark-300 rounded-2xl p-6">
                      <h5 className="text-lg font-semibold mb-4">초기 투자 후 추가 비용</h5>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 bg-dark-200 rounded-xl">
                          <span className="text-sm">종자/씨앗 구입비</span>
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold">불필요</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-dark-200 rounded-xl">
                          <span className="text-sm">비료/농약비</span>
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold">불필요</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-dark-200 rounded-xl">
                          <span className="text-sm">토지 임대료</span>
                          <div className="flex items-center gap-2">
                            <X className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold">불필요</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-dark-200 rounded-xl">
                          <span className="text-sm">날씨 리스크</span>
                          <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-green-400 font-semibold">완전 차단</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 text-center p-4 bg-green-500/20 rounded-xl border border-green-500/30">
                        <p className="text-2xl font-bold text-green-400">연간 절감액</p>
                        <p className="text-3xl font-bold gradient-text">2.4억원</p>
                        <p className="text-sm text-gray-400 mt-1">일반 농업 대비</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* 핵심 포인트 */}
                  <div className="grid md:grid-cols-3 gap-4">
                    <motion.div 
                      className="text-center p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Clock className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                      <p className="font-semibold">파종-수확 대기시간</p>
                      <p className="text-2xl font-bold text-blue-400">0일</p>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
                      <p className="font-semibold">연중 생산 일수</p>
                      <p className="text-2xl font-bold text-green-400">365일</p>
                    </motion.div>
                    <motion.div 
                      className="text-center p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30"
                      whileHover={{ scale: 1.05 }}
                    >
                      <DollarSign className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                      <p className="font-semibold">매출 발생 주기</p>
                      <p className="text-2xl font-bold text-purple-400">10일</p>
                    </motion.div>
                  </div>
                </motion.div>

                {/* 시장 독점력 시각화 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-primary-400" />
                    시장 독점적 지위
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* 기술 독점성 */}
                    <div>
                      <h5 className="text-lg font-semibold mb-4">보유 특허 및 진입장벽</h5>
                      <div className="space-y-4">
                        <div className="p-4 bg-gradient-to-r from-primary-500/20 to-cyan-500/20 rounded-xl border border-primary-500/30">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-semibold">핵심 특허 보유</span>
                            <span className="text-2xl font-bold gradient-text">7건</span>
                          </div>
                          <p className="text-sm text-gray-400">다층 수조 시스템, IoT 제어, 순환여과 기술</p>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <Shield className="w-5 h-5 text-green-400" />
                            <span className="text-sm">기술 개발 기간: <strong>15년</strong></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Lock className="w-5 h-5 text-blue-400" />
                            <span className="text-sm">예상 진입 장벽: <strong>10년 이상</strong></span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-yellow-400" />
                            <span className="text-sm">국내 유일 상용화: <strong>독점적 지위</strong></span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 시장 성장성 */}
                    <div>
                      <h5 className="text-lg font-semibold mb-4">안정적 시장 성장</h5>
                      <div className="h-48 relative mb-4">
                        <MarketGrowthChart />
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">국내 김 시장 규모</span>
                          <span className="font-bold">2.3조원 (2025년)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">연평균 성장률</span>
                          <span className="font-bold text-green-400">+12.8%</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">글로벌 수출 증가율</span>
                          <span className="font-bold text-blue-400">+18.5%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 경쟁우위 매트릭스 */}
                  <div className="mt-8 p-6 bg-dark-300 rounded-2xl">
                    <h5 className="text-lg font-semibold mb-4 text-center">경쟁력 비교 매트릭스</h5>
                    <div className="grid grid-cols-5 gap-2 text-sm">
                      <div></div>
                      <div className="text-center font-semibold">스마트 김양식</div>
                      <div className="text-center text-gray-400">해상 양식</div>
                      <div className="text-center text-gray-400">수입산</div>
                      <div className="text-center text-gray-400">대체품</div>
                      
                      <div className="text-right pr-2">품질 안정성</div>
                      <div className="text-center text-green-400 font-bold">100%</div>
                      <div className="text-center text-gray-500">60%</div>
                      <div className="text-center text-gray-500">40%</div>
                      <div className="text-center text-gray-500">30%</div>
                      
                      <div className="text-right pr-2">생산 효율</div>
                      <div className="text-center text-green-400 font-bold">95%</div>
                      <div className="text-center text-gray-500">45%</div>
                      <div className="text-center text-gray-500">70%</div>
                      <div className="text-center text-gray-500">50%</div>
                      
                      <div className="text-right pr-2">가격 경쟁력</div>
                      <div className="text-center text-green-400 font-bold">90%</div>
                      <div className="text-center text-gray-500">80%</div>
                      <div className="text-center text-gray-500">85%</div>
                      <div className="text-center text-gray-500">75%</div>
                      
                      <div className="text-right pr-2">ESG 점수</div>
                      <div className="text-center text-green-400 font-bold">98%</div>
                      <div className="text-center text-gray-500">35%</div>
                      <div className="text-center text-gray-500">20%</div>
                      <div className="text-center text-gray-500">40%</div>
                    </div>
                  </div>
                </motion.div>

                {/* 투자 수익률 비교 분석 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-primary-400" />
                    투자 수익률 비교 분석
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* ROI 비교 차트 */}
                    <div>
                      <h5 className="text-lg font-semibold mb-4">투자 회수 기간 비교</h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-4">
                          <div className="w-24 text-sm">부동산</div>
                          <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div className="h-full bg-gray-500 rounded-full" style={{ width: '100%' }}></div>
                          </div>
                          <div className="text-sm w-20 text-right">15-20년</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-24 text-sm">주식/펀드</div>
                          <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                          <div className="text-sm w-20 text-right">7-10년</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-24 text-sm">일반농업</div>
                          <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                            <div className="h-full bg-orange-500 rounded-full" style={{ width: '50%' }}></div>
                          </div>
                          <div className="text-sm w-20 text-right">5-7년</div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-24 text-sm font-bold text-primary-400">김양식</div>
                          <div className="flex-1 bg-gray-700 rounded-full h-4 overflow-hidden">
                            <motion.div 
                              className="h-full bg-gradient-to-r from-primary-400 to-cyan-400 rounded-full" 
                              style={{ width: '30%' }}
                              animate={{ width: ['30%', '35%', '30%'] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            ></motion.div>
                          </div>
                          <div className="text-sm w-20 text-right font-bold text-primary-400">2.8-3.5년</div>
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-primary-500/20 rounded-xl border border-primary-500/30">
                        <p className="text-center">
                          <span className="text-2xl font-bold gradient-text">5배</span>
                          <span className="text-sm text-gray-400 ml-2">더 빠른 투자 회수</span>
                        </p>
                      </div>
                    </div>
                    
                    {/* 복리 효과 시뮬레이션 */}
                    <div>
                      <h5 className="text-lg font-semibold mb-4">10년 수익 예측 (재투자 시)</h5>
                      <div className="h-48 relative mb-4">
                        <ProfitGrowthChart />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-3 bg-dark-300 rounded-xl text-center">
                          <p className="text-sm text-gray-400">초기 투자</p>
                          <p className="text-xl font-bold">15억</p>
                        </div>
                        <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl text-center border border-green-500/30">
                          <p className="text-sm text-gray-400">10년 후</p>
                          <p className="text-xl font-bold text-green-400">750억+</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 리스크-수익 매트릭스 */}
                  <div className="mt-8">
                    <h5 className="text-lg font-semibold mb-4 text-center">리스크-수익 포지셔닝</h5>
                    <div className="relative h-64 bg-dark-300 rounded-2xl p-4">
                      {/* 좌표축 */}
                      <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-600"></div>
                      <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-600"></div>
                      
                      {/* 라벨 */}
                      <div className="absolute left-2 top-2 text-xs text-gray-400">Low Risk</div>
                      <div className="absolute right-2 top-2 text-xs text-gray-400">High Risk</div>
                      <div className="absolute left-2 bottom-2 text-xs text-gray-400">Low Return</div>
                      <div className="absolute right-2 bottom-2 text-xs text-gray-400">High Return</div>
                      
                      {/* 투자 상품 포지션 */}
                      <div className="absolute left-[20%] top-[70%] w-16 h-8 bg-gray-500/30 rounded-full flex items-center justify-center text-xs">예금</div>
                      <div className="absolute left-[30%] top-[50%] w-16 h-8 bg-blue-500/30 rounded-full flex items-center justify-center text-xs">채권</div>
                      <div className="absolute left-[70%] top-[40%] w-16 h-8 bg-orange-500/30 rounded-full flex items-center justify-center text-xs">주식</div>
                      <div className="absolute left-[80%] top-[20%] w-16 h-8 bg-red-500/30 rounded-full flex items-center justify-center text-xs">파생</div>
                      <motion.div 
                        className="absolute left-[25%] top-[15%] w-20 h-10 bg-gradient-to-br from-primary-400 to-cyan-400 rounded-full flex items-center justify-center text-xs font-bold shadow-lg shadow-primary-500/50"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        김양식
                      </motion.div>
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-4">
                      낮은 리스크 + 높은 수익률 = <span className="text-primary-400 font-bold">최적의 투자처</span>
                    </p>
                  </div>
                </motion.div>

                {/* 프리미엄 포지셔닝 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.0 }}
                  className="glass-dark p-8 rounded-3xl mb-8 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30"
                >
                  <h4 className="text-2xl font-bold mb-6 text-center">
                    단순한 투자가 아닌, 미래 식품산업의 독점권
                  </h4>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <motion.div 
                      className="text-center p-6 bg-dark-300 rounded-2xl"
                      whileHover={{ y: -5 }}
                    >
                      <Crown className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold mb-2">독점적 파트너십</h5>
                      <p className="text-sm text-gray-400">
                        국내 유일 기술 보유<br/>
                        파트너가 곧 시장 지배자
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="text-center p-6 bg-dark-300 rounded-2xl"
                      whileHover={{ y: -5 }}
                    >
                      <Rocket className="w-12 h-12 text-primary-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold mb-2">기하급수적 성장</h5>
                      <p className="text-sm text-gray-400">
                        1,000동 목표 달성 시<br/>
                        연 매출 4조원 규모
                      </p>
                    </motion.div>
                    
                    <motion.div 
                      className="text-center p-6 bg-dark-300 rounded-2xl"
                      whileHover={{ y: -5 }}
                    >
                      <Globe className="w-12 h-12 text-green-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold mb-2">글로벌 진출 기회</h5>
                      <p className="text-sm text-gray-400">
                        해외 수출 독점권<br/>
                        글로벌 김 시장 선점
                      </p>
                    </motion.div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-r from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl border border-primary-500/30">
                    <p className="text-center text-lg">
                      지금 투자하는 것은 <span className="font-bold gradient-text">대한민국 김 산업의 미래</span>를 함께 만드는 것입니다.
                    </p>
                    <p className="text-center text-sm text-gray-400 mt-2">
                      우리는 투자자가 아닌, 미래를 함께할 파트너를 찾고 있습니다.
                    </p>
                  </div>
                </motion.div>

                {/* 시장 기회 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <BarChart3 className="w-6 h-6 text-primary-400" />
                    시장 기회 및 성장 전망
                  </h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-lg font-semibold mb-4">국내 김 시장 현황</h5>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">시장 규모: 2.3조원 (2025년)</p>
                            <p className="text-sm text-gray-400">연평균 성장률 12.8%</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">수입 의존도 감소 추세</p>
                            <p className="text-sm text-gray-400">국내산 프리미엄 김 수요 급증</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <ArrowRight className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-medium">환경 문제로 해상 양식 제한</p>
                            <p className="text-sm text-gray-400">육상 양식 전환 가속화</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-lg font-semibold mb-4">사업 확장 계획</h5>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                            1단계
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">시범 사업 (10동)</p>
                            <p className="text-sm text-gray-400">2024년 완공, 연매출 432억</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white font-bold">
                            2단계
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">본격 확장 (100동)</p>
                            <p className="text-sm text-gray-400">2025~2026년, 연매출 4,320억</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
                            3단계
                          </div>
                          <div className="flex-1">
                            <p className="font-medium">전국 확산 (1,000동)</p>
                            <p className="text-sm text-gray-400">2027~2030년, 연매출 4.32조</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 투자 문의 CTA */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 }}
                  className="text-center"
                >
                  <div className="glass-dark p-8 rounded-3xl bg-gradient-to-br from-primary-500/10 to-cyan-500/10 border border-primary-500/30">
                    <h3 className="text-2xl font-bold mb-4">미래를 함께 만들어갈 파트너를 기다립니다</h3>
                    <p className="text-gray-400 mb-6">
                      상세한 사업 계획과 독점적 파트너십 기회를 확인하세요
                    </p>
                    <div className="flex justify-center gap-4">
                      <button className="btn-primary">
                        파트너십 상담 신청
                        <ArrowRight className="w-5 h-5" />
                      </button>
                      <button className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                        사업계획서 다운로드
                        <FileImage className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {/* 특허 도면 탭 */}
            {activeTab === 'blueprints' && (
              <motion.div
                key="blueprints"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-6xl mx-auto"
              >
                {/* 특허 도면 소개 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <FileImage className="w-6 h-6 text-primary-400" />
                    특허 기술 도면
                  </h3>
                  <p className="text-gray-400 mb-6">
                    스마트씨코리아의 특허받은 김 양식 시스템의 핵심 기술 도면입니다. 
                    각 도면은 실제 특허 출원서에 포함된 공식 기술 자료입니다.
                  </p>
                </motion.div>

                {/* 도면 1: 다층 수조 시스템 단면도 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Layers className="w-5 h-5 text-primary-400" />
                    도면 1: 다층 수조 시스템 단면도
                  </h4>
                  
                  <div className="bg-dark-300 rounded-2xl p-6 mb-6">
                    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src="/images/facilities/blueprint1.png"
                        alt="반원형 다층 수조 구조 특허 도면"
                        width={800}
                        height={800}
                        className="object-contain w-full h-full hover:scale-110 transition-transform duration-500 cursor-pointer"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3">
                        <p className="text-gray-300 text-center mb-2">특허 도면 제1도: 반원형 다층 수조 구조</p>
                        <div className="flex justify-center items-center gap-2 text-primary-400 hover:text-primary-300 cursor-pointer">
                          <ZoomIn className="w-5 h-5" />
                          <span className="text-sm">도면 확대 보기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h5 className="font-semibold text-lg mb-3">주요 구성 요소</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-3">
                        <span className="text-primary-400 font-bold">10:</span>
                        <span className="text-gray-300">반원형 다층 수조 본체 - 공간 효율성을 극대화한 혁신적 설계</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-400 font-bold">30-40:</span>
                        <span className="text-gray-300">수직 지지 프레임 - 각 층의 하중을 안정적으로 지탱</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-400 font-bold">100:</span>
                        <span className="text-gray-300">순환 배관 시스템 - 층간 해수 순환을 위한 파이프라인</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-400 font-bold">110:</span>
                        <span className="text-gray-300">각 층별 수조 - 독립적인 환경 제어가 가능한 재배 공간</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-primary-400 font-bold">120-130:</span>
                        <span className="text-gray-300">하부 기계실 - 펌프 및 제어 장비 설치 공간</span>
                      </li>
                    </ul>
                  </div>
                </motion.div>

                {/* 도면 2: 수조 내부 순환 시스템 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Droplets className="w-5 h-5 text-primary-400" />
                    도면 2: 수조 내부 순환 시스템
                  </h4>
                  
                  <div className="bg-dark-300 rounded-2xl p-6 mb-6">
                    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src="/images/facilities/blueprint2.png"
                        alt="물 순환 및 여과 시스템 특허 도면"
                        width={800}
                        height={800}
                        className="object-contain w-full h-full hover:scale-110 transition-transform duration-500 cursor-pointer"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3">
                        <p className="text-gray-300 text-center mb-2">특허 도면 제2도: 물 순환 및 여과 시스템</p>
                        <div className="flex justify-center items-center gap-2 text-primary-400 hover:text-primary-300 cursor-pointer">
                          <ZoomIn className="w-5 h-5" />
                          <span className="text-sm">도면 확대 보기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-lg mb-3">순환 시스템 구성</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">50-60:</span>
                          <span className="text-gray-300">수조 본체 및 재배 공간</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">70:</span>
                          <span className="text-gray-300">하부 급수 배관</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">80-90:</span>
                          <span className="text-gray-300">김 재배용 지지 프레임</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">100:</span>
                          <span className="text-gray-300">상부 순환 배관</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-lg mb-3">여과 시스템 구성</h5>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">140:</span>
                          <span className="text-gray-300">물리적 여과 장치</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">150:</span>
                          <span className="text-gray-300">생물학적 여과 시스템</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">160:</span>
                          <span className="text-gray-300">UV 살균 장치</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="text-primary-400 font-bold">170:</span>
                          <span className="text-gray-300">순환 펌프 시스템</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <p className="text-sm text-blue-300">
                      <strong>특징:</strong> 물결 모양의 내부 구조는 해수의 자연스러운 흐름을 유도하여 김의 성장 환경을 최적화합니다.
                    </p>
                  </div>
                </motion.div>

                {/* 도면 3: 다층 재배대 입체 구조 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass-dark p-8 rounded-3xl mb-8"
                >
                  <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary-400" />
                    도면 3: 다층 재배대 입체 구조
                  </h4>
                  
                  <div className="bg-dark-300 rounded-2xl p-6 mb-6">
                    <div className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-xl">
                      <Image
                        src="/images/facilities/blueprint3.png"
                        alt="다층 재배대 입체 구조 특허 도면"
                        width={800}
                        height={800}
                        className="object-contain w-full h-full hover:scale-110 transition-transform duration-500 cursor-pointer"
                      />
                      <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-xl p-3">
                        <p className="text-gray-300 text-center mb-2">특허 도면 제3도: 3D 입체 구조도</p>
                        <div className="flex justify-center items-center gap-2 text-primary-400 hover:text-primary-300 cursor-pointer">
                          <ZoomIn className="w-5 h-5" />
                          <span className="text-sm">도면 확대 보기</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h5 className="font-semibold text-lg mb-3">구조적 특징</h5>
                    
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-dark-300 rounded-xl p-4">
                        <h6 className="font-semibold text-primary-400 mb-2">프레임 구조</h6>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 고강도 스테인리스 스틸</li>
                          <li>• 내부식성 코팅 처리</li>
                          <li>• 모듈식 조립 구조</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-300 rounded-xl p-4">
                        <h6 className="font-semibold text-primary-400 mb-2">재배대 설계</h6>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 층간 간격 최적화</li>
                          <li>• LED 조명 통합</li>
                          <li>• 자동 승강 시스템</li>
                        </ul>
                      </div>
                      
                      <div className="bg-dark-300 rounded-xl p-4">
                        <h6 className="font-semibold text-primary-400 mb-2">확장성</h6>
                        <ul className="text-sm text-gray-300 space-y-1">
                          <li>• 수평/수직 확장 가능</li>
                          <li>• 표준화된 모듈</li>
                          <li>• 유연한 배치 구성</li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h5 className="font-semibold text-lg mb-3">주요 사양</h5>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        <div className="text-center p-3 bg-dark-300 rounded-lg">
                          <div className="text-2xl font-bold gradient-text">10층</div>
                          <div className="text-sm text-gray-400">최대 적층 수</div>
                        </div>
                        <div className="text-center p-3 bg-dark-300 rounded-lg">
                          <div className="text-2xl font-bold gradient-text">1.5m</div>
                          <div className="text-sm text-gray-400">층간 간격</div>
                        </div>
                        <div className="text-center p-3 bg-dark-300 rounded-lg">
                          <div className="text-2xl font-bold gradient-text">500㎡</div>
                          <div className="text-sm text-gray-400">단위 면적</div>
                        </div>
                        <div className="text-center p-3 bg-dark-300 rounded-lg">
                          <div className="text-2xl font-bold gradient-text">10톤</div>
                          <div className="text-sm text-gray-400">층당 하중</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* 특허 정보 */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="glass-dark p-8 rounded-3xl"
                >
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Shield className="w-6 h-6 text-primary-400" />
                    특허 정보
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-dark-300 rounded-xl p-6">
                      <h4 className="font-semibold mb-3 text-primary-400">
                        특허 제10-2023-141800호
                      </h4>
                      <h5 className="font-medium mb-2">다층 재배 수조 시스템</h5>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 발명자: 최수환</li>
                        <li>• 출원일: 2023년 10월</li>
                        <li>• 등록일: 2024년 1월</li>
                      </ul>
                    </div>
                    
                    <div className="bg-dark-300 rounded-xl p-6">
                      <h4 className="font-semibold mb-3 text-primary-400">
                        특허 제10-2023-141801호
                      </h4>
                      <h5 className="font-medium mb-2">IoT 통합 제어 시스템</h5>
                      <ul className="text-sm text-gray-400 space-y-1">
                        <li>• 발명자: 최수환</li>
                        <li>• 출원일: 2023년 10월</li>
                        <li>• 등록일: 2024년 1월</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                    <p className="text-sm text-green-300 flex items-start gap-2">
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                      <span>
                        모든 기술 도면과 설계는 대한민국 특허청에 정식 등록된 지식재산권으로 보호받고 있습니다.
                      </span>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* 시설 견학 안내 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass-dark p-8 rounded-3xl max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">시설 견학을 원하시나요?</h3>
              <p className="text-gray-400 mb-6">
                최첨단 김 양식 시설을 직접 방문하여 체험해보세요
              </p>
              <button 
                onClick={() => router.push('/contact')}
                className="btn-primary"
              >
                견학 신청하기
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}