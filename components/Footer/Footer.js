import Link from 'next/link';
import styles from './Footer.module.css'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <section className='section'>
        <div className={styles.container}>
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
          </nav>
          <div className={styles.line}></div>
          <div className={styles.footer_contacts}>
            <div className={styles.dev}>
              <div>© {new Date().getFullYear()} DGStart</div>
              <div>
                Developed by{' '}
                <Link
                  className={styles.link}
                  href='https://siedykh.com'
                  target='_blank'
                >
                  VSD&D
                </Link>
              </div>
            </div>

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