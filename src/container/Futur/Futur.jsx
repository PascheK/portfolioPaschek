import React from 'react'

import { Canvas } from '@react-three/fiber'


import './Futur.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import Stars from '../../components/Stars';


const Futur = () => {
  return (
    <>
      <h1 className='app__futur-title'>Futur is now</h1>
      <Canvas className='app__futur-canvas'  camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
     
    </>
  )
}
export default AppWrap(MotionWrap(Futur, 'app__futur'), 'futur', 'app__secondarybg');

