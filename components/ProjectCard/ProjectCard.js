import Image from 'next/image';
import styles from './ProjectCard.module.css'

const ProjectCard = ({title, color, image}) => {
  return (
    <div
      className={styles.content__item}
      style={{ backgroundColor: color || '#E2FAE3' }}
    >
      <h3 className='heading-3'>{title}</h3>
      <Image src={image} alt='project pic' width={452} height={454} />
    </div>
  );
}

export default ProjectCard