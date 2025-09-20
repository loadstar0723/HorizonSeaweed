'use client'

import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'

export default function Simple3DTest() {
  return (
    <div className="w-full h-full">
      <Canvas>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 0, 0]} args={[2, 2, 2]}>
          <meshStandardMaterial color="#2563eb" />
        </Box>
        <OrbitControls />
      </Canvas>
    </div>
  )
}