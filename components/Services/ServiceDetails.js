import Image from 'next/image';
import Heading from '../Heading/Heading';
import styles from './ServiceDetails.module.css';

const ServiceDetails = ({ service }) => {
  return (
    <section className='section'>
      <div className='container container-center'>
        <div className={styles.wrapper}>
          <div className={styles.item_1}>
            <Heading title={service.title} />
            <p className={styles.text}>{service.text1}</p>
            <p className={styles.text}>{service.text2}</p>
            <Image
              src='/images/service-main.png'
              alt='service image'
              width={1170}
              height={500}
            />
          </div>

          <div className={styles.item_2}>
            <div className={styles.content}>
              <Heading title='Providing The World&#39;s Best User Experiences' />
              <p>
                The world&#39;s best user experiences are created through a
                combination of web development, ux design, and app development.
                By understanding the needs and wants of users, we can create
                websites, apps, and other digital products that are easy to use
                and provide a great experience.
              </p>
              <div className={styles.details}>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Our products are intuitive and meet the needs</p>
                </div>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>We create products that people love to use</p>
                </div>
              </div>
            </div>
            <Image
              src='/images/service-main2.svg'
              alt='feature image'
              width={617}
              height={425}
              layout='responsive'
            />
          </div>

          <div className={styles.item_3}>
            <div>
              <Image
                src='/images/service-main3.svg'
                alt='feature image'
                width={564}
                height={482}
                layout='responsive'
              />
            </div>
            <div className={styles.content_2}>
              <Heading title='Explore Your Best Ideas On A Whiteboard' />
              <p>
                There&#39;s nothing quite like a whiteboard for exploring your
                best ideas. Whether you&#39;re brainstorming web development
                ideas, designing user interfaces, or developing apps, a
                whiteboard is the perfect tool for getting your thoughts down
                quickly and easily
              </p>
              <div className={styles.details}>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Easily erase and change your ideas as you go</p>
                </div>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Making the process of ideation that much more flexible</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
