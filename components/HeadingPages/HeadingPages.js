import styles from './HeadingPages.module.css'

const HeadingPages = ({title, text}) => {
  return (
    <section className={styles.section}>
      <div className='container container-center'>
        <h1 className='heading-1'>{title}</h1>
        <p className={styles.text}>{text}</p>
      </div>
    </section>
  )
}

export default HeadingPages