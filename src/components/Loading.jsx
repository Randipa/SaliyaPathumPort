import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="d-flex justify-content-center align-items-center min-vh-100"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-4"
        >
          <div className="spinner-border text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </motion.div>
        <h3 className="gradient-text">Preparing Portfolio...</h3>
      </div>
    </motion.div>
  )
}

export default Loading