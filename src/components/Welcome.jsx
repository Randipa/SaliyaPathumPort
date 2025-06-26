import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Heart, Star } from 'lucide-react'

const Welcome = () => {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const newParticles = []
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 20,
        duration: 15 + Math.random() * 10,
        size: 2 + Math.random() * 4
      })
    }
    setParticles(newParticles)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.5 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  }

  const logoVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      rotateY: -180
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, rgba(0, 0, 0, 0.8) 70%)',
        overflow: 'hidden'
      }}
    >
      {/* Animated Background Particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #667eea, #764ba2, #f093fb)',
              opacity: 0.6
            }}
            animate={{
              y: [-20, -100, -20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <motion.div
        style={{ position: 'absolute', top: '20%', left: '15%' }}
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 5, 0, -5, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Sparkles size={32} color="#ffd43b" opacity={0.7} />
      </motion.div>

      <motion.div
        style={{ position: 'absolute', top: '30%', right: '20%' }}
        animate={{
          y: [10, -10, 10],
          rotate: [0, -5, 0, 5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <Heart size={28} color="#ff6b6b" opacity={0.7} />
      </motion.div>

      <motion.div
        style={{ position: 'absolute', bottom: '25%', left: '10%' }}
        animate={{
          y: [-5, 15, -5],
          rotate: [0, 10, 0, -10, 0]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Star size={24} color="#51cf66" opacity={0.7} />
      </motion.div>

      {/* Main Content */}
      <div style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        {/* Logo Section */}
        <motion.div
          variants={logoVariants}
          style={{
            marginBottom: '2rem',
            position: 'relative'
          }}
        >
          {/* Logo Container with Glow Effect */}
          <motion.div
            style={{
              width: '160px',
              height: '160px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2))',
              backdropFilter: 'blur(20px)',
              border: '2px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.3)'
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(102, 126, 234, 0.3)',
                '0 0 40px rgba(118, 75, 162, 0.4)',
                '0 0 20px rgba(102, 126, 234, 0.3)'
              ]
            }}
            transition={{
              boxShadow: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            {/* Rotating Background */}
            <motion.div
              style={{
                position: 'absolute',
                width: '200%',
                height: '200%',
                background: 'conic-gradient(from 0deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2), rgba(240, 147, 251, 0.2), rgba(102, 126, 234, 0.2))',
                borderRadius: '50%'
              }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Logo Image */}
            <img
              src="logo-no-bg.png"
              alt="Intro Solution Logo"
              style={{
                width: '120px',
                height: '120px',
                objectFit: 'contain',
                position: 'relative',
                zIndex: 2,
                filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
              }}
            />
          </motion.div>
        </motion.div>

        {/* Welcome Text */}
        <motion.div variants={itemVariants}>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: '800',
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
              backgroundSize: '300% 300%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            <motion.span
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Welcome All
            </motion.span>
          </h1>
        </motion.div>

        {/* Thank You Message */}
        <motion.div variants={itemVariants}>
          <p
            style={{
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: '2rem',
              fontWeight: '500',
              lineHeight: '1.6'
            }}
          >
            Thank you for giving me this{' '}
            <motion.span
              style={{
                background: 'linear-gradient(45deg, #ffd43b, #ff6b6b)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              opportunity
            </motion.span>
          </p>
        </motion.div>

        {/* Company Credit */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '2rem',
            padding: '1rem 2rem',
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'inline-block'
          }}
        >
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontSize: '1rem',
              margin: 0,
              fontWeight: '500'
            }}
          >
            Powered by{' '}
            <motion.span
              style={{
                background: 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: '700'
              }}
              whileHover={{ scale: 1.05 }}
            >
              Unitec Software Solution
            </motion.span>
          </p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          variants={itemVariants}
          style={{
            marginTop: '3rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #667eea, #764ba2)'
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Welcome