import HeadingPages from '../../components/HeadingPages/HeadingPages';
import Heading from '../../components/Heading/Heading';
import ProjectsAll from '../../components/Projects/ProjectsAll';
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';

const ProjectsPage = () => {
  return (
    <Layout title='Projects'>
      <HeadingPages title='Our Projects' text='Home > Projects' />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className='section'
      >
        <Heading
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
          title='Best works'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
        />
        <ProjectsAll />
      </motion.section>
      <Subscription />
    </Layout>
  );
};

export default ProjectsPage;
