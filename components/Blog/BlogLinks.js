import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Heading from '../Heading/Heading';
import styles from './BlogLinks.module.css';

const BlogLinks = ({ tag }) => {
  return (
      <div className={styles.blogLinks}>
        <div className={styles.links}>
          <div className={styles.socials}>
            <span>Socials:</span>
            <div>
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </div>
          <div className={styles.tags}>
            <span>Tags:</span>
            <div className={styles.tag}>{tag}</div>
          </div>
        </div>
        <div className={styles.form_container}>
          <Heading
            title='Leave a Reply'
            text='Nulla volutpat enim lorem, non volutpat tortor consequat ac.'
          />
          <form className={styles.form}>
            <div className={styles.input_wrapper}>
              <input
                className={styles.input}
                type='text'
                placeholder='Your Name'
              />
              <input
                className={styles.input}
                type='email'
                placeholder='Your Email'
              />
            </div>
            <textarea className={styles.textarea} cols='30' rows='5' placeholder='Your Comment'></textarea>
            <button className='btn btn-orange' type='submit'>
              Post Comment
            </button>
          </form>
        </div>
      </div>
  );
};

export default BlogLinks;
