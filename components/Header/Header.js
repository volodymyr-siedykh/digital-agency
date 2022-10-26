import Link from 'next/link';
import styles from './Header.module.css';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className='header__logo'>
          <Link href='/'>
            <a className={styles.logo}><span>DG</span>Start</a>
          </Link>
        </div>
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
        </nav>
        <Link href='/contact'>
          <a className={`btn btn-orange ${styles.hero__btn}`} type='btn'>
            Contact
          </a>
        </Link>
        <div className={styles.burger}>
          <FaBars />
        </div>
      </div>
    </header>
  );
};

export default Header;
