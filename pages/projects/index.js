import HeadingPages from '../../components/HeadingPages/HeadingPages'
import Heading from '../../components/Heading/Heading';
import ProjectsAll from '../../components/Projects/ProjectsAll'
import Subscription from '../../components/Subscription/Subscription';

const ProjectsPage = () => {
  return (
    <>
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
    </>
  );
};

export default ProjectsPage;
