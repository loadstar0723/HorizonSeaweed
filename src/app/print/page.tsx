'use client'

import React from 'react'
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
  CheckCircle,
  Zap,
  Target,
  Eye,
  Rocket,
  Sparkles,
  Timer,
  Beaker,
  Settings
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
              <li>9. SEAWEED 토큰</li>
              <li>10. 연락처</li>
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
            <h2 className="text-3xl font-bold mb-8">8. 특허 기술</h2>

            <div className="text-center mb-8">
              <Sparkles className="w-16 h-16 text-gold-500 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold mb-4">HorizonSeaweed 독점 특허</h3>
              <p className="text-lg">
                육상 김양식 분야의 핵심 기술을 보유한 유일한 기업으로,<br />
                2건의 원천 특허를 통해 기술적 우위를 확보하고 있습니다.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold mb-2">수직형 양식 구조</h4>
                <p className="text-sm text-gray-600">10층 수직 재배 시스템으로 공간 효율 극대화</p>
              </div>
              <div className="border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold mb-2">스마트 순환 시스템</h4>
                <p className="text-sm text-gray-600">자동화된 물 순환 및 영양분 공급 시스템</p>
              </div>
              <div className="border rounded-lg p-6 text-center">
                <Shield className="w-12 h-12 text-primary-600 mx-auto mb-3" />
                <h4 className="font-bold mb-2">AI 생육 관리 기술</h4>
                <p className="text-sm text-gray-600">인공지능 기반 최적 생육 환경 자동 제어</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">특허 기술의 장점</h4>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h5 className="font-semibold mb-2">기술적 우위</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 세계 최초 육상 김양식 특허</li>
                    <li>• 독자적인 수직 재배 기술</li>
                    <li>• AI 기반 자동화 시스템</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold mb-2">경쟁력</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 기술 모방 불가능</li>
                    <li>• 독점적 시장 지위</li>
                    <li>• 지속적인 기술 개발</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. SEAWEED 토큰 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">9. SEAWEED 토큰</h2>

            <h3 className="text-2xl font-semibold mb-4">블록체인 기반 스마트팜 생태계</h3>
            <p className="mb-6">
              SEAWEED 토큰은 Polygon 기반 100억개 발행, 다양한 소각 메커니즘으로 가치 상승을 목표로 하는 
              HorizonSeaweed 생태계의 핵심 유틸리티 토큰입니다.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-primary-600" />
                  토큰 정보
                </h4>
                <ul className="text-sm space-y-2">
                  <li><strong>토큰명:</strong> SEAWEED</li>
                  <li><strong>심볼:</strong> SWD</li>
                  <li><strong>블록체인:</strong> Polygon</li>
                  <li><strong>총 발행량:</strong> 100억개</li>
                  <li><strong>토큰 표준:</strong> ERC-20</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-bold mb-3 flex items-center gap-2">
                  <Coins className="w-5 h-5 text-primary-600" />
                  소각 메커니즘
                </h4>
                <ul className="text-sm space-y-2">
                  <li>• 거래 수수료의 일부 자동 소각</li>
                  <li>• 분기별 수익의 일부로 바이백 & 소각</li>
                  <li>• 특별 이벤트 소각</li>
                  <li>• 장기 스테이킹 보상 소각</li>
                </ul>
              </div>
            </div>

            <h4 className="font-bold mb-3">토큰 활용</h4>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold mb-2">스마트팜 투자</h5>
                <p className="text-sm">토큰을 통한 스마트팜 지분 투자 및 수익 공유</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold mb-2">품질 인증</h5>
                <p className="text-sm">블록체인 기반 품질 인증 및 이력 추적</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold mb-2">거버넌스</h5>
                <p className="text-sm">생태계 운영 방향에 대한 투표권 행사</p>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <h5 className="font-semibold mb-2">보상 시스템</h5>
                <p className="text-sm">스마트팜 운영 기여도에 따른 토큰 보상</p>
              </div>
            </div>

            <div className="bg-primary-50 p-4 rounded text-center">
              <p className="text-lg font-semibold text-primary-800">
                블록체인 기술로 투명하고 신뢰할 수 있는 김양식 생태계 구축
              </p>
            </div>
          </div>
        </section>

        {/* 10. 연락처 */}
        <section>
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">10. 연락처</h2>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  본사 정보
                </h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="mb-2"><strong>주소:</strong></p>
                  <p>전라북도 김제시 지평선로 123</p>
                  <p>HorizonSeaweed 스마트팜 단지</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Phone className="w-6 h-6" />
                  대표 연락처
                </h3>
                <div className="bg-gray-50 p-4 rounded">
                  <p>대표전화: 1588-1234</p>
                  <p>팩스: 063-123-4568</p>
                  <p>이메일: info@horizonseaweed.com</p>
                  <p>홈페이지: www.horizonseaweed.co.kr</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">사업 문의</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>국내 영업:</strong> sales@horizonseaweed.com</p>
                    <p><strong>전화:</strong> 1588-1234 (내선 1번)</p>
                  </div>
                  <div>
                    <p><strong>해외 영업:</strong> export@horizonseaweed.com</p>
                    <p><strong>전화:</strong> +82-63-123-4567</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">기술 지원</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>기술 문의:</strong> tech@horizonseaweed.com</p>
                    <p><strong>전화:</strong> 1588-1234 (내선 2번)</p>
                  </div>
                  <div>
                    <p><strong>고객 지원:</strong> support@horizonseaweed.com</p>
                    <p><strong>운영 시간:</strong> 평일 09:00 - 18:00</p>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <h4 className="font-semibold mb-2">투자 문의</h4>
                <div className="text-sm">
                  <p><strong>IR 담당:</strong> ir@horizonseaweed.com</p>
                  <p><strong>전화:</strong> 1588-1234 (내선 3번)</p>
                  <p><strong>토큰 관련:</strong> token@horizonseaweed.com</p>
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