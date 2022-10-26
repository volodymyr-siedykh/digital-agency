import About from '../components/About/About';
import AboutTeam from '../components/About/AboutTeam';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import Subscription from '../components/Subscription/Subscription';

const BlogPage = () => {
  return (
    <>
      <HeadingPages title='About Us' text='Home > About Us' />
      <About />
      <AboutTeam />
      <Subscription />
    </>
  );
};

export default BlogPage;
