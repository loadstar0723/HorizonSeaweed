'use client'

import React, { useRef, useMemo, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  Box, 
  MeshReflectorMaterial,
  Environment,
  Float,
  Text,
  Cylinder,
  Sphere,
  Sparkles,
  PerspectiveCamera,
  ContactShadows
} from '@react-three/drei'
import * as THREE from 'three'

// 고품질 LED 조명 시스템
function LEDPanel({ position, tankWidth }: { position: [number, number, number], tankWidth: number }) {
  const ledRef = useRef<THREE.Group>(null)
  const [intensity, setIntensity] = useState(1)
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    setIntensity(0.8 + Math.sin(time * 2) * 0.2)
    if (ledRef.current) {
      ledRef.current.children.forEach((child, i) => {
        if (child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial) {
          child.material.emissiveIntensity = intensity + Math.sin(time * 3 + i) * 0.1
        }
      })
    }
  })
  
  return (
    <group position={position} ref={ledRef}>
      {/* LED 패널 프레임 */}
      <Box args={[tankWidth, 0.15, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial 
          color="#1a1a1a" 
          metalness={0.9} 
          roughness={0.1}
        />
      </Box>
      
      {/* LED 라이트 배열 */}
      {[...Array(20)].map((_, i) => (
        <group key={i} position={[-tankWidth/2 + 0.1 + i * (tankWidth/20), -0.08, 0]}>
          <Cylinder args={[0.03, 0.03, 0.02, 16]} rotation={[Math.PI/2, 0, 0]}>
            <meshStandardMaterial
              color="#ffffff"
              emissive="#00aaff"
              emissiveIntensity={intensity}
              toneMapped={false}
            />
          </Cylinder>
          <pointLight
            intensity={intensity * 0.3}
            color="#00aaff"
            distance={2}
            decay={2}
          />
        </group>
      ))}
      
      {/* 반사판 */}
      <Box args={[tankWidth - 0.02, 0.01, 0.58]} position={[0, 0.07, 0]}>
        <meshStandardMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.1}
        />
      </Box>
    </group>
  )
}

// 고품질 김 시뮬레이션
function SeaweedField({ position, width, length }: { position: [number, number, number], width: number, length: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null)
  const time = useRef(0)
  
  // 김 인스턴스 생성
  const instances = useMemo(() => {
    const temp = []
    const rows = 40
    const cols = 10
    
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        temp.push({
          position: [
            (j / cols - 0.5) * width * 0.9,
            0,
            (i / rows - 0.5) * length * 0.95
          ],
          scale: 0.8 + Math.random() * 0.4,
          speed: 0.5 + Math.random() * 0.5
        })
      }
    }
    return temp
  }, [width, length])
  
  useFrame((state, delta) => {
    time.current += delta
    
    if (meshRef.current) {
      instances.forEach((instance, i) => {
        const matrix = new THREE.Matrix4()
        const position = new THREE.Vector3(
          instance.position[0],
          instance.position[1] + Math.sin(time.current * instance.speed + i) * 0.05,
          instance.position[2]
        )
        const scale = new THREE.Vector3(
          instance.scale,
          instance.scale * (1 + Math.sin(time.current * 0.5 + i) * 0.1),
          instance.scale
        )
        
        matrix.compose(position, new THREE.Quaternion(), scale)
        meshRef.current!.setMatrixAt(i, matrix)
      })
      meshRef.current.instanceMatrix.needsUpdate = true
    }
  })
  
  return (
    <group position={position}>
      <instancedMesh ref={meshRef} args={[undefined, undefined, instances.length]}>
        <planeGeometry args={[0.15, 0.8]} />
        <meshStandardMaterial
          color="#0a4d0a"
          emissive="#021f02"
          emissiveIntensity={0.2}
          side={THREE.DoubleSide}
          transparent
          opacity={0.9}
        />
      </instancedMesh>
    </group>
  )
}

