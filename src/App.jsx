import React, { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import Welcome from './components/Welcome'
import Introduction from './components/Introduction'
import Projects from './components/Projects'
import Loading from './components/Loading'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState('loading')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    // Start with loading
    setTimeout(() => {
      setCurrentView('welcome')
    }, 1000)

    // Auto navigate to introduction after welcome
    setTimeout(() => {
      setCurrentView('introduction')
    }, 6000)
  }, [])

  return (
    <div className="app-container">
      <AnimatePresence mode="wait">
        {currentView === 'loading' && <Loading key="loading" />}
        {currentView === 'welcome' && <Welcome key="welcome" />}
        {currentView === 'introduction' && (
          <Introduction 
            key="introduction" 
            onNext={() => setCurrentView('projects')}
          />
        )}
        {currentView === 'projects' && (
          <Projects 
            key="projects"
            selectedProject={selectedProject}
            setSelectedProject={setSelectedProject}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App