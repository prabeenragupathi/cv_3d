import React from 'react'
import { motion } from 'framer-motion'
import {styles} from '../styles'
import { staggerContainer } from '../utils/motion'
const sectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView={"show"}
        viewport={{once:false, amount:0.25}}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>
            <span id={idName} className='hash-span'>&nbsp;</span>
            <Component/> 
        </motion.section>
    )
}

export default sectionWrapper