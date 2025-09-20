'use client'

import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box, Cylinder, MeshReflectorMaterial, Environment, Float, Text } from '@react-three/drei'
import * as THREE from 'three'

// LED 패널 컴포넌트
function LEDPanel({ position }: { position: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh) {
          const material = child.material as THREE.MeshStandardMaterial
          material.emissiveIntensity = 0.5 + Math.sin(state.clock.elapsedTime * 2 + i * 0.5) * 0.3
        }
      })
    }
  })
  
  return (
    <group ref={groupRef} position={position}>
      {/* LED 패널 베이스 */}
      <Box args={[2, 0.1, 0.5]}>
        <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.2} />
      </Box>
      
      {/* LED 전구들 */}
      {[...Array(10)].map((_, i) => (
        <group key={i} position={[-0.9 + i * 0.2, -0.06, 0]}>
          <Cylinder args={[0.03, 0.03, 0.02]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial 
              color="#ffffff"
              emissive="#4a9eff"
              emissiveIntensity={0.5}
            />
          </Cylinder>
          <pointLight 
            intensity={0.2} 
            distance={1} 
            color="#4a9eff" 
            position={[0, -0.1, 0]} 
          />
        </group>
      ))}
    </group>
  )
}

// 김 그물 컴포넌트
function SeaweedMesh({ position }: { position: [number, number, number] }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const count = 200 // 김 개수
  
  const instances = useMemo(() => {
    const temp = []
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 1.8
      const z = (Math.random() - 0.5) * 19
      temp.push({
        position: [x, 0, z] as [number, number, number],
        scale: 0.3 + Math.random() * 0.3,
        speed: 0.5 + Math.random() * 0.5
      })
    }
    return temp
  }, [])
  
  useFrame((state) => {
    if (meshRef.current) {
      instances.forEach((item, i) => {
        const matrix = new THREE.Matrix4()
        const waveY = Math.sin(state.clock.elapsedTime * item.speed + i) * 0.03
        matrix.setPosition(item.position[0], item.position[1] + waveY, item.position[2])
        const scale = item.scale * (1 + Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.1)
        matrix.scale(new THREE.Vector3(scale, scale, scale))
        meshRef.current!.setMatrixAt(i, matrix)
      })
      meshRef.current!.instanceMatrix.needsUpdate = true
    }
  })
  
  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
        <planeGeometry args={[0.1, 0.4]} />
        <meshStandardMaterial 
          color="#0a4d0a"
          side={THREE.DoubleSide}
          transparent
          opacity={0.8}
        />
      </instancedMesh>
    </group>
  )
}

// 수조 컴포넌트
function Tank({ position, floor, index }: { position: [number, number, number], floor: number, index: number }) {
  return (
    <group position={position}>
      {/* 수조 프레임 */}
      <group>
        {/* 바닥 */}
        <Box args={[2.05, 0.05, 20.05]} position={[0, 0, 0]}>
          <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
        </Box>
        
        {/* 좌측 벽 */}
        <Box args={[0.05, 0.5, 20]} position={[-1, 0.25, 0]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.2}
            metalness={0.1}
            roughness={0}
            transmission={0.8}
          />
        </Box>
        
        {/* 우측 벽 */}
        <Box args={[0.05, 0.5, 20]} position={[1, 0.25, 0]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.2}
            metalness={0.1}
            roughness={0}
            transmission={0.8}
          />
        </Box>
        
        {/* 후면 벽 */}
        <Box args={[2, 0.5, 0.05]} position={[0, 0.25, -10]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.2}
            metalness={0.1}
            roughness={0}
            transmission={0.8}
          />
        </Box>
      </group>
      
      {/* 물 */}
      <Box args={[1.95, 0.35, 19.95]} position={[0, 0.175, 0]}>
        <meshPhysicalMaterial
          color="#0066aa"
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0.1}
          transmission={0.5}
          ior={1.33}
        />
      </Box>
      
      {/* 김 그물 */}
      <SeaweedMesh position={[0, 0.3, 0]} />
      
      {/* LED 조명 */}
      <LEDPanel position={[0, 0.6, 0]} />
      
      {/* 수조 번호 표시 */}
      <Float speed={2} floatIntensity={0.3}>
        <group position={[0, 0.8, -10.2]}>
          <Box args={[0.8, 0.25, 0.05]}>
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.2} />
          </Box>
          <Text
            position={[0, 0, 0.03]}
            fontSize={0.12}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            {`${floor}-${index + 1}`}
          </Text>
        </group>
      </Float>
    </group>
  )
}

