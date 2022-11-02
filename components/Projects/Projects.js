import Link from 'next/link';
import Heading from '../Heading/Heading';
import ProjectCard from '../ProjectCard/ProjectCard';
import styles from './Projects.module.css';
import projects from '../../constants/projects';

const Projects = () => {
  
  return (
    <section className='section'>
      <div className={`container container-center ${styles.project}`}>
        <Heading
          title='Our Projects'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
        />
        <Link href='/projects'>
          <a className={`btn btn-merino ${styles.btn_link}`}>
            See More
          </a>
        </Link>
        <div className={styles.content}>
          {projects
            .filter((card) => card.feature === true)
            .map((card) => {
              return <ProjectCard key={card.id} {...card} />;
            })}
        </div>
      </div>
    </section>
  );
};

export default Projects;


