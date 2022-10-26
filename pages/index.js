import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Subscription from "../components/Subscription/Subscription";

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Services />
      <Features />
      <Feedback />
      <Subscription />
    </>
  );
};

export default Home;
