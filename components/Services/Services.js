import Link from 'next/link';
import Heading from '../Heading/Heading';
import ServicesCard from '../ServicesCard/ServicesCard';
import services from '../../constants/services';
import styles from './Services.module.css';

const Services = () => {
  return (
    <section className='section'>
      <div className={`container container-center ${styles.services}`}>
        <div className={styles.services}>
          <Heading
            title='What We Provide'
            text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
          />
          <Link href='/services'>
            <a className={`btn btn-merino ${styles.btn_link}`} type='button'>
              See More
            </a>
          </Link>
          <div className={styles.content}>
            {services
              .filter((card) => card.feature === true)
              .map((card) => {
                return <ServicesCard key={card.id} {...card} />;
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
