import BlogAll from '../../components/Blog/BlogAll';
import Heading from '../../components/Heading/Heading';
import HeadingPages from '../../components/HeadingPages/HeadingPages';
import Subscription from '../../components/Subscription/Subscription';

const BlogPage = () => {
  return (
    <>
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
    </>
  );
};

export default BlogPage;
