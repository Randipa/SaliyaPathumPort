import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, User, GraduationCap, Briefcase, Download, Eye } from 'lucide-react';

const Introduction = ({ onNext }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const professionalInfo = [
    {
      icon: GraduationCap,
      title: "Education",
      text: "Computer Science Undergraduate at SLIIT University",
      bgColor: "bg-primary",
      textColor: "text-white"
    },
    {
      icon: Briefcase,
      title: "Experience", 
      text: "1.5+ Years of Professional Software Development",
      bgColor: "bg-success",
      textColor: "text-white"
    }
  ];

  return (
    <section className="min-vh-100 d-flex align-items-center justify-content-center py-5">
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="row align-items-center"
        >
          {/* Profile Image Section */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <motion.div
              variants={imageVariants}
              className="text-center position-relative"
            >
              <div className="profile-image-container position-relative d-inline-block">
                <motion.img
                  src="/Saliyapathum.PNG"
                  alt="Saliya Pathum Randeepa - Software Developer"
                  className="profile-image rounded-circle img-fluid shadow-lg"
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                />
                
                <motion.div
                  className="profile-badge position-absolute"
                  animate={{ 
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-success rounded-circle p-3 shadow-lg border border-3 border-white">
                    <User size={24} className="text-white" />
                  </div>
                </motion.div>
              </div>
              
              {/* Status Badge */}
              <motion.div
                variants={itemVariants}
                className="mt-3"
              >
                <span className="badge bg-success fs-6 px-3 py-2 rounded-pill shadow">
                  🟢 Available for Work
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Content Section */}
          <div className="col-lg-7">
            <motion.div
              variants={itemVariants}
              className="introduction-content"
            >
              {/* Main Heading */}
              <motion.div variants={itemVariants} className="mb-4">
                <h1 className="display-3 fw-bold mb-3">
                  <span className="text-dark">Hello, I'm</span>
                  <br />
                  <span className="gradient-text">Saliya Pathum Randeepa</span>
                </h1>
                <p className="fs-4 text-muted fw-medium mb-0">
                  Full Stack Developer & Tech Enthusiast
                </p>
              </motion.div>

              {/* Professional Info Cards */}
              <motion.div variants={itemVariants} className="professional-info mb-5">
                <div className="row g-3">
                  {professionalInfo.map((item, index) => (
                    <div key={index} className="col-12">
                      <motion.div
                        className={`${item.bgColor} ${item.textColor} rounded-4 p-4 shadow-sm position-relative overflow-hidden`}
                        whileHover={{ 
                          scale: 1.02,
                          y: -2,
                          transition: { duration: 0.2 }
                        }}
                      >
                        <div className="d-flex align-items-center">
                          <div className="icon-wrapper me-4">
                            <item.icon size={32} className={item.textColor} />
                          </div>
                          <div className="flex-grow-1">
                            <h5 className={`fw-bold mb-2 ${item.textColor}`}>{item.title}</h5>
                            <p className={`mb-0 fs-6 ${item.textColor} opacity-90`}>
                              {item.text}
                            </p>
                          </div>
                        </div>
                        
                        {/* Decorative gradient overlay */}
                        <div className="position-absolute top-0 end-0 w-25 h-100 bg-white opacity-10 rounded-start-circle"></div>
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Description */}
              <motion.div variants={itemVariants} className="mb-5">
                <div className="bg-light rounded-4 p-4 shadow-sm">
                  <h4 className="fw-semibold mb-3 text-dark">About Me</h4>
                  <p className="fs-5 text-dark lh-lg mb-0">
                    Passionate software developer with expertise in modern web technologies 
                    and a strong foundation in computer science. I love creating user-friendly 
                    applications and solving complex problems with clean, efficient code.
                  </p>
                </div>
              </motion.div>

              {/* Call to Action Buttons */}
              <motion.div variants={itemVariants}>
                <div className="d-flex flex-wrap gap-3">
                  <motion.button
                    onClick={onNext}
                    className="btn btn-primary btn-lg px-5 py-3 fw-semibold rounded-pill shadow"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0,123,255,0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="d-flex align-items-center">
                      <Eye className="me-2" size={20} />
                      View My Projects
                    </span>
                  </motion.button>
                  
                  <motion.button
                    className="btn btn-outline-dark btn-lg px-5 py-3 fw-semibold rounded-pill"
                    whileHover={{ 
                      scale: 1.05,
                      backgroundColor: "#212529",
                      color: "#ffffff"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="d-flex align-items-center">
                      <Download className="me-2" size={20} />
                      Download CV
                    </span>
                  </motion.button>
                </div>
                
                {/* Helper Text */}
                <p className="text-muted mt-3 mb-0 fs-6">
                  👆 Click to explore my work or download my resume
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .profile-image {
          width: 320px;
          height: 320px;
          object-fit: cover;
          border: 6px solid #fff;
        }

        .profile-badge {
          bottom: 15px;
          right: 15px;
        }

        .gradient-text {
          background: linear-gradient(135deg, #007bff, #0056b3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
        }

        .icon-wrapper {
          min-width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .introduction-content {
          max-width: 700px;
        }

        .professional-info {
          margin: 2.5rem 0;
        }

        .btn {
          font-size: 1.1rem;
          letter-spacing: 0.5px;
          border-width: 2px;
        }

        .bg-light {
          background-color: #f8f9fa !important;
          border: 1px solid #e9ecef;
        }

        /* Enhanced text readability */
        .text-dark {
          color: #212529 !important;
          font-weight: 600;
        }

        .text-muted {
          color: #6c757d !important;
          font-weight: 500;
        }

        /* Improved spacing and typography */
        .display-3 {
          line-height: 1.2;
          letter-spacing: -1px;
        }

        .fs-4 {
          font-size: 1.5rem !important;
        }

        .fs-5 {
          font-size: 1.25rem !important;
          line-height: 1.6;
        }

        .fs-6 {
          font-size: 1.1rem !important;
        }

        @media (max-width: 768px) {
          .profile-image {
            width: 250px;
            height: 250px;
          }
          
          .display-3 {
            font-size: 2.5rem;
          }

          .btn-lg {
            font-size: 1rem;
            padding: 0.875rem 2rem;
          }

          .introduction-content {
            max-width: 100%;
          }
        }

        @media (max-width: 576px) {
          .d-flex.flex-wrap.gap-3 {
            flex-direction: column;
          }
          
          .btn {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Introduction;