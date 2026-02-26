import './portfolio.css'
import { CustomTitles } from '../../components/custom-titles/CustomTitles'
import { dbProjects } from '../../db/db'
import CardsProjects from '../../components/cards-projects/CardsProjects'
import {Header} from '../../components/header/Header'
import { useState } from 'react'

const Portfolio = () => {

  const [hoveredProject, setHoveredProject] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  
  return (
    <div>
      <Header />    
      <CustomTitles>PORTFOLIO</CustomTitles>

      <div className="portfolio-list">
        <ul className="portfolio-ul">
            {dbProjects.map((project) => (
                <CardsProjects key={project.id} name={project.name} description={project.description} link={project.link} id={project.id} />
            ))}
        </ul>
      </div>



      <div className="portfolio-list-desktop">
        {selectedProject && (
          <button className="close-btn" onClick={() => setSelectedProject(null)}>
            ✕
          </button>
        )}
        <div className={`desktop-container ${selectedProject ? 'shifted' : ''}`}>
          <ul className="portf-list-desk">
            {dbProjects.map((project) => (
              <li 
                key={project.id} 
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => setSelectedProject(project.id)}
              >
                <h2>{project.name}</h2>
                {hoveredProject === project.id && (
                  <div className="project-description show">
                    <p>{project.description}</p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
        
        {selectedProject && (
          <div className={`project-detail-container ${selectedProject ? 'show' : ''}`}>
            <div className="project-content">
              {/* Contenedor para imagen */}
              <div className="project-images">
                {/* Aquí irán las imágenes */}
              </div>
              
              {/* Secciones de información */}
              <div className="project-info-sections">
                <div className="info-section">
                  <h3>DESCRIPCIÓN <span className="arrow">↓</span></h3>
                </div>
                <div className="info-section">
                  <h3>SKILLS <span className="arrow">↓</span></h3>
                </div>
                <div className="info-section">
                  <h3>LINK <span className="arrow">↓</span></h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Portfolio