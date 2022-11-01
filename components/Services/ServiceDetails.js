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
                Vestibulum blandit ut nunc vel bibendum semper elit eget
                dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc
                sit amet risus nulla ornare egestas.
              </p>
              <div className={styles.details}>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Blandit ut nunc vel bibendum semper elit</p>
                </div>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Blandit ut nunc vel bibendum semper elit</p>
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
                Vestibulum blandit ut nunc vel bibendum semper elit eget
                dignissim rhoncus, nisl augue lacinia urna vel rutrum nisi nunc
                sit amet risus nulla ornare egestas.
              </p>
              <div className={styles.details}>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Blandit ut nunc vel bibendum semper elit</p>
                </div>
                <div className={styles.details_item}>
                  <Image
                    src='/images/tick.svg'
                    width={26}
                    height={26}
                    alt='tick'
                  />
                  <p>Blandit ut nunc vel bibendum semper elit</p>
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