// 고품질 수조 컴포넌트
function AdvancedTank({ position, index, floorIndex }: { position: [number, number, number], index: number, floorIndex: number }) {
  const tankWidth = 2
  const tankLength = 20
  const tankHeight = 0.5
  const waterHeight = 0.4
  const glassThickness = 0.02
  
  return (
    <group position={position}>
      {/* 수조 프레임 - 스테인리스 스틸 */}
      <group>
        {/* 바닥 프레임 */}
        <Box args={[tankWidth + 0.1, 0.05, tankLength + 0.1]} position={[0, -0.025, 0]}>
          <meshStandardMaterial 
            color="#e8e8e8" 
            metalness={0.9} 
            roughness={0.2}
          />
        </Box>
        
        {/* 모서리 기둥 */}
        {[[-1, -1], [1, -1], [-1, 1]].map((pos, i) => (
          <Cylinder 
            key={i}
            args={[0.03, 0.03, tankHeight + 0.1, 8]} 
            position={[pos[0] * tankWidth/2, tankHeight/2, pos[1] * tankLength/2]}
          >
            <meshStandardMaterial 
              color="#e8e8e8" 
              metalness={0.9} 
              roughness={0.2}
            />
          </Cylinder>
        ))}
      </group>
      
      {/* 유리 벽체 - 고품질 투명 재질 */}
      <group>
        {/* 좌측 유리 */}
        <Box args={[glassThickness, tankHeight, tankLength]} position={[-tankWidth/2, tankHeight/2, 0]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.1}
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={0.4}
          />
        </Box>
        
        {/* 우측 유리 */}
        <Box args={[glassThickness, tankHeight, tankLength]} position={[tankWidth/2, tankHeight/2, 0]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.1}
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={0.4}
          />
        </Box>
        
        {/* 후면 유리 */}
        <Box args={[tankWidth, tankHeight, glassThickness]} position={[0, tankHeight/2, -tankLength/2]}>
          <meshPhysicalMaterial
            color="#88ccff"
            transparent
            opacity={0.1}
            metalness={0}
            roughness={0}
            transmission={0.9}
            thickness={0.5}
            envMapIntensity={0.4}
          />
        </Box>
      </group>
      
      {/* 물 - 고품질 물 재질 */}
      <Box args={[tankWidth - 0.05, waterHeight, tankLength - 0.05]} position={[0, waterHeight/2, 0]}>
        <meshPhysicalMaterial
          color="#006994"
          transparent
          opacity={0.3}
          metalness={0.1}
          roughness={0.1}
          transmission={0.6}
          thickness={2}
          ior={1.33}
          envMapIntensity={0.5}
        />
      </Box>
      
      {/* 김 양식 시스템 */}
      <SeaweedField 
        position={[0, waterHeight * 0.7, 0]} 
        width={tankWidth - 0.2} 
        length={tankLength - 0.2}
      />
      
      {/* LED 조명 시스템 */}
      <LEDPanel position={[0, tankHeight + 0.2, 0]} tankWidth={tankWidth} />
      
      {/* 수조 정보 디스플레이 */}
      <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
        <group position={[0, tankHeight + 0.6, -tankLength/2]}>
          <Box args={[1, 0.3, 0.05]}>
            <meshStandardMaterial color="#fbbf24" emissive="#fbbf24" emissiveIntensity={0.3} />
          </Box>
          <Text
            position={[0, 0, 0.03]}
            fontSize={0.12}
            color="#000000"
            anchorX="center"
            anchorY="middle"
          >
            {`${floorIndex + 1}-${index + 1}`}
          </Text>
        </group>
      </Float>
      
      {/* 센서 시스템 표시 */}
      <group position={[tankWidth/2 - 0.1, waterHeight, 0]}>
        <Sphere args={[0.04]}>
          <meshStandardMaterial 
            color="#ff0000" 
            emissive="#ff0000" 
            emissiveIntensity={0.5}
          />
        </Sphere>
        <Sparkles
          count={10}
          scale={0.5}
          size={2}
          speed={0.5}
          color="#ff0000"
        />
      </group>
    </group>
  )
}

