import BlogPage from '../../components/Blog/BlogPage';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import blogs from '../../constants/blogs';

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
    <>
      <HeadingPages title={blog.title} text={`Home > Blog`} />
      <BlogPage blog={blog} />
    </>
  );
};

export default BlogDetailsPage