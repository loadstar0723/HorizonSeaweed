'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-8xl font-bold gradient-text mb-4">404</h1>
          <h2 className="text-4xl font-bold mb-4">페이지를 찾을 수 없습니다</h2>
          <p className="text-gray-400 mb-8 max-w-md">
            요청하신 페이지가 존재하지 않거나 이동되었습니다.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
          >
            홈으로 돌아가기
          </Link>
        </motion.div>
      </div>
    </>
  )
}