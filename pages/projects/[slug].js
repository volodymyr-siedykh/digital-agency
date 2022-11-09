import HeadingPages from '../../components/HeadingPages/HeadingPages';
import projects from '../../constants/projects';
import Subscription from '../../components/Subscription/Subscription';
import ProjectDetails from '../../components/Projects/ProjectPage';
import { motion } from 'framer-motion';
import Head from 'next/head';

export const getStaticProps = async ({ params }) => {
  const projectsList = projects.filter(
    (x) => x.slug.toString() === params.slug
  );
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
    <Head>
      <title>DGStart - {project.title}</title>
    </Head>
      <HeadingPages title={project.main_title} text={`Home > Project`} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ProjectDetails project={project} />
        <Subscription />
      </motion.div>
    </>
  );
};

export default ProjectDetailPage;
