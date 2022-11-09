import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import ServicesAll from '../../components/Services/ServicesAll';
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';
import Head from 'next/head';

const ServicesPage = () => {
  return (
    <>
      <Head>
        <title>DGStart - Services</title>
      </Head>
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
          text='Our web design and development services are second to none. We have a team of experienced professionals who are passionate about their work and dedicated to providing our clients with the best possible results.'
        />
        <ServicesAll />
      </motion.section>
      <Subscription />
    </>
  );
};

export default ServicesPage;
