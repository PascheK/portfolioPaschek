import React from 'react'

import { Canvas } from '@react-three/fiber'

import './Futur.scss';
import { AppWrap, MotionWrap } from '../../wrapper';
import Stars from '../../components/Stars';
import { motion } from 'framer-motion';


const Futur = () => {
  return (
    <>
      <motion.h1
        className='app__futur-title'
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}    >
        Futur is now !

      </motion.h1>
      <Canvas className='app__futur-canvas' camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>

    </>
  )
}
export default AppWrap(MotionWrap(Futur, 'app__futur'), 'futur', 'app__secondarybg');

