/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import { motion } from 'framer-motion';
import BlogLinks from '../../components/Blog/BlogLinks';
import Image from 'next/image';

const BlogDetailsPage = ({ frontmatter: { title, tag, image }, content }) => {
  const customComponents = {
    img(image) {
      return (
        <Image
          src={image.src}
          alt={image.alt}
          width={768}
          height={400}
          style={{ width: '100%', height: 'auto', aspectRatio: '16/9' }}
        />
      );
    },
  };
  return (
    <>
      <HeadingPages title={title} text={`Home > Blog`} />

      <motion.article
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
        className='article container-center'
      >
        <Image
          src={image}
          alt={title}
          width={768}
          height={400}
          className='articleImg'
        />
        <ReactMarkdown components={customComponents}>{content}</ReactMarkdown>
        <BlogLinks tag={tag} />
      </motion.article>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    // paths: [{ params: { slug: 'my-first-post' }}]
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      content,
      slug,
    },
  };
}

export default BlogDetailsPage;
