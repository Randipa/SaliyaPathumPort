import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User, GraduationCap, Briefcase, Eye, MapPin, Calendar } from 'lucide-react';

const Introduction = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const professionalInfo = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "Computer Science at SLIIT University",
      detail: "Currently pursuing degree",
      gradient: "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)",
      iconBg: "rgba(139, 92, 246, 0.2)"
    },
    {
      icon: Briefcase,
      title: "Experience", 
      text: "1.5+ Years Professional Development",
      detail: "Full Stack & Software Engineering",
      gradient: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      iconBg: "rgba(236, 72, 153, 0.2)"
    }
  ];

  const stats = [
    { label: "Years Experience", value: "1.5+" },
    { label: "Projects Completed", value: "8+" },
    { label: "Technologies", value: "6+" }
  ];

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center py-5 bg-gradient-to-br">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="row align-items-center g-5"
        >
          {/* Profile Section */}
          <div className="col-lg-5">
            <motion.div
              variants={imageVariants}
              className="text-center position-relative"
            >
              {/* Main Profile Image */}
              <div className="profile-container position-relative d-inline-block">
                <motion.div
                  className="profile-wrapper"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                >
                  <img
                    src="/Saliyapathum.PNG"
                    alt="Saliya Pathum Randeepa - Software Developer"
                    className="profile-image"
                  />
                  
                  {/* Floating elements */}
                  <motion.div
                    className="floating-badge badge-1"
                    animate={{ 
                      y: [0, -10, 0],
                      rotate: [0, 5, 0]
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <div className="glass-card">
                      <MapPin size={16} className="text-primary" />
                      <span className="ms-2">Sri Lanka</span>
                    </div>
                  </motion.div>

                  <motion.div
                    className="floating-badge badge-2"
                    animate={{ 
                      y: [0, 10, 0],
                      rotate: [0, -5, 0]
                    }}
                    transition={{ 
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                  >
                    <div className="glass-card">
                      <div className="status-dot"></div>
                      <span>Available</span>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Profile Badge */}
                <motion.div
                  className="profile-badge"
                  animate={{ 
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="badge-content">
                    <User size={20} />
                  </div>
                </motion.div>
              </div>

              {/* Stats Section */}
              <motion.div
                variants={itemVariants}
                className="stats-container mt-4"
              >
                <div className="row g-3">
                  {stats.map((stat, index) => (
                    <div key={index} className="col-4">
                      <motion.div
                        className="stat-card"
                        whileHover={{ 
                          y: -5,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="stat-value">{stat.value}</div>
                        <div className="stat-label">{stat.label}</div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="col-lg-7">
            <motion.div variants={itemVariants} className="content-section">
              {/* Greeting */}
              <motion.div variants={itemVariants} className="greeting mb-2">
                <span className="greeting-text">👋 Hello there! I'm</span>
              </motion.div>

              {/* Main Title */}
              <motion.div variants={itemVariants} className="title-section mb-4">
                <h1 className="main-title">
                  <span className="name-text">Saliya Pathum</span>
                  <br />
                  <span className="gradient-text">Randeepa</span>
                </h1>
                <div className="subtitle-wrapper">
                  <motion.div
                    className="subtitle-line"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  />
                  <p className="subtitle">
                    Full Stack Software Developer
                  </p>
                </div>
              </motion.div>

              {/* Professional Info Cards */}
              <motion.div variants={itemVariants} className="info-cards mb-5">
                {professionalInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    className="info-card"
                    style={{ '--gradient': item.gradient, '--icon-bg': item.iconBg }}
                    whileHover={{ 
                      scale: 1.02,
                      y: -3,
                      transition: { duration: 0.3 }
                    }}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <div className="info-icon">
                      <item.icon size={24} />
                    </div>
                    <div className="info-content">
                      <h5 className="info-title">{item.title}</h5>
                      <p className="info-text">{item.text}</p>
                      <span className="info-detail">{item.detail}</span>
                    </div>
                    
                  </motion.div>
                ))}
              </motion.div>

              {/* About Section */}
              <motion.div variants={itemVariants} className="about-section mb-5">
                <div className="about-card">
                  <h4 className="about-title">About Me</h4>
                  <p className="about-text">
                    Passionate software developer with expertise in modern web technologies 
                    and a strong foundation in computer science. I love creating user-friendly 
                    applications and solving complex problems with clean, efficient code.
                  </p>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.div variants={itemVariants}>
                <motion.button
                  onClick={onNext}
                  className="cta-button"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 123, 255, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="cta-content">
                    <Eye className="cta-icon" size={20} />
                    <span className="cta-text">Explore My Work</span>
                    <ChevronRight className="cta-arrow" size={16} />
                  </span>
                </motion.button>
                
                <motion.p 
                  className="cta-helper"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  Discover my projects and technical expertise
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .bg-gradient-to-br {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          min-height: 100vh;
        }

        .bg-gradient-to-br::before {
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

        .bg-gradient-to-br::after {
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

        /* Profile Styles */
        .profile-container {
          filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.1));
        }

        .profile-wrapper {
          position: relative;
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
          padding: 8px;
          border-radius: 50%;
          background-size: 200% 200%;
          animation: gradientShift 6s ease infinite;
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .profile-image {
          width: 280px;
          height: 280px;
          object-fit: cover;
          border-radius: 50%;
          border: 4px solid rgba(15, 23, 42, 0.8);
          display: block;
        }

        .floating-badge {
          position: absolute;
          z-index: 10;
        }

        .badge-1 {
          top: 20px;
          right: -20px;
        }

        .badge-2 {
          bottom: 60px;
          left: -30px;
        }

        .glass-card {
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 25px;
          padding: 8px 16px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #e2e8f0;
          display: flex;
          align-items: center;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .profile-badge {
          position: absolute;
          bottom: 20px;
          right: 20px;
        }

        .badge-content {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(16, 185, 129, 0.6);
          border: 3px solid rgba(15, 23, 42, 0.8);
        }

        /* Stats Styles */
        .stats-container {
          max-width: 280px;
          margin: 0 auto;
        }

        .stat-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 16px;
          padding: 16px 8px;
          text-align: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(139, 92, 246, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.2);
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 800;
          color: #e2e8f0;
          line-height: 1;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #94a3b8;
          font-weight: 600;
          margin-top: 4px;
        }

        /* Content Styles */
        .content-section {
          max-width: 600px;
        }

        .greeting-text {
          font-size: 1.1rem;
          color: #94a3b8;
          font-weight: 600;
          display: inline-block;
        }

        .main-title {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 900;
          line-height: 1.1;
          margin: 0;
        }

        .name-text {
          color: #e2e8f0;
        }

        .gradient-text {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .subtitle-wrapper {
          position: relative;
          margin-top: 16px;
        }

        .subtitle-line {
          height: 3px;
          background: linear-gradient(90deg, #8b5cf6, #a855f7, #ec4899);
          border-radius: 2px;
          margin-bottom: 12px;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #94a3b8;
          font-weight: 600;
          margin: 0;
        }

        /* Info Cards */
        .info-cards {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .info-card {
          background: var(--gradient);
          border-radius: 20px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 20px;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.1);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .info-card:hover::before {
          opacity: 1;
        }

        .info-icon {
          background: var(--icon-bg);
          padding: 12px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-title {
          font-size: 1.1rem;
          font-weight: 700;
          margin: 0 0 4px 0;
        }

        .info-text {
          font-size: 0.95rem;
          margin: 0 0 4px 0;
          opacity: 0.9;
        }

        .info-detail {
          font-size: 0.8rem;
          opacity: 0.7;
          font-weight: 500;
        }

        .info-arrow {
          opacity: 0.7;
          transition: transform 0.3s ease;
        }

        .info-card:hover .info-arrow {
          transform: translateX(4px);
        }

        /* About Section */
        .about-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
        }

        .about-title {
          font-size: 1.3rem;
          font-weight: 700;
          color: #e2e8f0;
          margin: 0 0 16px 0;
        }

        .about-text {
          font-size: 1.1rem;
          line-height: 1.7;
          color: #cbd5e1;
          margin: 0;
          font-weight: 500;
        }

        /* CTA Button */
        .cta-button {
          background: linear-gradient(135deg, #8b5cf6 0%, #a855f7 50%, #ec4899 100%);
          border: none;
          border-radius: 50px;
          padding: 18px 36px;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(139, 92, 246, 0.4);
          position: relative;
          overflow: hidden;
        }

        .cta-button::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }

        .cta-button:hover::before {
          left: 100%;
        }

        .cta-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }

        .cta-icon, .cta-arrow {
          transition: transform 0.3s ease;
        }

        .cta-button:hover .cta-arrow {
          transform: translateX(4px);
        }

        .cta-helper {
          font-size: 0.9rem;
          color: #94a3b8;
          margin: 12px 0 0 0;
          font-weight: 500;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .profile-image {
            width: 220px;
            height: 220px;
          }
          
          .main-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .profile-image {
            width: 200px;
            height: 200px;
          }
          
          .floating-badge {
            display: none;
          }
          
          .info-card {
            padding: 20px;
          }
          
          .about-card {
            padding: 24px;
          }
          
          .cta-button {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 576px) {
          .stats-container {
            max-width: 100%;
          }
          
          .stat-card {
            padding: 12px 8px;
          }
          
          .stat-value {
            font-size: 1.2rem;
          }
          
          .stat-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Introduction;