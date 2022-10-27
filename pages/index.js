import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Subscription from "../components/Subscription/Subscription";
import projects from '../constants/projects';

const Home = () => {
  console.log(projects);
  return (
    <>
      <Hero />
      <Projects projects={projects} />
      <Services />
      <Features />
      <Feedback />
      <Subscription />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  return {
    props: {
      projects: projects,
    },
  };
};