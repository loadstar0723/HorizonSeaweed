'use client'

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

function Tank({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* 수조 */}
      <mesh>
        <boxGeometry args={[2, 0.5, 20]} />
        <meshStandardMaterial color="#4a9eff" transparent opacity={0.3} />
      </mesh>
      
      {/* 수조 프레임 */}
      <lineSegments>
        <edgesGeometry args={[new THREE.BoxGeometry(2, 0.5, 20)]} />
        <lineBasicMaterial color="#ffffff" />
      </lineSegments>
      
      {/* LED 조명 */}
      {[...Array(10)].map((_, i) => (
        <mesh key={i} position={[0, 0.35, -10 + i * 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.1]} />
          <meshStandardMaterial color="#ffff00" emissive="#ffff00" emissiveIntensity={0.5} />
        </mesh>
      ))}
      
      {/* 김 표현 */}
      <mesh position={[0, 0, 0]}>
        <planeGeometry args={[1.8, 19]} />
        <meshStandardMaterial color="#0a4d0a" side={THREE.DoubleSide} transparent opacity={0.7} />
      </mesh>
    </group>
  )
}

function Scene() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <directionalLight position={[0, 10, 5]} intensity={1} />
      
      <group ref={groupRef}>
        {/* 10층 구조 */}
        {[...Array(10)].map((_, floor) => (
          <group key={floor} position={[0, floor * 1.2, 0]}>
            {/* 각 층에 4개 수조 */}
            {[...Array(4)].map((_, tank) => (
              <Tank
                key={tank}
                position={[
                  (tank % 2) * 3 - 1.5,
                  0,
                  Math.floor(tank / 2) * 22 - 11
                ]}
              />
            ))}
            
            {/* 층 플랫폼 */}
            <mesh position={[0, -0.05, 0]}>
              <boxGeometry args={[8, 0.1, 50]} />
              <meshStandardMaterial color="#333333" />
            </mesh>
          </group>
        ))}
        
        {/* 기둥 */}
        {[[-4, 0, -25], [4, 0, -25], [-4, 0, 25], [4, 0, 25]].map((pos, i) => (
          <mesh key={i} position={[pos[0], 6, pos[2]]}>
            <boxGeometry args={[0.3, 12, 0.3]} />
            <meshStandardMaterial color="#666666" />
          </mesh>
        ))}
      </group>
      
      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        target={[0, 5, 0]}
      />
    </>
  )
}

export default function SimpleAquaculture3D() {
  return (
    <div className="w-full h-[600px] bg-gradient-to-b from-dark-400 to-dark-300 rounded-2xl overflow-hidden">
      <Canvas camera={{ position: [20, 15, 30], fov: 60 }}>
        <Scene />
      </Canvas>
    </div>
  )
}