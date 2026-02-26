import './project.css'
import { useParams } from 'react-router'
import { dbProjects } from '../../db/db.js'
import { CustomTitles } from '../../components/custom-titles/CustomTitles.jsx'
import { Header } from '../../components/header/Header.jsx'
import { useState } from 'react'
import { CircleChevronLeft } from 'lucide-react';
import { IconButton } from '../../components/buttons/IconButton.jsx';
import { useNavigate } from 'react-router'
import { div } from 'framer-motion/client'



const Project = () => {


  const { pid } = useParams()
  const navigate = useNavigate()

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




  const handleBack = () => {
    navigate('/portfolio')
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
              <div className="preview-img-container">
              <img  className="preview-img" key={index} src={image} alt={`image-${index}`} />
            </div>
            ))}
          </div>
        </section>
       
      </main>
    </div>
  )
}

export default Project