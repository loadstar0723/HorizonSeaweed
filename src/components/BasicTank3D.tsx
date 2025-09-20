'use client'

import React from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

// LED 조명 컴포넌트
function LEDLight({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* LED 바 */}
      <Box args={[3.5, 0.1, 0.3]}>
        <meshStandardMaterial color="#ffffff" emissive="#ffffff" emissiveIntensity={0.5} />
      </Box>
      {/* LED 광원 */}
      <spotLight
        position={[0, -0.2, 0]}
        angle={Math.PI / 3}
        penumbra={0.5}
        intensity={1}
        color="#ffffff"
        distance={2}
      />
    </group>
  )
}

// 그물 컴포넌트
function SeaweedNet({ position }: { position: [number, number, number] }) {
  // 김 위치를 미리 계산
  const seaweedPositions = []
  // 더 촘촘한 그리드
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 30; j++) {
      if (Math.random() > 0.05) { // 95% 확률로 김 생성
        // 한 위치에 1-2개의 김 배치
        const numSeaweed = Math.random() > 0.5 ? 2 : 1
        for (let k = 0; k < numSeaweed; k++) {
          seaweedPositions.push({
            x: (i - 7) * 0.25 + (Math.random() - 0.5) * 0.1,
            z: (j - 14.5) * 0.58 + (Math.random() - 0.5) * 0.1,
            height: 0.35 + Math.random() * 0.25, // 0.35~0.6 길이
            rotation: Math.random() * 0.3 - 0.15 // 약간의 회전 변화
          })
        }
      }
    }
  }
  
  return (
    <group position={position}>
      {/* # 모양 그물 - 가로선 (더 촘촘하게) */}
      {[...Array(24)].map((_, i) => (
        <Box key={`h-${i}`} args={[3.6, 0.01, 0.01]} position={[0, 0, (i - 11.5) * 0.75]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      ))}
      {/* # 모양 그물 - 세로선 (더 촘촘하게) */}
      {[...Array(10)].map((_, i) => (
        <Box key={`v-${i}`} args={[0.01, 0.01, 17.5]} position={[(i - 4.5) * 0.4, 0, 0]}>
          <meshStandardMaterial color="#1a1a1a" />
        </Box>
      ))}
      
      {/* 그물에 매달린 김 */}
      {seaweedPositions.map((item, idx) => (
        <Box 
          key={idx} 
          args={[0.1, item.height, 0.002]} 
          position={[item.x, -item.height/2, item.z]}
          rotation={[item.rotation, 0, item.rotation * 0.5]}
        >
          <meshStandardMaterial 
            color="#000000" 
            roughness={0.9}
            metalness={0}
          />
        </Box>
      ))}
    </group>
  )
}

// 수조 컴포넌트
function Tank({ position, floor, index }: { position: [number, number, number], floor: number, index: number }) {
  return (
    <group position={position}>
      {/* 수조 프레임 - 왼쪽이 열린 ㄷ자 */}
      <group>
        {/* 바닥 */}
        <Box args={[4, 0.05, 20]} position={[0, -0.025, 0]}>
          <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
        </Box>
        
        {/* 우측 벽 (닫힌 쪽) */}
        <Box args={[0.05, 0.5, 20]} position={[2, 0.25, 0]}>
          <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
        </Box>
        
        {/* 앞쪽 벽 */}
        <Box args={[4, 0.5, 0.05]} position={[0, 0.25, 10]}>
          <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
        </Box>
        
        {/* 뒤쪽 벽 */}
        <Box args={[4, 0.5, 0.05]} position={[0, 0.25, -10]}>
          <meshStandardMaterial color="#2563eb" metalness={0.7} roughness={0.2} />
        </Box>
      </group>
      
      {/* 물 표현 */}
      <Box args={[3.9, 0.35, 19.9]} position={[0, 0.175, 0]}>
        <meshPhysicalMaterial
          color="#00bfff"
          transparent
          opacity={0.4}
          roughness={0}
          metalness={0}
          transmission={0.7}
          ior={1.33}
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </Box>
      
      {/* 물 표면 효과 */}
      <Box args={[3.9, 0.01, 19.9]} position={[0, 0.35, 0]}>
        <meshStandardMaterial 
          color="#87ceeb" 
          transparent 
          opacity={0.3}
          emissive="#00bfff"
          emissiveIntensity={0.2}
        />
      </Box>
      
      {/* # 모양 그물 */}
      <SeaweedNet position={[0, 0.36, 0]} />
      
      {/* LED 조명 - 윗층 바닥에 6개 배치 */}
      <LEDLight position={[0, 1.45, -8]} />
      <LEDLight position={[0, 1.45, -4.8]} />
      <LEDLight position={[0, 1.45, -1.6]} />
      <LEDLight position={[0, 1.45, 1.6]} />
      <LEDLight position={[0, 1.45, 4.8]} />
      <LEDLight position={[0, 1.45, 8]} />
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 15, 5]} intensity={1} />
      <pointLight position={[-10, 10, -5]} intensity={0.5} color="#88ccff" />
      
      {/* 5층 수조 - 1줄만 */}
      {[...Array(5)].map((_, floor) => (
        <group key={floor} position={[0, floor * 1.5, 0]}>
          {/* 1개 수조 (중앙) */}
          <Tank
            position={[0, 0, 0]}
            floor={floor + 1}
            index={0}
          />
        </group>
      ))}
      
      <OrbitControls 
        enableDamping 
        target={[-1, 3, 0]}
        minDistance={20}
        maxDistance={60}
        maxPolarAngle={Math.PI * 0.85}
      />
    </>
  )
}

export default function BasicTank3D() {
  return (
    <div className="w-full h-full relative overflow-hidden rounded-2xl">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-400 to-dark-300" />
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(96, 165, 250, 0.15) 90%, rgba(147, 197, 253, 0.2) 100%)'
        }}
      />
      <Canvas camera={{ position: [15, 18, 28], fov: 28 }}>
        <Scene />
      </Canvas>
    </div>
  )
}