import Heading from "../../components/Heading/Heading";
import HeadingPages from "../../components/HeadingPages/HeadingPages";
import ServicesAll from "../../components/Services/ServicesAll";
import Subscription from "../../components/Subscription/Subscription";
import { motion } from "framer-motion";

const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title='Services' text='Home > Services' />
      <section className='section'>
        <Heading
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
          title='What We Provide'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
        />
        <ServicesAll />
      </section>
      <Subscription />
    </motion.div>
  );
};

export default ServicesPage;
