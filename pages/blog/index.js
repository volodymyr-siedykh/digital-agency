import BlogAll from '../../components/Blog/BlogAll';
import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import Subscription from '../../components/Subscription/Subscription';
import {motion} from 'framer-motion'
import Head from 'next/head';

const BlogPage = () => {
  return (
    <>
    <Head>
      <title>DGStart - Blog</title>
    </Head>
      <HeadingPages title='Blog' text='Home > Blog' />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className='section'
      >
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
      </motion.section>
      <Subscription />
    </>
  );
};

export default BlogPage;
