import HeadingPages from '../../components/HeadingPages/HeadingPages';
import projects from '../../constants/projects';
import Subscription from '../../components/Subscription/Subscription';
import ProjectDetails from '../../components/Projects/ProjectPage';

export const getStaticProps = async ({ params }) => {
  const projectsList = projects.filter((x) => x.slug.toString() === params.slug);
  return {
    props: {
      project: projectsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug.toString() },
  }));

  return { paths, fallback: false };
};

const ProjectDetailPage = ({ project }) => {
  return (
    <>
      <HeadingPages title={project.main_title} text={`Home > Project`} />
      <ProjectDetails project={project} />
      <Subscription />
    </>
  );
};

export default ProjectDetailPage;
