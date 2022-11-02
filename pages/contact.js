import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import { motion } from 'framer-motion';

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <HeadingPages title='Contact' text='Home > Contact' />
      <section className='section'>
        <Contact />
        <ContactForm />
      </section>
    </motion.div>
  );
};

export default ContactPage;
