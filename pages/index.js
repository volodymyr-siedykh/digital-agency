import Features from '../components/Features/Features';
import Feedback from '../components/Feedback/Feedback';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Services from '../components/Services/Services';
import Subscription from '../components/Subscription/Subscription';
// import { motion } from 'framer-motion';
import Layout from '../components/Layout/Layout';

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Projects />
      <Services />
      <Features />
      <Feedback />
      <Subscription />
    </Layout>
  );
};

export default Home;
