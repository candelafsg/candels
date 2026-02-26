import './project.css'
import { useParams } from 'react-router'
import { dbProjects } from '../../db/db.js'
import { CustomTitles } from '../../components/custom-titles/CustomTitles.jsx'
import { Header } from '../../components/header/Header.jsx'
import { useState } from 'react'
import {DropdownButton} from '../../components/buttons/DropDownButton.jsx'

const Project = () => {


  const { pid } = useParams()

  const project = dbProjects.find(p => p.id === parseInt(pid))

  // Estado para el slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    return (
      <div>
        <h1>Proyecto no encontrado</h1>
      </div>
    )
  }

  // Funciones para navegar el slider
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }

  return (
    <div>
      <Header />
      <CustomTitles >{project.name}</CustomTitles>
      <main className="main-project">
        {/* Slider de imágenes */}
        <div className="project-images">
          {project.images && project.images.length > 0 ? (
            <div className="slider-container">
              <div className="slider">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`${project.name} - Imagen ${currentImageIndex + 1}`}
                  className="slider-image"
                />
              </div>

              {/* Botones de navegación */}
              <button className="slider-btn prev-btn" onClick={prevImage}>
                &#10094;
              </button>
              <button className="slider-btn next-btn" onClick={nextImage}>
                &#10095;
              </button>

              {/* Indicadores */}
              <div className="slider-dots">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    className={`dot ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="no-images">
              <p>No hay imágenes disponibles para este proyecto</p>
            </div>
          )}
        </div>
       
        <section className='peoject-info'>


          
       <div className="info-1">  <DropdownButton options={project.skills}>SKILLS</DropdownButton></div>
         
        
        <div className="info-2"><DropdownButton options={project.description}>DESCRIPCIÓN</DropdownButton></div>
       <div className="info-3"><DropdownButton options={project.link}>LINK</DropdownButton></div>
        </section>
      </main>
    </div>
  )
}

export default Project