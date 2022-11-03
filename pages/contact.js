import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import Layout from '../components/Layout/Layout';

const ContactPage = () => {
  return (
    <Layout title='Contact'>
        <HeadingPages title='Contact' text='Home > Contact' />
        <section className='section'>
          <Contact />
          <ContactForm />
        </section>
    </Layout>
  );
};

export default ContactPage;
