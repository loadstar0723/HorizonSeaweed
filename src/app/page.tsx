'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, 
  Waves, 
  Building2, 
  Cpu, 
  Coins, 
  BarChart3,
  Shield,
  Zap,
  Globe,
  TrendingUp,
  Brain,
  Filter,
  Leaf,
  TreePine,
  Sun,
  Award,
  Droplets,
  Factory,
  PlayCircle,
  X
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

const features = [
  {
    icon: Building2,
    title: '10층 수직 스마트팜',
    description: '세계 최초 아파트형 김양식 시스템으로 최소 면적에서 최대 생산',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Cpu,
    title: 'IoT 자동화 시스템',
    description: '24시간 실시간 모니터링과 AI 기반 최적 생육 환경 제어',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Coins,
    title: 'SEAWEED 토큰',
    description: 'Polygon 기반 100억개 발행, 다양한 소각 메커니즘으로 가치 상승',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Shield,
    title: '독점 특허 기술',
    description: 'HorizonSeaweed만의 혁신적인 육상 김양식 특허 기술 보유',
    color: 'from-green-500 to-teal-500'
  }
]

const stats = [
  { value: '200조원', label: '글로벌 해조류 시장 규모' },
  { value: '20%', label: '연평균 시장 성장률' },
  { value: '36회', label: '연간 수확 (바다 8회)' },
  { value: '99.9%', label: '품질 균일성' }
]

const ecoFeatures = [
  {
    icon: Brain,
    title: 'AI IoT 제어',
    description: '인공지능 자동화 시스템',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: Filter,
    title: '청정 해수 필터링',
    description: '깨끗한 친환경 바닷물',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Leaf,
    title: '친환경 양분',
    description: '자연 친화적 영양공급',
    color: 'from-green-500 to-emerald-500'
  },
  {
    icon: TreePine,
    title: '유기농 재배',
    description: '무농약 청정 생산',
    color: 'from-emerald-500 to-green-500'
  },
  {
    icon: Award,
    title: 'ESG 인증',
    description: '친환경 기업 인증',
    color: 'from-gold-500 to-yellow-500'
  },
  {
    icon: Sun,
    title: '사계절 생산',
    description: '365일 고품질 생산',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: TrendingUp,
    title: '40배 생산성',
    description: '바다 대비 초고효율',
    color: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Shield,
    title: '품질 보증',
    description: '안정적 고품질 김생산',
    color: 'from-slate-500 to-gray-500'
  }
]

