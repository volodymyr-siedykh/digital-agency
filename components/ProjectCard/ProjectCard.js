import Image from 'next/image';
import Link from 'next/link';
import styles from './ProjectCard.module.css'

const ProjectCard = ({title, color, image, slug}) => {
  return (
    <Link href={`/projects/${slug}`}>
      <a
        className={styles.content__item}
        style={{ backgroundColor: color || '#E2FAE3' }}
      >
        <h3 className='heading-3'>{title}</h3>
        <Image src={image} alt='project pic' width={452} height={454} />
      </a>
    </Link>
  );
}

export default ProjectCard