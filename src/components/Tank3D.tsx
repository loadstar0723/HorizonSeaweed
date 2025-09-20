'use client'

import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment,
  Float,
  Text,
  Center,
  Sparkles,
  Cloud,
  Stars,
  useGLTF,
  MeshTransmissionMaterial
} from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField, Vignette } from '@react-three/postprocessing'
import * as THREE from 'three'

// 물 셰이더 재질
const WaterMaterial = () => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [uniforms] = useState({
    time: { value: 0 },
    waterColor: { value: new THREE.Color(0x0077be) },
    foamColor: { value: new THREE.Color(0xffffff) },
  })

  useFrame((state) => {
    if (meshRef.current && 'uniforms' in meshRef.current.material) {
      uniforms.time.value = state.clock.elapsedTime
      ;(meshRef.current.material as any).uniforms = uniforms
    }
  })

  const vertexShader = `
    uniform float time;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vUv = uv;
      vNormal = normal;
      vPosition = position;
      
      vec3 pos = position;
      float wave1 = sin(position.x * 2.0 + time) * 0.1;
      float wave2 = sin(position.z * 3.0 + time * 1.5) * 0.05;
      pos.y += wave1 + wave2;
      
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `

  const fragmentShader = `
    uniform float time;
    uniform vec3 waterColor;
    uniform vec3 foamColor;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;
    
    void main() {
      vec3 color = waterColor;
      
      float foam = sin(vPosition.x * 10.0 + time * 2.0) * 
                   sin(vPosition.z * 10.0 + time * 2.0);
      foam = smoothstep(0.8, 1.0, foam);
      
      color = mix(color, foamColor, foam * 0.3);
      
      float alpha = 0.8 + sin(vPosition.x * 5.0 + time) * 0.1;
      
      gl_FragColor = vec4(color, alpha);
    }
  `

  return (
    <mesh ref={meshRef} position={[0, 0.4, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[18, 1.8, 64, 64]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

// 김(해조류) 컴포넌트
const Seaweed = ({ position, scale = 1 }: { position: [number, number, number], scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null)
  const [swaySpeed] = useState(Math.random() * 0.5 + 0.5)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * swaySpeed) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * swaySpeed * 0.7) * 0.05
    }
  })

  return (
    <mesh ref={meshRef} position={position}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.1}>
        <mesh>
          <boxGeometry args={[0.05 * scale, 0.8 * scale, 0.3 * scale]} />
          <meshStandardMaterial 
            color="#1a5f3f" 
            roughness={0.8} 
            metalness={0.2}
            emissive="#0a3020"
            emissiveIntensity={0.2}
          />
        </mesh>
        {/* 세부 디테일 추가 */}
        <mesh position={[0, 0.4 * scale, 0]}>
          <boxGeometry args={[0.03 * scale, 0.2 * scale, 0.25 * scale]} />
          <meshStandardMaterial color="#2d7a4f" />
        </mesh>
      </Float>
    </mesh>
  )
}

// 단일 수조 컴포넌트
const TankUnit = ({ position, level }: { position: [number, number, number], level: number }) => {
  const [hovered, setHovered] = useState(false)
  
  return (
    <group position={position}>
      {/* 수조 프레임 - ㄷ자 모양 */}
      <mesh
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <boxGeometry args={[2, 0.5, 0.1]} />
        <meshStandardMaterial 
          color={hovered ? "#4a90e2" : "#2c3e50"}
          metalness={0.8}
          roughness={0.2}
          emissive={hovered ? "#4a90e2" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </mesh>
      
      {/* 좌측 벽 */}
      <mesh position={[-0.95, 0, 0.95]}>
        <boxGeometry args={[0.1, 0.5, 1.9]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* 우측 벽 */}
      <mesh position={[0.95, 0, 0.95]}>
        <boxGeometry args={[0.1, 0.5, 1.9]} />
        <meshStandardMaterial color="#2c3e50" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* 바닥 */}
      <mesh position={[0, -0.2, 0.95]}>
        <boxGeometry args={[1.9, 0.1, 1.8]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* 유리 재질 (투명) */}
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[1.8, 0.4, 0.01]} />
        <MeshTransmissionMaterial
          transmission={0.95}
          roughness={0.05}
          thickness={0.1}
          chromaticAberration={0.03}
          anisotropy={0.1}
        />
      </mesh>
      
      {/* 물 */}
      <WaterMaterial />
      
      {/* 김 배치 */}
      {Array.from({ length: 8 }).map((_, i) => (
        <Seaweed 
          key={i}
          position={[
            -0.7 + (i % 4) * 0.4,
            0.2,
            0.5 + Math.floor(i / 4) * 0.5
          ]}
          scale={0.8 + Math.random() * 0.4}
        />
      ))}
      
      {/* 층 번호 표시 */}
      <Text
        position={[-1.3, 0, 0]}
        fontSize={0.2}
        color="#ffd700"
        anchorX="center"
        anchorY="middle"
      >
        {`${level}F`}
        <meshStandardMaterial 
          color="#ffd700" 
          metalness={0.9} 
          roughness={0.1} 
          emissive="#ffd700"
          emissiveIntensity={0.2}
        />
      </Text>
      
      {/* 버블 효과 */}
      <Sparkles
        count={20}
        scale={[1.8, 0.4, 1.8]}
        size={2}
        speed={0.4}
        color="#4fc3f7"
      />
    </group>
  )
}

