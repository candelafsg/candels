import './portfolio.css'
import { CustomTitles } from '../../components/custom-titles/CustomTitles'
import { dbProjects } from '../../db/db'
import CardsProjects from '../../components/cards-projects/CardsProjects'
import {Header} from '../../components/header/Header'

const Portfolio = () => {
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
    </div>
  )
}

export default Portfolio