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
            The world&#39;s best user experiences are created through a
            combination of web development, ux design, and app development. By
            understanding the needs and wants of users, we can create websites,
            apps, and other digital products that are easy to use and provide a
            great experience
          </p>
          <div className={styles.feature_content}>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Our products are intuitive and meet the needs</p>
            </div>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>We create products that people love to use</p>
            </div>
          </div>
        </div>
        <Image
          src='/images/feature-1.webp'
          alt='feature image'
          width={734}
          height={694}
          layout='responsive'
        />
      </div>

      <div className={styles.feature_2}>
        <Image
          src='/images/feature-2.webp'
          alt='feature image'
          width={650}
          height={694}
          layout='responsive'
        />
        <div className={styles.heading_2}>
          <Heading title='Explore Your Best Ideas On A Whiteboard' />
          <p>
            There&#39;s nothing quite like a whiteboard for exploring your best
            ideas. Whether you&#39;re brainstorming web development ideas,
            designing user interfaces, or developing apps, a whiteboard is the
            perfect tool for getting your thoughts down quickly and easily
          </p>
          <div className={styles.feature_content}>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Easily erase and change your ideas as you go</p>
            </div>
            <div className={styles.features__item}>
              <Image src='/images/tick.svg' width={26} height={26} alt='tick' />
              <p>Making the process of ideation that much more flexible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
