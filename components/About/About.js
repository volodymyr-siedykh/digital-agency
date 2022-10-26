import Image from 'next/image';
import Link from 'next/link';
import Heading from '../Heading/Heading';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={`section`}>
      <div className={`container container-center ${styles.about}`}>
        <Image
          className={styles.img}
          src='/images/about-main.png'
          alt='about us'
          width={520}
          height={560}
        />
        <div className={styles.content}>
          <Heading
            title='Know More About - Dev Agency & Their Process'
            text='Nulla volutpat enim lorem, non volutpat tortor consequa ac Quisque ipsum arcu, vehicula sit amet tempor non, blandite proin dignissim vitae ipsum a laoreet. In molestie imperdiet vehicula urna. Ut ullamcorper neque dui, imperdiet ornared at augue. Donec semper velit eget urna aliquet.'
          />
          <div className={styles.counters}>
            <div className={styles.counter}>
              <h3 className='heading-3'>224+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.counter}>
              <h3 className='heading-3'>63+</h3>
              <p>Projects Done</p>
            </div>
            <div className={styles.counter}>
              <h3 className='heading-3'>360D+</h3>
              <p>Days Of Work</p>
            </div>
          </div>
          <Link href='/'>
            <a className='btn btn-orange'>Learn More</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
