import BlogDetails from '../../components/Blog/BlogDetails';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import blogs from '../../constants/blogs';
import Layout from '../../components/Layout/Layout';
import { motion } from 'framer-motion';

export const getStaticProps = async ({ params }) => {
  const blogList = blogs.filter((x) => x.slug.toString() === params.slug);
  return {
    props: {
      blog: blogList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug.toString() },
  }));

  return { paths, fallback: false };
};

const BlogDetailsPage = ({ blog }) => {
  return (
    <Layout>
      <HeadingPages title={blog.title} text={`Home > Blog`} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <BlogDetails blog={blog} />
      </motion.div>
    </Layout>
  );
};

export default BlogDetailsPage;
