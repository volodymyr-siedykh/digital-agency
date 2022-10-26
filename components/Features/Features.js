import Image from 'next/image';
import Heading from '../Heading/Heading';
import styles from './Features.module.css';

const Features = () => {
  return (
    <section className={styles.features}>

      <div className={styles.feature_1}>
        <div className={styles.heading_1}>
          <Heading title='Providing The World&#39;s Best User Experiences' />
          <p>
            Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim
            rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus
            nulla ornare egestas.
          </p>
          <div className={styles.feature_content}>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Blandit ut nunc vel bibendum semper elit</p>
            </div>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Blandit ut nunc vel bibendum semper elit</p>
            </div>
          </div>
        </div>
        <Image
          src='/images/feature-1.webp'
          alt='feature image'
          width={734}
          height={694}
        />
      </div>

      <div className={styles.feature_2}>
        <Image
          src='/images/feature-2.webp'
          alt='feature image'
          width={650}
          height={694}
        />
        <div className={styles.heading_2}>
          <Heading
            title='Explore Your Best Ideas On A Whiteboard'
          />
          <p>
            Vestibulum blandit ut nunc vel bibendum semper elit eget dignissim
            rhoncus, nisl augue lacinia urna vel rutrum nisi nunc sit amet risus
            nulla ornare egestas.
          </p>
          <div className={styles.feature_content}>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Blandit ut nunc vel bibendum semper elit</p>
            </div>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Blandit ut nunc vel bibendum semper elit</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Features;
