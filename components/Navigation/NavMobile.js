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
          <Link href='/' className='' onClick={handle}>
            Home
          </Link>
        </li>
        <li>
          <Link href='/services' className='' onClick={handle}>
            Our Services
          </Link>
        </li>
        <li>
          <Link href='/projects' className='' onClick={handle}>
            Projects
          </Link>
        </li>
        <li>
          <Link href='/blog' className='' onClick={handle}>
            Blog
          </Link>
        </li>
        <li>
          <Link href='/about' className='' onClick={handle}>
            About
          </Link>
        </li>
        <li>
          <Link href='/contact' className='' onClick={handle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
