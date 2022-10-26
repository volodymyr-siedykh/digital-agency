import styles from './BlogAll.module.css';
import BlogCard from './BlogCard';
import blog from '../../constants/blogs';

const BlogAll = () => {
  return (
    <div className={`container container-center ${styles.container}`}>
      {blog.map((blog) => (
        <BlogCard key={blog.id} {...blog}/>
      ))}
    </div>
  );
};

export default BlogAll;
