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
  Globe
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
            <p className="text-xl mb-4">세계 최초 육상 스마트 김양식 플랫폼</p>
            <p className="text-lg text-gray-600">블록체인 기반 스마트 팜 솔루션</p>
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
              <li>2. 스마트 육상 김양식</li>
              <li>3. 특허 안내</li>
              <li>4. 기술 안내</li>
              <li>5. 시설 안내</li>
              <li>6. 김 산업 현황</li>
              <li>7. 블록체인 토큰</li>
              <li>8. 팀 소개</li>
              <li>9. 연락처</li>
            </ol>
          </div>
        </section>

        {/* 1. 회사 소개 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">1. 회사 소개</h2>
            
            <h3 className="text-2xl font-semibold mb-4">혁신적인 육상 김양식의 선두주자</h3>
            <p className="mb-6 text-justify">
              HorizonSeaweed는 전통적인 해상 김양식의 한계를 극복하고, 육상에서도 최고품질의 김을 생산할 수 있는 
              혁신적인 스마트팜 기술을 개발한 기업입니다.
            </p>

            <h3 className="text-xl font-semibold mb-3">비전</h3>
            <p className="mb-6 text-justify">
              "전 세계 어디서나 깨끗하고 안전한 김을 생산하는 글로벌 스마트팜 리더"
            </p>

            <h3 className="text-xl font-semibold mb-3">핵심 가치</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>지속가능한 친환경 농업</li>
              <li>혁신적인 기술 개발</li>
              <li>품질 우선주의</li>
              <li>글로벌 식량 안보 기여</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">주요 통계</h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border p-4">
                <p className="font-semibold">연간 생산량</p>
                <p className="text-2xl">1,200톤</p>
              </div>
              <div className="border p-4">
                <p className="font-semibold">재배 면적</p>
                <p className="text-2xl">3,000평</p>
              </div>
              <div className="border p-4">
                <p className="font-semibold">특허 보유</p>
                <p className="text-2xl">15건</p>
              </div>
              <div className="border p-4">
                <p className="font-semibold">글로벌 파트너</p>
                <p className="text-2xl">25개국</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2. 스마트 육상 김양식 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">2. 스마트 육상 김양식</h2>

            <h3 className="text-2xl font-semibold mb-4">세계 최초 육상 김양식 기술</h3>
            <p className="mb-6 text-justify">
              김제평야의 드넓은 벼 곡창지대에서 시작된 지평선 김의 혁신. 
              바다가 없는 내륙에서도, 도시 한복판에서도 이제 전 세계 어디서나 최고급 김을 생산할 수 있습니다.
            </p>

            <h3 className="text-xl font-semibold mb-3">기술적 특징</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>AI 기반 자동 환경 제어 시스템</li>
              <li>IoT 센서를 통한 실시간 모니터링</li>
              <li>최적화된 영양분 자동 공급 시스템</li>
              <li>친환경 순환형 물 재활용 시스템</li>
              <li>블록체인 기반 품질 이력 관리</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">장점</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">• 연중 생산 가능</h4>
                <p className="ml-4">계절에 관계없이 365일 안정적인 생산</p>
              </div>
              <div>
                <h4 className="font-semibold">• 품질 균일성</h4>
                <p className="ml-4">환경 제어를 통한 일정한 최고급 품질 유지</p>
              </div>
              <div>
                <h4 className="font-semibold">• 친환경 생산</h4>
                <p className="ml-4">해양 오염 물질 없는 깨끗한 환경에서 재배</p>
              </div>
              <div>
                <h4 className="font-semibold">• 높은 생산성</h4>
                <p className="ml-4">전통 양식 대비 5배 이상의 생산량</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. 특허 안내 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">3. 특허 안내</h2>

            <h3 className="text-2xl font-semibold mb-4">보유 특허 현황</h3>
            <p className="mb-6">HorizonSeaweed는 혁신적인 육상 김양식 기술에 대한 다수의 특허를 보유하고 있습니다.</p>

            <div className="space-y-4">
              <div className="border p-4">
                <h4 className="font-semibold mb-2">특허 제10-2024-0001호</h4>
                <p className="text-sm mb-1">육상 김 양식을 위한 스마트팜 시스템</p>
                <p className="text-xs text-gray-600">등록일: 2024.01.15</p>
              </div>

              <div className="border p-4">
                <h4 className="font-semibold mb-2">특허 제10-2024-0002호</h4>
                <p className="text-sm mb-1">AI 기반 김 생육 환경 자동 제어 방법</p>
                <p className="text-xs text-gray-600">등록일: 2024.02.20</p>
              </div>

              <div className="border p-4">
                <h4 className="font-semibold mb-2">특허 제10-2024-0003호</h4>
                <p className="text-sm mb-1">블록체인을 활용한 김 품질 이력 관리 시스템</p>
                <p className="text-xs text-gray-600">등록일: 2024.03.10</p>
              </div>

              <div className="border p-4">
                <h4 className="font-semibold mb-2">특허 제10-2024-0004호</h4>
                <p className="text-sm mb-1">순환형 물 재활용 김 양식 장치</p>
                <p className="text-xs text-gray-600">등록일: 2024.04.05</p>
              </div>

              <div className="border p-4">
                <h4 className="font-semibold mb-2">특허 제10-2024-0005호</h4>
                <p className="text-sm mb-1">IoT 센서 기반 김 생장 모니터링 시스템</p>
                <p className="text-xs text-gray-600">등록일: 2024.05.15</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100">
              <p className="text-sm">
                <strong>참고:</strong> 상기 특허들은 국내외 특허권으로 보호받고 있으며, 
                무단 사용 시 법적 제재를 받을 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* 4. 기술 안내 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">4. 기술 안내</h2>

            <h3 className="text-2xl font-semibold mb-4">핵심 기술</h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold mb-3">1. AI 환경 제어 시스템</h4>
                <p className="mb-3">딥러닝 기반의 환경 최적화 알고리즘으로 김의 생장에 최적인 조건을 자동으로 유지합니다.</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>온도: 10-15°C 자동 유지</li>
                  <li>염도: 2.8-3.2% 정밀 제어</li>
                  <li>pH: 7.5-8.5 실시간 조절</li>
                  <li>조도: 3,000-5,000 lux 최적화</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">2. IoT 모니터링</h4>
                <p className="mb-3">실시간 센서 데이터를 통한 24시간 모니터링 시스템</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>수질 센서: DO, pH, 탁도, 염도</li>
                  <li>환경 센서: 온도, 습도, CO2</li>
                  <li>생육 센서: 성장률, 색도, 밀도</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">3. 블록체인 품질 관리</h4>
                <p className="mb-3">생산부터 유통까지 모든 과정을 블록체인에 기록하여 투명성과 신뢰성 확보</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>생산 이력 추적</li>
                  <li>품질 검사 결과 저장</li>
                  <li>유통 경로 투명화</li>
                  <li>소비자 신뢰도 향상</li>
                </ul>
              </div>

              <div>
                <h4 className="text-xl font-semibold mb-3">4. 에너지 효율화</h4>
                <p className="mb-3">태양광 발전과 ESS를 활용한 친환경 에너지 시스템</p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>태양광 발전: 500kW</li>
                  <li>ESS 용량: 1MWh</li>
                  <li>에너지 자급률: 80%</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. 시설 안내 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">5. 시설 안내</h2>

            <h3 className="text-2xl font-semibold mb-4">생산 시설 현황 (1동 350평 기준)</h3>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Calculator className="w-5 h-5" />
                  <h4 className="font-semibold">연간 매출액</h4>
                </div>
                <p className="text-2xl font-bold">4.32억</p>
              </div>

              <div className="border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5" />
                  <h4 className="font-semibold">월평균 매출</h4>
                </div>
                <p className="text-2xl font-bold">3,600만원</p>
              </div>

              <div className="border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <PiggyBank className="w-5 h-5" />
                  <h4 className="font-semibold">10일 생산량</h4>
                </div>
                <p className="text-2xl font-bold">4,000kg</p>
              </div>

              <div className="border p-4">
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-5 h-5" />
                  <h4 className="font-semibold">시설 투자비용</h4>
                </div>
                <p className="text-2xl font-bold">15억</p>
              </div>
            </div>

            <h3 className="text-xl font-semibold mb-3">주요 시설</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold">• 재배동</h4>
                <p className="ml-4">- 면적: 350평 (1,157㎡)</p>
                <p className="ml-4">- 수조: 50개 (각 23㎡)</p>
                <p className="ml-4">- 층고: 6m</p>
              </div>

              <div>
                <h4 className="font-semibold">• 제어실</h4>
                <p className="ml-4">- 중앙 통제 시스템</p>
                <p className="ml-4">- 실시간 모니터링 장비</p>
                <p className="ml-4">- 백업 전력 시스템</p>
              </div>

              <div>
                <h4 className="font-semibold">• 가공실</h4>
                <p className="ml-4">- HACCP 인증 시설</p>
                <p className="ml-4">- 자동 건조 시스템</p>
                <p className="ml-4">- 포장 자동화 라인</p>
              </div>

              <div>
                <h4 className="font-semibold">• 저장고</h4>
                <p className="ml-4">- 냉장/냉동 시설</p>
                <p className="ml-4">- 항온항습 시스템</p>
                <p className="ml-4">- 용량: 100톤</p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. 김 산업 현황 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">6. 김 산업 현황</h2>

            <h3 className="text-2xl font-semibold mb-4">글로벌 김 시장</h3>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">시장 규모</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>세계 김 시장 규모: 약 30억 달러 (2024년 기준)</li>
                <li>연평균 성장률: 8.5%</li>
                <li>2030년 예상 규모: 50억 달러</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">주요 생산국</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">국가</th>
                    <th className="border p-2 text-left">생산량(톤)</th>
                    <th className="border p-2 text-left">점유율</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">한국</td>
                    <td className="border p-2">600,000</td>
                    <td className="border p-2">35%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">중국</td>
                    <td className="border p-2">500,000</td>
                    <td className="border p-2">29%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">일본</td>
                    <td className="border p-2">300,000</td>
                    <td className="border p-2">18%</td>
                  </tr>
                  <tr>
                    <td className="border p-2">기타</td>
                    <td className="border p-2">300,000</td>
                    <td className="border p-2">18%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">시장 동향</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>건강식품으로서의 인식 확대</li>
                <li>스낵류 시장 성장 (김스낵, 시즈닝김)</li>
                <li>수출 시장 다변화 (미국, 유럽, 동남아)</li>
                <li>프리미엄 제품 수요 증가</li>
                <li>친환경 인증 제품 선호</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-3">육상 김양식의 전망</h4>
              <p className="mb-3">
                기후변화와 해양오염으로 인한 전통 김양식의 한계를 극복할 수 있는 대안으로 주목받고 있으며,
                안정적인 공급과 품질 관리가 가능한 육상 김양식은 미래 김 산업의 핵심이 될 것으로 전망됩니다.
              </p>
            </div>
          </div>
        </section>

        {/* 7. 블록체인 토큰 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">7. 블록체인 & SEAWEED 토큰</h2>

            <h3 className="text-2xl font-semibold mb-4">SEAWEED 토큰 소개</h3>
            <p className="mb-6">
              SEAWEED 토큰은 HorizonSeaweed 생태계의 핵심 유틸리티 토큰으로, 
              스마트팜 운영과 투자, 보상 시스템에 사용됩니다.
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">토큰 정보</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>토큰명: SEAWEED (SWD)</li>
                <li>블록체인: Ethereum (ERC-20)</li>
                <li>총 발행량: 1,000,000,000 SWD</li>
                <li>초기 가격: $0.10</li>
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">토큰 활용</h4>
              <div className="space-y-3">
                <div>
                  <h5 className="font-semibold">• 스마트팜 투자</h5>
                  <p className="ml-4">토큰을 통한 스마트팜 지분 투자 및 수익 공유</p>
                </div>
                <div>
                  <h5 className="font-semibold">• 품질 보증</h5>
                  <p className="ml-4">블록체인 기반 품질 인증 및 이력 추적</p>
                </div>
                <div>
                  <h5 className="font-semibold">• 거버넌스</h5>
                  <p className="ml-4">생태계 운영 방향에 대한 투표권 행사</p>
                </div>
                <div>
                  <h5 className="font-semibold">• 보상 시스템</h5>
                  <p className="ml-4">스마트팜 운영 기여도에 따른 토큰 보상</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3">토큰 분배</h4>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2 text-left">구분</th>
                    <th className="border p-2 text-left">비율</th>
                    <th className="border p-2 text-left">수량 (SWD)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-2">생태계 보상</td>
                    <td className="border p-2">30%</td>
                    <td className="border p-2">300,000,000</td>
                  </tr>
                  <tr>
                    <td className="border p-2">판매</td>
                    <td className="border p-2">25%</td>
                    <td className="border p-2">250,000,000</td>
                  </tr>
                  <tr>
                    <td className="border p-2">팀 & 어드바이저</td>
                    <td className="border p-2">20%</td>
                    <td className="border p-2">200,000,000</td>
                  </tr>
                  <tr>
                    <td className="border p-2">개발</td>
                    <td className="border p-2">15%</td>
                    <td className="border p-2">150,000,000</td>
                  </tr>
                  <tr>
                    <td className="border p-2">예비비</td>
                    <td className="border p-2">10%</td>
                    <td className="border p-2">100,000,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* 8. 팀 소개 */}
        <section className="page-break-after">
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">8. 팀 소개</h2>

            <h3 className="text-2xl font-semibold mb-6">경영진</h3>

            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">김철수 - CEO</h4>
                <p className="text-gray-600 mb-2">최고경영자</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>서울대학교 농업생명과학대학 졸업</li>
                  <li>전) 농촌진흥청 스마트팜 연구팀장</li>
                  <li>15년 이상의 농업 기술 연구 경험</li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">이영희 - CTO</h4>
                <p className="text-gray-600 mb-2">최고기술책임자</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>KAIST 전기전자공학 박사</li>
                  <li>전) 삼성전자 IoT 사업부</li>
                  <li>스마트팜 자동화 시스템 특허 5건 보유</li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">박민수 - CFO</h4>
                <p className="text-gray-600 mb-2">최고재무책임자</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>연세대학교 경영학과 졸업, CPA</li>
                  <li>전) PwC 컨설팅 시니어 매니저</li>
                  <li>농업 분야 투자 및 M&A 전문가</li>
                </ul>
              </div>

              <div className="border-b pb-4">
                <h4 className="text-xl font-semibold">정수진 - CMO</h4>
                <p className="text-gray-600 mb-2">최고마케팅책임자</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>이화여자대학교 국제통상학 졸업</li>
                  <li>전) CJ제일제당 글로벌 마케팅팀</li>
                  <li>식품 수출 및 해외 시장 개척 전문</li>
                </ul>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">어드바이저</h3>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Dr. James Wilson</strong> - MIT 농업공학과 교수</li>
              <li><strong>김해진</strong> - 전) 해양수산부 차관</li>
              <li><strong>Michael Chen</strong> - 블록체인 전문가, Ethereum Foundation</li>
              <li><strong>박소연</strong> - ESG 경영 컨설턴트</li>
            </ul>
          </div>
        </section>

        {/* 9. 연락처 */}
        <section>
          <div className="p-12">
            <h2 className="text-3xl font-bold mb-8">9. 연락처</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">본사</h3>
                <p>전라북도 김제시 스마트팜로 123</p>
                <p>HorizonSeaweed 본사 빌딩</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">연락처</h3>
                <p>대표전화: 063-123-4567</p>
                <p>팩스: 063-123-4568</p>
                <p>이메일: info@horizonseaweed.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">영업 문의</h3>
                <p>국내 영업: sales@horizonseaweed.com</p>
                <p>해외 영업: export@horizonseaweed.com</p>
                <p>영업 시간: 평일 09:00 - 18:00</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">기술 지원</h3>
                <p>기술 문의: tech@horizonseaweed.com</p>
                <p>고객 지원: support@horizonseaweed.com</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">투자 문의</h3>
                <p>IR 담당: ir@horizonseaweed.com</p>
                <p>전화: 063-123-4570</p>
              </div>

              <div className="mt-8 p-4 border-t">
                <p className="text-center text-gray-600">
                  © 2016 HorizonSeaweed. All rights reserved.
                </p>
                <p className="text-center text-gray-600 mt-2">
                  본 문서는 HorizonSeaweed의 공식 자료입니다.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}