

import './cards-projects.css'
import { ArrowUpRight } from 'lucide-react'
import { useNavigate } from 'react-router'

const CardsProjects = ({name, description, link, id}) => {
  const navigate = useNavigate()
  
  const handleProjectClick = () => {
    navigate(`/project/${id}`)
  }
  
  return (
    <div className='project-card'>

        <div className="project-info" onClick={handleProjectClick} style={{cursor: 'pointer'}}>
      <h3 className='project-title'>{name}</h3>
      <p className='project-description'>{description}</p>
      </div>
      <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">LINK <ArrowUpRight /></a>
    </div>
  )
}

export default CardsProjects