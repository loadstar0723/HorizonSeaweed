'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Waves, 
  Droplets, 
  Thermometer,
  Wind,
  Sun,
  Timer,
  CheckCircle,
  PlayCircle,
  X,
  ChevronRight,
  Factory,
  Leaf,
  TrendingUp,
  Award,
  Beaker,
  Settings,
  Cpu
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'

// 양식 프로세스 단계
const farmingProcess = [
  {
    step: 1,
    title: '포자 채묘',
    description: '우량 김 포자를 인공적으로 채취하여 사상체 배양',
    details: [
      '수온 15-20°C 유지',
      'pH 7.5-8.5 조절',
      '무균 상태에서 배양',
      '현미경으로 성장 관찰'
    ],
    icon: Beaker,
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 2,
    title: '사상체 배양',
    description: '패각에 사상체를 부착시켜 2-3개월간 배양',
    details: [
      '적정 조도 유지 (2000-3000 lux)',
      '영양염류 자동 공급',
      '수류 순환 시스템',
      '성장 단계별 관리'
    ],
    icon: Factory,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 3,
    title: '채묘 및 육묘',
    description: '성숙한 각포자를 방출시켜 김발에 부착',
    details: [
      '수온 10-15°C 유지',
      '김발 밀도 조절',
      '24시간 모니터링',
      'IoT 센서 데이터 분석'
    ],
    icon: Leaf,
    color: 'from-green-500 to-teal-500'
  },
  {
    step: 4,
    title: '본 양성',
    description: '10단 수직 시스템에서 40-50일간 양성',
    details: [
      '층별 최적 환경 제어',
      'LED 조명 12시간 주기',
      '자동 영양분 공급',
      '병해 예방 관리'
    ],
    icon: TrendingUp,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    step: 5,
    title: '수확',
    description: '15-20cm 성장 시 자동 수확 시스템 가동',
    details: [
      '품질 선별 자동화',
      '즉시 가공 처리',
      '블록체인 이력 기록',
      '연간 10-12회 수확'
    ],
    icon: Award,
    color: 'from-red-500 to-pink-500'
  }
]

// 기술 특징
const techFeatures = [
  {
    icon: Droplets,
    title: '완벽한 수질 관리',
    description: '24시간 실시간 모니터링으로 최적의 수질 환경 유지',
    specs: ['pH 자동 조절', '염도 25-35‰', '용존산소 7-9mg/L', '영양염 자동 공급']
  },
  {
    icon: Thermometer,
    title: '정밀 온도 제어',
    description: '계절별 최적 수온 유지로 연중 생산 가능',
    specs: ['여름: 15-20°C', '겨울: 10-15°C', '±0.5°C 정밀 제어', '에너지 효율 극대화']
  },
  {
    icon: Sun,
    title: 'LED 생장 조명',
    description: '김 생장에 최적화된 파장의 LED 조명 시스템',
    specs: ['450-660nm 파장', '12시간 주기', '층별 조도 조절', '전력 소비 70% 절감']
  },
  {
    icon: Wind,
    title: '수류 순환 시스템',
    description: '자연 해류를 재현한 최적의 수류 환경 조성',
    specs: ['0.1-0.3m/s 유속', '균일한 영양 공급', '이물질 자동 제거', '김 품질 향상']
  }
]

// 김 종류별 특성
const seaweedTypes = [
  {
    name: '일반김',
    description: '한국 김의 표준, 검은색의 윤기나는 평활한 김',
    characteristics: {
      taste: '담백하고 깔끔한 맛, 은은한 바다향',
      texture: '얇고 바삭한 식감, 입에서 살살 녹는 부드러움',
      price: '중저가 (㎡당 8,000~12,000원)',
      growth: '수온 10~15°C, 염도 30‰ 최적, 생장기간 40~50일'
    },
    features: [
      '두께: 0.020~0.025mm',
      '단백질 함량: 35~40%',
      '엽체 길이: 15~25cm',
      '균일한 검은색',
      '김밥, 조미김 등 다용도 활용',
      '대량 생산 용이',
      'ISO 품질 인증'
    ],
    production: {
      season: '10월~4월 (최적기: 12~2월)',
      yield: '㎡당 300~400장',
      quality: '1~3등급 (주로 2등급)'
    },
    image: '/images/smart-farming/normal-kim.jpg'
  },
  {
    name: '곱창김',
    description: '최고급 프리미엄 김, 주름진 곱창 모양의 희귀종',
    characteristics: {
      taste: '진한 감칠맛과 고소한 풍미, 깊은 바다의 맛',
      texture: '도톰하고 쫄깃한 식감, 씹을수록 고소함',
      price: '고가 (㎡당 25,000~50,000원)',
      growth: '수온 8~12°C, 염도 32‰ 최적, 생장기간 60~70일'
    },
    features: [
      '두께: 0.030~0.040mm',
      '단백질 함량: 45~50%',
      '엽체 길이: 10~15cm',
      '특유의 주름진 곱창 형태',
      '최고급 선물용, 수출 주력 상품',
      '연간 생산량 전체의 5% 미만',
      '지리적표시제 등록'
    ],
    production: {
      season: '11월~3월 (최적기: 12~1월)',
      yield: '㎡당 150~200장',
      quality: '특등급~1등급 (대부분 특등급)'
    },
    image: '/images/smart-farming/gopchang-kim.jpg'
  }
]

