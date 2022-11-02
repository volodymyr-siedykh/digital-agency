import styles from './Heading.module.css'
import { motion } from 'framer-motion';

const Heading = ({title, text, style}) => {
  return (
    <motion.div
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ delay: 0.5 }}
      className={styles.header}
      style={style}
    >
      <h2 className='heading-2'>{title}</h2>
      <p className={styles.header__text}>{text}</p>
    </motion.div>
  );
}

export default Heading