// 메인 3D 씬
const Tank3DScene = () => {
  const { camera } = useThree()
  
  useEffect(() => {
    camera.position.set(15, 12, 15)
    camera.lookAt(0, 5, 0)
  }, [camera])

  return (
    <>
      {/* 조명 설정 */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
      <pointLight position={[-10, 10, -5]} intensity={0.5} color="#4fc3f7" />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={0.5} intensity={0.8} />
      
      {/* 환경 */}
      <Environment preset="sunset" />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
      
      {/* 구름 효과 */}
      <Cloud position={[0, 15, 0]} opacity={0.1} speed={0.4} />
      
      {/* 10층 수조 배치 */}
      {Array.from({ length: 10 }).map((_, floor) => (
        <group key={floor}>
          {/* 각 층에 4개의 수조 배치 */}
          <TankUnit position={[-5, floor * 1.2, 0]} level={floor + 1} />
          <TankUnit position={[-2.5, floor * 1.2, 0]} level={floor + 1} />
          <TankUnit position={[2.5, floor * 1.2, 0]} level={floor + 1} />
          <TankUnit position={[5, floor * 1.2, 0]} level={floor + 1} />
          
          {/* 층간 구조물 */}
          <mesh position={[0, floor * 1.2 - 0.4, 0]}>
            <boxGeometry args={[14, 0.05, 4]} />
            <meshStandardMaterial color="#34495e" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}
      
      {/* 바닥 */}
      <mesh position={[0, -0.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 10]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* 컨트롤 */}
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={50}
        autoRotate
        autoRotateSpeed={0.5}
      />
      
      {/* 포스트 프로세싱 효과 */}
      <EffectComposer>
        <Bloom intensity={0.5} luminanceThreshold={0.8} luminanceSmoothing={0.9} />
        <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} />
        <Vignette offset={0.1} darkness={0.4} />
      </EffectComposer>
    </>
  )
}

// 3D 수조 컴포넌트
export default function Tank3D() {
  return (
    <div className="w-full h-screen relative bg-gradient-to-b from-dark-400 to-dark-300">
      {/* 타이틀 오버레이 */}
      <div className="absolute top-0 left-0 z-10 p-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-2">
          HorizonSeaweed 10층 스마트팜
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          세계 최초 수직형 김 양식 시스템
        </p>
      </div>
      
      {/* 정보 패널 */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-8 bg-gradient-to-t from-black/80 to-transparent">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-primary-400">40개</h3>
            <p className="text-sm text-gray-300">수조</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-green-400">1,600㎡</h3>
            <p className="text-sm text-gray-300">총 양식면적</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-blue-400">IoT</h3>
            <p className="text-sm text-gray-300">자동제어</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-4">
            <h3 className="text-2xl font-bold text-gold-500">24/7</h3>
            <p className="text-sm text-gray-300">모니터링</p>
          </div>
        </div>
      </div>
      
      {/* 3D 캔버스 */}
      <Canvas shadows>
        <Tank3DScene />
      </Canvas>
      
      {/* 컨트롤 설명 */}
      <div className="absolute top-20 right-8 z-10 bg-white/10 backdrop-blur-md rounded-lg p-4 text-white">
        <p className="text-sm mb-2">🖱️ 마우스: 회전</p>
        <p className="text-sm mb-2">📏 스크롤: 줌</p>
        <p className="text-sm">🖐️ 드래그: 이동</p>
      </div>
    </div>
  )
}