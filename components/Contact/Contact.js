import Image from 'next/image';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={`container container-center`}>
      <div className={styles.items}>
        <div className={styles.item}>
          <Image
            src='/images/contact-1.png'
            alt='contact icon'
            width={90}
            height={90}
          />
          <div className={styles.content}>
            <h6 className='heading-5'>Main Office</h6>
            <p>902 Glen Oak Dr, Austin, TX 78745</p>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src='/images/contact-2.png'
            alt='contact icon'
            width={90}
            height={90}
          />
          <div className={styles.content}>
            <h6 className='heading-5'>Direct Call</h6>
            <a href='tel:+15125224293'>+1 (512) 522-4293</a>
          </div>
        </div>
        <div className={styles.item}>
          <Image
            src='/images/contact-3.png'
            alt='contact icon'
            width={90}
            height={90}
          />
          <div className={styles.content}>
            <h6 className='heading-5'>E-mail</h6>
            <a href='mailto:info@dgstart.com'>info@dgstartagency.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
