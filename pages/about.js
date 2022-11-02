import About from '../components/About/About';
import AboutTeam from '../components/About/AboutTeam';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import Subscription from '../components/Subscription/Subscription';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title='About Us' text='Home > About Us' />
      <About />
      <AboutTeam />
      <Subscription />
    </motion.div>
  );
};

export default BlogPage;
