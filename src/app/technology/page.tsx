'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Cpu, 
  Droplets, 
  Thermometer, 
  Wifi, 
  Camera,
  BarChart3,
  Shield,
  Zap,
  ArrowRight,
  Layers,
  Box,
  RotateCw,
  Lightbulb,
  Award
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Link from 'next/link'
import dynamic from 'next/dynamic'

// 3D 컴포넌트 동적 로드
const EnhancedAquaculture3D = dynamic(() => import('@/components/BasicTank3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[700px] bg-gradient-to-b from-dark-400 to-dark-300 rounded-2xl flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-400">3D 시스템 로딩중...</p>
      </div>
    </div>
  )
})

const techSpecs = [
  {
    icon: Box,
    title: '수조 규격',
    specs: [
      '크기: 2m x 20m x 0.5m',
      'ㄷ자형 구조 (상부 개방)',
      '재질: 강화 FRP + 유리',
      '수량: 층당 4개, 총 40개'
    ]
  },
  {
    icon: Layers,
    title: '10층 구조',
    specs: [
      '총 높이: 12m',
      '층간 간격: 1.2m',
      '총 양식면적: 1,600㎡',
      '공간 효율: 10배 향상'
    ]
  },
  {
    icon: Droplets,
    title: '수질 관리',
    specs: [
      'pH: 7.5-8.5 자동조절',
      '염도: 25-35‰ 유지',
      '용존산소: 7-9mg/L',
      '순환여과: 24시간'
    ]
  },
  {
    icon: Thermometer,
    title: '환경 제어',
    specs: [
      '수온: 10-15°C (겨울)',
      '수온: 15-20°C (여름)',
      'LED 조명: 12시간 주기',
      '자동 영양분 공급'
    ]
  }
]

const iotFeatures = [
  {
    icon: Wifi,
    title: 'IoT 센서 네트워크',
    description: '각 수조별 10개 이상의 센서로 실시간 모니터링',
    features: ['수질 센서', '온도 센서', '조도 센서', 'pH 센서']
  },
  {
    icon: Camera,
    title: 'AI 영상 분석',
    description: '딥러닝 기반 김 생육 상태 자동 분석',
    features: ['생장률 측정', '병해 조기 발견', '수확 시기 예측', '품질 등급 판정']
  },
  {
    icon: BarChart3,
    title: '빅데이터 분석',
    description: '축적된 데이터로 최적 생육 조건 도출',
    features: ['생산량 예측', '비용 최적화', '품질 향상', '에너지 절감']
  },
  {
    icon: Shield,
    title: '블록체인 인증',
    description: '생산 이력 투명하게 기록 및 관리',
    features: ['원산지 증명', '품질 인증', '이력 추적', '위변조 방지']
  }
]