// 메인 장면
function Scene() {
  const structureRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (structureRef.current) {
      structureRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.05) * 0.02
    }
  })
  
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight 
        position={[10, 20, 5]} 
        intensity={1.2}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <pointLight position={[-10, 10, -5]} intensity={0.5} color="#88ccff" />
      
      <Environment preset="sunset" />
      
      <group ref={structureRef}>
        {/* 10층 구조 */}
        {[...Array(10)].map((_, floor) => (
          <group key={floor} position={[0, floor * 1.2, 0]}>
            {/* 층 플랫폼 */}
            <Box args={[8, 0.1, 50]} position={[0, -0.05, 0]}>
              <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
            </Box>
            
            {/* 각 층의 4개 수조 */}
            {[...Array(4)].map((_, tank) => (
              <Tank
                key={tank}
                position={[
                  (tank % 2) * 3 - 1.5,
                  0.05,
                  Math.floor(tank / 2) * 22 - 11
                ]}
                floor={floor + 1}
                index={tank}
              />
            ))}
            
            {/* 층 번호 */}
            <Text
              position={[-4.5, 0.3, 0]}
              fontSize={0.6}
              color="#fbbf24"
              anchorX="center"
              anchorY="middle"
            >
              {`${floor + 1}F`}
            </Text>
          </group>
        ))}
        
        {/* 구조물 기둥 */}
        {[[-4, -25], [4, -25], [-4, 25], [4, 25]].map((pos, i) => (
          <Box key={i} args={[0.4, 12, 0.4]} position={[pos[0], 6, pos[1]]}>
            <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.3} />
          </Box>
        ))}
        
        {/* 상단 빔 */}
        {[...Array(11)].map((_, i) => (
          <group key={i}>
            <Box args={[8, 0.3, 0.3]} position={[0, i * 1.2 - 0.15, 25]}>
              <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.3} />
            </Box>
            <Box args={[8, 0.3, 0.3]} position={[0, i * 1.2 - 0.15, -25]}>
              <meshStandardMaterial color="#4a4a4a" metalness={0.8} roughness={0.3} />
            </Box>
          </group>
        ))}
      </group>
      
      {/* 바닥 - 반사 효과 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[100, 100]} />
        <MeshReflectorMaterial
          blur={[300, 30]}
          resolution={2048}
          mixBlur={1}
          mixStrength={80}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
      
      {/* 제어실 건물 */}
      <group position={[0, -0.5, -30]}>
        <Box args={[8, 2.5, 5]}>
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
        </Box>
        <Text
          position={[0, 1.5, 2.51]}
          fontSize={0.4}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          CONTROL CENTER
        </Text>
      </group>
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={15}
        maxDistance={100}
        target={[0, 5, 0]}
        maxPolarAngle={Math.PI * 0.85}
      />
    </>
  )
}

export default function EnhancedAquaculture3D() {
  return (
    <div className="w-full h-[700px] relative bg-gradient-to-b from-dark-400 to-dark-300 rounded-2xl overflow-hidden">
      <Canvas shadows camera={{ position: [25, 18, 35], fov: 50 }}>
        <Scene />
      </Canvas>
      
      {/* 오버레이 정보 */}
      <div className="absolute bottom-4 left-4 glass-dark p-4 rounded-lg max-w-xs">
        <h3 className="text-sm font-bold text-primary-400 mb-2">10층 수직형 김양식 시스템</h3>
        <div className="text-xs text-gray-400 space-y-1">
          <p>• 총 40개 수조 (층당 4개)</p>
          <p>• ㄷ자형 개방 구조</p>
          <p>• LED 최적 파장 시스템</p>
          <p>• 실시간 IoT 모니터링</p>
        </div>
      </div>
    </div>
  )
}