export default function HomePage() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  
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
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-sm transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <video
                src={selectedVideo}
                className="w-full h-full"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/20" />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-64 h-64 bg-primary-500/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
          />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 mt-16 md:mt-24">
              <span className="gradient-text">Horizon</span>
              <span className="gradient-text-gold">Seaweed</span>
            </h1>
            
            <div className="mb-16 md:mb-20">
              <p className="text-xl md:text-2xl text-gray-300 mb-6">
                세계 최초 육상 스마트 김양식 지평선 김
              </p>
              
              {/* 구분선 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent w-40 md:w-48"></div>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-cyan-400/50" />
                  <Waves className="w-5 h-5 text-primary-400/60" />
                  <Droplets className="w-4 h-4 text-cyan-400/50" />
                </div>
                <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent w-40 md:w-48"></div>
              </motion.div>
            </div>
            
            {/* 핵심 메시지 섹션 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-20 md:mb-28 max-w-4xl mx-auto"
            >
              <div className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4"
                >
                  {/* 첫 번째 문장 */}
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    <span className="gradient-text-gold font-bold text-2xl md:text-3xl">김제평야</span>의 드넓은 벼 곡창지대에서 시작된 <span className="text-primary-400 font-semibold">지평선 김의 혁신</span>
                  </p>
                  
                  {/* 구분선 */}
                  <div className="flex items-center justify-center gap-4 py-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent w-32"></div>
                    <Waves className="w-6 h-6 text-primary-400/50" />
                    <div className="h-px bg-gradient-to-r from-transparent via-primary-400/50 to-transparent w-32"></div>
                  </div>
                  
                  {/* 두 번째 문장 - 강조 */}
                  <p className="text-2xl md:text-4xl font-bold leading-tight">
                    <span className="gradient-text">바다가 없는 내륙에서도, 도시 한복판에서도</span>
                  </p>
                  
                  {/* 구분선 */}
                  <div className="flex items-center justify-center gap-4 py-2">
                    <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent w-32"></div>
                    <Globe className="w-6 h-6 text-gold-400/50" />
                    <div className="h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent w-32"></div>
                  </div>
                  
                  {/* 세 번째 문장 */}
                  <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                    이제 <span className="text-primary-400 font-bold text-2xl md:text-3xl">전 세계 어디서나</span> 최고급 김을 생산할 수 있습니다
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* CTA 버튼 */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20 md:mb-24">
              <motion.button
                onClick={() => setSelectedVideo('/videos/smart-farming-main.mp4')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-full font-semibold text-white shadow-lg hover:shadow-red-500/25 transition-all duration-300 inline-flex items-center whitespace-nowrap"
              >
                <PlayCircle className="w-6 h-6 mr-2 flex-shrink-0 group-hover:animate-pulse" />
                <span className="flex-shrink-0">육상 김양식 영상 보기</span>
              </motion.button>
              
              <Link href="/3d-smartfarm" className="inline-block">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 inline-flex items-center whitespace-nowrap"
                >
                  <span className="flex-shrink-0">3D 스마트팜 보기</span>
                  <ArrowRight className="w-6 h-6 ml-2 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* 스크롤 인디케이터 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-20 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* 통계 섹션 */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 친환경 특징 섹션 */}
      <section className="py-20 bg-gradient-to-br from-dark-300 via-dark-400 to-dark-300">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              지속가능한 <span className="gradient-text-gold">친환경</span> 김양식
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              HorizonSeaweed의 혁신적인 기술로 환경과 미래를 생각합니다
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ecoFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass-dark p-6 rounded-2xl text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                    {/* 로고 컨테이너 */}
                    <div className="relative mb-4">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} p-0.5`}
                      >
                        <div className="w-full h-full bg-dark-400 rounded-2xl flex items-center justify-center">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                      </motion.div>
                      
                      {/* 배경 글로우 효과 */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                    </div>
                    
                    {/* 텍스트 */}
                    <h3 className="text-lg font-bold mb-1 group-hover:text-primary-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* ESG 인증 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-4 glass-dark px-8 py-4 rounded-full">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="text-lg font-semibold">
                ESG 경영 실천 기업 | 친환경 인증 | 지속가능한 미래
              </span>
              <TreePine className="w-6 h-6 text-green-400" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 글로벌 확장 가능성 섹션 */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 md:p-12 rounded-3xl relative"
          >
            {/* 배경 지구 이미지 효과 */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                >
                  <Globe className="w-96 h-96 text-primary-400" />
                </motion.div>
              </div>
            </div>

            <div className="relative z-10 text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 1 }}
                className="inline-block mb-6"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-12 h-12 text-white" />
                </div>
              </motion.div>

              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                전 세계 <span className="gradient-text-gold">150개국</span> 어디서나 가능한 김양식
              </h2>
              
              <p className="text-xl text-gray-300 mb-8">
                바닷물만 있으면 기후와 계절에 관계없이 
                <br className="hidden md:block" />
                전 세계 어디서든 고품질 김 생산이 가능합니다
              </p>

              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold gradient-text mb-2">지리적 한계 극복</h3>
                  <p className="text-gray-400">열대부터 극지방까지 모든 기후대에서 생산 가능</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold gradient-text-gold mb-2">완벽한 환경 제어</h3>
                  <p className="text-gray-400">실내 시설로 태풍, 오염, 기후변화 영향 없음</p>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-bold gradient-text mb-2">도시형 스마트팜</h3>
                  <p className="text-gray-400">좁은 땅에서도 수직 재배로 대량 생산</p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-10 inline-flex items-center gap-2 text-lg text-gray-400"
              >
                <Waves className="w-5 h-5 text-blue-400" />
                <span>중동 사막에서도, 도심 속에서도, 내륙 지역에서도 가능한 혁신</span>
                <Waves className="w-5 h-5 text-blue-400" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              혁신적인 <span className="gradient-text">기술</span>
            </h2>
            <p className="text-xl text-gray-400">
              HorizonSeaweed만의 차별화된 핵심 기술
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="glass-dark p-6 rounded-2xl hover-glow h-full">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} p-0.5 mb-4`}>
                      <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/20 to-cyan-600/20" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              미래의 <span className="gradient-text-gold">김양식</span>을 시작하세요
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              HorizonSeaweed와 함께 지속가능한 해조류 산업의 미래를 만들어갑니다
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link href="/contact">
                <button className="px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-semibold text-white shadow-lg hover:shadow-primary-500/25 transition-all duration-300 hover-scale">
                  문의하기
                  <ArrowRight className="inline ml-2" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="text-center text-gray-400">
            <p>&copy; 2016 HorizonSeaweed. All rights reserved.</p>
          </div>
        </div>
      </footer>
      <ScrollToTop />
    </>
  )
}