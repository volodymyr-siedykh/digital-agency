import Image from 'next/image';
// import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <h1 className={`heading-1 ${styles.title}`}>
          We Build <span>Digital</span> Product For Your Success
        </h1>
        {/* <Link href='/'><a className='btn btn-orange'>Get Started</a></Link> */}
        <div className={styles.hero__img}>
          <Image
            src='/images/hero.svg'
            alt='main pic'
            width={1130}
            height={700}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
