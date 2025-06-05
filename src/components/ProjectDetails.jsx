import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star, Heart, Code, Target, Layers, CheckCircle, ExternalLink, Github, Calendar, User, Award } from 'lucide-react'

const ProjectDetails = ({ project, onBack }) => {
  const [rating, setRating] = useState(0)
  const [liked, setLiked] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.4 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  }

  const tabContent = {
    overview: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
      >
        {/* Hero Section */}
        <div
          style={{
            background: `linear-gradient(135deg, ${project.color || '#667eea'}20, ${project.secondaryColor || '#764ba2'}20)`,
            borderRadius: 'clamp(16px, 4vw, 24px)',
            padding: 'clamp(1rem, 4vw, 2rem)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 'clamp(100px, 25vw, 200px)',
              height: 'clamp(100px, 25vw, 200px)',
              background: `linear-gradient(135deg, ${project.color || '#667eea'}40, ${project.secondaryColor || '#764ba2'}40)`,
              borderRadius: '50%',
              filter: 'blur(60px)',
              transform: 'translate(50%, -50%)'
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ 
              display: 'flex', 
              alignItems: window.innerWidth <= 768 ? 'flex-start' : 'center', 
              flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
              gap: '1rem', 
              marginBottom: '1rem' 
            }}>
              <div
                style={{
                  width: 'clamp(60px, 15vw, 80px)',
                  height: 'clamp(60px, 15vw, 80px)',
                  borderRadius: 'clamp(12px, 3vw, 20px)',
                  background: `linear-gradient(135deg, ${project.color || '#667eea'}, ${project.secondaryColor || '#764ba2'})`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 'clamp(20px, 5vw, 32px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
                  flexShrink: 0
                }}
              >
                {project.icon || '🚀'}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h1 style={{ 
                  fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', 
                  fontWeight: '800', 
                  color: 'white', 
                  marginBottom: '0.5rem',
                  lineHeight: '1.2',
                  wordBreak: 'break-word'
                }}>
                  {project.title}
                </h1>
                <div style={{ 
                  display: 'flex', 
                  gap: 'clamp(0.5rem, 3vw, 1rem)', 
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <span style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontSize: 'clamp(0.8rem, 2.5vw, 1rem)'
                  }}>
                    <Calendar size={window.innerWidth <= 480 ? 14 : 16} />
                    {project.date || '2024'}
                  </span>
                  <span style={{ 
                    color: 'rgba(255, 255, 255, 0.7)', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem',
                    fontSize: 'clamp(0.8rem, 2.5vw, 1rem)'
                  }}>
                    <User size={window.innerWidth <= 480 ? 14 : 16} />
                    {project.role || 'Full Stack Developer'}
                  </span>
                </div>
              </div>
            </div>
            <p style={{ 
              fontSize: 'clamp(0.9rem, 3vw, 1.1rem)', 
              color: 'rgba(255, 255, 255, 0.9)', 
              lineHeight: '1.7' 
            }}>
              {project.description}
            </p>
          </div>
        </div>

        {/* Problem & Solution Cards */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 768 ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '1.5rem' 
        }}>
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(16px, 4vw, 20px)',
              padding: 'clamp(1rem, 4vw, 1.5rem)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: 'clamp(40px, 10vw, 48px)',
                  height: 'clamp(40px, 10vw, 48px)',
                  borderRadius: 'clamp(8px, 2vw, 12px)',
                  background: 'linear-gradient(135deg, #ff6b6b, #ee5a52)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <Target size={window.innerWidth <= 480 ? 20 : 24} color="white" />
              </div>
              <h3 style={{ 
                fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)', 
                fontWeight: '700', 
                color: 'white' 
              }}>Problem</h3>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.6',
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)'
            }}>
              {project.problem || "Identifying key challenges and pain points that needed to be addressed in this project."}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(16px, 4vw, 20px)',
              padding: 'clamp(1rem, 4vw, 1.5rem)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <div
                style={{
                  width: 'clamp(40px, 10vw, 48px)',
                  height: 'clamp(40px, 10vw, 48px)',
                  borderRadius: 'clamp(8px, 2vw, 12px)',
                  background: 'linear-gradient(135deg, #51cf66, #40c057)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                <CheckCircle size={window.innerWidth <= 480 ? 20 : 24} color="white" />
              </div>
              <h3 style={{ 
                fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)', 
                fontWeight: '700', 
                color: 'white' 
              }}>Solution</h3>
            </div>
            <p style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              lineHeight: '1.6',
              fontSize: 'clamp(0.85rem, 2.5vw, 1rem)'
            }}>
              {project.solution || "Implemented innovative solutions using modern technologies to solve the identified problems effectively."}
            </p>
          </motion.div>
        </div>
      </motion.div>
    ),
    features: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth <= 480 ? '1fr' : 
                              window.innerWidth <= 768 ? 'repeat(auto-fit, minmax(250px, 1fr))' :
                              'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '1rem' 
        }}
      >
        {(project.features || ['Feature 1', 'Feature 2', 'Feature 3']).map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(12px, 3vw, 16px)',
              padding: 'clamp(1rem, 3vw, 1.25rem)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div
                style={{
                  width: 'clamp(28px, 7vw, 32px)',
                  height: 'clamp(28px, 7vw, 32px)',
                  borderRadius: 'clamp(6px, 2vw, 8px)',
                  background: `linear-gradient(135deg, ${project.color || '#667eea'}60, ${project.secondaryColor || '#764ba2'}60)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '0.25rem'
                }}
              >
                <CheckCircle size={window.innerWidth <= 480 ? 16 : 18} color="white" />
              </div>
              <p style={{ 
                color: 'rgba(255, 255, 255, 0.9)', 
                lineHeight: '1.5', 
                margin: 0,
                fontSize: 'clamp(0.85rem, 2.5vw, 1rem)'
              }}>
                {feature}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    ),
    architecture: (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: 'clamp(16px, 4vw, 20px)',
            padding: 'clamp(1.5rem, 4vw, 2rem)',
            textAlign: 'center'
          }}
        >
          <Layers size={window.innerWidth <= 480 ? 48 : 64} color="#667eea" style={{ marginBottom: '1rem' }} />
          <h3 style={{ 
            color: 'white', 
            marginBottom: '1rem',
            fontSize: 'clamp(1.1rem, 3.5vw, 1.3rem)'
          }}>System Architecture</h3>
          <p style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontSize: 'clamp(0.85rem, 2.5vw, 1rem)',
            lineHeight: '1.6'
          }}>
            {project.architectureDescription || "Detailed system architecture and technical implementation overview."}
          </p>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      style={{ 
        minHeight: '100vh', 
        padding: 'clamp(1rem, 4vw, 2rem) clamp(1rem, 5vw, 2rem)' 
      }}
    >
      {/* Back Button */}
      <motion.button
        variants={itemVariants}
        onClick={onBack}
        style={{
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'clamp(8px, 2vw, 12px)',
          padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(1rem, 3vw, 1.25rem)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
          fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
          fontWeight: '500'
        }}
        whileHover={{ 
          background: 'rgba(255, 255, 255, 0.1)',
          x: -5,
          transition: { duration: 0.2 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <ArrowLeft size={window.innerWidth <= 480 ? 16 : 18} />
        Back to Projects
      </motion.button>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: window.innerWidth <= 1024 ? '1fr' : '1fr 350px',
        gap: 'clamp(1.5rem, 4vw, 2rem)', 
        alignItems: 'start' 
      }}>
        {/* Main Content */}
        <div>
          {/* Navigation Tabs */}
          <motion.div
            variants={itemVariants}
            style={{
              display: 'flex',
              gap: '0.5rem',
              marginBottom: 'clamp(1.5rem, 4vw, 2rem)',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(12px, 3vw, 16px)',
              padding: 'clamp(0.4rem, 1.5vw, 0.5rem)',
              flexDirection: window.innerWidth <= 480 ? 'column' : 'row'
            }}
          >
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'features', label: 'Features', icon: Award },
              { id: 'architecture', label: 'Architecture', icon: Layers }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  flex: 1,
                  padding: 'clamp(0.6rem, 2vw, 0.75rem) clamp(0.8rem, 2.5vw, 1rem)',
                  borderRadius: 'clamp(8px, 2vw, 12px)',
                  border: 'none',
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                    : 'transparent',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  minHeight: '44px' // Better touch target
                }}
                whileHover={{
                  background: activeTab === tab.id 
                    ? 'linear-gradient(135deg, #667eea, #764ba2)' 
                    : 'rgba(255, 255, 255, 0.1)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon size={window.innerWidth <= 480 ? 14 : 16} />
                {window.innerWidth <= 480 ? tab.label.split(' ')[0] : tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>

        {/* Sidebar */}
        <div style={{ 
          position: window.innerWidth <= 1024 ? 'static' : 'sticky', 
          top: window.innerWidth <= 1024 ? 'auto' : '2rem',
          order: window.innerWidth <= 1024 ? -1 : 0
        }}>
          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(16px, 4vw, 20px)',
              padding: 'clamp(1rem, 4vw, 1.5rem)',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)'
            }}
          >
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: 'clamp(1rem, 3vw, 1.1rem)', 
              fontWeight: '700' 
            }}>
              Technologies
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {(project.technologies || ['React', 'Node.js', 'MongoDB']).map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    color: 'white',
                    padding: 'clamp(0.3rem, 1.5vw, 0.4rem) clamp(0.6rem, 2vw, 0.8rem)',
                    borderRadius: 'clamp(16px, 4vw, 20px)',
                    fontSize: 'clamp(0.75rem, 2vw, 0.8rem)',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Interactive Rating */}
          <motion.div
            variants={itemVariants}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 'clamp(16px, 4vw, 20px)',
              padding: 'clamp(1rem, 4vw, 1.5rem)',
              marginBottom: 'clamp(1rem, 3vw, 1.5rem)',
              textAlign: 'center'
            }}
          >
            <h4 style={{ 
              color: 'white', 
              marginBottom: '1rem', 
              fontSize: 'clamp(1rem, 3vw, 1.1rem)', 
              fontWeight: '700' 
            }}>
              Rate this Project
            </h4>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.25rem', marginBottom: '1rem' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <motion.button
                  key={star}
                  onClick={() => setRating(star)}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 'clamp(0.2rem, 1vw, 0.25rem)',
                    minWidth: '44px',
                    minHeight: '44px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <Star
                    size={window.innerWidth <= 480 ? 20 : 24}
                    color={star <= rating ? '#ffd43b' : '#495057'}
                    fill={star <= rating ? '#ffd43b' : 'none'}
                  />
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={() => setLiked(!liked)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                width: '100%',
                padding: 'clamp(0.6rem, 2.5vw, 0.75rem)',
                borderRadius: 'clamp(8px, 2vw, 12px)',
                border: liked ? 'none' : '1px solid #dc3545',
                background: liked ? 'linear-gradient(135deg, #dc3545, #c82333)' : 'transparent',
                color: liked ? 'white' : '#dc3545',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                cursor: 'pointer',
                fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                fontWeight: '600',
                marginBottom: '1rem',
                minHeight: '44px'
              }}
            >
              <Heart size={window.innerWidth <= 480 ? 16 : 18} fill={liked ? 'white' : 'none'} />
              {liked ? 'Liked!' : 'Like Project'}
            </motion.button>

            {/* Action Buttons */}
            <div style={{ 
              display: 'flex', 
              flexDirection: window.innerWidth <= 768 ? 'column' : 'column', 
              gap: 'clamp(0.6rem, 2vw, 0.75rem)' 
            }}>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: 'clamp(0.6rem, 2.5vw, 0.75rem)',
                    borderRadius: 'clamp(8px, 2vw, 12px)',
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                    fontWeight: '600',
                    minHeight: '44px'
                  }}
                >
                  <ExternalLink size={window.innerWidth <= 480 ? 16 : 18} />
                  Live Demo
                </motion.a>
              )}

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    padding: 'clamp(0.6rem, 2.5vw, 0.75rem)',
                    borderRadius: 'clamp(8px, 2vw, 12px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: 'clamp(0.8rem, 2.2vw, 0.9rem)',
                    fontWeight: '600',
                    minHeight: '44px'
                  }}
                >
                  <Github size={window.innerWidth <= 480 ? 16 : 18} />
                  View Code
                </motion.a>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectDetails