'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Lock,
  ShieldOff,
  Info,
  UserX
} from 'lucide-react'
import Navigation from '@/components/Navigation'

export default function TeamPage() {
  return (
    <>
      <Navigation />
      
      <section className="pt-24 pb-20 min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 flex items-center justify-center">
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            {/* 잠금 아이콘 */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260,
                damping: 20,
                delay: 0.2 
              }}
              className="mb-8"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <Lock className="w-16 h-16 text-red-500" />
              </div>
            </motion.div>

            {/* 제목 */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              팀 정보 <span className="gradient-text">비공개</span>
            </motion.h1>

            {/* 구분선 */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-32 h-1 bg-gradient-to-r from-red-500 to-orange-500 mx-auto mb-8"
            />

            {/* 메시지 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-dark p-8 rounded-3xl border border-red-500/20"
            >
              <div className="flex items-center justify-center mb-6">
                <Info className="w-6 h-6 text-orange-500 mr-2" />
                <p className="text-2xl font-semibold text-gray-200">
                  접근 제한 안내
                </p>
              </div>
              
              <p className="text-xl text-gray-300 mb-4">
                너무 많은 문의 폭주로 인해
              </p>
              <p className="text-xl text-gray-300 mb-8">
                <span className="text-red-400 font-bold">관계자 등급 회원</span>에게만 공개됩니다.
              </p>

              {/* 아이콘들 */}
              <div className="flex justify-center gap-6 mb-8">
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <UserX className="w-8 h-8 text-gray-500" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  <ShieldOff className="w-8 h-8 text-gray-500" />
                </motion.div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <Lock className="w-8 h-8 text-gray-500" />
                </motion.div>
              </div>

              {/* 추가 정보 */}
              <div className="mt-8 p-4 bg-dark-300/50 rounded-2xl border border-gray-700">
                <p className="text-sm text-gray-400">
                  팀 정보 열람을 원하시는 분은 공식 채널을 통해 문의해 주시기 바랍니다.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Contact: info@horizonseaweed.com
                </p>
              </div>
            </motion.div>

            {/* 홈으로 돌아가기 버튼 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-12"
            >
              <a
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                홈으로 돌아가기
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}