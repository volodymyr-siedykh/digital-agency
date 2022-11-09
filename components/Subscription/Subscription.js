import styles from './Subscription.module.css'

const Subscription = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.subscr_title}>
        <h2 className='heading-2'>Newsletter Subscription</h2>
        <p className='text'>
          If you&#39;re interested in staying up-to-date on the latest web design
          and development trends, subscribing to a newsletter is a great way to
          do so
        </p>
      </div>
      <form className={styles.form}>
        <div className={styles.form_control}>
          <input
            type='text'
            className={styles.input}
            placeholder='Enter your email address'
          />
          <button type='submit' className='btn btn-orange'>
            Subscribe
          </button>
        </div>
      </form>
    </section>
  );
}

export default Subscription