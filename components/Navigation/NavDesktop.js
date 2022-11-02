import Link from 'next/link';
import styles from './NavDesktop.module.css';
import { motion } from 'framer-motion';

const NavDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a className=''>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <a className=''>Our Services</a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a className=''>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a className=''>Blog</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className=''>About</a>
          </Link>
        </li>
      </ul>
      <Link href='/contact'>
        <motion.a
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className={`btn btn-orange`}
          type='btn'
        >
          Contact
        </motion.a>
      </Link>
    </nav>
  );
}

export default NavDesktop;