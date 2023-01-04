import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.hero__container}`}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
          className={`heading-1 ${styles.title}`}
        >
          We Build <span>Digital</span> Product For Your Success
        </motion.h1>
        <Link href='/' className='btn btn-orange'>
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default Hero;
