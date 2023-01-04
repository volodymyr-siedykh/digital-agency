import Image from 'next/image';
import Link from 'next/link';
import styles from './BlogCard.module.css';

const BlogCard = ({post}) => {
  const { title, tag, date, image } = post.frontmatter;
  const { slug } = post;

  return (
    <Link href={`/blog/${slug}`}>
        <div className={styles.container}>
          <Image src={image} alt={title} width={363} height={240} />
          <div className={styles.content}>
            <div className={styles.tag}>{tag}</div>
            <h5 className={`heading-5 ${styles.title}`}>{title}</h5>
            <div className={styles.date}>{date}</div>
          </div>
        </div>
    </Link>
  );
};

export default BlogCard;
