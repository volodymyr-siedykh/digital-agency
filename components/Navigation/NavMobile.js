import Link from 'next/link';
import styles from './NavMobile.module.css';

const NavMobile = ({ setOpen }) => {
  const handle = () => {
    setTimeout(() => {
      setOpen(!setOpen);
    }, 300);
  };

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href='/'>
            <a className='' onClick={handle}>
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/services'>
            <a className='' onClick={handle}>
              Our Services
            </a>
          </Link>
        </li>
        <li>
          <Link href='/projects'>
            <a className='' onClick={handle}>
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href='/blog'>
            <a className='' onClick={handle}>
              Blog
            </a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a className='' onClick={handle}>
              About
            </a>
          </Link>
        </li>
        <li>
          <Link href='/contact'>
            <a className='' onClick={handle}>
              Contact
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
