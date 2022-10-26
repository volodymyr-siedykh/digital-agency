import styles from './Feedback.module.css';
import Heading from '../Heading/Heading';
import Image from 'next/image';

const Feedback = () => {
  return (
    <section className='section'>
      <div className='container container-center'>
        <Heading
          title='Customers Feedback'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus
          laoreet'
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
            <div className={styles.feedback_job}>Ui/Ux Designer</div>
            <p className={styles.feedback_text}>
              Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna
              Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc
              pulvinar aliquet.
            </p>
          </div>
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
              Ethan Brooks
            </div>
            <div className={styles.feedback_job}>Web Developer</div>
            <p className={styles.feedback_text}>
              Nulla pulvinar felis ipsum. Nulla facilisi. Duis placerat erd urna
              Lorem ipsum dolor sit amet con adipiscing elit. Proin gravida orc
              pulvinar aliquet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
