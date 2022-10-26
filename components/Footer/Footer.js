import Link from 'next/link';
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className='section'>
        <div className={styles.container}>
          <h2 className={styles.title}>DGStart</h2>
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
          <div className={styles.line}></div>
          <div className={styles.footer_contacts}>
            <p>© 2022 DGStart</p>
            <div className={styles.footer_socials}>
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer