import styles from './ServicesAll.module.css'
import services from '../../constants/services';
import ServicesCard from '../ServicesCard/ServicesCard';

const ServicesAll = () => {
  return (
    <div className={`container container-center ${styles.container}`}>
      {services.map((card) => {
        return <ServicesCard key={card.id} {...card} />;
      })}
    </div>
  );
}

export default ServicesAll