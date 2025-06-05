import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProjectCard from './ProjectCard'
import ProjectDetails from './ProjectDetails'
import { projectsData } from '../data/projectsData'

// Modern animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
      staggerChildren: 0.15
    }
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const titleVariants = {
  hidden: { 
    opacity: 0,
    y: -30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // Smooth spring easing
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.12,
      delayChildren: 0.2
    }
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0,
    y: 40,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      type: "spring",
      stiffness: 120,
      damping: 20
    }
  }
}

const Projects = ({ selectedProject, setSelectedProject }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="min-vh-100 p-4"
    >
      <div className="container">
        <motion.div
          variants={titleVariants}
          className="text-center mb-5"
        >
          <h1 className="display-4 fw-bold">
            My{' '}
            <motion.span 
              className="gradient-text"
              initial={{ backgroundPosition: '0% 50%' }}
              animate={{ backgroundPosition: '100% 50%' }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear"
              }}
              style={{
                background: 'linear-gradient(45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
                backgroundSize: '300% 300%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Projects
            </motion.span>
          </h1>
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '60px', opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-3"
            style={{
              height: '3px',
              background: 'linear-gradient(90deg, #667eea, #764ba2)',
              borderRadius: '2px'
            }}
          />
        </motion.div>

        <AnimatePresence mode="wait">
          {!selectedProject ? (
            <motion.div
              key="projects-grid"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="row g-4"
            >
              {projectsData.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  className="col-lg-4 col-md-6"
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { 
                      duration: 0.3,
                      ease: [0.16, 1, 0.3, 1]
                    }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  <motion.div
                    className="project-card-modern"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      height: '100%',
                      cursor: 'pointer',
                      overflow: 'hidden',
                      position: 'relative',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                      transition: 'all 0.3s ease'
                    }}
                    whileHover={{
                      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
                      border: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Gradient overlay on hover */}
                    <motion.div
                      className="card-gradient-overlay"
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                        opacity: 0,
                        borderRadius: '20px'
                      }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    
                    {/* Project Image */}
                    <div
                      style={{
                        position: 'relative',
                        zIndex: 2,
                        marginBottom: '1.5rem'
                      }}
                    >
                      <motion.div
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '16px',
                          background: `linear-gradient(135deg, ${project.color || '#667eea'}, ${project.secondaryColor || '#764ba2'})`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          marginBottom: '1rem',
                          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
                        }}
                        whileHover={{ 
                          rotate: [0, -5, 5, 0],
                          scale: 1.1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <span style={{ fontSize: '24px', color: 'white' }}>
                          {project.icon || '🚀'}
                        </span>
                      </motion.div>
                      
                      {/* Project Title */}
                      <h3 
                        style={{
                          fontSize: '1.4rem',
                          fontWeight: '700',
                          color: 'white',
                          marginBottom: '0.5rem',
                          lineHeight: '1.3'
                        }}
                      >
                        {project.title}
                      </h3>
                      
                      {/* Project Description */}
                      <p 
                        style={{
                          color: 'rgba(255, 255, 255, 0.7)',
                          fontSize: '0.95rem',
                          lineHeight: '1.6',
                          marginBottom: '1.5rem',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden'
                        }}
                      >
                        {project.description}
                      </p>
                    </div>
                    
                    {/* Technologies */}
                    <div style={{ position: 'relative', zIndex: 2 }}>
                      <div 
                        style={{
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: '0.5rem',
                          marginBottom: '1rem'
                        }}
                      >
                        {(project.technologies || ['React', 'Node.js']).slice(0, 3).map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            style={{
                              background: 'rgba(255, 255, 255, 0.1)',
                              color: 'rgba(255, 255, 255, 0.9)',
                              padding: '0.3rem 0.8rem',
                              borderRadius: '20px',
                              fontSize: '0.8rem',
                              fontWeight: '500',
                              border: '1px solid rgba(255, 255, 255, 0.1)'
                            }}
                            whileHover={{
                              background: 'rgba(255, 255, 255, 0.2)',
                              scale: 1.05
                            }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                      
                      {/* View Project Button */}
                      <motion.div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          color: '#667eea',
                          fontSize: '0.9rem',
                          fontWeight: '600',
                          gap: '0.5rem'
                        }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        View Project
                        <motion.span
                          whileHover={{ x: 3 }}
                          transition={{ duration: 0.2 }}
                        >
                          →
                        </motion.span>
                      </motion.div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="project-details"
              initial={{ 
                opacity: 0,
                scale: 0.95,
                y: 20
              }}
              animate={{ 
                opacity: 1,
                scale: 1,
                y: 0
              }}
              exit={{ 
                opacity: 0,
                scale: 0.95,
                y: -20
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <ProjectDetails
                project={selectedProject}
                onBack={() => setSelectedProject(null)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}

export default Projects