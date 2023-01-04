import Link from 'next/link';
import styles from './NavDesktop.module.css';

const NavDesktop = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/services'>Our Services</Link>
        </li>
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
      <Link href='/contact' className={`btn btn-orange ${styles.header_btn}`}>
        Contact
      </Link>
    </nav>
  );
}

export default NavDesktop;