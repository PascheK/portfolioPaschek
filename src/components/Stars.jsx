import React, { useRef, useState } from 'react';
import { extend, useFrame } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

extend({ TextGeometry });

const Stars = (props) => {
 
    const ref = useRef()
    const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))
    useFrame((state, delta) => {
      ref.current.rotation.x -= delta / 15
      ref.current.rotation.y -= delta / 25
    })
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
          <PointMaterial transparent color="#ffa0e0" size={0.005} sizeAttenuation={true} depthWrite={false} />
        </Points>
      </group>
    )
  
}
export default Stars