import React from 'react'
import { motion } from 'framer-motion'
import { Code, Eye } from 'lucide-react'

const ProjectCard = ({ project, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      whileTap={{ scale: 0.95 }}
      className="h-100"
    >
      <div className="card h-100 glass-card border-0 cursor-pointer" onClick={onClick}>
        <div className="card-body d-flex flex-column">
          <div className="d-flex align-items-center mb-3">
            <Code className="text-primary me-2" size={30} />
            <h3 className="card-title mb-0">{project.title}</h3>
          </div>
          
          <p className="card-text text-light flex-grow-1">{project.description}</p>
          
          <div className="mt-3">
            <div className="d-flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, index) => (
                <span key={index} className="badge bg-primary">{tech}</span>
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn btn-outline-primary w-100 d-flex align-items-center justify-content-center"
            >
              <Eye className="me-2" size={18} />
              View Details
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard