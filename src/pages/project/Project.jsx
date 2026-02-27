import './project.css'
import { useParams } from 'react-router'
import { dbProjects } from '../../db/db.js'
import { CustomTitles } from '../../components/custom-titles/CustomTitles.jsx'
import { Header } from '../../components/header/Header.jsx'
import { useState } from 'react'
import { CircleChevronLeft, CircleChevronRight, CircleX } from 'lucide-react';
import { IconButton } from '../../components/buttons/IconButton.jsx';
import { useNavigate } from 'react-router'
import { LightboxModal } from '../../components/lightbox/LightboxModal.jsx'
import { div } from 'framer-motion/client'



const Project = () => {


  const { pid } = useParams()
  const navigate = useNavigate()

  const project = dbProjects.find(p => p.id === parseInt(pid))

  // Estado para el slider
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Estados para el lightbox modal
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [lightboxImageIndex, setLightboxImageIndex] = useState(0)

  if (!project) {
    return (
      <div>
        <h1>Proyecto no encontrado</h1>
      </div>
    )
  }




  const handleBack = () => {
    navigate('/portfolio')
  }

  // Funciones para el lightbox modal
  const openLightbox = (index) => {
    setLightboxImageIndex(index)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
  }

  const nextLightboxImage = () => {
    setLightboxImageIndex((prevIndex) =>
      prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevLightboxImage = () => {
    setLightboxImageIndex((prevIndex) =>
      prevIndex === 0 ? project.images.length - 1 : prevIndex - 1
    )
  }
  return (
    <div>
      <Header />

      <div className="project-back">
        <IconButton icon={<CircleChevronLeft />} onClick={handleBack}>VOLVER</IconButton>
      </div>
      {/* <CustomTitles >{project.name}</CustomTitles> */}
      <main className="main-project">

        <section className="frontpage-container">
            <img className='frontpage-img' src={project.frontPage} alt="portada" />


            <div className="project-header">
              <ul className="project-ul">
                <li className="project-li">SKILLS</li>
                <li className="project-li">LINK</li>
              </ul>
            </div>

            <div className="project-info-container">
              <h2 className='project-txt title'>{project.name}</h2>
              <p className='project-txt'>{project.description}</p>
            </div>
        </section>


        <section className="preview-section">
          <h2>PREVIEW</h2>

          <div className="preview-gallery">
            {project.images.map((image, index) => (
              <div className="preview-img-container" onClick={() => openLightbox(index)}>
              <img className="preview-img" key={index} src={image} alt={`image-${index}`} />
            </div>
            ))}
          </div>
        </section>
       
      </main>

      {/* Lightbox Modal con Slider */}
      <LightboxModal 
        isOpen={isLightboxOpen} 
        onClose={closeLightbox}
        title={`${project.name} - Imagen ${lightboxImageIndex + 1} de ${project.images.length}`}
      >
        <div className="lightbox-slider">
          <button className="lightbox-nav-btn prev-btn" onClick={prevLightboxImage}>
            <CircleChevronLeft size={32} />
          </button>
          
          <div className="lightbox-image-container">
            <img 
              src={project.images[lightboxImageIndex]} 
              alt={`${project.name} - Imagen ${lightboxImageIndex + 1}`}
              className="lightbox-image"
            />
          </div>
          
          <button className="lightbox-nav-btn next-btn" onClick={nextLightboxImage}>
            <CircleChevronRight size={32} />
          </button>
        </div>
        
        {/* Indicadores del slider */}
        <div className="lightbox-dots">
          {project.images.map((_, index) => (
            <button
              key={index}
              className={`lightbox-dot ${index === lightboxImageIndex ? 'active' : ''}`}
              onClick={() => setLightboxImageIndex(index)}
            />
          ))}
        </div>
      </LightboxModal>
    </div>
  )
}

export default Project