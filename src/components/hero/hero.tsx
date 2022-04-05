import React, { FC, Suspense } from 'react'
import { Canvas, extend } from '@react-three/fiber'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

extend({ OrbitControls })

const Hero: FC = () => {
  return (
    <div className='w-full h-full rounded-md bg-slate-400' id='canvas-hero'>
      <Canvas camera={{ position: [-7.5, 0, -7.5], fov: 35 }} dpr={[1, 2]} shadows={true}>
        <directionalLight intensity={0.5} />
        <Suspense fallback={<div>Loading</div>}>
          <mesh>
            <boxGeometry />
            <meshStandardMaterial />
          </mesh>
        </Suspense>
      </Canvas>
    </div>
  )
}
export { Hero }
