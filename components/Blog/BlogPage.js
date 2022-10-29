import Image from 'next/image';
import { FaFacebook, FaInstagram, FaLinkedin, FaQuoteLeft, FaTwitter } from 'react-icons/fa';
import Heading from '../Heading/Heading';
import styles from './BlogPage.module.css';

const BlogPage = ({ blog }) => {
  const { image, tag, date, text1, text2, text3, quote } = blog;
  return (
    <section className='section'>
      <div className='container container-center'>
        <div className={styles.content}>
          <Image
            src={image}
            alt='tag image'
            width={363}
            height={240}
            layout='responsive'
          />
          <div className={styles.date}>{date}</div>
          <h3 className='heading-4'>User Interview</h3>
          <p className={styles.text}>{text1}</p>
          <div className={styles.quote}>
            <FaQuoteLeft className={styles.icon}/>
            <p>{quote}</p>
          </div>
          <h3 className='heading-4'>Problem Solving</h3>
          <p className={styles.text}>{text2}</p>
          <h3 className='heading-4'>Interface Design</h3>
          <p className={styles.text}>{text3}</p>
        </div>
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
    </section>
  );
};

export default BlogPage;
