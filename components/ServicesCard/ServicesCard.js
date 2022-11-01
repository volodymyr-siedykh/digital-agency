import Image from "next/image"
import Link from "next/link"
import styles from './ServicesCard.module.css'
import PropTypes from 'prop-types';

const ServicesCard = ({title, text, icon, color, slug}) => {
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: color || '#E2FAE3' }}
    >
      <div className={styles.img}>
        <Image src={icon} alt='sevice image' width={120} height={120} />
      </div>
      <h3 className={`heading-5 ${styles.title}`}>{title}</h3>
      <p className={styles.text}>{text}</p>
      <Link href={`/services/${slug}`}>
        <a className={styles.link}>Learn More</a>
      </Link>
    </div>
  );
}

ServicesCard.propTypes = {
  color: PropTypes.string,
};

export default ServicesCard