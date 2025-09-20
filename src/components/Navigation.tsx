'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Home, 
  Building2, 
  Cpu, 
  Coins, 
  Factory,
  ChartBar,
  Users,
  Phone,
  Waves,
  FileText,
  Box,
  ChevronDown
} from 'lucide-react'

const navItems = [
  { href: '/', label: '홈', icon: Home },
  { href: '/smart-farming', label: '스마트 육상 김양식', icon: Waves },
  { href: '/patents', label: '특허 안내', icon: FileText },
  { href: '/technology', label: '기술 안내', icon: Cpu },
  { href: '/facilities', label: '시설 안내', icon: Building2 },
  { href: '/3d-smartfarm', label: '3D 스마트팜 보기', icon: Box },
  { href: '/dashboard', label: '실시간 대시보드', icon: ChartBar },
  { href: '/industry', label: '김 산업', icon: Factory },
  { href: '/company', label: '회사소개', icon: Building2 },
  { href: '/blockchain', label: '블록체인', icon: Coins },
  { href: '/team', label: '팀', icon: Users },
  { href: '/contact', label: '문의', icon: Phone },
]

const navGroups = [
  {
    label: '기술',
    items: [
      { href: '/smart-farming', label: '스마트 육상 김양식', icon: Waves },
      { href: '/patents', label: '특허 안내', icon: FileText },
      { href: '/technology', label: '기술 안내', icon: Cpu },
      { href: '/facilities', label: '시설 안내', icon: Building2 },
      { href: '/3d-smartfarm', label: '3D 스마트팜 보기', icon: Box },
    ]
  },
  {
    label: '비즈니스',
    items: [
      { href: '/dashboard', label: '실시간 대시보드', icon: ChartBar },
      { href: '/industry', label: '김 산업', icon: Factory },
      { href: '/blockchain', label: '블록체인', icon: Coins },
    ]
  },
  {
    label: '정보',
    items: [
      { href: '/company', label: '회사소개', icon: Building2 },
      { href: '/team', label: '팀', icon: Users },
      { href: '/contact', label: '문의', icon: Phone },
    ]
  }
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* 헤더 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-400/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* 로고 */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-primary-500 to-cyan-500 rounded-full blur-lg opacity-50"
                />
                <Waves className="w-12 h-12 md:w-14 md:h-14 text-primary-400 relative z-10" />
              </div>
              <div className="flex flex-col">
                <div className="text-2xl md:text-3xl font-bold">
                  <span className="gradient-text">Horizon</span>
                  <span className="gradient-text-gold">Seaweed</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-1 h-0.5 bg-gradient-to-r from-transparent to-gray-400 mr-2"></div>
                  <span className="text-lg md:text-xl text-gray-300 font-semibold tracking-wide whitespace-nowrap">지평선 김</span>
                </div>
              </div>
            </Link>

            {/* 데스크톱 메뉴 */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* 홈 링크 */}
              <Link
                href="/"
                className="text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors duration-300"
              >
                홈
              </Link>

              {/* 드롭다운 메뉴들 */}
              {navGroups.map((group) => (
                <div
                  key={group.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(group.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className="flex items-center space-x-1 text-lg font-medium text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2">
                    <span>{group.label}</span>
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeDropdown === group.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {activeDropdown === group.label && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 -ml-20 mt-2 w-72 glass-dark rounded-xl shadow-xl overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {group.items.map((item) => {
                            const Icon = item.icon
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center space-x-3 px-5 py-3 hover:bg-white/10 transition-all duration-300 ${
                                  pathname === item.href 
                                    ? 'text-primary-400 bg-primary-500/10 border-l-4 border-primary-400 font-semibold' 
                                    : 'text-gray-300 hover:text-primary-400 border-l-4 border-transparent'
                                }`}
                              >
                                <Icon className={`w-6 h-6 ${pathname === item.href ? 'text-primary-400' : ''}`} />
                                <span className="text-base font-medium">{item.label}</span>
                              </Link>
                            )
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* 모바일 메뉴 버튼 */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 p-2 group"
              aria-label="메뉴 토글"
            >
              {/* 배경 글로우 효과 */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-primary-500 rounded-lg blur-md"
              />
              
              {/* 테두리 효과 */}
              <motion.div
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-lg border-2 border-primary-400"
              />
              
              <AnimatePresence mode="wait">
                {!isOpen ? (
                  <motion.div
                    key="menu"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <Menu className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="relative z-10"
                  >
                    <X className="w-6 h-6 text-primary-400 group-hover:text-white transition-colors" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* 모바일 메뉴 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* 배경 오버레이 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            {/* 메뉴 패널 */}
            <motion.div className="absolute right-0 top-0 h-full w-72 bg-dark-300/95 backdrop-blur-lg shadow-2xl">
              <div className="pt-20 p-6">
                <div className="space-y-4">
                  {navItems.map((item, index) => {
                    const Icon = item.icon
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                            pathname === item.href 
                              ? 'bg-primary-500/20 border-2 border-primary-400 shadow-lg shadow-primary-500/30' 
                              : 'hover:bg-white/10 border-2 border-transparent'
                          }`}
                        >
                          <Icon className={`w-5 h-5 ${pathname === item.href ? 'text-primary-300' : 'text-primary-400'}`} />
                          <span className={`text-lg ${pathname === item.href ? 'font-bold text-primary-300' : ''}`}>{item.label}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}