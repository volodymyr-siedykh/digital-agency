import styles from './Feedback.module.css';
import Heading from '../Heading/Heading';
import Image from 'next/image';

const Feedback = () => {
  return (
    <section className='section'>
      <div className='container container-center'>
        <Heading
          title='Customers Feedback'
          text='What our customers say about us'
        />
        <div className={styles.feedback_container}>
          <div className={styles.feedback_item}>
            <div className={styles.feedback_img}>
              <Image
                src='/images/user-1.svg'
                width={100}
                height={100}
                alt='user photo'
              />
            </div>
            <div className={`heading-5 ${styles.feedback_title}`}>
              Callum Bolton
            </div>
            <div className={styles.feedback_job}>Entrepreneur </div>
            <p className={styles.feedback_text}>
              If you&#39;re looking for a top-notch web agency, look no further
              than it&#39;s the best web agency. They offer a wide range of
              services, from website design and development to online marketing
              and SEO. No matter your needs, the best web agency can help you
              achieve your goals.
            </p>
          </div>
          <div className={styles.feedback_item}>
            <div className={styles.feedback_img}>
              <Image
                src='/images/user-2.svg'
                width={100}
                height={100}
                alt='user photo'
              />
            </div>
            <div className={`heading-5 ${styles.feedback_title}`}>
              Ethan Brooks
            </div>
            <div className={styles.feedback_job}>Entrepreneur</div>
            <p className={styles.feedback_text}>
              DGStart agency has a team of highly skilled and experienced
              professionals who are always ready to go the extra mile to ensure
              your success. So if you want to take your business to the next
              level, the best web agency is the perfect partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
