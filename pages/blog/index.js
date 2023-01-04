import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { sortByDate } from '../../utils/sortByDate';
import BlogAll from '../../components/Blog/BlogAll';
import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';
import Head from 'next/head';

const BlogPage = ({ posts }) => {

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
        <BlogAll posts={posts} />
      </motion.section>
      <Subscription />
    </>
  );
};

export const getStaticProps = async () => {
  // Get files from the posts directory
  const files = fs.readdirSync(path.join('posts'));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '');

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('posts', filename),
      'utf-8'
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
};

export default BlogPage;
