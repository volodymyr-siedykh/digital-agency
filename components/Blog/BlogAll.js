import styles from './BlogAll.module.css';
import BlogCard from './BlogCard';

const BlogAll = ({posts}) => {
  console.log(posts);
  return (
    <div className={`container container-center ${styles.container}`}>
      {posts.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogAll;
