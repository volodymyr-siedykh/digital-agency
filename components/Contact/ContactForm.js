import Heading from '../Heading/Heading'
import styles from './ContactForm.module.css'

const ContactForm = () => {
  return (
    <div className={`container container-center ${styles.container}`}>
      <Heading
        title='Free Consultation'
        text='Please send us your needs, and we will offer you the best solution.'
      />
      <form className={styles.form}>
        <div className={styles.input_wrapper}>
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
        </div>
        <textarea className={styles.textarea} cols="30" rows="5" placeholder='Your message'></textarea>
        <button className='btn btn-orange' type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm