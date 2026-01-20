import './project.css'
import { useParams } from 'react-router'
import { dbProjects } from '../../db/db.js'
import { CustomTitles } from '../../components/custom-titles/CustomTitles.jsx'
import {Header} from '../../components/header/Header.jsx'

 const Project = () => {


  const { pid } = useParams()
  
  const project = dbProjects.find(p => p.id === parseInt(pid))
  
  if (!project) {
    return (
      <div>
        <h1>Proyecto no encontrado</h1>
      </div>
    )
  }
  
  return (
    <div>
      <Header />
      <CustomTitles >{project.name}</CustomTitles>
<main className="main-project">
    <div className="project-images"></div>
      <p>{project.description}</p>
      <div>
        <h3>Habilidades:</h3>
        <ul>
          {project.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        Visitar proyecto
      </a>
    </main>
    </div>
  )
}

export default Project