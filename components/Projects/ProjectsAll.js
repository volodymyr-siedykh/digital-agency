import styles from './ProjectsAll.module.css'
import projects from '../../constants/projects'
import ProjectCard from '../ProjectCard/ProjectCard'


const ProjectsAll = () => {
  return (
    <div className={`container container-center ${styles.container}`}>
      {projects.map(project => {
        return <ProjectCard key={project.id} {...project} />
      })}
    </div>
  )
}

export default ProjectsAll