export default function TechnologyPage() {
  return (
    <>
      <Navigation />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">혁신적인</span> 기술
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12">
              세계 최초 10층 수직형 스마트 김양식 시스템
            </p>
            
            {/* 핵심 성과 지표 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-dark p-6 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">40배</div>
                <p className="text-sm text-gray-400">단위면적당 생산성</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-dark p-6 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-gold mb-2">365일</div>
                <p className="text-sm text-gray-400">연중무휴 생산</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-dark p-6 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">90%</div>
                <p className="text-sm text-gray-400">인력 절감율</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass-dark p-6 rounded-xl text-center"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text-gold mb-2">특허</div>
                <p className="text-sm text-gray-400">독점 기술 보유</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 기술 스펙 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              시스템 <span className="gradient-text-gold">상세 스펙</span>
            </h2>
            <p className="text-xl text-gray-400">
              HorizonSeaweed 스마트팜의 혁신적인 구조
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {techSpecs.map((spec, index) => {
              const Icon = spec.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-6 rounded-2xl"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 p-0.5 mb-4">
                    <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{spec.title}</h3>
                  <ul className="space-y-2">
                    {spec.specs.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-start">
                        <span className="text-primary-400 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* IoT 기능 섹션 */}
      <section className="py-20 bg-dark-300/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">IoT</span> 자동화 시스템
            </h2>
            <p className="text-xl text-gray-400">
              인공지능과 IoT 기술의 완벽한 융합
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {iotFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-2xl hover-glow"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-cyan-500 p-0.5 flex-shrink-0">
                      <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                      <p className="text-gray-400 mb-4">{feature.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {feature.features.map((item, i) => (
                          <div key={i} className="flex items-center text-sm text-gray-500">
                            <Zap className="w-3 h-3 text-primary-400 mr-1" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 특허 기술 섹션 */}
      <section className="py-20 bg-gradient-to-b from-dark-400 to-dark-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Shield className="w-20 h-20 text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text-gold">세계 유일</span> 원천 특허 기술
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              HorizonSeaweed만의 독점적 육상 김양식 원천 기술로
              <br />
              전 세계 김 산업의 패러다임을 바꾸고 있습니다
            </p>
          </motion.div>

          {/* 수직 다층 구조 특허 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="glass-dark p-8 md:p-12 rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="inline-block px-4 py-2 bg-gold-500/20 rounded-full mb-6">
                    <span className="text-gold-400 font-bold">특허출원번호 10-2023-141800</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    수직 다층 김양식 시스템
                    <span className="block text-xl text-gray-400 mt-2">세계 최초 10층 수직형 구조</span>
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <Zap className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">혁신적인 공간 활용</h4>
                        <p>단위 면적당 40배 이상의 생산성 실현. 기존 바다 양식의 한계를 완전히 극복한 3차원 입체 양식 기술</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Layers className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">10층 수직 구조</h4>
                        <p>높이 12m, 층간 간격 1.2m의 최적화된 구조로 총 1,600㎡의 양식 면적 확보</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Droplets className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">독립 수조 시스템</h4>
                        <p>각 층별 독립된 수조로 최적의 생육 환경 제공. 2m × 20m × 0.5m 규격의 ㄷ자형 수조 40개 운영</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-2xl p-8">
                    <div className="h-full">
                      {/* 10층 수직 구조 시각화 */}
                      <div className="flex flex-col h-full">
                        <h4 className="text-2xl font-bold mb-4 text-center gradient-text">10층 수직 구조</h4>
                        <div className="flex-1 relative">
                          {/* 수직 층 표현 */}
                          {[...Array(10)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="absolute w-full"
                              style={{ 
                                top: `${i * 9}%`,
                                height: '8%'
                              }}
                            >
                              <div className="h-full bg-gradient-to-r from-primary-600/30 to-cyan-600/30 border border-primary-500/50 rounded-md flex items-center px-2">
                                <span className="text-xs text-gray-300">{10-i}층</span>
                                <div className="flex-1 mx-2 h-1 bg-primary-400/30 rounded-full">
                                  <motion.div
                                    className="h-full bg-primary-400 rounded-full"
                                    animate={{ width: ['0%', '100%', '0%'] }}
                                    transition={{ 
                                      duration: 3,
                                      delay: i * 0.2,
                                      repeat: Infinity
                                    }}
                                  />
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <p className="text-center text-gray-400 text-sm mt-2">층별 독립 제어 시스템</p>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ 
                      boxShadow: ['0 0 40px rgba(14, 165, 233, 0.3)', '0 0 60px rgba(14, 165, 233, 0.5)', '0 0 40px rgba(14, 165, 233, 0.3)']
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* 원형 시스템 특허 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="glass-dark p-8 md:p-12 rounded-3xl">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="inline-block px-4 py-2 bg-gold-500/20 rounded-full mb-6">
                    <span className="text-gold-400 font-bold">특허출원번호 10-2023-141801</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    원형 순환 김양식 시스템
                    <span className="block text-xl text-gray-400 mt-2">혁신적인 공간 효율성</span>
                  </h3>
                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start">
                      <RotateCw className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">원형 순환 구조</h4>
                        <p>반원형 배치로 중앙 제어 시스템 중심의 효율적인 관리. 모든 수조에 균등한 환경 제공</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Wifi className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">중앙 집중 제어</h4>
                        <p>원형 중심부의 통합 제어 시스템으로 모든 수조의 실시간 모니터링 및 자동 제어</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Thermometer className="w-6 h-6 text-primary-400 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-white mb-1">최적화된 물순환</h4>
                        <p>원형 구조의 장점을 활용한 효율적인 해수 순환 시스템. 에너지 소비 최소화</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1 relative">
                  <div className="aspect-square bg-gradient-to-br from-gold-500/20 to-orange-500/20 rounded-full p-8">
                    <div className="h-full">
                      {/* 원형 순환 시스템 시각화 */}
                      <div className="relative w-full h-full">
                        {/* 중앙 제어 허브 */}
                        <div className="absolute inset-1/3 bg-gradient-to-br from-gold-600 to-orange-600 rounded-full flex items-center justify-center">
                          <div className="text-center">
                            <Wifi className="w-8 h-8 text-white mb-2 mx-auto" />
                            <span className="text-xs font-bold text-white">중앙 제어</span>
                          </div>
                        </div>
                        
                        {/* 원형 수조 배치 */}
                        {[...Array(8)].map((_, i) => {
                          const angle = (i * 45) * Math.PI / 180;
                          const radius = 35;
                          const x = 50 + radius * Math.cos(angle);
                          const y = 50 + radius * Math.sin(angle);
                          
                          return (
                            <motion.div
                              key={i}
                              className="absolute w-12 h-12"
                              style={{
                                left: `${x}%`,
                                top: `${y}%`,
                                transform: 'translate(-50%, -50%)'
                              }}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <div className="w-full h-full bg-gradient-to-br from-gold-500/50 to-orange-500/50 rounded-lg border border-gold-400/50 flex items-center justify-center">
                                <span className="text-xs font-bold text-gold-300">{i + 1}</span>
                              </div>
                              
                              {/* 연결선 애니메이션 */}
                              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ transform: 'scale(2)' }}>
                                <motion.line
                                  x1="50%"
                                  y1="50%"
                                  x2="50%"
                                  y2="50%"
                                  stroke="rgba(251, 191, 36, 0.3)"
                                  strokeWidth="1"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{
                                    duration: 2,
                                    delay: i * 0.2,
                                    repeat: Infinity,
                                    repeatDelay: 3
                                  }}
                                />
                              </svg>
                            </motion.div>
                          );
                        })}
                        
                        {/* 순환 흐름 표시 */}
                        <motion.div
                          className="absolute inset-4 rounded-full border-2 border-dashed border-gold-400/30"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        />
                      </div>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border-2 border-gold-400/10"
                  />
                  <div className="absolute -bottom-4 left-0 right-0 text-center">
                    <p className="text-sm text-gray-400">360° 통합 관리 시스템</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 기술적 우위 강조 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-3xl bg-gradient-to-r from-gold-500/10 to-orange-500/10"
          >
            <h3 className="text-3xl font-bold text-center mb-8">
              <span className="gradient-text-gold">독점적 기술력</span>의 핵심
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-gold-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">원천 특허 보유</h4>
                <p className="text-gray-400">세계 최초 육상 김양식 핵심 기술 특허 출원</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-10 h-10 text-primary-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">5년 R&D 노하우</h4>
                <p className="text-gray-400">축적된 데이터와 경험으로 완성된 기술</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-cyan-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">기술 진입장벽</h4>
                <p className="text-gray-400">복제 불가능한 독자적 시스템 구축</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3D 양식장 시각화 섹션 */}
      <section className="py-20 bg-dark-400">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">3D 육상 김양식</span> 시스템
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              특허 기술이 적용된 10층 수직형 구조를 직접 확인하세요
              <br />
              수조, LED 조명, 김 양식 그물까지 완벽하게 구현된 시스템
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mb-8 h-[700px]"
          >
            <EnhancedAquaculture3D />
            
            {/* 3D 뷰어 컨트롤 안내 */}
            <div className="absolute top-4 right-4 glass-dark p-3 rounded-lg">
              <div className="text-xs text-gray-400 space-y-1">
                <p className="font-bold text-primary-400 mb-2">3D 컨트롤</p>
                <p>🖱️ 좌클릭 드래그: 회전</p>
                <p>🖱️ 우클릭 드래그: 이동</p>
                <p>🖱️ 스크롤: 확대/축소</p>
              </div>
            </div>
          </motion.div>
          
          {/* 3D 시스템 특징 */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-xl text-center"
            >
              <Box className="w-12 h-12 text-primary-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">ㄷ자형 수조 구조</h3>
              <p className="text-sm text-gray-400">상부 개방형 설계로 관리 효율성 극대화</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-xl text-center"
            >
              <Zap className="w-12 h-12 text-gold-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">스마트 LED 시스템</h3>
              <p className="text-sm text-gray-400">최적 파장으로 김 생장 속도 40% 향상</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="glass-dark p-6 rounded-xl text-center"
            >
              <Layers className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold mb-2">김 양식 그물</h3>
              <p className="text-sm text-gray-400">특수 설계된 그물로 균일한 김 생산</p>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <p className="text-sm text-gray-500">
              * 마우스로 드래그하여 360도 회전하며 살펴보세요
            </p>
          </motion.div>
        </div>
      </section>

      {/* 독점 기술의 가치 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                왜 <span className="gradient-text-gold">HorizonSeaweed</span>인가?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                5년간의 R&D와 원천 특허 기술로 완성된
                <br />
                세계에서 단 하나뿐인 육상 김양식 솔루션
              </p>
            </div>
            
            {/* 핵심 가치 카드 */}
            <div className="grid md:grid-cols-4 gap-6 mb-16">
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">40배</div>
                <p className="text-lg font-semibold">생산성 향상</p>
                <p className="text-sm text-gray-400 mt-2">바다 대비 단위면적당</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl text-center"
              >
                <div className="text-5xl font-bold gradient-text-gold mb-2">365일</div>
                <p className="text-lg font-semibold">연중 생산</p>
                <p className="text-sm text-gray-400 mt-2">기후 영향 Zero</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl text-center"
              >
                <div className="text-5xl font-bold gradient-text mb-2">99%</div>
                <p className="text-lg font-semibold">품질 균일성</p>
                <p className="text-sm text-gray-400 mt-2">AI 자동 제어</p>
              </motion.div>
              <motion.div
                whileHover={{ y: -10 }}
                className="glass-dark p-6 rounded-2xl text-center"
              >
                <div className="text-5xl font-bold gradient-text-gold mb-2">ESG</div>
                <p className="text-lg font-semibold">친환경 인증</p>
                <p className="text-sm text-gray-400 mt-2">탄소 중립 실현</p>
              </motion.div>
            </div>

            {/* 시장 독점 비전 */}
            <div className="glass-dark p-8 md:p-12 rounded-3xl bg-gradient-to-r from-primary-500/10 to-gold-500/10">
              <div className="text-center mb-8">
                <Zap className="w-16 h-16 text-gold-500 mx-auto mb-4" />
                <h3 className="text-3xl font-bold mb-4">
                  글로벌 김 시장의 <span className="gradient-text-gold">게임 체인저</span>
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-primary-400">기술적 독점력</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>세계 유일의 10층 수직형 구조 특허</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>원형 순환 시스템 독점 기술</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>5년간 축적된 생육 빅데이터</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-gold-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>AI 최적화 알고리즘 독점 보유</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-gold-400">시장 지배력</h4>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>연 500조원 글로벌 김 시장 진출</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>기존 양식업 대비 10배 수익성</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>프리미엄 김 시장 독점 공급</span>
                    </li>
                    <li className="flex items-start">
                      <Award className="w-5 h-5 text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                      <span>글로벌 파트너십 독점 계약</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              세계 최초의 기술을 직접 확인하세요
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              투자자, 파트너, 고객 여러분을 위한 특별한 기회
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/3d-smartfarm"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover-scale inline-block"
              >
                <Box className="inline mr-2" />
                3D 시스템 체험
              </Link>
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-gold-500 to-orange-500 rounded-full font-semibold text-white shadow-lg hover:shadow-gold-500/25 transition-all duration-300 hover-scale inline-block"
              >
                투자 상담 신청
                <ArrowRight className="inline ml-2" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}