export default function SmartFarmingPage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState('process')

  return (
    <>
      <Navigation />
      
      {/* 비디오 모달 */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary-400"
              >
                <X className="w-8 h-8" />
              </button>
              <video
                src={selectedVideo}
                controls
                autoPlay
                className="w-full rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-blue-900/20" />
        
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 opacity-20"
          >
            <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500 rounded-full blur-3xl" />
          </motion.div>
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
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                <Waves className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              스마트 <span className="gradient-text">육상 김양식</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              혁신적인 10단 수직형 시스템으로 365일 최고급 김 생산
            </p>
            
            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setSelectedVideo('/videos/smart-farming-main.mp4')}
                className="group px-10 py-5 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-bold text-xl text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 flex items-center justify-center"
              >
                <PlayCircle className="w-7 h-7 mr-3" />
                육상 김양식 실시간 라이브 영상 보기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 탭 네비게이션 */}
      <section className="py-10 sticky top-20 bg-dark-400/95 backdrop-blur-lg z-40 border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="inline-flex bg-dark-300 rounded-full p-1">
              {[
                { id: 'process', label: '양식 프로세스', icon: Settings },
                { id: 'tech', label: '핵심 기술', icon: Cpu },
                { id: 'types', label: '김 종류', icon: Leaf },
                { id: 'facility', label: '시설 갤러리', icon: Factory }
              ].map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => {
                      setActiveTab(tab.id)
                      // 탭 콘텐츠의 상단으로 스크롤 (sticky 헤더 높이 고려)
                      setTimeout(() => {
                        const element = document.getElementById(tab.id)
                        if (element) {
                          const yOffset = -140 // 네비게이션 바와 sticky 탭의 높이를 고려
                          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
                          window.scrollTo({ top: y, behavior: 'smooth' })
                        }
                      }, 50)
                    }}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-cyan-500 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 양식 프로세스 섹션 */}
      {activeTab === 'process' && (
        <section id="process" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                스마트 김양식 <span className="gradient-text-gold">프로세스</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                포자 채묘부터 수확까지 완전 자동화된 5단계 프로세스
              </p>
            </motion.div>

            <div className="max-w-6xl mx-auto">
              {farmingProcess.map((process, index) => {
                const Icon = process.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`flex items-center mb-12 ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className="flex-1">
                      <div className="glass-dark p-8 rounded-2xl">
                        <div className="flex items-center mb-4">
                          <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mr-4`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <span className="text-sm text-gray-400">Step {process.step}</span>
                            <h3 className="text-2xl font-bold">{process.title}</h3>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{process.description}</p>
                        <ul className="space-y-2">
                          {process.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-400">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {index < farmingProcess.length - 1 && (
                      <div className="px-8 hidden md:block">
                        <ChevronRight className={`w-8 h-8 text-primary-400 ${
                          index % 2 === 0 ? '' : 'rotate-180'
                        }`} />
                      </div>
                    )}
                    
                    <div className="flex-1" />
                  </motion.div>
                )
              })}
            </div>

            {/* 프로세스 타임라인 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20 glass-dark p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-center">
                전체 생산 주기: <span className="gradient-text-gold">약 60일</span>
              </h3>
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 transform -translate-y-1/2" />
                <div className="flex justify-between relative">
                  {farmingProcess.map((process, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-dark-300 border-4 border-primary-500 rounded-full flex items-center justify-center mb-2">
                        <span className="font-bold">{process.step}</span>
                      </div>
                      <span className="text-sm text-gray-400">{process.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 핵심 기술 섹션 */}
      {activeTab === 'tech' && (
        <section id="tech" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                핵심 <span className="gradient-text">기술력</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                세계 최고 수준의 육상 김양식 기술
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {techFeatures.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass-dark p-8 rounded-2xl hover-glow"
                  >
                    <div className="flex items-start">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 p-0.5 mr-6 flex-shrink-0">
                        <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                        <p className="text-gray-400 mb-4">{feature.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {feature.specs.map((spec, i) => (
                            <div key={i} className="flex items-center text-sm">
                              <Timer className="w-4 h-4 text-primary-400 mr-2" />
                              <span className="text-gray-500">{spec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* 기술 비교 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 glass-dark p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-8 text-center">
                기존 해상 양식 vs <span className="gradient-text-gold">스마트 육상 양식</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-red-400 mb-4">기존 해상 양식</h4>
                  {[
                    '날씨와 계절에 의존적',
                    '수질 관리 어려움',
                    '연간 2-3회 수확',
                    '품질 불균일',
                    '병해충 위험 높음'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <X className="w-5 h-5 text-red-400 mr-3" />
                      <span className="text-gray-400">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xl font-semibold text-green-400 mb-4">스마트 육상 양식</h4>
                  {[
                    '365일 안정적 생산',
                    '완벽한 환경 제어',
                    '연간 10-12회 수확',
                    '균일한 최고급 품질',
                    '무병해 청정 생산'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span className="text-gray-300">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* 김 종류 섹션 */}
      {activeTab === 'types' && (
        <section id="types" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                생산 <span className="gradient-text-gold">김 종류</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                용도에 따른 맞춤형 김 생산
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {seaweedTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-dark rounded-2xl overflow-hidden hover-scale"
                >
                  <div className="h-96 relative">
                    <Image
                      src={type.image}
                      alt={type.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-3xl font-bold mb-2">{type.name}</h3>
                      <p className="text-gray-300">{type.description}</p>
                    </div>
                  </div>
                  <div className="p-8 space-y-6">
                    {/* 특성 정보 */}
                    <div className="space-y-4">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-primary-400 mb-2">맛과 식감</h4>
                        <p className="text-sm text-gray-300 mb-1">맛: {type.characteristics.taste}</p>
                        <p className="text-sm text-gray-300">식감: {type.characteristics.texture}</p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-green-400 mb-2">생육 환경</h4>
                        <p className="text-sm text-gray-300">{type.characteristics.growth}</p>
                      </div>
                      
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold text-yellow-400 mb-2">가격대</h4>
                        <p className="text-sm text-gray-300">{type.characteristics.price}</p>
                      </div>
                    </div>
                    
                    {/* 생산 정보 */}
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="font-semibold mb-3">생산 정보</h4>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-xs text-gray-500">생산 시기</p>
                          <p className="text-sm font-semibold">{type.production.season}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">수확량</p>
                          <p className="text-sm font-semibold">{type.production.yield}</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500">품질 등급</p>
                          <p className="text-sm font-semibold">{type.production.quality}</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* 주요 특징 */}
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="font-semibold mb-3">주요 특징</h4>
                      <div className="space-y-2">
                        {type.features.slice(0, 4).map((feature, i) => (
                          <div key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 시설 갤러리 섹션 */}
      {activeTab === 'facility' && (
        <section id="facility" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                시설 <span className="gradient-text">갤러리</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                최첨단 스마트 육상 김양식 시설
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { 
                  title: '스마트팜 전경', 
                  desc: '최첨단 육상 김양식 시설의 외관', 
                  details: '총 면적 3,000㎡ 규모의 친환경 스마트팜 시설로, 태양광 패널과 빗물 재활용 시스템을 갖춘 지속가능한 양식장입니다. 연간 500톤의 고품질 김을 생산할 수 있는 대규모 시설입니다.',
                  specs: ['부지면적: 5,000㎡', '건축면적: 3,000㎡', '태양광 발전: 500kW', '연간 생산량: 500톤'],
                  image: '/images/smart-farming/facility1.jpg' 
                },
                { 
                  title: '시설 내부', 
                  desc: '무균 청정 환경의 양식 공간', 
                  details: '헤파필터와 UV 살균 시스템으로 완벽한 무균 환경을 유지합니다. 온도, 습도, CO₂ 농도를 실시간으로 제어하여 김의 최적 생육 조건을 365일 유지합니다.',
                  specs: ['청정도: Class 100', '온도제어: ±0.5°C', '습도제어: ±2%', 'CO₂ 농도: 800-1200ppm'],
                  image: '/images/smart-farming/facility2.jpg' 
                },
                { 
                  title: '김 양식 수조', 
                  desc: 'AI 기반 자동화 양식 시스템', 
                  details: '각 수조는 독립적인 환경 제어가 가능하며, IoT 센서를 통해 수온, pH, 영양염류, 조도 등을 실시간으로 모니터링하고 자동 조절합니다. 수직 적층 구조로 공간 효율을 극대화했습니다.',
                  specs: ['수조 크기: 20m × 1.5m', '수심: 30cm', 'LED 조명: 3000K-6500K', '수류속도: 0.1-0.3m/s'],
                  image: '/images/smart-farming/facility3.jpg' 
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-dark rounded-2xl overflow-hidden hover-scale"
                >
                  <div className="h-96 relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {item.details}
                    </p>
                    <div className="border-t border-gray-800 pt-4">
                      <h4 className="font-semibold mb-3 text-primary-400">주요 사양</h4>
                      <div className="space-y-2">
                        {item.specs.map((spec, i) => (
                          <div key={i} className="flex items-start text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400">{spec}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA 섹션 */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">
              스마트 육상 김양식의 <span className="gradient-text-gold">미래</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              HorizonSeaweed의 혁신적인 기술로 지속가능한 김 생산의 새로운 기준을 제시합니다
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover-scale inline-block"
              >
                시설 견학 문의
              </a>
              <a
                href="/technology"
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 rounded-full font-semibold text-white hover:shadow-lg transition-all duration-300 hover-scale inline-block"
              >
                기술 상세 보기
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}