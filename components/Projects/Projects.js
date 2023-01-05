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
          title='Projects'
          text='Our web development and ux/ui design projects'
        />
        <Link href='/projects' className={`btn btn-merino ${styles.btn_link}`}>
          Our Projects
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


