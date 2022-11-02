import Features from "../components/Features/Features";
import Feedback from "../components/Feedback/Feedback";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Subscription from "../components/Subscription/Subscription";
import { motion } from "framer-motion";

const Home = () => {

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Hero />
      <Projects />
      <Services />
      <Features />
      <Feedback />
      <Subscription />
    </motion.div>
  );
};

export default Home;