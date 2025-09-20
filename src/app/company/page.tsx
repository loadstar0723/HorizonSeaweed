'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Building2, 
  Target, 
  Eye, 
  Award,
  Users,
  Globe,
  Rocket,
  Shield,
  Sparkles,
  TrendingUp
} from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

const timeline = [
  {
    year: '2020',
    title: '회사 설립',
    description: '육상 김양식 기술 개발 시작',
    icon: Building2
  },
  {
    year: '2021',
    title: '특허 출원',
    description: '핵심 기술 3건 특허 출원',
    icon: Shield
  },
  {
    year: '2022',
    title: '프로토타입 완성',
    description: '10층 스마트팜 시제품 개발',
    icon: Rocket
  },
  {
    year: '2023',
    title: '상용화 시작',
    description: '첫 상업용 스마트팜 구축',
    icon: TrendingUp
  },
  {
    year: '2024',
    title: '글로벌 진출',
    description: 'SEAWEED 토큰 런칭 및 해외 진출',
    icon: Globe
  }
]

const values = [
  {
    icon: Target,
    title: '혁신',
    description: '끊임없는 기술 혁신으로 산업을 선도합니다'
  },
  {
    icon: Users,
    title: '지속가능성',
    description: '환경과 미래를 생각하는 지속가능한 솔루션을 제공합니다'
  },
  {
    icon: Award,
    title: '품질',
    description: '최고 품질의 제품과 서비스를 보장합니다'
  },
  {
    icon: Globe,
    title: '글로벌',
    description: '세계 시장을 향한 글로벌 비전을 추구합니다'
  }
]

export default function CompanyPage() {
  return (
    <>
      <Navigation />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/20" />
        
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* 회사 로고 */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", duration: 1 }}
              className="w-32 h-32 mx-auto mb-8 relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full animate-pulse" />
              <div className="absolute inset-2 bg-dark-400 rounded-full flex items-center justify-center">
                <Building2 className="w-16 h-16 text-primary-400" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Horizon</span>
              <span className="gradient-text-gold">Seaweed</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              미래 해조류 산업을 선도하는 혁신 기업
            </p>
          </motion.div>
        </div>
      </section>

      {/* 비전 & 미션 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 p-0.5 mr-4">
                  <div className="w-full h-full bg-dark-300 rounded-full flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">비전</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                블록체인과 IoT 기술을 융합한 스마트 김양식 시스템으로 
                전 세계 식량 문제 해결에 기여하고, 지속가능한 해조류 
                산업의 새로운 패러다임을 제시합니다.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-gold-500 to-orange-500 p-0.5 mr-4">
                  <div className="w-full h-full bg-dark-300 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold">미션</h2>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                혁신적인 수직형 스마트팜 기술로 김 생산의 효율성을 극대화하고,
                SEAWEED 토큰 생태계를 통해 생산자와 소비자가 함께 성장하는
                지속가능한 가치 사슬을 구축합니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 핵심 가치 섹션 */}
      <section className="py-20 bg-dark-300/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              핵심 <span className="gradient-text-gold">가치</span>
            </h2>
            <p className="text-xl text-gray-400">
              HorizonSeaweed가 추구하는 4가지 핵심 가치
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ type: "spring" }}
                    className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary-500/20 to-cyan-500/20 rounded-full flex items-center justify-center"
                  >
                    <Icon className="w-12 h-12 text-primary-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 연혁 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              회사 <span className="gradient-text">연혁</span>
            </h2>
            <p className="text-xl text-gray-400">
              혁신의 발자취
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className={`glass-dark p-6 rounded-2xl ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}>
                      <h3 className="text-2xl font-bold mb-2 gradient-text-gold">
                        {item.year}
                      </h3>
                      <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 p-0.5">
                      <div className="w-full h-full bg-dark-300 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 특허 기술 섹션 */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Sparkles className="w-16 h-16 text-gold-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              HorizonSeaweed <span className="gradient-text-gold">독점 특허</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              육상 김양식 분야의 핵심 기술을 보유한 유일한 기업으로,
              2건의 원천 특허를 통해 기술적 우위를 확보하고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <Shield className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold">수직형 양식 구조</h4>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <Shield className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold">스마트 순환 시스템</h4>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass p-6 rounded-xl"
              >
                <Shield className="w-10 h-10 text-primary-400 mx-auto mb-3" />
                <h4 className="font-bold">AI 생육 관리 기술</h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}