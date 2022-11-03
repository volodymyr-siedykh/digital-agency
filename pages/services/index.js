import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import ServicesAll from '../../components/Services/ServicesAll';
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';

const ServicesPage = () => {
  return (
    <Layout title='Services'>
      <HeadingPages title='Services' text='Home > Services' />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className='section'
      >
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
      </motion.section>
      <Subscription />
    </Layout>
  );
};

export default ServicesPage;
