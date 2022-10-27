import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import {DeviceSize} from '../../constants/responsive'
import NavigationMobile from '../Navigation/NavigationMobile';
import NavDesktop from '../Navigation/NavDesktop';
import styles from './Header.module.css';
// import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  const [hasMounted, setHasMounted] = useState(false);
  
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <div className='header__logo'>
          <Link href='/'>
            <a className={styles.logo}>
              <span>DG</span>Start
            </a>
          </Link>
        </div>
        {!isMobile && <NavDesktop />}
        {isMobile && <NavigationMobile />}
      </div>
    </header>
  );
};

export default Header;
// export default dynamic(() => Promise.resolve(Header), { ssr: false });
