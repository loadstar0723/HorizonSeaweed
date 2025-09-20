'use client'

import React from 'react'
import Image from 'next/image'
import './print.css'
import { 
  Building2, 
  Cpu, 
  Factory, 
  Waves, 
  FileText, 
  Box,
  ChartBar,
  Coins,
  Users,
  Phone,
  Calculator,
  TrendingUp,
  PiggyBank,
  BarChart3,
  Shield,
  Leaf,
  Globe,
  Brain,
  Filter,
  TreePine,
  Sun,
  Award,
  Droplets,
  Thermometer,
  Wind,
  X,
  CheckCircle,
  Zap,
  Target,
  Eye,
  FileImage,
  Layers,
  Gauge,
  Database,
  Settings,
  Activity,
  Wifi,
  Camera,
  Rocket,
  Sparkles,
  Timer,
  Beaker,
  Calendar,
  Clock,
  DollarSign,
  Trophy,
  Star,
  Lock,
  Crown
} from 'lucide-react'

export default function PrintPage() {
  // Print 버튼 클릭 시 인쇄
  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      {/* 인쇄 버튼 - 화면에만 표시 */}
      <div className="no-print fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
        >
          <FileText className="w-5 h-5" />
          인쇄하기
        </button>
      </div>

      {/* 인쇄 콘텐츠 */}
      <div className="print-content bg-white text-black">
        {/* 표지 */}
        <section className="page-break-after">
          <div className="h-screen flex flex-col items-center justify-center text-center p-8">
            <Waves className="w-20 h-20 text-primary-600 mb-8" />
            <h1 className="text-4xl font-bold mb-4">HorizonSeaweed</h1>
            <h2 className="text-2xl mb-8">지평선 김</h2>
            <p className="text-xl mb-4">세계 최초 육상 스마트 김양식</p>
            <p className="text-lg text-gray-600 mb-4">김제평야의 드넓은 벼 곡창지대에서 시작된 지평선 김의 혁신</p>
            <p className="text-lg text-gray-600">바다가 없는 내륙에서도, 도시 한복판에서도</p>
            <p className="text-lg text-gray-600 mb-8">전 세계 어디서나 최고급 김을 생산할 수 있습니다</p>
            <div className="mt-auto text-sm text-gray-500">
              <p>© 2016 HorizonSeaweed. All rights reserved.</p>
              <p>{new Date().toLocaleDateString('ko-KR')}</p>
            </div>
          </div>
        </section>

        {/* 목차 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">목차</h2>
            <ol className="space-y-3 text-lg">
              <li>1. 회사 소개</li>
              <li>2. 핵심 기술 소개</li>
              <li>3. 친환경 김양식</li>
              <li>4. 글로벌 확장성</li>
              <li>5. 스마트 김양식 프로세스</li>
              <li>6. 핵심 기술력</li>
              <li>7. 김 종류별 특성</li>
              <li>8. 특허 기술</li>
              <li>9. 스마트 육상 김양식</li>
              <li>10. 기술 안내</li>
              <li>11. 시설 안내</li>
              <li>12. 김 산업</li>
              <li>13. 연락처</li>
            </ol>
          </div>
        </section>

        {/* 1. 회사 소개 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">1. 회사 소개</h2>
            
            <h3 className="text-2xl font-semibold mb-4">미래 해조류 산업을 선도하는 혁신 기업</h3>
            <p className="mb-6 text-justify">
              HorizonSeaweed는 세계 최초 육상 스마트 김양식 기술을 개발한 기업으로, 
              블록체인과 IoT 기술을 융합한 혁신적인 솔루션을 제공합니다.
            </p>

            <h3 className="text-xl font-semibold mb-3">비전</h3>
            <p className="mb-6 text-justify bg-gray-50 p-4 rounded">
              블록체인과 IoT 기술을 융합한 스마트 김양식 시스템으로 전 세계 식량 문제 해결에 기여하고, 
              지속가능한 해조류 산업의 새로운 패러다임을 제시합니다.
            </p>

            <h3 className="text-xl font-semibold mb-3">미션</h3>
            <p className="mb-6 text-justify bg-gray-50 p-4 rounded">
              혁신적인 수직형 스마트팜 기술로 김 생산의 효율성을 극대화하고,
              SEAWEED 토큰 생태계를 통해 생산자와 소비자가 함께 성장하는
              지속가능한 가치 사슬을 구축합니다.
            </p>

            <h3 className="text-xl font-semibold mb-3">핵심 가치</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Target className="w-5 h-5" />
                  혁신
                </h4>
                <p className="text-sm">끊임없는 기술 혁신으로 산업을 선도합니다</p>
              </div>
              <div className="border p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5" />
                  지속가능성
                </h4>
                <p className="text-sm">환경과 미래를 생각하는 지속가능한 솔루션을 제공합니다</p>
              </div>
              <div className="border p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5" />
                  품질
                </h4>
                <p className="text-sm">최고 품질의 제품과 서비스를 보장합니다</p>
              </div>
              <div className="border p-4">
                <h4 className="font-bold flex items-center gap-2 mb-2">
                  <Globe className="w-5 h-5" />
                  글로벌
                </h4>
                <p className="text-sm">세계 시장을 향한 글로벌 비전을 추구합니다</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">회사 연혁</h3>
            <div className="space-y-2">
              <div className="flex gap-4 p-2 border-l-4 border-primary-600">
                <span className="font-bold">2020</span>
                <div>
                  <p className="font-semibold">회사 설립</p>
                  <p className="text-sm text-gray-600">육상 김양식 기술 개발 시작</p>
                </div>
              </div>
              <div className="flex gap-4 p-2 border-l-4 border-primary-600">
                <span className="font-bold">2021</span>
                <div>
                  <p className="font-semibold">특허 출원</p>
                  <p className="text-sm text-gray-600">핵심 기술 3건 특허 출원</p>
                </div>
              </div>
              <div className="flex gap-4 p-2 border-l-4 border-primary-600">
                <span className="font-bold">2022</span>
                <div>
                  <p className="font-semibold">프로토타입 완성</p>
                  <p className="text-sm text-gray-600">10층 스마트팜 시제품 개발</p>
                </div>
              </div>
              <div className="flex gap-4 p-2 border-l-4 border-primary-600">
                <span className="font-bold">2023</span>
                <div>
                  <p className="font-semibold">상용화 시작</p>
                  <p className="text-sm text-gray-600">첫 상업용 스마트팜 구축</p>
                </div>
              </div>
              <div className="flex gap-4 p-2 border-l-4 border-primary-600">
                <span className="font-bold">2024</span>
                <div>
                  <p className="font-semibold">글로벌 진출</p>
                  <p className="text-sm text-gray-600">SEAWEED 토큰 런칭 및 해외 진출</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 핵심 기술 소개 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">2. 핵심 기술 소개</h2>

            <h3 className="text-2xl font-semibold mb-4">HorizonSeaweed만의 차별화된 혁신 기술</h3>
            <p className="mb-6 text-justify">
              육상 김양식 분야의 핵심 기술을 보유한 유일한 기업으로, 세계 최고 수준의 스마트팜 기술을 보유하고 있습니다.
            </p>

            <div className="space-y-6">
              <div className="border p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Building2 className="w-6 h-6 text-primary-600" />
                  <h4 className="text-xl font-bold">10층 수직 스마트팜</h4>
                </div>
                <p className="text-gray-700">세계 최초 아파트형 김양식 시스템으로 최소 면적에서 최대 생산</p>
                <ul className="mt-2 text-sm list-disc list-inside ml-4">
                  <li>공간 효율성 극대화</li>
                  <li>단위 면적당 생산량 10배 증가</li>
                  <li>도시형 농업 가능</li>
                </ul>
              </div>

              <div className="border p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-6 h-6 text-primary-600" />
                  <h4 className="text-xl font-bold">IoT 자동화 시스템</h4>
                </div>
                <p className="text-gray-700">24시간 실시간 모니터링과 AI 기반 최적 생육 환경 제어</p>
                <ul className="mt-2 text-sm list-disc list-inside ml-4">
                  <li>온도, 염도, pH 자동 조절</li>
                  <li>빅데이터 분석 기반 생육 예측</li>
                  <li>원격 모니터링 및 제어</li>
                </ul>
              </div>

              <div className="border p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Coins className="w-6 h-6 text-primary-600" />
                  <h4 className="text-xl font-bold">SEAWEED 토큰</h4>
                </div>
                <p className="text-gray-700">Polygon 기반 100억개 발행, 다양한 소각 메커니즘으로 가치 상승</p>
                <ul className="mt-2 text-sm list-disc list-inside ml-4">
                  <li>블록체인 기반 투명한 거래</li>
                  <li>스마트팜 투자 및 수익 공유</li>
                  <li>품질 인증 및 이력 관리</li>
                </ul>
              </div>

              <div className="border p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-6 h-6 text-primary-600" />
                  <h4 className="text-xl font-bold">독점 특허 기술</h4>
                </div>
                <p className="text-gray-700">HorizonSeaweed만의 혁신적인 육상 김양식 특허 기술 보유</p>
                <ul className="mt-2 text-sm list-disc list-inside ml-4">
                  <li>수직형 양식 구조 특허</li>
                  <li>스마트 순환 시스템 특허</li>
                  <li>AI 생육 관리 기술 특허</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-8">주요 통계</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 text-center rounded">
                <p className="text-3xl font-bold text-primary-600">200조원</p>
                <p className="text-sm">글로벌 해조류 시장 규모</p>
              </div>
              <div className="bg-gray-50 p-4 text-center rounded">
                <p className="text-3xl font-bold text-primary-600">20%</p>
                <p className="text-sm">연평균 시장 성장률</p>
              </div>
              <div className="bg-gray-50 p-4 text-center rounded">
                <p className="text-3xl font-bold text-primary-600">36회</p>
                <p className="text-sm">연간 수확 (바다 8회)</p>
              </div>
              <div className="bg-gray-50 p-4 text-center rounded">
                <p className="text-3xl font-bold text-primary-600">99.9%</p>
                <p className="text-sm">품질 균일성</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 친환경 김양식 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">3. 친환경 김양식</h2>

            <h3 className="text-2xl font-semibold mb-4">지속가능한 친환경 김양식</h3>
            <p className="mb-6 text-justify">
              HorizonSeaweed의 혁신적인 기술로 환경과 미래를 생각합니다. 
              ESG 경영 실천 기업으로서 친환경 인증을 받은 지속가능한 미래를 만들어갑니다.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Brain className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">AI IoT 제어</h4>
                </div>
                <p className="text-sm">인공지능 자동화 시스템</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 실시간 환경 최적화</li>
                  <li>• 에너지 사용 최소화</li>
                  <li>• 예측 기반 자원 관리</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Filter className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">청정 해수 필터링</h4>
                </div>
                <p className="text-sm">깨끗한 친환경 바닷물</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 5단계 정밀 필터링</li>
                  <li>• 중금속 완벽 제거</li>
                  <li>• UV 살균 처리</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">친환경 양분</h4>
                </div>
                <p className="text-sm">자연 친화적 영양공급</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 100% 유기농 영양분</li>
                  <li>• 화학물질 무첨가</li>
                  <li>• 천연 미네랄 사용</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TreePine className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">유기농 재배</h4>
                </div>
                <p className="text-sm">무농약 청정 생산</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 농약 사용 ZERO</li>
                  <li>• 항생제 무첨가</li>
                  <li>• 자연 생장 환경</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">ESG 인증</h4>
                </div>
                <p className="text-sm">친환경 기업 인증</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 탄소 중립 달성</li>
                  <li>• 재생에너지 사용</li>
                  <li>• 지속가능 경영</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sun className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">사계절 생산</h4>
                </div>
                <p className="text-sm">365일 고품질 생산</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 기후 영향 제로</li>
                  <li>• 안정적 공급</li>
                  <li>• 균일한 품질</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">40배 생산성</h4>
                </div>
                <p className="text-sm">바다 대비 초고효율</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 면적당 40배 생산</li>
                  <li>• 자원 효율 극대화</li>
                  <li>• 폐기물 최소화</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="w-5 h-5 text-primary-600" />
                  <h4 className="font-bold">품질 보증</h4>
                </div>
                <p className="text-sm">안정적 고품질 김생산</p>
                <ul className="text-xs mt-2 space-y-1 ml-4">
                  <li>• 99.9% 품질 균일성</li>
                  <li>• HACCP 인증</li>
                  <li>• 블록체인 이력관리</li>
                </ul>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="flex items-center justify-center gap-4 text-green-700">
                <Leaf className="w-8 h-8" />
                <p className="text-lg font-semibold">
                  ESG 경영 실천 기업 | 친환경 인증 | 지속가능한 미래
                </p>
                <TreePine className="w-8 h-8" />
              </div>
            </div>
          </div>
        </section>

        {/* 4. 글로벌 확장성 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">4. 글로벌 확장성</h2>

            <h3 className="text-2xl font-semibold mb-4 text-center">
              전 세계 <span className="text-primary-600">150개국</span> 어디서나 가능한 김양식
            </h3>
            
            <p className="text-lg text-center mb-8">
              바닷물만 있으면 기후와 계절에 관계없이<br />
              전 세계 어디서든 고품질 김 생산이 가능합니다
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
                <h4 className="text-xl font-bold text-blue-800">글로벌 확장 가능성</h4>
              </div>
              <p className="text-center text-blue-700">
                중동 사막에서도, 도심 속에서도, 내륙 지역에서도 가능한 혁신
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="border rounded-lg p-4 text-center">
                <h4 className="font-bold mb-2 text-primary-600">지리적 한계 극복</h4>
                <p className="text-sm">열대부터 극지방까지 모든 기후대에서 생산 가능</p>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <h4 className="font-bold mb-2 text-primary-600">완벽한 환경 제어</h4>
                <p className="text-sm">실내 시설로 태풍, 오염, 기후변화 영향 없음</p>
              </div>
              
              <div className="border rounded-lg p-4 text-center">
                <h4 className="font-bold mb-2 text-primary-600">도시형 스마트팜</h4>
                <p className="text-sm">좁은 땅에서도 수직 재배로 대량 생산</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-4">지역별 적용 가능성</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold">내륙 지역</h5>
                  <p className="text-sm text-gray-600">바다에서 멀리 떨어진 내륙 도시에서도 신선한 김 생산</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold">사막 지역</h5>
                  <p className="text-sm text-gray-600">극도로 건조한 사막 환경에서도 안정적 생산 가능</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold">도시 지역</h5>
                  <p className="text-sm text-gray-600">도심 빌딩 내에서도 수직형 스마트팜 운영 가능</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Waves className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
                <div>
                  <h5 className="font-bold">극지 지역</h5>
                  <p className="text-sm text-gray-600">극한의 추위 속에서도 실내 환경 제어로 생산</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded">
              <p className="text-center font-semibold">
                기후변화와 해양오염으로부터 자유로운 미래형 김양식 솔루션
              </p>
            </div>
          </div>
        </section>

        {/* 5. 스마트 김양식 프로세스 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">5. 스마트 김양식 프로세스</h2>

            <h3 className="text-2xl font-semibold mb-4">포자 채묘부터 수확까지 완전 자동화된 5단계 프로세스</h3>
            
            <p className="mb-6 text-center">
              <span className="font-bold text-primary-600">전체 생산 주기: 약 60일</span>
            </p>

            <div className="space-y-6">
              {/* Step 1 */}
              <div className="border-l-4 border-purple-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <Beaker className="w-5 h-5 text-purple-600" />
                  </div>
                  <h4 className="text-xl font-bold">Step 1: 포자 채묘</h4>
                </div>
                <p className="font-semibold mb-2">우량 김 포자를 인공적으로 채취하여 사상체 배양</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>수온 15-20°C 유지</li>
                  <li>pH 7.5-8.5 조절</li>
                  <li>무균 상태에서 배양</li>
                  <li>현미경으로 성장 관찰</li>
                </ul>
              </div>

              {/* Step 2 */}
              <div className="border-l-4 border-blue-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Factory className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold">Step 2: 사상체 배양</h4>
                </div>
                <p className="font-semibold mb-2">패각에 사상체를 부착시켜 2-3개월간 배양</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>적정 조도 유지 (2000-3000 lux)</li>
                  <li>영양염류 자동 공급</li>
                  <li>수류 순환 시스템</li>
                  <li>성장 단계별 관리</li>
                </ul>
              </div>

              {/* Step 3 */}
              <div className="border-l-4 border-green-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Step 3: 채묘 및 육묘</h4>
                </div>
                <p className="font-semibold mb-2">성숙한 각포자를 방출시켜 김발에 부착</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>수온 10-15°C 유지</li>
                  <li>김발 밀도 조절</li>
                  <li>24시간 모니터링</li>
                  <li>IoT 센서 데이터 분석</li>
                </ul>
              </div>

              {/* Step 4 */}
              <div className="border-l-4 border-yellow-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-yellow-600" />
                  </div>
                  <h4 className="text-xl font-bold">Step 4: 본 양성</h4>
                </div>
                <p className="font-semibold mb-2">10단 수직 시스템에서 40-50일간 양성</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>층별 최적 환경 제어</li>
                  <li>LED 조명 12시간 주기</li>
                  <li>자동 영양분 공급</li>
                  <li>병해 예방 관리</li>
                </ul>
              </div>

              {/* Step 5 */}
              <div className="border-l-4 border-red-500 pl-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <Award className="w-5 h-5 text-red-600" />
                  </div>
                  <h4 className="text-xl font-bold">Step 5: 수확</h4>
                </div>
                <p className="font-semibold mb-2">15-20cm 성장 시 자동 수확 시스템 가동</p>
                <ul className="list-disc list-inside text-sm space-y-1 ml-4">
                  <li>품질 선별 자동화</li>
                  <li>즉시 가공 처리</li>
                  <li>블록체인 이력 기록</li>
                  <li>연간 10-12회 수확</li>
                </ul>
              </div>
            </div>

            {/* 타임라인 */}
            <div className="mt-8 bg-gray-50 p-4 rounded">
              <h4 className="text-center font-bold mb-4">생산 주기 타임라인</h4>
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                  <p className="text-xs mt-1">포자채묘</p>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-2"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                  <p className="text-xs mt-1">사상체</p>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-2"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                  <p className="text-xs mt-1">채묘</p>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mx-2"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                  <p className="text-xs mt-1">본양성</p>
                </div>
                <div className="flex-1 h-1 bg-gradient-to-r from-yellow-500 to-red-500 mx-2"></div>
                <div className="text-center">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                  <p className="text-xs mt-1">수확</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 핵심 기술력 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">6. 핵심 기술력</h2>

            <h3 className="text-2xl font-semibold mb-4">세계 최고 수준의 육상 김양식 기술</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {/* 수질 관리 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Droplets className="w-6 h-6 text-blue-600" />
                  <h4 className="font-bold text-lg">완벽한 수질 관리</h4>
                </div>
                <p className="text-sm mb-3">24시간 실시간 모니터링으로 최적의 수질 환경 유지</p>
                <div className="bg-blue-50 p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>• pH 자동 조절</li>
                    <li>• 염도 25-35‰</li>
                    <li>• 용존산소 7-9mg/L</li>
                    <li>• 영양염 자동 공급</li>
                  </ul>
                </div>
              </div>

              {/* 온도 제어 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-lg">정밀 온도 제어</h4>
                </div>
                <p className="text-sm mb-3">계절별 최적 수온 유지로 연중 생산 가능</p>
                <div className="bg-red-50 p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>• 여름: 15-20°C</li>
                    <li>• 겨울: 10-15°C</li>
                    <li>• ±0.5°C 정밀 제어</li>
                    <li>• 에너지 효율 극대화</li>
                  </ul>
                </div>
              </div>

              {/* LED 조명 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sun className="w-6 h-6 text-yellow-600" />
                  <h4 className="font-bold text-lg">LED 생장 조명</h4>
                </div>
                <p className="text-sm mb-3">김 생장에 최적화된 파장의 LED 조명 시스템</p>
                <div className="bg-yellow-50 p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>• 450-660nm 파장</li>
                    <li>• 12시간 주기</li>
                    <li>• 층별 조도 조절</li>
                    <li>• 전력 소비 70% 절감</li>
                  </ul>
                </div>
              </div>

              {/* 수류 시스템 */}
              <div className="border rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Wind className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-lg">수류 순환 시스템</h4>
                </div>
                <p className="text-sm mb-3">자연 해류를 재현한 최적의 수류 환경 조성</p>
                <div className="bg-green-50 p-3 rounded text-sm">
                  <ul className="space-y-1">
                    <li>• 0.1-0.3m/s 유속</li>
                    <li>• 균일한 영양 공급</li>
                    <li>• 이물질 자동 제거</li>
                    <li>• 김 품질 향상</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 기술 비교 */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-6 text-center">기존 해상 양식 vs 스마트 육상 양식</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-red-600 mb-3 flex items-center gap-2">
                    <X className="w-5 h-5" /> 기존 해상 양식
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">▪</span>
                      <span>날씨와 계절에 의존적</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">▪</span>
                      <span>수질 관리 어려움</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">▪</span>
                      <span>연간 2-3회 수확</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">▪</span>
                      <span>품질 불균일</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500">▪</span>
                      <span>병해충 위험 높음</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> 스마트 육상 양식
                  </h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>365일 안정적 생산</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>완벽한 환경 제어</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>연간 10-12회 수확</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>균일한 최고급 품질</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500">✓</span>
                      <span>무병해 청정 생산</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. 김 종류별 특성 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">7. 김 종류별 특성</h2>

            <h3 className="text-2xl font-semibold mb-6">용도에 따른 맞춤형 김 생산</h3>

            <div className="space-y-8">
              {/* 일반김 */}
              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">일반김</h4>
                <p className="text-gray-600 mb-4">한국 김의 표준, 검은색의 윤기나는 평활한 김</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold mb-2">맛과 식감</h5>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p className="mb-1"><strong>맛:</strong> 담백하고 깔끔한 맛, 은은한 바다향</p>
                      <p><strong>식감:</strong> 얇고 바삭한 식감, 입에서 살살 녹는 부드러움</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">생육 환경</h5>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p>수온 10~15°C, 염도 30‰ 최적, 생장기간 40~50일</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold mb-2">가격대</h5>
                    <p className="text-sm bg-blue-50 p-2 rounded text-center">중저가<br/>(㎡당 8,000~12,000원)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">생산 시기</h5>
                    <p className="text-sm bg-green-50 p-2 rounded text-center">10월~4월<br/>(최적기: 12~2월)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">수확량</h5>
                    <p className="text-sm bg-yellow-50 p-2 rounded text-center">㎡당 300~400장</p>
                  </div>
                </div>

                <h5 className="font-semibold mb-2">주요 특징</h5>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>두께: 0.020~0.025mm</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>단백질 함량: 35~40%</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>엽체 길이: 15~25cm</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>균일한 검은색</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>김밥, 조미김 등 다용도 활용</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>대량 생산 용이</span>
                  </li>
                </ul>
              </div>

              {/* 곱창김 */}
              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-3">곱창김</h4>
                <p className="text-gray-600 mb-4">최고급 프리미엄 김, 주름진 곱창 모양의 희귀종</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold mb-2">맛과 식감</h5>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p className="mb-1"><strong>맛:</strong> 진한 감칠맛과 고소한 풍미, 깊은 바다의 맛</p>
                      <p><strong>식감:</strong> 도톰하고 쫄깃한 식감, 씹을수록 고소함</p>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold mb-2">생육 환경</h5>
                    <div className="bg-gray-50 p-3 rounded text-sm">
                      <p>수온 8~12°C, 염도 32‰ 최적, 생장기간 60~70일</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <h5 className="font-semibold mb-2">가격대</h5>
                    <p className="text-sm bg-purple-50 p-2 rounded text-center">고가<br/>(㎡당 25,000~50,000원)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">생산 시기</h5>
                    <p className="text-sm bg-green-50 p-2 rounded text-center">11월~3월<br/>(최적기: 12~1월)</p>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2">수확량</h5>
                    <p className="text-sm bg-yellow-50 p-2 rounded text-center">㎡당 150~200장</p>
                  </div>
                </div>

                <h5 className="font-semibold mb-2">주요 특징</h5>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>두께: 0.030~0.040mm</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>단백질 함량: 45~50%</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>엽체 길이: 10~15cm</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>특유의 주름진 곱창 형태</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>최고급 선물용, 수출 주력 상품</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <Award className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                    <span>연간 생산량 전체의 5% 미만</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>


        {/* 8. 특허 기술 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">8. 특허 안내</h2>
            
            {/* 특허 개요 */}
            <div className="text-center mb-8">
              <FileText className="w-16 h-16 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">
                육상 김양식 <span className="text-gold-600">원천 특허</span> 보유
              </h3>
              <p className="text-lg">
                세계 최초 육상 스마트 김양식 시스템의 핵심 특허를 보유하고 있으며,<br />
                지속적인 연구개발을 통해 기술 혁신을 선도하고 있습니다.
              </p>
            </div>

            {/* 특허 현황 */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-6 text-center bg-gray-50">
                <Award className="w-12 h-12 text-gold-500 mx-auto mb-3" />
                <h4 className="text-2xl font-bold mb-2">2건</h4>
                <p className="text-gray-600">등록 특허</p>
              </div>
              <div className="border rounded-lg p-6 text-center bg-gray-50">
                <Sparkles className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold mb-2">100%</h4>
                <p className="text-gray-600">자체 기술</p>
              </div>
              <div className="border rounded-lg p-6 text-center bg-gray-50">
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-3" />
                <h4 className="text-2xl font-bold mb-2">독점권</h4>
                <p className="text-gray-600">기술 보호</p>
              </div>
            </div>

            {/* 특허 상세 정보 */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              {/* 특허 1 */}
              <div>
                <h3 className="text-lg font-bold mb-3">특허 1. 육상 김 양식 장치 및 방법</h3>
                <div className="bg-gray-50 p-3 mb-3 text-sm">
                  <p className="mb-1"><strong>특허번호:</strong> 제10-2024-XXXXXXX호</p>
                  <p><strong>등록일자:</strong> 2024년 특허 등록</p>
                </div>
                <p className="text-sm text-justify">
                  세계 최초 육상 환경에서 김을 대량 생산할 수 있는 혁신적인 수직형 양식 장치와 방법에 관한 원천 특허입니다. 
                  기존 바다 양식 대비 40배 이상의 생산성을 실현합니다.
                </p>
              </div>

              {/* 특허 2 */}
              <div>
                <h3 className="text-lg font-bold mb-3">특허 2. 스마트 김 양식 환경 제어 시스템</h3>
                <div className="bg-gray-50 p-3 mb-3 text-sm">
                  <p className="mb-1"><strong>특허번호:</strong> 제10-2024-YYYYYYY호</p>
                  <p><strong>등록일자:</strong> 2024년 특허 등록</p>
                </div>
                <p className="text-sm text-justify">
                  IoT 센서와 AI 알고리즘을 활용한 김 생육 최적화 자동 제어 시스템입니다. 
                  온도, pH, 조도, 영양분을 실시간으로 모니터링하고 자동 조절하여 최고 품질의 김을 생산합니다.
                </p>
              </div>
            </div>

            {/* 특허증 이미지 - 가로 나열 */}
            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="text-center">
                <img src="/images/patents/kimtt1.png" alt="육상 김 양식 장치 특허증" className="w-full border" />
                <p className="text-xs text-gray-600 mt-2">육상 김 양식 장치 및 방법 특허증</p>
              </div>
              <div className="text-center">
                <img src="/images/patents/kimtt2.png" alt="스마트 김 양식 환경 제어 시스템 특허증" className="w-full border" />
                <p className="text-xs text-gray-600 mt-2">스마트 김 양식 환경 제어 시스템 특허증</p>
              </div>
            </div>

            {/* 경쟁 우위 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">특허 기술의 경쟁 우위</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">원천 기술 확보</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>세계 최초 10층 수직형 김양식 시스템</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>AI 기반 자동 환경 제어 알고리즘</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>특수 LED 파장 최적화 기술</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>순환식 해수 정화 시스템</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3">기술적 진입장벽</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>5년 이상의 연구개발 노하우</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>복제 불가능한 생육 데이터베이스</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>글로벌 특허 출원으로 기술 보호</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>독자적인 품질 관리 시스템</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. 스마트 육상 김양식 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">9. 스마트 육상 김양식</h2>
            
            <div className="text-center mb-8">
              <Waves className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">혁신적인 10단 수직형 시스템으로 365일 최고급 김 생산</h3>
            </div>

            {/* 양식 프로세스 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">스마트 김양식 프로세스</h3>
              <p className="text-lg mb-6">포자 채묘부터 수확까지 완전 자동화된 5단계 프로세스</p>
              
              <div className="space-y-8">
                <div className="border-l-4 border-purple-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Beaker className="w-5 h-5" />
                    Step 1. 포자 채묘
                  </h4>
                  <p className="text-gray-600 mb-2">우량 김 포자를 인공적으로 채취하여 사상체 배양</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 수온 15-20°C 유지</li>
                    <li>• pH 7.5-8.5 조절</li>
                    <li>• 무균 상태에서 배양</li>
                    <li>• 현미경으로 성장 관찰</li>
                  </ul>
                </div>

                <div className="border-l-4 border-blue-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Factory className="w-5 h-5" />
                    Step 2. 사상체 배양
                  </h4>
                  <p className="text-gray-600 mb-2">패각에 사상체를 부착시켜 2-3개월간 배양</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 적정 조도 유지 (2000-3000 lux)</li>
                    <li>• 영양염류 자동 공급</li>
                    <li>• 수류 순환 시스템</li>
                    <li>• 성장 단계별 관리</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Leaf className="w-5 h-5" />
                    Step 3. 채묘 및 육묘
                  </h4>
                  <p className="text-gray-600 mb-2">성숙한 각포자를 방출시켜 김발에 부착</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 수온 10-15°C 유지</li>
                    <li>• 김발 밀도 조절</li>
                    <li>• 24시간 모니터링</li>
                    <li>• IoT 센서 데이터 분석</li>
                  </ul>
                </div>

                <div className="border-l-4 border-yellow-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    Step 4. 본 양성
                  </h4>
                  <p className="text-gray-600 mb-2">10단 수직 시스템에서 40-50일간 양성</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 층별 최적 환경 제어</li>
                    <li>• LED 조명 12시간 주기</li>
                    <li>• 자동 영양분 공급</li>
                    <li>• 병해 예방 관리</li>
                  </ul>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Step 5. 수확
                  </h4>
                  <p className="text-gray-600 mb-2">15-20cm 성장 시 자동 수확 시스템 가동</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 품질 선별 자동화</li>
                    <li>• 즉시 가공 처리</li>
                    <li>• 블록체인 이력 기록</li>
                    <li>• 연간 10-12회 수확</li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-lg text-center">
                <h5 className="font-bold mb-2">전체 생산 주기: <span className="text-gold-600">약 60일</span></h5>
                <p className="text-sm">포자 채묘 → 사상체 배양 → 채묘/육묘 → 본 양성 → 수확</p>
              </div>
            </div>

            {/* 핵심 기술력 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">핵심 기술력</h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Droplets className="w-8 h-8 text-blue-500" />
                    <h4 className="text-lg font-bold">완벽한 수질 관리</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">24시간 실시간 모니터링으로 최적의 수질 환경 유지</p>
                  <ul className="text-sm space-y-1">
                    <li>• pH 자동 조절</li>
                    <li>• 염도 25-35‰</li>
                    <li>• 용존산소 7-9mg/L</li>
                    <li>• 영양염 자동 공급</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Thermometer className="w-8 h-8 text-red-500" />
                    <h4 className="text-lg font-bold">정밀 온도 제어</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">계절별 최적 수온 유지로 연중 생산 가능</p>
                  <ul className="text-sm space-y-1">
                    <li>• 여름: 15-20°C</li>
                    <li>• 겨울: 10-15°C</li>
                    <li>• ±0.5°C 정밀 제어</li>
                    <li>• 에너지 효율 극대화</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Sun className="w-8 h-8 text-yellow-500" />
                    <h4 className="text-lg font-bold">LED 생장 조명</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">김 생장에 최적화된 파장의 LED 조명 시스템</p>
                  <ul className="text-sm space-y-1">
                    <li>• 450-660nm 파장</li>
                    <li>• 12시간 주기</li>
                    <li>• 층별 조도 조절</li>
                    <li>• 전력 소비 70% 절감</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Wind className="w-8 h-8 text-green-500" />
                    <h4 className="text-lg font-bold">수류 순환 시스템</h4>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">자연 해류를 재현한 최적의 수류 환경 조성</p>
                  <ul className="text-sm space-y-1">
                    <li>• 0.1-0.3m/s 유속</li>
                    <li>• 균일한 영양 공급</li>
                    <li>• 이물질 자동 제거</li>
                    <li>• 김 품질 향상</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 김 종류별 특성 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">생산 김 종류</h3>
              
              <div className="grid grid-cols-2 gap-8">
                {/* 일반김 */}
                <div className="border rounded-lg overflow-hidden">
                  <img src="/images/smart-farming/normal-kim.jpg" alt="일반김" className="w-full h-144 object-cover" style={{height: '36rem'}} />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">일반김</h4>
                    <p className="text-sm text-gray-600 mb-4">한국 김의 표준, 검은색의 윤기나는 평활한 김</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm">맛과 식감</h5>
                        <p className="text-xs">맛: 담백하고 깔끔한 맛, 은은한 바다향</p>
                        <p className="text-xs">식감: 얇고 바삭한 식감, 입에서 살살 녹는 부드러움</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm">특징</h5>
                        <ul className="text-xs space-y-1">
                          <li>• 두께: 0.020~0.025mm</li>
                          <li>• 단백질 함량: 35~40%</li>
                          <li>• 엽체 길이: 15~25cm</li>
                          <li>• 김밥, 조미김 등 다용도 활용</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm">생산 정보</h5>
                        <p className="text-xs">시기: 10월~4월 (최적기: 12~2월)</p>
                        <p className="text-xs">수확량: ㎡당 300~400장</p>
                        <p className="text-xs">가격: 중저가 (㎡당 8,000~12,000원)</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 곱창김 */}
                <div className="border rounded-lg overflow-hidden">
                  <img src="/images/smart-farming/gopchang-kim.jpg" alt="곱창김" className="w-full h-144 object-cover" style={{height: '36rem'}} />
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-2">곱창김</h4>
                    <p className="text-sm text-gray-600 mb-4">최고급 프리미엄 김, 주름진 곱창 모양의 희귀종</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h5 className="font-semibold text-sm">맛과 식감</h5>
                        <p className="text-xs">맛: 진한 감칠맛과 고소한 풍미, 깊은 바다의 맛</p>
                        <p className="text-xs">식감: 도톰하고 쫄깃한 식감, 씹을수록 고소함</p>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm">특징</h5>
                        <ul className="text-xs space-y-1">
                          <li>• 두께: 0.030~0.040mm</li>
                          <li>• 단백질 함량: 45~50%</li>
                          <li>• 엽체 길이: 10~15cm</li>
                          <li>• 최고급 선물용, 수출 주력 상품</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-sm">생산 정보</h5>
                        <p className="text-xs">시기: 11월~3월 (최적기: 12~1월)</p>
                        <p className="text-xs">수확량: ㎡당 150~200장</p>
                        <p className="text-xs">가격: 고가 (㎡당 25,000~50,000원)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 시설 갤러리 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6">시설 갤러리</h3>
              
              {/* 3개의 시설 이미지를 한 페이지에 배치 */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <img src="/images/smart-farming/facility1.jpg" alt="스마트팜 전경" className="w-full h-144 object-cover border" style={{height: '36rem'}} />
                  <h5 className="text-sm font-semibold mt-2">스마트팜 전경</h5>
                  <p className="text-xs text-gray-600">최첨단 육상 김양식 시설의 외관</p>
                </div>
                <div>
                  <img src="/images/smart-farming/facility2.jpg" alt="시설 내부" className="w-full h-144 object-cover border" style={{height: '36rem'}} />
                  <h5 className="text-sm font-semibold mt-2">시설 내부</h5>
                  <p className="text-xs text-gray-600">무균 청정 환경의 양식 공간</p>
                </div>
                <div>
                  <img src="/images/smart-farming/facility3.jpg" alt="김 양식 수조" className="w-full h-144 object-cover border" style={{height: '36rem'}} />
                  <h5 className="text-sm font-semibold mt-2">김 양식 수조</h5>
                  <p className="text-xs text-gray-600">AI 기반 자동화 양식 시스템</p>
                </div>
              </div>

              {/* 시설 상세 설명 */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-3">시설 상세 정보</h5>
                
                <div className="grid grid-cols-3 gap-4 text-xs">
                  <div>
                    <h6 className="font-semibold mb-2">스마트팜 전경</h6>
                    <p className="mb-2">총 면적 3,000㎡ 규모의 친환경 스마트팜 시설로, 태양광 패널과 빗물 재활용 시스템을 갖춘 지속가능한 양식장입니다.</p>
                    <ul className="space-y-1">
                      <li>• 부지면적: 5,000㎡</li>
                      <li>• 건축면적: 3,000㎡</li>
                      <li>• 태양광 발전: 500kW</li>
                      <li>• 연간 생산량: 500톤</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold mb-2">시설 내부</h6>
                    <p className="mb-2">헤파필터와 UV 살균 시스템으로 완벽한 무균 환경을 유지합니다. 온도, 습도, CO₂ 농도를 실시간으로 제어합니다.</p>
                    <ul className="space-y-1">
                      <li>• 청정도: Class 100</li>
                      <li>• 온도제어: ±0.5°C</li>
                      <li>• 습도제어: ±2%</li>
                      <li>• CO₂ 농도: 800-1200ppm</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h6 className="font-semibold mb-2">김 양식 수조</h6>
                    <p className="mb-2">각 수조는 독립적인 환경 제어가 가능하며, IoT 센서를 통해 실시간으로 모니터링하고 자동 조절합니다.</p>
                    <ul className="space-y-1">
                      <li>• 수조 크기: 20m × 1.5m</li>
                      <li>• 수심: 30cm</li>
                      <li>• LED 조명: 3000K-6500K</li>
                      <li>• 수류속도: 0.1-0.3m/s</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 비교표 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">기존 해상 양식 vs 스마트 육상 양식</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3 text-red-600">기존 해상 양식</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span>날씨와 계절에 의존적</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span>수질 관리 어려움</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span>연간 2-3회 수확</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span>품질 불균일</span>
                    </li>
                    <li className="flex items-start">
                      <X className="w-4 h-4 text-red-500 mr-2 mt-0.5" />
                      <span>병해충 위험 높음</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-3 text-green-600">스마트 육상 양식</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>365일 안정적 생산</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>완벽한 환경 제어</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>연간 10-12회 수확</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>균일한 최고급 품질</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                      <span>무병해 청정 생산</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 10. 기술 안내 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">10. 기술 안내</h2>
            
            {/* 시스템 사양 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">시스템 사양</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">생산 능력</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>연간 생산량: 200톤</li>
                    <li>일일 생산: 550kg</li>
                    <li>수확 주기: 15일</li>
                    <li>연간 수확: 24회</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">시설 규격</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>건축면적: 1,000㎡</li>
                    <li>재배면적: 800㎡/층</li>
                    <li>층수: 10층</li>
                    <li>총 재배면적: 8,000㎡</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">환경 제어</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>수온: 10-20°C (±0.5°C)</li>
                    <li>pH: 7.5-8.5 (±0.1)</li>
                    <li>염도: 30-35‰ (±1‰)</li>
                    <li>조도: 2000-5000 lux</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">에너지 효율</h4>
                  <ul className="list-disc list-inside space-y-1">
                    <li>전력 소비: 150kW/h</li>
                    <li>태양광 발전: 100kW</li>
                    <li>에너지 자급률: 65%</li>
                    <li>탄소 저감: 80%</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IoT 자동화 시스템 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">IoT 자동화 시스템</h3>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">실시간 모니터링</h4>
                  <p className="text-gray-700">24시간 365일 수질, 온도, 조도 등 모든 환경 요소를 실시간으로 모니터링하고 자동 제어합니다. 스마트폰 앱으로 원격 관리가 가능합니다.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">AI 예측 분석</h4>
                  <p className="text-gray-700">머신러닝 알고리즘이 생육 데이터를 분석하여 최적의 환경을 예측하고 자동으로 조정합니다. 수확 시기와 품질을 정확히 예측합니다.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">자동 영양 공급</h4>
                  <p className="text-gray-700">김의 생장 단계에 맞춰 필요한 영양분을 정확히 계산하여 자동으로 공급합니다. 과잉/부족 없는 완벽한 영양 관리를 실현합니다.</p>
                </div>
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">원격 제어 시스템</h4>
                  <p className="text-gray-700">전 세계 어디서든 스마트팜을 제어할 수 있습니다. 긴급 상황 발생 시 즉시 알림을 받고 대응할 수 있습니다.</p>
                </div>
              </div>
            </div>


            {/* 3D 비주얼라이제이션 */}
            <div className="mb-8 print:break-before-page">
              <h3 className="text-2xl font-semibold mb-4">3D 시각화 기술</h3>
              
              {/* 3D 시각화 이미지 */}
              <div className="mb-6">
                <img 
                  src="/images/smart-farming/3d-visualization.png" 
                  alt="3D 스마트팜 시각화 시스템" 
                  className="w-full object-contain rounded border bg-gray-50"
                  style={{ height: '32rem' }}
                />
                <p className="text-sm text-center text-gray-600 mt-2">실시간 3D 스마트팜 모니터링 화면</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">핵심 기능</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>10층 전체 동시 모니터링</li>
                    <li>생장 속도 시각화</li>
                    <li>문제 구역 즉시 표시</li>
                    <li>수확 시기 예측 표시</li>
                    <li>VR/AR 지원으로 원격 점검 가능</li>
                  </ul>
                </div>
                
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-2">모니터링 요소</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>실시간 온도 분포 히트맵</li>
                    <li>수위 및 유속 시각화</li>
                    <li>LED 조명 강도 표시</li>
                    <li>영양분 농도 그래프</li>
                    <li>생육 진행률 표시</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold mb-2">디지털 트윈 기술</h4>
                <p className="text-sm mb-2">실제 스마트팜의 디지털 복제본을 생성하여 시뮬레이션과 예측 분석을 수행합니다.</p>
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <p className="font-semibold text-sm">데이터 수집</p>
                    <p className="text-xs">IoT 센서에서 실시간 데이터 수집</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">3D 모델링</p>
                    <p className="text-xs">수집 데이터 기반 3D 환경 구현</p>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">예측 분석</p>
                    <p className="text-xs">AI 기반 생육 예측 및 최적화</p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-sm">원격 관리 기능</h5>
                  <ul className="text-xs space-y-1">
                    <li>• 웹/모바일 실시간 접속</li>
                    <li>• 알림 설정 및 경고 시스템</li>
                    <li>• 원격 제어 명령 실행</li>
                    <li>• 데이터 분석 리포트</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-bold mb-2 text-sm">VR/AR 통합</h5>
                  <ul className="text-xs space-y-1">
                    <li>• VR 헤드셋 지원</li>
                    <li>• AR 앱으로 현장 점검</li>
                    <li>• 가상 시설 투어</li>
                    <li>• 교육 및 훈련 모드</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 핵심 기술 가치 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">핵심 기술 가치</h3>
              <div className="space-y-3">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-bold">혁신성</h4>
                  <p>세계 최초 10층 수직형 김양식 시스템으로 공간 대비 생산성 40배 향상</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold">경제성</h4>
                  <p>자동화로 인건비 80% 절감, 에너지 효율 극대화로 운영비 60% 절감</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">확장성</h4>
                  <p>모듈식 설계로 규모 확장 용이, 전 세계 어디서든 구축 가능</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold">지속가능성</h4>
                  <p>친환경 재배로 해양 생태계 보호, 탄소 중립 실현</p>
                </div>
              </div>
            </div>

            {/* 시장 지배력 */}
            <div>
              <h3 className="text-2xl font-semibold mb-4">시장 지배력</h3>
              <div className="border rounded-lg p-4">
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="font-bold">기술적 우위</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>원천 특허 2건 보유</li>
                      <li>추가 특허 5건 출원 중</li>
                      <li>글로벌 특허 확보 진행</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold">시장 선점</p>
                    <ul className="list-disc list-inside text-sm">
                      <li>육상 김양식 분야 세계 1위</li>
                      <li>5년 이상의 기술 격차</li>
                      <li>글로벌 파트너십 구축</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm text-center font-semibold italic">
                  &quot;HorizonSeaweed의 기술은 전통 김양식 산업의 패러다임을 완전히 바꿨습니다&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. 시설 안내 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">11. 시설 안내</h2>

            {/* 시설비용 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                1동 450평 기준 시설 비용
              </h3>
              {/* 일반김 생산 기준 */}
              <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">일반</span>
                  </div>
                  <h4 className="text-2xl font-bold text-blue-700">일반김 생산 기준</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">시설건평</h5>
                    <p className="text-3xl font-bold text-gray-800">450평</p>
                    <p className="text-sm text-gray-600">1,488㎡</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">총 투자비용</h5>
                    <p className="text-3xl font-bold text-gray-800">15억</p>
                    <p className="text-sm text-gray-600">시설 공사비</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">연간 매출액</h5>
                    <p className="text-3xl font-bold text-blue-600">6.3억</p>
                    <p className="text-sm text-gray-600">일반김 50망 기준</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">월 매출액</h5>
                    <p className="text-3xl font-bold text-blue-600">5,250만원</p>
                    <p className="text-sm text-gray-600">경매가 35만원/망</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">월 순수익</h5>
                    <p className="text-3xl font-bold text-blue-700">4,050만원</p>
                    <p className="text-sm text-gray-600">운영비 제외</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">원금 회수기간</h5>
                    <p className="text-3xl font-bold text-blue-700">3.1년</p>
                    <p className="text-sm text-gray-600">투자금 15억 기준</p>
                  </div>
                </div>
              </div>
              
              {/* 곱창김 생산 기준 */}
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">고급</span>
                  </div>
                  <h4 className="text-2xl font-bold text-green-700">곱창김 생산 기준</h4>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">시설건평</h5>
                    <p className="text-3xl font-bold text-gray-800">450평</p>
                    <p className="text-sm text-gray-600">1,488㎡</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">총 투자비용</h5>
                    <p className="text-3xl font-bold text-gray-800">15억</p>
                    <p className="text-sm text-gray-600">시설 공사비</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">연간 매출액</h5>
                    <p className="text-3xl font-bold text-green-600">16.2억</p>
                    <p className="text-sm text-gray-600">곱창김 50망 기준</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">월 매출액</h5>
                    <p className="text-3xl font-bold text-green-600">1.35억</p>
                    <p className="text-sm text-gray-600">경매가 90만원/망</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">월 순수익</h5>
                    <p className="text-3xl font-bold text-green-700">1.23억</p>
                    <p className="text-sm text-gray-600">운영비 제외</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h5 className="font-semibold mb-2 text-gray-700">원금 회수기간</h5>
                    <p className="text-3xl font-bold text-green-700">1.0년</p>
                    <p className="text-sm text-gray-600">투자금 15억 기준</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold mb-3">상세 수익 분석 (1동 450평 기준)</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-semibold mb-2 text-blue-600">일반김 생산 기준</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 월 생산량: 50망 (1망 = 120kg)</li>
                      <li>• 망당 경매가: 35만원</li>
                      <li>• 월 수확 횟수: 3회</li>
                      <li>• 월 매출액: 5,250만원</li>
                      <li>• 연간 매출액: 6.3억원</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold mb-2 text-blue-600">곱창김 생산 기준</h5>
                    <ul className="space-y-1 text-sm">
                      <li>• 월 생산량: 50망 (1망 = 120kg)</li>
                      <li>• 망당 경매가: 90만원</li>
                      <li>• 월 수확 횟수: 3회</li>
                      <li>• 월 매출액: 13,500만원</li>
                      <li>• 연간 매출액: 16.2억원</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <h5 className="font-semibold mb-2">공통 월간 운영 비용</h5>
                  <ul className="space-y-1 text-sm">
                    <li>• 전기료: 250만원</li>
                    <li>• 인건비 (2명): 600만원</li>
                    <li>• 기타 자재구입 및 운영비: 350만원</li>
                    <li className="font-semibold">• 총 월간 운영비용: 1,200만원</li>
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3">시설비 투자 내역</h4>
                <ul className="space-y-2">
                  <li>• 건축비: 7억원 (철골구조, 단열재, 전기공사 포함)</li>
                  <li>• 수조 설비: 3억원 (FRP 수조, 배관, 펌프 시스템)</li>
                  <li>• IoT 제어 시스템: 2억원 (센서, 자동화 장비, 소프트웨어)</li>
                  <li>• 환경 제어 설비: 2억원 (온도, 조명, 환기 시스템)</li>
                  <li>• 기타 부대시설: 1억원 (전기, 급배수, 안전설비)</li>
                  <li className="font-bold">• 총 투자비용: 15억원</li>
                </ul>
              </div>
            </div>

            {/* 특허 도면 */}
            <div className="mb-12 page-break-after">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <FileImage className="w-6 h-6" />
                특허 도면
              </h3>
              
              {/* 3개의 특허 도면을 한 페이지에 배치 */}
              <div className="space-y-6">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold mb-2">다층 수직 양식 시스템</h5>
                    <p className="text-xs text-gray-600 mb-2">특허 제10-2024-0001호</p>
                    <img 
                      src="/images/facilities/blueprint1.png" 
                      alt="다층 수직 양식 시스템 도면"
                      className="w-full h-auto border"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold mb-2">자동 수위 조절 시스템</h5>
                    <p className="text-xs text-gray-600 mb-2">특허 제10-2024-0002호</p>
                    <img 
                      src="/images/facilities/blueprint2.png" 
                      alt="자동 수위 조절 시스템 도면"
                      className="w-full h-auto border"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold mb-2">IoT 통합 제어 시스템</h5>
                    <p className="text-xs text-gray-600 mb-2">특허 제10-2024-0003호</p>
                    <img 
                      src="/images/facilities/blueprint3.png" 
                      alt="IoT 통합 제어 시스템 도면"
                      className="w-full h-auto border"
                    />
                  </div>
                </div>
                
                {/* 특허 도면 설명 */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-semibold mb-2">특허 도면 설명</h5>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>다층 수직 양식 시스템</strong>: 김 양식을 위한 다층 수직 양식 시스템으로, 한정된 공간에서 생산성을 극대화할 수 있는 혁신적인 구조입니다.</li>
                    <li>• <strong>자동 수위 조절 시스템</strong>: 김의 생장 단계에 따라 수위를 자동으로 조절하여 최적의 생육 환경을 유지하는 특허 기술입니다.</li>
                    <li>• <strong>IoT 통합 제어 시스템</strong>: AI와 IoT 기술을 융합한 스마트 양식장 통합 제어 시스템으로, 실시간 모니터링과 자동 제어가 가능합니다.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 시설 개요 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                시설 개요
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="border rounded-lg p-4">
                  <Factory className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-bold mb-1">총 재배 면적</h4>
                  <p className="text-xl">3,000㎡</p>
                </div>
                <div className="border rounded-lg p-4">
                  <Layers className="w-8 h-8 text-green-600 mb-2" />
                  <h4 className="font-bold mb-1">수조 개수</h4>
                  <p className="text-xl">10개 (5층×2동)</p>
                </div>
                <div className="border rounded-lg p-4">
                  <Gauge className="w-8 h-8 text-purple-600 mb-2" />
                  <h4 className="font-bold mb-1">일일 생산량</h4>
                  <p className="text-xl">500kg/일</p>
                </div>
                <div className="border rounded-lg p-4">
                  <Database className="w-8 h-8 text-orange-600 mb-2" />
                  <h4 className="font-bold mb-1">연간 생산량</h4>
                  <p className="text-xl">180톤/년</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-bold mb-4">시설 특징</h4>
                <ul className="space-y-2">
                  <li>• 세계 최초 수직형 다층 김 양식 시스템</li>
                  <li>• 기존 해상 양식 대비 40배 생산성</li>
                  <li>• 99.9% 자동화된 스마트팜 시스템</li>
                  <li>• 24시간 원격 모니터링 및 제어</li>
                  <li>• 친환경 재생에너지 활용</li>
                  <li>• 폐수 재활용 시스템으로 환경 영향 최소화</li>
                </ul>
              </div>
            </div>

            {/* 양식 시스템 */}
            <div className="mb-12 page-break-after">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Layers className="w-6 h-6" />
                양식 시스템
              </h3>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-blue-600">다층 수조 시스템</h4>
                  <p className="mb-3">특허 받은 다층 구조로 공간 효율성을 극대화하고 생산성을 3배 향상시킵니다</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 수직 적층형 5층 구조</li>
                    <li>• 층별 독립 환경 제어</li>
                    <li>• 자동 순환 시스템</li>
                    <li>• 최적 광 전달 설계</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-purple-600">환경 제어 시스템</h4>
                  <p className="mb-3">각 층별로 최적화된 환경을 자동으로 유지하여 김의 품질을 향상시킵니다</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 온도: 10-20°C 정밀 제어</li>
                    <li>• pH: 7.8-8.3 자동 조절</li>
                    <li>• 용존산소: 8-10mg/L 유지</li>
                    <li>• 광도: 2000-3000 lux 조절</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3 text-green-600">자동 급수/배수 시스템</h4>
                  <p className="mb-3">특허 받은 자동화 시스템으로 수질을 최적 상태로 유지합니다</p>
                  <ul className="space-y-1 text-sm">
                    <li>• 실시간 수질 모니터링</li>
                    <li>• 자동 여과 시스템</li>
                    <li>• 영양분 자동 공급</li>
                    <li>• 폐수 재활용 시스템</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* IoT 제어 시스템 */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6" />
                IoT 제어 시스템
              </h3>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3">AI 기반 통합 제어</h4>
                  <p className="text-sm mb-3">머신러닝을 활용한 예측 제어로 최적의 생육 환경을 자동으로 조성합니다</p>
                  <ul className="text-sm space-y-1">
                    <li>• TensorFlow AI 모델</li>
                    <li>• Edge Computing</li>
                    <li>• 실시간 데이터 분석</li>
                    <li>• 예측 제어 알고리즘</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3">센서 네트워크</h4>
                  <p className="text-sm mb-3">수조 전체를 모니터링하는 고정밀 센서로 실시간 데이터를 수집합니다</p>
                  <ul className="text-sm space-y-1">
                    <li>• 수온/pH 센서</li>
                    <li>• 용존산소 센서</li>
                    <li>• 탁도/염도 센서</li>
                    <li>• 광량 센서</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3">무선 통신 시스템</h4>
                  <p className="text-sm mb-3">LoRa와 5G를 활용한 안정적인 데이터 전송과 원격 제어가 가능합니다</p>
                  <ul className="text-sm space-y-1">
                    <li>• LoRa WAN</li>
                    <li>• 5G 통신</li>
                    <li>• MQTT 프로토콜</li>
                    <li>• 보안 암호화</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h4 className="font-bold mb-3">영상 모니터링</h4>
                  <p className="text-sm mb-3">AI 영상 분석으로 김의 성장 상태를 실시간으로 파악합니다</p>
                  <ul className="text-sm space-y-1">
                    <li>• 4K 수중 카메라</li>
                    <li>• 적외선 야간 촬영</li>
                    <li>• AI 이미지 분석</li>
                    <li>• 이상 감지 알림</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold mb-3">시스템 아키텍처</h4>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-orange-100 p-3 rounded-lg mb-2">
                      <Sun className="w-6 h-6 mx-auto text-orange-600" />
                    </div>
                    <p className="text-sm font-medium">수온 센서</p>
                    <p className="text-xs text-gray-600">10개</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 p-3 rounded-lg mb-2">
                      <Droplets className="w-6 h-6 mx-auto text-blue-600" />
                    </div>
                    <p className="text-sm font-medium">pH 센서</p>
                    <p className="text-xs text-gray-600">10개</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 p-3 rounded-lg mb-2">
                      <Wind className="w-6 h-6 mx-auto text-green-600" />
                    </div>
                    <p className="text-sm font-medium">산소 센서</p>
                    <p className="text-xs text-gray-600">10개</p>
                  </div>
                  <div className="text-center">
                    <div className="bg-purple-100 p-3 rounded-lg mb-2">
                      <Camera className="w-6 h-6 mx-auto text-purple-600" />
                    </div>
                    <p className="text-sm font-medium">카메라</p>
                    <p className="text-xs text-gray-600">20개</p>
                  </div>
                </div>
              </div>
            </div>
            {/* 운영 비용 및 수익 구조 */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">월간 운영 비용</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>전기료</span>
                    <span className="font-semibold">250만원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>인건비 (2명)</span>
                    <span className="font-semibold">600만원</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span>기타 운영비</span>
                    <span className="font-semibold">350만원</span>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="font-bold">총 운영비</span>
                    <span className="font-bold text-red-600">1,200만원</span>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6">
                <h4 className="text-xl font-bold mb-4">생산 및 수익 구조</h4>
                <div className="bg-green-50 p-4 rounded mb-4">
                  <p className="text-sm text-gray-600 mb-1">월간 총 생산량</p>
                  <p className="text-2xl font-bold text-green-600">50망</p>
                  <p className="text-xs text-gray-500">월 3회 수확 (1망 = 120kg)</p>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">월 생산량</span>
                    <span className="font-semibold">50망 × 3회 = 150망</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">월 매출액</span>
                    <span className="text-sm">
                      <span className="text-blue-600 font-semibold">일반김 5,250만원</span> / 
                      <span className="text-green-600 font-semibold">곱창김 1.35억</span>
                    </span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-bold">월간 순수익</span>
                    <span className="text-sm">
                      <span className="text-blue-600 font-bold">일반김 4,050만원</span> / 
                      <span className="text-green-600 font-bold">곱창김 1.23억</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* 수익성 개선 전략 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6" />
                수익성 개선 전략
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="border rounded-lg p-4">
                  <h5 className="font-bold mb-3">생산성 향상</h5>
                  <ul className="text-sm space-y-1">
                    <li>• AI 최적화로 생산량 30% 증대</li>
                    <li>• 수확 주기 단축 (10일→7일)</li>
                    <li>• 품질 향상으로 단가 상승</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h5 className="font-bold mb-3">비용 절감</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 태양광 발전으로 전기료 50% 절감</li>
                    <li>• 자동화로 인건비 최소화</li>
                    <li>• 규모의 경제 실현</li>
                  </ul>
                </div>
                <div className="border rounded-lg p-4">
                  <h5 className="font-bold mb-3">부가가치 창출</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 프리미엄 제품 라인 개발</li>
                    <li>• 가공 제품 사업 확장</li>
                    <li>• 직거래 판매망 구축</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 365일 연속 생산 시스템 */}
            <div className="mb-8 page-break-before">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                독보적 경쟁력 - 365일 연속 생산 시스템
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 생산 주기 비교 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">일반 농작물 vs 스마트 김양식</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>벼농사</span>
                        <span className="text-gray-600">연 1회 수확 (6개월)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-3">
                        <div className="h-full bg-red-400 rounded" style={{ width: '8.3%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>시설채소</span>
                        <span className="text-gray-600">연 3-4회 (3개월)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-3">
                        <div className="h-full bg-orange-400 rounded" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>버섯재배</span>
                        <span className="text-gray-600">연 6회 (2개월)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-3">
                        <div className="h-full bg-yellow-400 rounded" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-blue-600">스마트 김양식</span>
                        <span className="font-bold text-blue-600">연 36회 (10일)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-3">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-blue-50 rounded">
                    <p className="text-center mb-2">
                      <span className="font-bold text-blue-600 text-lg">36배</span> 더 많은 수확 기회
                    </p>
                    <div className="text-sm space-y-1">
                      <p className="text-center">일반김: <span className="font-semibold">연 6.3억원</span> (월 5,250만원)</p>
                      <p className="text-center">곱창김: <span className="font-semibold text-green-600">연 16.2억원</span> (월 1.35억원)</p>
                    </div>
                  </div>
                </div>

                {/* 운영비 비교 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">초기 투자 후 추가 비용</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">종자/씨앗 구입비</span>
                      <span className="text-green-600 font-semibold">불필요</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">비료/농약비</span>
                      <span className="text-green-600 font-semibold">불필요</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">토지 임대료</span>
                      <span className="text-green-600 font-semibold">불필요</span>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                      <span className="text-sm">날씨 리스크</span>
                      <span className="text-green-600 font-semibold">완전 차단</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded text-center">
                    <p className="text-lg font-bold text-green-600">연간 절감액</p>
                    <p className="text-2xl font-bold text-blue-600">2.4억원</p>
                    <p className="text-sm text-gray-600">일반 농업 대비</p>
                  </div>
                </div>
              </div>

              {/* 핵심 포인트 */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">파종-수확 대기시간</p>
                  <p className="text-2xl font-bold text-blue-600">0일</p>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">연중 생산 일수</p>
                  <p className="text-2xl font-bold text-green-600">365일</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <DollarSign className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="font-semibold text-sm">매출 발생 주기</p>
                  <p className="text-2xl font-bold text-purple-600">10일</p>
                </div>
              </div>
            </div>

            {/* 시장 독점적 지위 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Trophy className="w-6 h-6" />
                시장 독점적 지위
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* 기술 독점성 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">보유 특허 및 진입장벽</h5>
                  <div className="p-4 bg-blue-50 rounded mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold">핵심 특허 보유</span>
                      <span className="text-2xl font-bold text-blue-600">2건</span>
                    </div>
                    <p className="text-sm text-gray-600">다층 수조 시스템, IoT 제어, 순환여과 기술</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="text-sm">기술 개발 기간: <strong>15년</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lock className="w-5 h-5 text-blue-600" />
                      <span className="text-sm">예상 진입 장벽: <strong>10년 이상</strong></span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-600" />
                      <span className="text-sm">국내 유일 상용화: <strong>독점적 지위</strong></span>
                    </div>
                  </div>
                </div>

                {/* 시장 성장성 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">안정적 시장 성장</h5>
                  <div className="space-y-3">
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="text-sm">국내 김 시장 규모</span>
                      <span className="font-bold">2.3조원 (2025년)</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="text-sm">연평균 성장률</span>
                      <span className="font-bold text-green-600">+12.8%</span>
                    </div>
                    <div className="flex justify-between p-3 bg-gray-50 rounded">
                      <span className="text-sm">글로벌 수출 증가율</span>
                      <span className="font-bold text-blue-600">+18.5%</span>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded">
                    <p className="text-center text-sm text-gray-600">
                      안정적인 내수 시장과 폭발적인 수출 성장세
                    </p>
                  </div>
                </div>
              </div>

              {/* 경쟁우위 매트릭스 */}
              <div className="border rounded-lg p-6">
                <h5 className="font-bold mb-4 text-center">경쟁력 비교 매트릭스</h5>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b">
                      <th className="py-2 text-left"></th>
                      <th className="py-2 text-center font-bold text-blue-600">스마트 김양식</th>
                      <th className="py-2 text-center text-gray-600">해상 양식</th>
                      <th className="py-2 text-center text-gray-600">수입산</th>
                      <th className="py-2 text-center text-gray-600">대체품</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">품질 안정성</td>
                      <td className="py-2 text-center font-bold text-green-600">100%</td>
                      <td className="py-2 text-center text-gray-500">60%</td>
                      <td className="py-2 text-center text-gray-500">40%</td>
                      <td className="py-2 text-center text-gray-500">30%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">생산 효율</td>
                      <td className="py-2 text-center font-bold text-green-600">95%</td>
                      <td className="py-2 text-center text-gray-500">45%</td>
                      <td className="py-2 text-center text-gray-500">70%</td>
                      <td className="py-2 text-center text-gray-500">50%</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">가격 경쟁력</td>
                      <td className="py-2 text-center font-bold text-green-600">90%</td>
                      <td className="py-2 text-center text-gray-500">80%</td>
                      <td className="py-2 text-center text-gray-500">85%</td>
                      <td className="py-2 text-center text-gray-500">75%</td>
                    </tr>
                    <tr>
                      <td className="py-2">ESG 점수</td>
                      <td className="py-2 text-center font-bold text-green-600">98%</td>
                      <td className="py-2 text-center text-gray-500">35%</td>
                      <td className="py-2 text-center text-gray-500">20%</td>
                      <td className="py-2 text-center text-gray-500">40%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 투자 수익률 비교 분석 */}
            <div className="mb-8 page-break-before">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6" />
                투자 수익률 비교 분석
              </h3>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* ROI 비교 차트 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">투자 회수 기간 비교</h5>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>부동산</span>
                        <span className="text-gray-600">15-20년</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div className="h-full bg-gray-500 rounded" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>주식/펀드</span>
                        <span className="text-gray-600">7-10년</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '60%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>일반농업</span>
                        <span className="text-gray-600">5-7년</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div className="h-full bg-orange-500 rounded" style={{ width: '50%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-blue-600">일반김</span>
                        <span className="font-bold text-blue-600">3.1년</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div className="h-full bg-blue-500 rounded" style={{ width: '31%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="font-bold text-green-600">곱창김</span>
                        <span className="font-bold text-green-600">1.0년</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded h-4">
                        <div className="h-full bg-green-600 rounded" style={{ width: '10%' }}></div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-green-50 rounded text-center">
                    <span className="text-2xl font-bold text-green-600">15배</span>
                    <span className="text-sm text-gray-600 ml-2">더 빠른 투자 회수 (곱창김)</span>
                  </div>
                </div>

                {/* 복리 효과 시뮬레이션 */}
                <div className="border rounded-lg p-6">
                  <h5 className="font-bold mb-4">10년 수익 예측 (재투자 시)</h5>
                  <div className="mb-4 p-4 bg-gray-50 rounded">
                    <p className="text-sm text-center text-gray-600 mb-2">수익 성장 곡선</p>
                    <div className="h-32 flex items-end justify-around">
                      <div className="w-8 bg-blue-200" style={{ height: '20%' }}></div>
                      <div className="w-8 bg-blue-300" style={{ height: '30%' }}></div>
                      <div className="w-8 bg-blue-400" style={{ height: '45%' }}></div>
                      <div className="w-8 bg-blue-500" style={{ height: '65%' }}></div>
                      <div className="w-8 bg-blue-600" style={{ height: '85%' }}></div>
                      <div className="w-8 bg-blue-700" style={{ height: '100%' }}></div>
                    </div>
                    <div className="flex justify-around text-xs mt-2">
                      <span>1년</span>
                      <span>3년</span>
                      <span>5년</span>
                      <span>7년</span>
                      <span>9년</span>
                      <span>10년</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-3 bg-gray-50 rounded text-center">
                      <p className="text-sm text-gray-600">초기 투자</p>
                      <p className="text-xl font-bold">15억</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded text-center">
                      <p className="text-sm text-gray-600">10년 후 (곱창김)</p>
                      <p className="text-xl font-bold text-green-600">1,470억+</p>
                    </div>
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-500">일반김: 486억원 | 곱창김: 1,476억원</p>
                  </div>
                </div>
              </div>

              {/* 리스크-수익 매트릭스 */}
              <div className="border rounded-lg p-6">
                <h5 className="font-bold mb-4 text-center">리스크-수익 포지셔닝</h5>
                <div className="text-center p-8 bg-gray-50 rounded">
                  <p className="mb-4">낮은 리스크 + 높은 수익률 = <span className="font-bold text-blue-600">최적의 투자처</span></p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded border">
                      <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                      <p className="font-semibold">낮은 리스크</p>
                      <p className="text-sm text-gray-600">날씨 독립적<br/>안정적 수요</p>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <TrendingUp className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="font-semibold">높은 수익률</p>
                      <p className="text-sm text-gray-600">연 180% 수익<br/>복리 성장</p>
                    </div>
                    <div className="p-4 bg-white rounded border">
                      <Trophy className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                      <p className="font-semibold">독점적 지위</p>
                      <p className="text-sm text-gray-600">특허 보호<br/>진입장벽</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 프리미엄 포지셔닝 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                단순한 투자가 아닌, 미래 식품산업의 독점권
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-6 bg-gray-50 rounded-lg border">
                  <Crown className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                  <h5 className="font-bold mb-2">독점적 파트너십</h5>
                  <p className="text-sm text-gray-600">
                    국내 유일 기술 보유<br/>
                    파트너가 곧 시장 지배자
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border">
                  <Rocket className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h5 className="font-bold mb-2">기하급수적 성장</h5>
                  <p className="text-sm text-gray-600">
                    1,000동 목표 달성 시<br/>
                    <span className="text-blue-600">일반김 6.3조</span> / <span className="text-green-600">곱창김 16.2조</span>
                  </p>
                </div>
                
                <div className="text-center p-6 bg-gray-50 rounded-lg border">
                  <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h5 className="font-bold mb-2">글로벌 진출 기회</h5>
                  <p className="text-sm text-gray-600">
                    해외 수출 독점권<br/>
                    글로벌 김 시장 선점
                  </p>
                </div>
              </div>
            </div>

            {/* 시설 규격 정보 추가 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Factory className="w-6 h-6" />
                시설 규격
              </h3>
              <div className="border rounded-lg p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">건평 규모</span>
                    <span className="font-semibold text-lg">450평 (1,488㎡)</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">재배망 규격</span>
                    <span className="font-semibold text-lg">2m × 40m</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">총 재배망 수</span>
                    <span className="font-semibold text-lg">50망</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b">
                    <span className="text-gray-700">수조 배치</span>
                    <span className="font-semibold text-lg">5층 × 8열 (40개)</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-gray-700">총 재배 면적</span>
                    <span className="font-semibold text-xl text-blue-600">3,200㎡</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 투자 비용 상세 */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6" />
                투자 비용 상세
              </h3>
              <div className="border rounded-lg p-6">
                <div className="text-center p-6 bg-blue-50 rounded mb-6">
                  <p className="text-sm text-gray-600 mb-2">1동 시설 공사비</p>
                  <p className="text-4xl font-bold text-blue-600">15억원</p>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <p className="font-semibold">건축비</p>
                      <p className="text-sm text-gray-600">철골구조, 단열재, 전기공사 포함</p>
                    </div>
                    <p className="text-xl font-bold">7.5억원</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <p className="font-semibold">수조 및 배관 시스템</p>
                      <p className="text-sm text-gray-600">FRP 수조, 배관, 펌프 시스템</p>
                    </div>
                    <p className="text-xl font-bold">4.5억원</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded flex justify-between items-center">
                    <div>
                      <p className="font-semibold">IoT 자동화 시스템</p>
                      <p className="text-sm text-gray-600">센서, 자동화 장비, 소프트웨어</p>
                    </div>
                    <p className="text-xl font-bold">3억원</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 12. 김 산업 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">12. 김 산업</h2>
            
            {/* 글로벌 김 시장 현황 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-blue-600">글로벌 김 시장 현황</h3>
              <div className="grid grid-cols-2 gap-8 mb-8">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                  <div className="text-xl font-bold mb-2">현재 글로벌 김 시장 규모</div>
                  <div className="text-5xl font-bold mb-2">129조원</div>
                  <div className="text-lg opacity-90">2024년 기준</div>
                </div>
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                  <div className="text-xl font-bold mb-2">2030년 예상 시장 규모</div>
                  <div className="text-5xl font-bold mb-2">500조원</div>
                  <div className="text-lg opacity-90">연평균 25% 성장</div>
                </div>
              </div>
              
              {/* 시장 성장 그래프 */}
              <div className="bg-gray-50 rounded-xl p-8 mb-8">
                <h4 className="text-xl font-bold mb-6">시장 성장 추이 및 전망</h4>
                <div className="relative h-64">
                  <div className="absolute bottom-0 left-0 w-full h-full flex items-end justify-between">
                    <div className="w-1/6 bg-blue-500 h-1/4 rounded-t-lg flex items-end justify-center text-white font-bold pb-2">2020<br/>50조</div>
                    <div className="w-1/6 bg-blue-500 h-1/3 rounded-t-lg flex items-end justify-center text-white font-bold pb-2">2022<br/>80조</div>
                    <div className="w-1/6 bg-blue-600 h-1/2 rounded-t-lg flex items-end justify-center text-white font-bold pb-2">2024<br/>129조</div>
                    <div className="w-1/6 bg-purple-600 h-3/4 rounded-t-lg flex items-end justify-center text-white font-bold pb-2">2027<br/>250조</div>
                    <div className="w-1/6 bg-purple-700 h-full rounded-t-lg flex items-end justify-center text-white font-bold pb-2">2030<br/>500조</div>
                  </div>
                </div>
              </div>
            </div>

            {/* 한국의 혁신 경쟁력 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-green-600">한국의 혁신 경쟁력</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">🏭</div>
                  <h4 className="text-lg font-bold mb-2">김 양식 기술 선도국</h4>
                  <p className="text-gray-700">70년 양식 역사, 세계 최고 수준의 생산 기술 보유</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">🌏</div>
                  <h4 className="text-lg font-bold mb-2">글로벌 수출 1위</h4>
                  <p className="text-gray-700">연간 10억 달러 수출, 70개국 이상 수출</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">🔬</div>
                  <h4 className="text-lg font-bold mb-2">스마트 양식 기술</h4>
                  <p className="text-gray-700">IoT, AI 융합 차세대 양식 기술 개발 선두</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">🍱</div>
                  <h4 className="text-lg font-bold mb-2">K-Food 문화</h4>
                  <p className="text-gray-700">김밥, 김스낵 등 한류 문화 확산</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">💡</div>
                  <h4 className="text-lg font-bold mb-2">프리미엄화 선도</h4>
                  <p className="text-gray-700">조미김, 김스낵 등 고부가가치 제품 개발</p>
                </div>
                <div className="bg-green-50 rounded-xl p-6 border-2 border-green-500">
                  <div className="text-4xl mb-3">🏆</div>
                  <h4 className="text-lg font-bold mb-2">품질 경쟁력</h4>
                  <p className="text-gray-700">엄격한 품질 관리와 안전성 인증 시스템</p>
                </div>
              </div>
            </div>

            {/* 주요 수출국 현황 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">주요 수출국 현황</h3>
              <div className="bg-purple-50 rounded-xl p-8">
                <div className="grid grid-cols-5 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-700">미국</div>
                    <div className="text-5xl font-bold text-purple-600 my-2">35%</div>
                    <div className="text-gray-600">3.5억 달러</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-700">일본</div>
                    <div className="text-5xl font-bold text-purple-600 my-2">20%</div>
                    <div className="text-gray-600">2억 달러</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-700">중국</div>
                    <div className="text-5xl font-bold text-purple-600 my-2">15%</div>
                    <div className="text-gray-600">1.5억 달러</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-700">EU</div>
                    <div className="text-5xl font-bold text-purple-600 my-2">20%</div>
                    <div className="text-gray-600">2억 달러</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-700">기타</div>
                    <div className="text-5xl font-bold text-purple-600 my-2">10%</div>
                    <div className="text-gray-600">1억 달러</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 김의 영양학적 가치 및 고부가가치 제품 시장 */}
        <section className="page-break-after">
          <div className="p-12">
            <h3 className="text-2xl font-bold mb-6 text-orange-600">김의 영양학적 가치</h3>
            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="bg-orange-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4 text-orange-700">주요 영양소</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">단백질</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-orange-500 h-4 rounded-full" style={{width: '40%'}}></div>
                      </div>
                      <span className="font-bold">40%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">식이섬유</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-orange-500 h-4 rounded-full" style={{width: '35%'}}></div>
                      </div>
                      <span className="font-bold">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">미네랄</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-orange-500 h-4 rounded-full" style={{width: '25%'}}></div>
                      </div>
                      <span className="font-bold">25%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold">비타민 B12</span>
                    <div className="flex items-center">
                      <div className="w-32 bg-gray-200 rounded-full h-4 mr-3">
                        <div className="bg-orange-500 h-4 rounded-full" style={{width: '90%'}}></div>
                      </div>
                      <span className="font-bold">일일권장량 90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-50 rounded-xl p-8">
                <h4 className="text-xl font-bold mb-4 text-orange-700">건강 효능</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">💪</span>
                    <div>
                      <div className="font-semibold">항암 효과</div>
                      <div className="text-gray-600">포피란 성분의 강력한 항산화 작용</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">❤️</span>
                    <div>
                      <div className="font-semibold">심혈관 건강</div>
                      <div className="text-gray-600">타우린, EPA, DHA 풍부</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🦴</span>
                    <div>
                      <div className="font-semibold">골다공증 예방</div>
                      <div className="text-gray-600">칼슘, 마그네슘 등 미네랄 풍부</div>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-2xl mr-3">🩸</span>
                    <div>
                      <div className="font-semibold">빈혈 예방</div>
                      <div className="text-gray-600">철분, 비타민 B12 함유</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* 고부가가치 제품 시장 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-indigo-600">고부가가치 제품 시장</h3>
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl p-8 text-white mb-8">
                <div className="text-center">
                  <div className="text-2xl font-bold mb-2">글로벌 김 가공품 시장 규모</div>
                  <div className="text-6xl font-bold my-4">77조원</div>
                  <div className="text-xl">원물 시장의 60% 규모</div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">조미김</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">25조원</div>
                  <p className="text-gray-600">다양한 맛과 프리미엄화</p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">김스낵</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">20조원</div>
                  <p className="text-gray-600">건강 스낵 시장 성장</p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">김밥/초밥용</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">15조원</div>
                  <p className="text-gray-600">K-Food 글로벌화</p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">김 조미료</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">10조원</div>
                  <p className="text-gray-600">천연 조미료 수요 증가</p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">기능성 제품</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">5조원</div>
                  <p className="text-gray-600">건강기능식품 시장</p>
                </div>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="text-lg font-bold mb-3 text-indigo-700">기타</h4>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">2조원</div>
                  <p className="text-gray-600">화장품, 의약품 원료</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 김밥 글로벌화와 미래 식품 */}
        <section className="page-break-after">
          <div className="p-12">
            <h3 className="text-2xl font-bold mb-6 text-rose-600">김밥 글로벌화</h3>
            <div className="bg-rose-50 rounded-xl p-8 mb-12">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-rose-700">글로벌 김밥 시장 현황</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">미국</span>
                        <span className="text-2xl font-bold text-rose-600">5,000개+</span>
                      </div>
                      <div className="text-gray-600">김밥 전문점 운영 중</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">유럽</span>
                        <span className="text-2xl font-bold text-rose-600">3,000개+</span>
                      </div>
                      <div className="text-gray-600">주요 도시 중심 확산</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold">동남아</span>
                        <span className="text-2xl font-bold text-rose-600">10,000개+</span>
                      </div>
                      <div className="text-gray-600">현지화 메뉴 인기</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-rose-700">시장 성장 동력</h4>
                  <div className="space-y-3">
                    <div className="flex items-center bg-white rounded-lg p-4">
                      <span className="text-3xl mr-4">🌍</span>
                      <div>
                        <div className="font-semibold">K-Culture 확산</div>
                        <div className="text-gray-600">한류 콘텐츠와 함께 성장</div>
                      </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-4">
                      <span className="text-3xl mr-4">🥗</span>
                      <div>
                        <div className="font-semibold">건강식 트렌드</div>
                        <div className="text-gray-600">저칼로리, 영양 균형식</div>
                      </div>
                    </div>
                    <div className="flex items-center bg-white rounded-lg p-4">
                      <span className="text-3xl mr-4">🚀</span>
                      <div>
                        <div className="font-semibold">편의성</div>
                        <div className="text-gray-600">간편식, 테이크아웃 문화</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 미래 식품으로서의 김 */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-teal-600">미래 식품으로서의 김</h3>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-teal-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-teal-700">지속가능한 식품</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <span className="font-semibold">탄소 흡수:</span>
                        <span className="text-gray-700"> 육상 식물의 5배 CO2 흡수</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <span className="font-semibold">자원 효율성:</span>
                        <span className="text-gray-700"> 담수, 비료 불필요</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <span className="font-semibold">빠른 성장:</span>
                        <span className="text-gray-700"> 45일 수확 주기</span>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <span className="font-semibold">해양 정화:</span>
                        <span className="text-gray-700"> 부영양화 방지</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-teal-50 rounded-xl p-8">
                  <h4 className="text-xl font-bold mb-4 text-teal-700">바이오 소재 활용</h4>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-teal-700 mb-1">바이오 플라스틱</div>
                      <div className="text-gray-600">생분해성 포장재 개발</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-teal-700 mb-1">화장품 원료</div>
                      <div className="text-gray-600">천연 보습, 항노화 성분</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-teal-700 mb-1">의약품 소재</div>
                      <div className="text-gray-600">항암, 항염증 물질 추출</div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="font-semibold text-teal-700 mb-1">바이오 에너지</div>
                      <div className="text-gray-600">바이오 에탄올 생산</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 공급망 혁신 및 시장 확대 전략 */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-violet-600">공급망 혁신 및 시장 확대 전략</h3>
              <div className="bg-gradient-to-br from-violet-100 to-purple-100 rounded-xl p-8">
                <div className="grid grid-cols-3 gap-6 mb-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3 text-center">🏭</div>
                    <h4 className="font-bold text-center mb-2">스마트 생산</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• IoT 기반 자동화</li>
                      <li>• AI 품질 관리</li>
                      <li>• 예측 생산 시스템</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3 text-center">🔗</div>
                    <h4 className="font-bold text-center mb-2">블록체인 유통</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 이력 추적 시스템</li>
                      <li>• 품질 인증 투명성</li>
                      <li>• 위변조 방지</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="text-4xl mb-3 text-center">🌐</div>
                    <h4 className="font-bold text-center mb-2">글로벌 확장</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 현지화 전략</li>
                      <li>• 전략적 파트너십</li>
                      <li>• 신규 시장 개척</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-6">
                  <h4 className="font-bold mb-4 text-violet-700">2030 목표</h4>
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-violet-600">100개국</div>
                      <div className="text-gray-600">수출 확대</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-violet-600">50조원</div>
                      <div className="text-gray-600">수출액 달성</div>
                    </div>
                    <div className="text-2xl text-gray-400">→</div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-violet-600">100만개</div>
                      <div className="text-gray-600">일자리 창출</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 13. 연락처 */}
        <section>
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">13. 연락처</h2>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  본사 정보
                </h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="mb-2"><strong>주소:</strong></p>
                  <p>전북특별자치도 김제시 진봉면 가실리 1049-12</p>
                  <p>지평선 김 주식회사</p>
                  <p>HorizonSeaweed 스마트팜 단지</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  대표 연락처
                </h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p>이메일: loadstar0724@gmail.com</p>
                  <p>홈페이지: www.horizonseaweed.co.kr</p>
                </div>
              </div>
            </div>


            <div className="mt-12 pt-8 border-t text-center">
              <p className="mb-2">
                <span className="font-bold">© 2016 HorizonSeaweed. All rights reserved.</span>
              </p>
              <p className="text-sm text-gray-600">
                본 문서는 HorizonSeaweed의 공식 자료입니다. 무단 전재 및 재배포를 금합니다.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                문서 작성일: {new Date().toLocaleDateString('ko-KR')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}