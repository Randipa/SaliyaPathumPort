import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, Star, Heart, Code, Target, Layers, CheckCircle, ExternalLink, Github, Calendar, User, Award, ChevronDown, ChevronUp } from 'lucide-react'

const ProjectDetails = ({ project, onBack }) => {
  const [rating, setRating] = useState(0)
  const [liked, setLiked] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [isSticky, setIsSticky] = useState(false)
  const [expandedFeature, setExpandedFeature] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
        className="overview-content"
      >
        {/* Hero Section */}
        <div className="hero-section">
          <motion.div
            className="hero-background-animation"
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
          
          <div className="hero-content">
            <div className="hero-header">
              <div className="project-icon">
                {project.icon || '🚀'}
              </div>
              <div className="project-info">
                <h1 className="project-title">
                  {project.title}
                </h1>
                <div className="project-meta">
                  <span className="meta-item">
                    <Calendar size={16} />
                    {project.date || '2024'}
                  </span>
                  <span className="meta-item">
                    <User size={16} />
                    {project.role || 'Full Stack Developer'}
                  </span>
                </div>
              </div>
            </div>
            <p className="project-description">
              {project.description}
            </p>
          </div>
        </div>

        {/* Problem & Solution Cards */}
        <div className="problem-solution-grid">
          <motion.div
            variants={itemVariants}
            className="card problem-card"
          >
            <div className="card-header">
              <div className="card-icon problem-icon">
                <Target size={20} />
              </div>
              <h3 className="card-title">Problem</h3>
            </div>
            <p className="card-text">
              {project.problem || "Identifying key challenges and pain points that needed to be addressed in this project."}
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="card solution-card"
          >
            <div className="card-header">
              <div className="card-icon solution-icon">
                <CheckCircle size={20} />
              </div>
              <h3 className="card-title">Solution</h3>
            </div>
            <p className="card-text">
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
        className="features-content"
      >
        {(project.features || [
          'User Authentication and Authorization',
          'Real-time Data Synchronization',
          'Responsive Mobile Design',
          'Advanced Search and Filtering',
          'Data Analytics Dashboard',
          'Cross-platform Compatibility'
        ]).map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="feature-card"
            onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
          >
            <div className="feature-header">
              <div className="feature-icon">
                <CheckCircle size={18} />
              </div>
              <p className="feature-text">
                {typeof feature === 'string' ? feature : feature.title}
              </p>
              {typeof feature === 'object' && feature.description && (
                <motion.div
                  animate={{ rotate: expandedFeature === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="expand-icon"
                >
                  <ChevronDown size={16} />
                </motion.div>
              )}
            </div>
            
            <AnimatePresence>
              {expandedFeature === index && typeof feature === 'object' && feature.description && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="feature-description"
                >
                  <p>{feature.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
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
        className="architecture-content"
      >
        <div className="architecture-card">
          <div className="architecture-icon">
            <Layers size={48} />
          </div>
          <h3 className="architecture-title">System Architecture</h3>
          <p className="architecture-description">
            {project.architectureDescription || "Detailed system architecture and technical implementation overview including frontend frameworks, backend services, database design, and deployment strategies."}
          </p>
          
          {project.architecturePoints && (
            <div className="architecture-points">
              {project.architecturePoints.map((point, index) => (
                <div key={index} className="architecture-point">
                  <CheckCircle size={16} />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          )}
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
      className="project-details-container"
    >
      {/* Mobile Header */}
      <motion.header
        className={`mobile-header ${isSticky ? 'sticky' : ''}`}
        variants={itemVariants}
      >
        <motion.button
          onClick={onBack}
          className="back-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowLeft size={20} />
          <span>Back</span>
        </motion.button>
        
        {isSticky && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky-title"
          >
            <span>{project.title}</span>
          </motion.div>
        )}
      </motion.header>

      <div className="content-wrapper">
        {/* Main Content */}
        <div className="main-content">
          {/* Navigation Tabs */}
          <motion.div
            variants={itemVariants}
            className="tab-navigation"
          >
            {[
              { id: 'overview', label: 'Overview', icon: Target },
              { id: 'features', label: 'Features', icon: Award },
              { id: 'architecture', label: 'Tech', icon: Layers }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <tab.icon size={18} />
                <span className="tab-label">{tab.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {tabContent[activeTab]}
          </AnimatePresence>
        </div>

        {/* Sidebar/Bottom Panel */}
        <div className="sidebar">
          {/* Technologies */}
          <motion.div
            variants={itemVariants}
            className="sidebar-card technologies-card"
          >
            <h4 className="sidebar-title">Technologies</h4>
            <div className="technologies-grid">
              {(project.technologies || ['React', 'Node.js', 'MongoDB', 'Express', 'JavaScript', 'CSS3']).map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="tech-badge"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>


          
        </div>
      </div>

      <style jsx>{`
        .project-details-container {
          min-height: 100vh;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          color: white;
          padding-bottom: 2rem;
          position: relative;
        }

        .project-details-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(59, 130, 246, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .project-details-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.03) 1px, transparent 0);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .mobile-header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(148, 163, 184, 0.1);
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .mobile-header.sticky {
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }

        .back-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(15, 23, 42, 0.8);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          color: #e2e8f0;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          min-height: 44px;
          backdrop-filter: blur(20px);
        }

        .back-button:hover {
          background: rgba(15, 23, 42, 0.9);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateX(-2px);
        }

        .sticky-title {
          font-weight: 700;
          font-size: 1.1rem;
          color: #e2e8f0;
          max-width: 200px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .content-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 1rem;
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        @media (min-width: 1025px) {
          .content-wrapper {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 2rem;
            align-items: start;
          }
        }

        .main-content {
          width: 100%;
        }

        .tab-navigation {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          padding: 0.5rem;
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: rgba(148, 163, 184, 0.3) transparent;
        }

        .tab-button {
          flex: 1;
          min-width: 120px;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: none;
          background: transparent;
          color: rgba(226, 232, 240, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
          min-height: 44px;
          white-space: nowrap;
        }

        .tab-button.active {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.3);
        }

        .tab-button:not(.active):hover {
          background: rgba(148, 163, 184, 0.1);
          color: #e2e8f0;
        }

        .tab-label {
          font-size: 0.9rem;
        }

        @media (max-width: 480px) {
          .tab-label {
            display: none;
          }
          
          .tab-button {
            min-width: 60px;
            padding: 0.75rem;
          }
        }

        /* Overview Content */
        .overview-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-section {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }

        .hero-background-animation {
          position: absolute;
          top: 0;
          right: 0;
          width: 200px;
          height: 200px;
          background: linear-gradient(135deg, #8b5cf640, #a855f740);
          border-radius: 50%;
          filter: blur(60px);
          transform: translate(50%, -50%);
        }

        .hero-content {
          position: relative;
          z-index: 2;
        }

        .hero-header {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          flex-direction: row;
        }

        @media (max-width: 480px) {
          .hero-header {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
        }

        .project-icon {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.3);
          flex-shrink: 0;
        }

        .project-info {
          flex: 1;
          min-width: 0;
        }

        .project-title {
          font-size: 2rem;
          font-weight: 800;
          color: #e2e8f0;
          margin-bottom: 0.5rem;
          line-height: 1.2;
          word-break: break-word;
        }

        @media (max-width: 768px) {
          .project-title {
            font-size: 1.5rem;
          }
        }

        .project-meta {
          display: flex;
          gap: 1rem;
          align-items: center;
          flex-wrap: wrap;
        }

        .meta-item {
          color: rgba(226, 232, 240, 0.7);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .project-description {
          font-size: 1.1rem;
          color: rgba(226, 232, 240, 0.9);
          line-height: 1.7;
          margin: 0;
        }

        .problem-solution-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .problem-solution-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        .card:hover {
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .card-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .problem-icon {
          background: linear-gradient(135deg, #ff6b6b, #ee5a52);
        }

        .solution-icon {
          background: linear-gradient(135deg, #51cf66, #40c057);
        }

        .card-title {
          font-size: 1.2rem;
          font-weight: 700;
          color: #e2e8f0;
          margin: 0;
        }

        .card-text {
          color: rgba(226, 232, 240, 0.8);
          line-height: 1.6;
          margin: 0;
          font-size: 1rem;
        }

        /* Features Content */
        .features-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .feature-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          padding: 1.25rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.2);
        }

        .feature-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .feature-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: linear-gradient(135deg, #8b5cf660, #a855f760);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .feature-text {
          color: rgba(226, 232, 240, 0.9);
          margin: 0;
          flex: 1;
          font-size: 1rem;
          font-weight: 500;
        }

        .expand-icon {
          margin-left: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 24px;
          height: 24px;
          color: rgba(226, 232, 240, 0.6);
        }

        .feature-description {
          margin-top: 0.75rem;
          padding-top: 0.75rem;
          border-top: 1px solid rgba(148, 163, 184, 0.2);
          overflow: hidden;
        }

        .feature-description p {
          color: rgba(226, 232, 240, 0.7);
          margin: 0;
          line-height: 1.5;
          font-size: 0.9rem;
        }

        /* Architecture Content */
        .architecture-content {
          width: 100%;
        }

        .architecture-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 20px;
          padding: 2rem;
          text-align: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .architecture-icon {
          margin-bottom: 1rem;
          color: #8b5cf6;
        }

        .architecture-title {
          color: #e2e8f0;
          margin-bottom: 1rem;
          font-size: 1.3rem;
          font-weight: 700;
        }

        .architecture-description {
          color: rgba(226, 232, 240, 0.8);
          font-size: 1rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .architecture-points {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          text-align: left;
        }

        .architecture-point {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(226, 232, 240, 0.8);
          font-size: 0.9rem;
        }

        /* Sidebar */
        .sidebar {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        @media (max-width: 1024px) {
          .sidebar {
            order: -1;
          }
        }

        .sidebar-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 20px;
          padding: 1.5rem;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .sidebar-title {
          color: #e2e8f0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .technologies-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tech-badge {
          background: rgba(148, 163, 184, 0.2);
          color: #e2e8f0;
          padding: 0.5rem 0.75rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          border: 1px solid rgba(148, 163, 184, 0.3);
          cursor: pointer;
          transition: all 0.2s ease;
          user-select: none;
        }

        .tech-badge:hover {
          background: rgba(139, 92, 246, 0.3);
          border-color: rgba(139, 92, 246, 0.5);
          transform: translateY(-1px);
        }

        .rating-stars {
          display: flex;
          justify-content: center;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star-button {
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          min-width: 44px;
          min-height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          transition: all 0.2s ease;
        }

        .star-button:hover {
          background: rgba(148, 163, 184, 0.1);
        }

        .like-button {
          width: 100%;
          padding: 0.75rem;
          border-radius: 12px;
          border: 1px solid #dc3545;
          background: transparent;
          color: #dc3545;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          cursor: pointer;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          min-height: 44px;
          transition: all 0.3s ease;
        }

        .like-button.liked {
          background: linear-gradient(135deg, #dc3545, #c82333);
          color: white;
          border-color: transparent;
        }

        .like-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(220, 53, 69, 0.3);
        }

        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .action-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem;
          border-radius: 12px;
          text-decoration: none;
          font-size: 0.9rem;
          font-weight: 600;
          min-height: 44px;
          transition: all 0.3s ease;
        }

        .action-button.primary {
          background: linear-gradient(135deg, #8b5cf6, #a855f7);
          color: white;
        }

        .action-button.secondary {
          border: 1px solid rgba(148, 163, 184, 0.3);
          background: rgba(15, 23, 42, 0.6);
          color: #e2e8f0;
        }

        .action-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .action-button.primary:hover {
          box-shadow: 0 8px 25px rgba(139, 92, 246, 0.4);
        }

        .action-button.secondary:hover {
          background: rgba(148, 163, 184, 0.1);
          border-color: rgba(148, 163, 184, 0.5);
        }

        /* Mobile Optimizations */
        @media (max-width: 768px) {
          .hero-section {
            padding: 1.5rem;
          }

          .project-icon {
            width: 60px;
            height: 60px;
            font-size: 24px;
          }

          .card {
            padding: 1.25rem;
          }

          .card-icon {
            width: 40px;
            height: 40px;
          }

          .card-title {
            font-size: 1.1rem;
          }

          .sidebar-card {
            padding: 1.25rem;
          }

          .architecture-card {
            padding: 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .content-wrapper {
            padding: 0.75rem;
          }

          .hero-section {
            padding: 1rem;
          }

          .project-title {
            font-size: 1.25rem;
          }

          .project-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .meta-item {
            font-size: 0.8rem;
          }

          .project-description {
            font-size: 1rem;
          }

          .card {
            padding: 1rem;
          }

          .feature-card {
            padding: 1rem;
          }

          .sidebar-card {
            padding: 1rem;
          }

          .architecture-card {
            padding: 1.25rem;
          }

          .tech-badge {
            font-size: 0.75rem;
            padding: 0.4rem 0.6rem;
          }
        }

        /* Accessibility improvements */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }

        /* Focus states for better accessibility */
        .back-button:focus,
        .tab-button:focus,
        .star-button:focus,
        .like-button:focus,
        .action-button:focus,
        .tech-badge:focus,
        .feature-card:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        /* Better touch targets */
        @media (hover: none) and (pointer: coarse) {
          .tab-button,
          .star-button,
          .like-button,
          .action-button,
          .back-button {
            min-height: 48px;
            min-width: 48px;
          }

          .tech-badge {
            min-height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .feature-card {
            min-height: 60px;
          }
        }

        /* Loading states */
        .loading {
          opacity: 0.6;
          pointer-events: none;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar for webkit browsers */
        .tab-navigation::-webkit-scrollbar {
          height: 4px;
        }

        .tab-navigation::-webkit-scrollbar-track {
          background: rgba(148, 163, 184, 0.1);
          border-radius: 2px;
        }

        .tab-navigation::-webkit-scrollbar-thumb {
          background: rgba(148, 163, 184, 0.3);
          border-radius: 2px;
        }

        .tab-navigation::-webkit-scrollbar-thumb:hover {
          background: rgba(148, 163, 184, 0.5);
        }

        /* Print styles */
        @media print {
          .mobile-header,
          .tab-navigation,
          .rating-stars,
          .like-button,
          .action-buttons {
            display: none !important;
          }

          .project-details-container {
            background: white !important;
            color: black !important;
          }

          .sidebar-card,
          .card,
          .hero-section,
          .feature-card,
          .architecture-card {
            background: white !important;
            border: 1px solid #ccc !important;
            break-inside: avoid;
          }
        }

        /* Enhanced mobile interactions */
        @media (max-width: 768px) {
          .feature-card:active {
            transform: scale(0.98);
          }

          .tech-badge:active {
            transform: scale(0.95);
          }

          .action-button:active {
            transform: scale(0.98);
          }

          .star-button:active {
            transform: scale(0.9);
          }
        }

        /* Improved dark mode contrast */
        .project-details-container {
          color: #f1f5f9;
        }

        .hero-section,
        .card,
        .feature-card,
        .architecture-card,
        .sidebar-card {
          background: rgba(15, 23, 42, 0.7);
          border-color: rgba(148, 163, 184, 0.25);
        }

        .project-title,
        .card-title,
        .architecture-title,
        .sidebar-title {
          color: #f1f5f9;
        }

        .project-description,
        .card-text,
        .feature-text,
        .architecture-description {
          color: rgba(241, 245, 249, 0.9);
        }

        .meta-item {
          color: rgba(148, 163, 184, 0.8);
        }

        /* Enhanced gradient effects */
        .project-icon {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
          box-shadow: 0 8px 32px rgba(139, 92, 246, 0.4);
        }

        .tab-button.active {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
          box-shadow: 0 4px 15px rgba(139, 92, 246, 0.4);
        }

        .action-button.primary {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
        }

        /* Improved glass morphism */
        .mobile-header,
        .tab-navigation,
        .hero-section,
        .card,
        .feature-card,
        .architecture-card,
        .sidebar-card {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        /* Enhanced animations */
        .hero-background-animation {
          background: linear-gradient(135deg, #8b5cf640, #a855f740, #ec489940);
        }

        /* Better mobile typography */
        @media (max-width: 480px) {
          .project-title {
            font-size: 1.5rem;
            line-height: 1.3;
          }

          .card-title {
            font-size: 1rem;
          }

          .architecture-title {
            font-size: 1.1rem;
          }

          .sidebar-title {
            font-size: 1rem;
          }
        }
      `}</style>
    </motion.div>
  )
}

export default ProjectDetails