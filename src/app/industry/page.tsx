'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  Globe, 
  Factory, 
  Users,
  Award,
  BarChart3,
  PieChart as PieChartIcon,
  MapPin,
  Leaf,
  Heart,
  Package,
  Pill,
  Sparkles,
  Beaker,
  ChefHat,
  Coffee,
  Cookie,
  Rocket,
  DollarSign,
  TrendingDown
} from 'lucide-react'
import { 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  LineChart,
  Line,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts'
import Navigation from '@/components/Navigation'
import ScrollToTop from '@/components/ScrollToTop'

// 글로벌 김 시장 데이터 (2024년 기준)
const globalMarketData = [
  { country: '한국', value: 28, amount: '36조원', color: '#3B82F6' },
  { country: '중국', value: 23, amount: '30조원', color: '#F59E0B' },
  { country: '일본', value: 18, amount: '23조원', color: '#EF4444' },
  { country: '미국/유럽', value: 16, amount: '21조원', color: '#10B981' },
  { country: '동남아', value: 9, amount: '12조원', color: '#8B5CF6' },
  { country: '기타', value: 6, amount: '7조원', color: '#EC4899' }
]

// 시장 성장 추이 (전체 김 관련 산업)
const growthData = [
  { year: '2020', value: 65, traditional: 45, newmarket: 20 },
  { year: '2021', value: 78, traditional: 50, newmarket: 28 },
  { year: '2022', value: 95, traditional: 55, newmarket: 40 },
  { year: '2023', value: 115, traditional: 60, newmarket: 55 },
  { year: '2024', value: 129, traditional: 65, newmarket: 64 },
  { year: '2025', value: 180, traditional: 70, newmarket: 110 },
  { year: '2026', value: 250, traditional: 75, newmarket: 175 },
  { year: '2027', value: 320, traditional: 80, newmarket: 240 },
  { year: '2028', value: 400, traditional: 85, newmarket: 315 },
  { year: '2029', value: 450, traditional: 90, newmarket: 360 },
  { year: '2030', value: 500, traditional: 100, newmarket: 400 }
]

// 한국 김 수출 현황 (2024년 기준)
const exportData = [
  { country: '미국', amount: 4800, growth: '+52%', trend: '김 스낵 붐' },
  { country: 'EU', amount: 3200, growth: '+78%', trend: '비건 트렌드' },
  { country: '일본', amount: 2800, growth: '+12%', trend: '프리미엄화' },
  { country: '동남아', amount: 2500, growth: '+65%', trend: 'K-Food 인기' },
  { country: '중동', amount: 1800, growth: '+125%', trend: '할랄 인증' },
  { country: '중국', amount: 1600, growth: '+28%', trend: '건강식품' }
]

// 김의 영양 성분
const nutritionData = [
  { name: '단백질', value: 40, icon: '💪' },
  { name: '식이섬유', value: 35, icon: '🌾' },
  { name: '미네랄', value: 15, icon: '⚡' },
  { name: '비타민', value: 10, icon: '💊' }
]

// 상세 영양성분
const detailedNutrition = [
  { name: '비타민 B12', amount: '133%', benefit: '신경계 건강, 적혈구 생성' },
  { name: '요오드', amount: '276%', benefit: '갑상선 기능, 대사 조절' },
  { name: '오메가-3', amount: '52%', benefit: '심혈관 건강, 뇌 기능' },
  { name: '철분', amount: '45%', benefit: '빈혈 예방, 산소 운반' },
  { name: '칼슘', amount: '28%', benefit: '뼈 건강, 근육 기능' },
  { name: '마그네슘', amount: '34%', benefit: '에너지 생성, 근육 이완' }
]

// 김 부가상품 카테고리
const valueAddedProducts = [
  {
    category: '조미김 & 전통김',
    icon: Package,
    products: ['조미김', '재래김', '도시락김', '전장김'],
    marketSize: '35조원',
    growth: '+25%',
    description: '김 산업의 핵심 기반 시장'
  },
  {
    category: '김밥 & K-Food',
    icon: ChefHat,
    products: ['김밥', '주먹밥', '김말이', '김밥 프랜차이즈'],
    marketSize: '22조원',
    growth: '+85%',
    description: '글로벌 K-Food의 대표 메뉴'
  },
  {
    category: '즉석식품',
    icon: Package,
    products: ['삼각김밥', '김밥도시락', '김말이튀김', '김자반'],
    marketSize: '8조원',
    growth: '+55%',
    description: '편의점 및 HMR 시장 주도'
  },
  {
    category: '건강 간식',
    icon: Cookie,
    products: ['김 스낵', '김 칩', '김 크래커', '김 시리얼바'],
    marketSize: '5조원',
    growth: '+35%',
    description: '프리미엄 건강 스낵 시장의 새로운 주류'
  },
  {
    category: '베이커리 & 디저트',
    icon: ChefHat,
    products: ['김 브레드', '김 쿠키', '김 마카롱', '김 아이스크림'],
    marketSize: '3조원',
    growth: '+42%',
    description: '퓨전 베이커리의 혁신적 재료'
  },
  {
    category: '조미료 & 소스',
    icon: Package,
    products: ['김 시즈닝', '김 소금', '김 소스', '김 오일'],
    marketSize: '4조원',
    growth: '+28%',
    description: '우마미 향미의 천연 조미료'
  }
]

// 바이오 소재 응용 분야
const bioMaterials = [
  {
    field: '의료 소재',
    icon: Pill,
    applications: [
      { name: '항암 물질 추출', value: '후코이단, 포피란 활용' },
      { name: '면역 증강제', value: '다당류 기반 의약품 개발' },
      { name: '상처 치료제', value: '알지네이트 하이드로겔' },
      { name: '약물 전달체', value: '나노입자 캡슐화 기술' }
    ],
    marketPotential: '15조원',
    status: '임상 2상 진행중'
  },
  {
    field: '화장품 원료',
    icon: Sparkles,
    applications: [
      { name: '안티에이징', value: '콜라겐 생성 촉진 성분' },
      { name: '미백 기능성', value: '멜라닌 억제 추출물' },
      { name: '보습 원료', value: '히알루론산 대체 물질' },
      { name: 'UV 차단제', value: '천연 자외선 흡수 성분' }
    ],
    marketPotential: '8조원',
    status: '상용화 단계'
  },
  {
    field: '기능성 식품',
    icon: Beaker,
    applications: [
      { name: '다이어트 보조제', value: '지방 흡수 억제 성분' },
      { name: '혈당 조절제', value: '당 대사 개선 물질' },
      { name: '장 건강 개선', value: '프리바이오틱스 소재' },
      { name: '항산화제', value: '활성산소 제거 성분' }
    ],
    marketPotential: '10조원',
    status: '제품 출시'
  }
]

// 원료 공급 혁신
const supplyInnovation = [
  {
    problem: '천연 김 생산량 한계',
    current: '연간 50만톤',
    solution: '수직형 스마트팜',
    potential: '연간 500만톤',
    impact: '10배 증산'
  },
  {
    problem: '지역적 생산 한계',
    current: '연안 지역 한정',
    solution: '육상 스마트팜',
    potential: '바닷물 있는 모든 지역',
    impact: '생산지역 무한 확장'
  },
  {
    problem: '품질 불균일',
    current: '70% 상품화율',
    solution: '표준화 시스템',
    potential: '95% 상품화율',
    impact: '25% 향상'
  },
  {
    problem: '원료 가격 변동성',
    current: '±40% 변동',
    solution: '안정적 공급망',
    potential: '±5% 변동',
    impact: '가격 안정화'
  }
]

// 김밥의 세계화
const kimbapGlobalization = [
  {
    region: '북미',
    stores: 2500,
    growth: '+85%',
    brands: ['Trader Joe\'s', 'Whole Foods', 'H Mart', 'Costco'],
    marketSize: '8조원'
  },
  {
    region: '유럽',
    stores: 1800,
    growth: '+120%',
    brands: ['Carrefour', 'Tesco', 'REWE', 'Albert Heijn'],
    marketSize: '5조원'
  },
  {
    region: '동남아',
    stores: 3200,
    growth: '+65%',
    brands: ['7-Eleven', 'FamilyMart', 'Lotus', 'Big C'],
    marketSize: '6조원'
  },
  {
    region: '중동',
    stores: 800,
    growth: '+150%',
    brands: ['Lulu', 'Carrefour ME', 'Spinneys', 'Union Coop'],
    marketSize: '3조원'
  }
]

// 미래 식량으로서의 김
const futureFoodAspects = [
  {
    aspect: '지속가능성',
    icon: Leaf,
    benefits: [
      '탄소 흡수: 육상 식물의 5배',
      '물 사용량: 해수 순환 시스템',
      '수직재배: 토지 사용 최소화',
      '무농약/무비료: 100% 친환경'
    ],
    impact: 'UN 지속가능개발목표 달성 기여'
  },
  {
    aspect: '영양 밀도',
    icon: Heart,
    benefits: [
      '단백질: 소고기의 2배',
      '철분: 시금치의 10배',
      '칼슘: 우유의 6배',
      '비타민 B12: 일일권장량의 133%'
    ],
    impact: '영양실조 해결의 열쇠'
  },
  {
    aspect: '생산 효율성',
    icon: Rocket,
    benefits: [
      '성장 속도: 10일 수확',
      '연간 수확: 36회',
      '단위면적당 수확량: 농작물의 40배',
      '전세계 생산 가능: 바닷물 있는 모든 지역'
    ],
    impact: '식량안보 강화'
  },
  {
    aspect: '가공 다양성',
    icon: Package,
    benefits: [
      '단백질 파우더 추출',
      '대체육 원료',
      '바이오플라스틱 소재',
      '기능성 식품 첨가물'
    ],
    impact: '식품산업 혁신'
  }
]

// 시장 확장 전략
const expansionStrategy = [
  {
    strategy: '글로벌 식품 기업 파트너십',
    targets: ['Nestlé', 'Unilever', 'PepsiCo', 'Mondelez'],
    potential: '50조원',
    timeline: '2025-2027'
  },
  {
    strategy: '제약/화장품 B2B 공급',
    targets: ['Johnson & Johnson', 'L\'Oréal', 'Estée Lauder', 'Pfizer'],
    potential: '30조원',
    timeline: '2026-2028'
  },
  {
    strategy: '프랜차이즈 사업',
    targets: ['김 전문 카페', '김 베이커리', '김 레스토랑'],
    potential: '20조원',
    timeline: '2025-2030'
  },
  {
    strategy: '온라인 D2C 플랫폼',
    targets: ['Amazon', 'Alibaba', '쿠팡', '네이버'],
    potential: '15조원',
    timeline: '2025-2026'
  }
]

// 한국의 혁신 경쟁력
const advantages = [
  {
    icon: Rocket,
    title: '스마트팜 기술 혁신',
    description: '세계 최초 수직형 10층 육상 김양식 시스템 개발',
    stats: '생산성 40배 향상'
  },
  {
    icon: Award,
    title: 'AI 품질 관리',
    description: '머신러닝 기반 실시간 품질 예측 및 최적화',
    stats: '불량률 0.5% 미만'
  },
  {
    icon: Factory,
    title: '365일 연중 생산',
    description: '기후 독립적 환경제어로 연 36회 수확 실현',
    stats: '생산 안정성 99.9%'
  },
  {
    icon: Globe,
    title: '글로벌 기술 표준',
    description: '김 스마트팜 국제표준 ISO 제정 주도',
    stats: '기술특허 95건 보유'
  },
  {
    icon: Leaf,
    title: '탄소 네거티브',
    description: '김 1톤당 CO2 1.5톤 흡수로 탄소중립 초과 달성',
    stats: '연간 75만톤 CO2 흡수'
  },
  {
    icon: DollarSign,
    title: '경제성 혁신',
    description: '전통 양식 대비 생산원가 60% 절감',
    stats: 'ROI 3년 이내'
  }
]

// 미래 성장 기회
const opportunities = [
  {
    title: '대체 단백질 시장',
    description: '식물성 단백질 원료로 김 활용 급증',
    growth: '+85%',
    market: '45조원',
    color: 'from-green-500 to-teal-500'
  },
  {
    title: '스마트팜 기술 수출',
    description: '김 양식 스마트팜 턴키 솔루션',
    growth: '+120%',
    market: '38조원',
    color: 'from-blue-500 to-purple-500'
  },
  {
    title: '바이오 헬스케어',
    description: '김 추출물 기반 신약 및 건강기능식품',
    growth: '+95%',
    market: '52조원',
    color: 'from-purple-500 to-pink-500'
  },
  {
    title: '탄소 크레딧',
    description: '김 양식을 통한 탄소 흡수 및 거래',
    growth: '+150%',
    market: '28조원',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    title: '우주 식량',
    description: 'NASA 선정 우주정거장 재배 작물',
    growth: '+200%',
    market: '15조원',
    color: 'from-red-500 to-yellow-500'
  },
  {
    title: '스킨케어 원료',
    description: '김 유래 콜라겐 및 항산화 물질',
    growth: '+75%',
    market: '32조원',
    color: 'from-pink-500 to-purple-500'
  }
]

export default function IndustryPage() {
  return (
    <>
      <Navigation />
      
      {/* 히어로 섹션 */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-400 via-dark-300 to-green-900/20" />
        
        {/* 배경 애니메이션 */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -left-40 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          />
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
              <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center">
                <Factory className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">글로벌</span> 김 산업
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              500조원 잠재력의 미래 식량 산업
            </p>
            <p className="text-lg text-primary-400 mb-8">
              한국이 주도하는 글로벌 김 혁명
            </p>
            
            {/* 핵심 통계 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-dark p-4 rounded-xl"
              >
                <div className="text-3xl font-bold gradient-text-gold">129조원</div>
                <div className="text-sm text-gray-400">현재 총 시장 규모</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="glass-dark p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-primary-400">500조원</div>
                <div className="text-sm text-gray-400">2030년 시장 전망</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-dark p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-green-400">+35%</div>
                <div className="text-sm text-gray-400">연평균 성장률</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-dark p-4 rounded-xl"
              >
                <div className="text-3xl font-bold text-purple-400">7개 분야</div>
                <div className="text-sm text-gray-400">신산업 카테고리</div>
              </motion.div>
            </div>
            
            {/* 시장 구성 요약 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">60조원</div>
                <div className="text-xs text-gray-400">전통 김 시장</div>
              </div>
              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">77조원</div>
                <div className="text-xs text-gray-400">부가상품 시장</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">33조원</div>
                <div className="text-xs text-gray-400">바이오 소재</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">22조원</div>
                <div className="text-xs text-gray-400">김밥 글로벌</div>
              </div>
              <div className="bg-gradient-to-br from-primary-500/20 to-cyan-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">115조원</div>
                <div className="text-xs text-gray-400">확장 전략</div>
              </div>
              <div className="bg-gradient-to-br from-red-500/20 to-yellow-500/20 p-4 rounded-lg">
                <div className="text-2xl font-bold">256조원</div>
                <div className="text-xs text-gray-400">미래 신시장</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 한국의 경쟁력 지표 */}
      <section className="py-12 bg-gradient-to-r from-primary-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-bold text-center mb-8">
              대한민국 김 산업 <span className="gradient-text-gold">글로벌 리더십</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center glass-dark p-4 rounded-xl hover-scale"
              >
                <div className="text-3xl font-bold gradient-text mb-1">#1</div>
                <div className="text-sm text-gray-400">김 수출 세계 1위</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center glass-dark p-4 rounded-xl hover-scale"
              >
                <div className="text-3xl font-bold text-primary-400 mb-1">21조원</div>
                <div className="text-sm text-gray-400">국내 시장 규모</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center glass-dark p-4 rounded-xl hover-scale"
              >
                <div className="text-3xl font-bold text-green-400 mb-1">70개국</div>
                <div className="text-sm text-gray-400">수출 국가</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center glass-dark p-4 rounded-xl hover-scale"
              >
                <div className="text-3xl font-bold text-purple-400 mb-1">85%</div>
                <div className="text-sm text-gray-400">프리미엄 시장 점유율</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                className="text-center glass-dark p-4 rounded-xl hover-scale"
              >
                <div className="text-3xl font-bold gradient-text-gold mb-1">특허 95건</div>
                <div className="text-sm text-gray-400">김 양식 기술 특허</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 글로벌 시장 현황 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              글로벌 <span className="gradient-text-gold">시장 현황</span>
            </h2>
            <p className="text-xl text-gray-400">
              세계 김 시장의 현재와 미래
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* 파이 차트 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">국가별 시장 점유율</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={globalMarketData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={(entry) => `${entry.country}: ${entry.value}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {globalMarketData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {globalMarketData.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: item.color }} />
                    <span className="text-sm">{item.country}: {item.amount}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* 라인 차트 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold mb-6">시장 성장 전망 (조원)</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={growthData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="year" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Legend />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#10B981" 
                      strokeWidth={4}
                      dot={{ fill: '#10B981', r: 6 }}
                      activeDot={{ r: 8 }}
                      name="전체 시장"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="traditional" 
                      stroke="#3B82F6" 
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      dot={{ fill: '#3B82F6', r: 4 }}
                      name="전통 김"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="newmarket" 
                      stroke="#F59E0B" 
                      strokeWidth={3}
                      dot={{ fill: '#F59E0B', r: 5 }}
                      name="신산업"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="text-center mt-6">
                <span className="text-sm text-gray-400">2030년 총 시장 규모</span>
                <div className="text-3xl font-bold gradient-text-gold">500조원</div>
                <p className="text-xs text-gray-500 mt-2">전통시장 100조 + 신산업 400조</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 한국의 혁신 경쟁력 */}
      <section className="py-20 bg-dark-300/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              한국의 <span className="gradient-text">혁신 경쟁력</span>
            </h2>
            <p className="text-xl text-gray-400">
              스마트팜 기술로 주도하는 김 산업 혁명
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon
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
                      <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
                      <p className="text-gray-400 mb-4">{advantage.description}</p>
                      <div className="inline-flex items-center bg-primary-500/20 px-4 py-2 rounded-full">
                        <BarChart3 className="w-4 h-4 text-primary-400 mr-2" />
                        <span className="text-primary-400 font-semibold">{advantage.stats}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 수출 현황 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              글로벌 <span className="gradient-text-gold">수출 혁명</span>
            </h2>
            <p className="text-xl text-gray-400">
              폭발적으로 성장하는 K-김의 세계 진출
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="glass-dark p-8 rounded-2xl"
            >
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={exportData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="country" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                      labelStyle={{ color: '#F3F4F6' }}
                    />
                    <Bar dataKey="amount" fill="#3B82F6" radius={[8, 8, 0, 0]}>
                      {exportData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${220 + index * 20}, 70%, 50%)`} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                {exportData.map((item, index) => (
                  <div key={index} className="bg-white/5 p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 text-primary-400 mr-2" />
                        <span className="font-semibold">{item.country}</span>
                      </div>
                      <span className="text-green-400 font-bold">{item.growth}</span>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1">{item.amount.toLocaleString()}억원</div>
                    <div className="text-xs text-primary-300">{item.trend}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 시장 기회 */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-green-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              미래 성장 <span className="gradient-text">엔진</span>
            </h2>
            <p className="text-xl text-gray-400">
              210조원 규모의 신성장 동력
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="glass-dark p-6 rounded-2xl hover-scale h-full">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${opportunity.color} p-0.5 mx-auto mb-4`}>
                    <div className="w-full h-full bg-dark-300 rounded-full flex items-center justify-center">
                      <TrendingUp className="w-10 h-10 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{opportunity.description}</p>
                  <div className="space-y-2">
                    <div>
                      <div className={`text-2xl font-bold bg-gradient-to-r ${opportunity.color} bg-clip-text text-transparent`}>
                        {opportunity.growth}
                      </div>
                      <div className="text-xs text-gray-500">연평균 성장률</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">
                        {opportunity.market}
                      </div>
                      <div className="text-xs text-gray-500">시장 규모</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 김의 영양 가치 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">
              김의 <span className="gradient-text-gold">영양 가치</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              슈퍼푸드로 인정받는 김의 뛰어난 영양 성분
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {nutritionData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-6 rounded-xl"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <div className="text-2xl font-bold text-primary-400">{item.value}%</div>
                  <div className="text-gray-400">{item.name}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 상세 영양성분 */}
      <section className="py-20 bg-gradient-to-br from-green-900/20 to-teal-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12">
              김의 <span className="gradient-text">상세 영양성분</span>
            </h2>
            <div className="glass-dark p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {detailedNutrition.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4 p-4 bg-white/5 rounded-xl"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl font-bold text-white">{item.amount}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-400">{item.benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400">* 일일 권장 섭취량 대비 김 100g 기준</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 김 부가상품 시장 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              김 <span className="gradient-text-gold">부가상품 시장</span>
            </h2>
            <p className="text-xl text-gray-400">
              77조원 규모의 고부가가치 상품 시장
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {valueAddedProducts.map((category, index) => {
              const Icon = category.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-2xl hover-glow"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 p-0.5 mr-4">
                      <div className="w-full h-full bg-dark-300 rounded-xl flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {category.products.map((product, idx) => (
                      <div key={idx} className="bg-white/5 px-3 py-2 rounded-lg text-sm">
                        {product}
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex justify-between items-center pt-6 border-t border-gray-800">
                    <div>
                      <span className="text-gray-400 text-sm">시장 규모</span>
                      <div className="text-2xl font-bold gradient-text-gold">{category.marketSize}</div>
                    </div>
                    <div className="text-right">
                      <span className="text-gray-400 text-sm">연평균 성장률</span>
                      <div className="text-2xl font-bold text-green-400">{category.growth}</div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 바이오 소재 시장 */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              바이오 <span className="gradient-text">소재 혁신</span>
            </h2>
            <p className="text-xl text-gray-400">
              33조원 규모의 미래 신산업
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {bioMaterials.map((material, index) => {
              const Icon = material.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-2xl hover-glow h-full"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 mx-auto mb-4">
                      <div className="w-full h-full bg-dark-300 rounded-2xl flex items-center justify-center">
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{material.field}</h3>
                    <div className="inline-flex items-center bg-purple-500/20 px-4 py-2 rounded-full">
                      <span className="text-purple-400 font-semibold">시장규모: {material.marketPotential}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-6">
                    {material.applications.map((app, idx) => (
                      <div key={idx} className="bg-white/5 p-4 rounded-xl">
                        <h4 className="font-semibold mb-1">{app.name}</h4>
                        <p className="text-sm text-gray-400">{app.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="text-center pt-4 border-t border-gray-800">
                    <span className="text-sm text-gray-400">개발 현황</span>
                    <div className="text-lg font-semibold text-primary-400">{material.status}</div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 원료 공급 혁신 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              원료 공급 <span className="gradient-text-gold">혁신</span>
            </h2>
            <p className="text-xl text-gray-400">
              스마트팜으로 해결하는 원료 부족 문제
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="glass-dark p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8">
                {supplyInnovation.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/5 p-6 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <TrendingDown className="w-8 h-8 text-red-400" />
                      <TrendingUp className="w-8 h-8 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.problem}</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">현재</span>
                        <span className="text-red-400 font-semibold">{item.current}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">해결책</span>
                        <span className="text-primary-400 font-semibold">{item.solution}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400">잠재력</span>
                        <span className="text-green-400 font-semibold">{item.potential}</span>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <div className="text-center">
                          <div className="text-2xl font-bold gradient-text">{item.impact}</div>
                          <div className="text-sm text-gray-400">개선 효과</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 김밥의 세계화 */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 to-purple-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              김밥의 <span className="gradient-text">세계화</span>
            </h2>
            <p className="text-xl text-gray-400">
              K-Food의 대표주자, 글로벌 22조원 시장
            </p>
          </motion.div>

          {/* 인기 증가 트렌드 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass-dark p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-center">
                글로벌 김밥 <span className="gradient-text-gold">인기 폭발</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold gradient-text mb-2">+1,200%</div>
                  <div className="text-gray-400">SNS 언급량 증가</div>
                  <div className="text-sm text-gray-500">(2020-2024)</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary-400 mb-2">Top 10</div>
                  <div className="text-gray-400">구글 트렌드 한식</div>
                  <div className="text-sm text-gray-500">전 세계 검색량</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2">3.8M</div>
                  <div className="text-gray-400">#Kimbap 해시태그</div>
                  <div className="text-sm text-gray-500">인스타그램 게시물</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-400 mr-3" />
                  <p className="text-gray-300">
                    <span className="font-semibold">헬시 트렌드:</span> 저칼로리, 고단백 한끼 식사로 인기
                  </p>
                </div>
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-blue-400 mr-3" />
                  <p className="text-gray-300">
                    <span className="font-semibold">K-컬처 영향:</span> K-드라마, K-팝 스타들의 김밥 먹방 확산
                  </p>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-400 mr-3" />
                  <p className="text-gray-300">
                    <span className="font-semibold">MZ세대 선호:</span> 커스터마이징 가능한 퓨전 김밥 인기
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {kimbapGlobalization.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-dark p-6 rounded-2xl text-center hover-scale"
              >
                <div className="text-3xl font-bold gradient-text mb-2">{region.region}</div>
                <div className="text-5xl font-bold text-primary-400 mb-4">{region.stores}</div>
                <div className="text-sm text-gray-400 mb-4">판매 매장</div>
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-4 h-4 text-green-400 mr-1" />
                  <span className="text-green-400 font-semibold">{region.growth}</span>
                </div>
                <div className="text-2xl font-bold gradient-text-gold">{region.marketSize}</div>
                <div className="mt-4 pt-4 border-t border-gray-800">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {region.brands.slice(0, 2).map((brand, idx) => (
                      <span key={idx} className="text-xs bg-white/10 px-2 py-1 rounded">
                        {brand}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 미래 식량으로서의 김 */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              미래 식량 <span className="gradient-text-gold">김</span>
            </h2>
            <p className="text-xl text-gray-400">
              인류의 지속가능한 미래를 위한 해답
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {futureFoodAspects.map((aspect, index) => {
              const Icon = aspect.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-2xl"
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 p-0.5 mr-4">
                      <div className="w-full h-full bg-dark-300 rounded-2xl flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">{aspect.aspect}</h3>
                      <p className="text-primary-400">{aspect.impact}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {aspect.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3 flex-shrink-0" />
                        <p className="text-gray-300">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 시장 확장 전략 */}
      <section className="py-20 bg-gradient-to-br from-primary-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              시장 확장 <span className="gradient-text">전략</span>
            </h2>
            <p className="text-xl text-gray-400">
              115조원 규모의 글로벌 시장 진출 로드맵
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="space-y-6">
              {expansionStrategy.map((strategy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-dark p-8 rounded-2xl hover-glow"
                >
                  <div className="grid md:grid-cols-3 gap-6 items-center">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{strategy.strategy}</h3>
                      <div className="flex flex-wrap gap-2">
                        {strategy.targets.map((target, idx) => (
                          <span key={idx} className="text-sm bg-primary-500/20 px-3 py-1 rounded-full text-primary-400">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-center">
                      <DollarSign className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                      <div className="text-3xl font-bold gradient-text-gold">{strategy.potential}</div>
                      <div className="text-sm text-gray-400">시장 잠재력</div>
                    </div>
                    <div className="text-center">
                      <Rocket className="w-8 h-8 text-primary-400 mx-auto mb-2" />
                      <div className="text-lg font-semibold">{strategy.timeline}</div>
                      <div className="text-sm text-gray-400">실행 시기</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center glass-dark p-8 rounded-2xl"
            >
              <h3 className="text-3xl font-bold mb-4">
                총 시장 잠재력
              </h3>
              <div className="text-6xl font-bold gradient-text mb-4">500조원</div>
              <p className="text-xl text-gray-400">
                2030년까지 달성 가능한 글로벌 김 산업 총 규모
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <ScrollToTop />
    </>
  )
}