'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { ArrowLeft, Maximize2, Move3D, RotateCw } from 'lucide-react'
import Link from 'next/link'

// 3D 컴포넌트는 클라이언트 사이드에서만 로드
const Tank3D = dynamic(() => import('@/components/BasicTank3D'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-screen flex items-center justify-center bg-dark-400">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-xl text-gray-400">3D 수조 로딩중...</p>
      </div>
    </div>
  )
})

export default function SmartFarm3DPage() {
  return (
    <>
      <Navigation />
      
      <div className="relative min-h-screen bg-dark-400">
        {/* 헤더 바 */}
        <div className="absolute top-20 left-0 right-0 z-10 bg-dark-400/90 backdrop-blur-md border-b border-gray-800">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Link 
                  href="/technology" 
                  className="px-4 py-2 bg-primary-600/20 text-primary-400 rounded-lg hover:bg-primary-600/30 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  기술 안내로 돌아가기
                </Link>
                <h1 className="text-2xl font-bold">
                  <span className="gradient-text">3D 스마트팜</span> 시스템
                </h1>
              </div>
              
              {/* 컨트롤 안내 */}
              <div className="hidden md:flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Move3D className="w-4 h-4" />
                  <span>마우스 드래그: 회전</span>
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4" />
                  <span>스크롤: 확대/축소</span>
                </div>
                <div className="flex items-center gap-2">
                  <RotateCw className="w-4 h-4" />
                  <span>우클릭 드래그: 이동</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 3D 뷰어 */}
        <div className="pt-32 pb-4" style={{ height: '100vh' }}>
          <Tank3D />
        </div>
        
        {/* 모바일 컨트롤 안내 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden fixed bottom-0 left-0 right-0 bg-dark-400/95 backdrop-blur-md border-t border-gray-800 p-4"
        >
          <div className="text-center text-sm text-gray-400">
            <p className="mb-2 font-semibold text-white">3D 조작 방법</p>
            <div className="grid grid-cols-2 gap-2">
              <div>한 손가락: 회전</div>
              <div>두 손가락: 확대/축소</div>
            </div>
          </div>
        </motion.div>
        
        {/* 시스템 정보 오버레이 */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute top-40 right-4 hidden lg:block w-80"
        >
          <div className="glass-dark p-6 rounded-2xl">
            <h3 className="text-xl font-bold mb-4 gradient-text">시스템 사양</h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">총 높이</span>
                <span className="text-white font-semibold">7.5m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">층수</span>
                <span className="text-white font-semibold">5층</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">수조 개수</span>
                <span className="text-white font-semibold">5개</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">양식 면적</span>
                <span className="text-white font-semibold">400㎡</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">생산량</span>
                <span className="text-white font-semibold">연 500톤</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">수확 횟수</span>
                <span className="text-white font-semibold">연 36회</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-gray-800">
              <h4 className="font-bold mb-3 text-primary-400">핵심 기술</h4>
              <div className="space-y-2 text-sm text-gray-300">
                <div>• AI 자동 환경 제어</div>
                <div>• IoT 센서 모니터링</div>
                <div>• 수직형 순환 시스템</div>
                <div>• LED 최적 파장 조명</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  )
}