import styles from './Heading.module.css'

const Heading = ({title, text, style}) => {
  return (
    <div className={styles.header} style={style}>
      <h2 className='heading-2'>{title}</h2>
      <p className={styles.header__text}>
        {text}
      </p>
    </div>
    
  );
}

export default Heading