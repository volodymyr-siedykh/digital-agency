import Image from 'next/image';
import Heading from '../Heading/Heading';
import styles from './ProjectPage.module.css';

const ProjectDetails = ({ project }) => {
  return (
    <section className='section'>
      <div className='container container-center'>
        <div className={styles.project}>
          <div className={styles.content}>
            <Heading title={project.title} />
            <p className={styles.text}>{project.text1}</p>
            <p className={styles.text}>{project.text2}</p>
          </div>
          <Image
            src={project.image}
            alt={project.title}
            width={565}
            height={565}
            style={{ width: '100%', height: 'auto' } }
          />
        </div>
        <div className={styles.details}>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-1.svg'
              alt='icon details'
              width={85}
              height={85}
              
            />
            <div className={styles.descr}>
              <div>Client</div>
              <h6 className='heading-6'>Next Generation Company</h6>
            </div>
          </div>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-2.svg'
              alt='icon details'
              width={85}
              height={85}
            />
            <div className={styles.descr}>
              <div>Services</div>
              <h6 className='heading-6'>UI Design, Grapic design</h6>
            </div>
          </div>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-3.svg'
              alt='icon details'
              width={85}
              height={85}
            />
            <div className={styles.descr}>
              <div>Team</div>
              <h6 className='heading-6'>Dev Pixels</h6>
            </div>
          </div>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-4.svg'
              alt='icon details'
              width={85}
              height={85}
            />
            <div className={styles.descr}>
              <div>Date</div>
              <h6 className='heading-6'>2022, January 24</h6>
            </div>
          </div>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-5.svg'
              alt='icon details'
              width={85}
              height={85}
            />
            <div className={styles.descr}>
              <div>Website</div>
              <h6 className='heading-6'>nextgen.com</h6>
            </div>
          </div>
          <div className={styles.item}>
            <Image 
              src='/images/icon-details-6.svg'
              alt='icon details'
              width={85}
              height={85}
            />
            <div className={styles.descr}>
              <div>Tags</div>
              <h6 className='heading-6'>Web Design</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;
