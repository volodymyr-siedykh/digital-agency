import styles from './HeadingPages.module.css'
import { motion } from 'framer-motion'

const HeadingPages = ({title, text}) => {
  return (
    <section className={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className='container container-center'
      >
        <h1 className='heading-1'>{title}</h1>
        <p className={styles.text}>{text}</p>
      </motion.div>
    </section>
  );
}

export default HeadingPages