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
          src='/images/about-main.webp'
          alt='about us'
          width={520}
          height={560}
          layout='responsive'
        />
        <div className={styles.content}>
          <Heading
            title='Let’s Start A New Digital Journey Together!'
            text='Begin a transformative digital journey with DGStart, where your vision meets our innovative marketing expertise. Our approach is your gateway to captivating audiences and achieving impactful results. Connect with us to unlock your brand’s full potential in the digital world.'
          />
          <div className={styles.counters}>
            <div className={styles.counter}>
              <h3 className='heading-3'>828+</h3>
              <p>Happy Clients</p>
            </div>
            <div className={styles.counter}>
              <h3 className='heading-3'>1263+</h3>
              <p>Projects Done</p>
            </div>
            <div className={styles.counter}>
              <h3 className='heading-3'>13600D+</h3>
              <p>Days Of Work</p>
            </div>
          </div>
          <Link href='/' className='btn btn-orange'>
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
