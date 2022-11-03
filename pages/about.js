import About from '../components/About/About';
import AboutTeam from '../components/About/AboutTeam';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import Subscription from '../components/Subscription/Subscription';
import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';

const BlogPage = () => {
  return (
    <Layout title='About Us'>
      <HeadingPages title='About Us' text='Home > About Us' />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <About />
        <AboutTeam />
        <Subscription />
      </motion.div>
    </Layout>
  );
};

export default BlogPage;
