'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FileText, Shield, Award, Lightbulb, ChevronRight, Calendar, Hash } from 'lucide-react'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'
import Image from 'next/image'

const patents = [
  {
    id: 1,
    title: '육상 김 양식 장치 및 방법',
    patentNumber: '제10-2024-XXXXXXX호',
    date: '2024년 특허 등록',
    description: '세계 최초 육상 환경에서 김을 대량 생산할 수 있는 혁신적인 수직형 양식 장치와 방법에 관한 원천 특허입니다. 기존 바다 양식 대비 40배 이상의 생산성을 실현합니다.',
    image: '/images/patents/kimtt1.png'
  },
  {
    id: 2,
    title: '스마트 김 양식 환경 제어 시스템',
    patentNumber: '제10-2024-YYYYYYY호',
    date: '2024년 특허 등록',
    description: 'IoT 센서와 AI 알고리즘을 활용한 김 생육 최적화 자동 제어 시스템입니다. 온도, pH, 조도, 영양분을 실시간으로 모니터링하고 자동 조절하여 최고 품질의 김을 생산합니다.',
    image: '/images/patents/kimtt2.png'
  }
]

export default function PatentsPage() {
  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-primary-900/20">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 1 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-gold-500 to-orange-500 rounded-full flex items-center justify-center mx-auto">
                <FileText className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text-gold">특허 안내</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              HorizonSeaweed의 핵심 특허 기술과 혁신적인 김양식 기술을 소개합니다
            </p>
          </motion.div>

          {/* 특허 개요 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="glass-dark p-8 rounded-3xl mb-12"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">
                육상 김양식 <span className="gradient-text-gold">원천 특허</span> 보유
              </h2>
              <p className="text-lg text-gray-300">
                세계 최초 육상 스마트 김양식 시스템의 핵심 특허를 보유하고 있으며,
                <br />
                지속적인 연구개발을 통해 기술 혁신을 선도하고 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-xl text-center"
              >
                <Award className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">2건</h3>
                <p className="text-gray-400">등록 특허</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-xl text-center"
              >
                <Lightbulb className="w-12 h-12 text-primary-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">100%</h3>
                <p className="text-gray-400">자체 기술</p>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 p-6 rounded-xl text-center"
              >
                <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                <h3 className="text-2xl font-bold mb-2">독점권</h3>
                <p className="text-gray-400">기술 보호</p>
              </motion.div>
            </div>
          </motion.div>

          {/* 특허 상세 */}
          {patents.map((patent, index) => (
            <motion.div
              key={patent.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="mb-12"
            >
              <div className="glass-dark p-8 rounded-3xl">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  {/* 특허 정보 */}
                  <div className={`${index % 2 === 0 ? 'order-1' : 'lg:order-2'}`}>
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-4">{patent.title}</h3>
                      <div className="flex flex-col gap-3 text-gray-400 mb-6">
                        <div className="flex items-center gap-2">
                          <Hash className="w-5 h-5" />
                          <span>특허번호: {patent.patentNumber}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5" />
                          <span>{patent.date}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-gray-300 leading-relaxed">{patent.description}</p>
                  </div>

                  {/* 특허증 이미지 */}
                  <div className={`${index % 2 === 0 ? 'order-2' : 'lg:order-1'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative rounded-2xl overflow-hidden shadow-2xl"
                    >
                      <Image
                        src={patent.image}
                        alt={`${patent.title} 특허증`}
                        width={800}
                        height={1000}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* 기술 경쟁력 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-dark p-8 rounded-3xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              특허 기술의 <span className="gradient-text">경쟁 우위</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text-gold">원천 기술 확보</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>세계 최초 10층 수직형 김양식 시스템</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>AI 기반 자동 환경 제어 알고리즘</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>특수 LED 파장 최적화 기술</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>순환식 해수 정화 시스템</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-4 gradient-text">기술적 진입장벽</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>5년 이상의 연구개발 노하우</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>복제 불가능한 생육 데이터베이스</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>글로벌 특허 출원으로 기술 보호</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-primary-400 mt-0.5 mr-2 flex-shrink-0" />
                    <span>독자적인 품질 관리 시스템</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}