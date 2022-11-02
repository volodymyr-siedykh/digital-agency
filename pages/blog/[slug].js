import BlogDetails  from '../../components/Blog/BlogDetails';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import blogs from '../../constants/blogs';
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title={blog.title} text={`Home > Blog`} />
      <BlogDetails blog={blog} />
    </motion.div>
  );
};

export default BlogDetailsPage