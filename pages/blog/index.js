import BlogAll from '../../components/Blog/BlogAll';
import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';

const BlogPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title='Blog' text='Home > Blog' />
      <section className='section'>
        <Heading
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
          title='Our Blogs'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
        />
        <BlogAll />
      </section>
      <Subscription />
    </motion.div>
  );
};

export default BlogPage;