// 구조 프레임
function StructuralFrame() {
  const frameColor = "#4a4a4a"
  const beamWidth = 0.4
  const pillarSize = 0.5
  
  return (
    <group>
      {/* 메인 기둥 */}
      {[[-4, -25], [4, -25], [-4, 25], [4, 25]].map((pos, i) => (
        <Box key={i} args={[pillarSize, 12.5, pillarSize]} position={[pos[0], 6, pos[1]]}>
          <meshStandardMaterial 
            color={frameColor} 
            metalness={0.8} 
            roughness={0.3}
          />
        </Box>
      ))}
      
      {/* 수평 빔 */}
      {[...Array(11)].map((_, i) => (
        <group key={i} position={[0, i * 1.2 - 0.5, 0]}>
          {/* 전후 빔 */}
          <Box args={[8, beamWidth, beamWidth]} position={[0, 0, 25]}>
            <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.3} />
          </Box>
          <Box args={[8, beamWidth, beamWidth]} position={[0, 0, -25]}>
            <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.3} />
          </Box>
          
          {/* 좌우 빔 */}
          <Box args={[beamWidth, beamWidth, 50]} position={[4, 0, 0]}>
            <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.3} />
          </Box>
          <Box args={[beamWidth, beamWidth, 50]} position={[-4, 0, 0]}>
            <meshStandardMaterial color={frameColor} metalness={0.8} roughness={0.3} />
          </Box>
        </group>
      ))}
    </group>
  )
}

// 메인 3D 장면
function AquacultureSystemScene() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.05) * 0.02
    }
  })
  
  return (
    <>
      <PerspectiveCamera makeDefault position={[30, 20, 40]} fov={50} />
      
      {/* 조명 설정 */}
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[20, 30, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-20, 20, -10]} intensity={0.5} color="#88ccff" />
      
      {/* 환경 */}
      <Environment preset="city" />
      <fog attach="fog" args={['#0a0a0a', 50, 200]} />
      
      <group ref={groupRef}>
        {/* 구조 프레임 */}
        <StructuralFrame />
        
        {/* 10층 수조 시스템 */}
        {[...Array(10)].map((_, floorIndex) => (
          <group key={floorIndex} position={[0, floorIndex * 1.2, 0]}>
            {/* 층 플랫폼 */}
            <Box args={[8.5, 0.15, 50.5]} position={[0, -0.075, 0]}>
              <meshStandardMaterial 
                color="#2a2a2a" 
                metalness={0.7} 
                roughness={0.3}
              />
            </Box>
            
            {/* 각 층의 4개 수조 */}
            {[...Array(4)].map((_, tankIndex) => (
              <AdvancedTank
                key={tankIndex}
                position={[
                  (tankIndex % 2) * 3 - 1.5,
                  0.1,
                  Math.floor(tankIndex / 2) * 22 - 11
                ]}
                index={tankIndex}
                floorIndex={floorIndex}
              />
            ))}
            
            {/* 층 번호 표시 */}
            <Text
              position={[-4.5, 0.5, 0]}
              fontSize={0.8}
              color="#fbbf24"
              anchorX="center"
              anchorY="middle"
            >
              {`${floorIndex + 1}F`}
            </Text>
          </group>
        ))}
        
        {/* 제어실 */}
        <group position={[0, -1, -30]}>
          <Box args={[8, 3, 6]}>
            <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.2} />
          </Box>
          <Text
            position={[0, 2, 3.1]}
            fontSize={0.5}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            CONTROL CENTER
          </Text>
        </group>
      </group>
      
      {/* 바닥 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.1, 0]}>
        <planeGeometry args={[200, 200]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={50}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
          mirror={0}
        />
      </mesh>
      
      <ContactShadows
        position={[0, -1, 0]}
        opacity={0.5}
        scale={100}
        blur={1}
        far={20}
      />
      
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={20}
        maxDistance={150}
        target={[0, 6, 0]}
        maxPolarAngle={Math.PI * 0.85}
      />
    </>
  )
}

export default function AquacultureSystem3D() {
  return (
    <div className="w-full h-[700px] bg-gradient-to-b from-dark-400 to-dark-300 rounded-2xl overflow-hidden">
      <Canvas shadows>
        <AquacultureSystemScene />
      </Canvas>
      
      {/* 오버레이 정보 */}
      <div className="absolute bottom-4 left-4 glass-dark p-4 rounded-lg max-w-xs">
        <h3 className="text-sm font-bold text-primary-400 mb-2">시스템 제어 정보</h3>
        <div className="text-xs text-gray-400 space-y-1">
          <p>• 총 40개 수조 실시간 모니터링</p>
          <p>• AI 기반 자동 환경 제어</p>
          <p>• LED 최적 파장 조사 시스템</p>
          <p>• IoT 센서 네트워크 연결</p>
        </div>
      </div>
    </div>
  )
}