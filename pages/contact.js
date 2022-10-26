import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import HeadingPages from '../components/HeadingPages/HeadingPages';

const ContactPage = () => {
  return (
    <>
      <HeadingPages title='Contact' text='Home > Contact' />
      <section className='section'>
        <Contact />
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
