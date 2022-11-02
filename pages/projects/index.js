import HeadingPages from '../../components/HeadingPages/HeadingPages'
import Heading from '../../components/Heading/Heading';
import ProjectsAll from '../../components/Projects/ProjectsAll'
import Subscription from '../../components/Subscription/Subscription';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title='Our Projects' text='Home > Projects' />
      <section className='section'>
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
      </section>
      <Subscription />
    </motion.div>
  );
};

export default ProjectsPage;
