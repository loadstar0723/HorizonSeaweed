'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Mail, 
  MapPin, 
  Clock,
  Globe,
  Building2,
  Copy,
  Check
} from 'lucide-react'
import Navigation from '@/components/Navigation'

const contactInfo = [
  {
    icon: Mail,
    title: '이메일',
    content: 'loadstar0724@gmail.com',
    subContent: '24시간 문의 접수'
  },
  {
    icon: MapPin,
    title: '주소',
    content: '전북특별자치도 김제시 진봉면 가실리 1049-12',
    subContent: 'HorizonSeaweed'
  },
  {
    icon: Globe,
    title: '웹사이트',
    content: 'www.horizonseaweed.co.kr',
    subContent: '온라인 문의 가능'
  }
]

export default function ContactPage() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index)
      setTimeout(() => setCopiedIndex(null), 2000)
    }).catch(() => {
      alert('복사에 실패했습니다. 다시 시도해주세요.')
    })
  }

  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-dark-400 to-dark-300">
        <div className="container mx-auto px-4">
          {/* 헤더 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="gradient-text">문의</span>하기
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              HorizonSeaweed와 함께 미래를 만들어가세요
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {/* 연락처 정보 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold mb-8">연락처 정보</h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="glass-dark p-6 rounded-2xl flex items-start"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-cyan-500 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <div className="flex items-center gap-3">
                          <p className="text-primary-400 flex-1 break-all">{info.content}</p>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy(info.content, index)}
                            className="p-2 rounded-lg bg-dark-300 hover:bg-white/10 transition-all duration-200 group flex-shrink-0"
                            title="복사하기"
                          >
                            <AnimatePresence mode="wait">
                              {copiedIndex === index ? (
                                <motion.div
                                  key="check"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                  className="flex items-center gap-1"
                                >
                                  <Check className="w-4 h-4 text-green-400" />
                                  <span className="text-xs text-green-400">복사됨</span>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="copy"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  exit={{ scale: 0 }}
                                >
                                  <Copy className="w-4 h-4 text-gray-400 group-hover:text-primary-400" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </motion.button>
                        </div>
                        <p className="text-sm text-gray-500">{info.subContent}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>

              {/* 영업 시간 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="glass-dark p-8 rounded-2xl"
              >
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary-400 mr-2" />
                  영업 시간
                </h3>
                <div className="space-y-2 text-gray-400">
                  <div className="flex justify-between">
                    <span>월요일 - 금요일</span>
                    <span className="text-white">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>토요일</span>
                    <span className="text-white">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>일요일 / 공휴일</span>
                    <span className="text-red-400">휴무</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>

          {/* 지도 섹션 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="glass-dark p-2 rounded-2xl">
              <div className="bg-gradient-to-br from-primary-900/20 to-cyan-900/20 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center">
                  <Building2 className="w-16 h-16 text-primary-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">오시는 길</h3>
                  <p className="text-gray-400 mb-4">전북특별자치도 김제시 진봉면 가실리 1049-12</p>
                  <p className="text-sm text-gray-500">HorizonSeaweed 본사</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}