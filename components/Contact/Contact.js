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
            <p>24 Sylhet, Bagbari 40</p>
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
            <a href='tel:+19009009090'>+19009009090</a>
            <a href='tel:+19009009099'>+19009009099</a>
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
            <a href='mailto:info@dgstart.com'>info@dgstart.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
