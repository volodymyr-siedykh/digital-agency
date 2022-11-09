import Head from 'next/head';
import Contact from '../components/Contact/Contact';
import ContactForm from '../components/Contact/ContactForm';
import HeadingPages from '../components/HeadingPages/HeadingPages';

const ContactPage = () => {
  return (
    <>
      <Head>
        <title>DGStart - Contact</title>
      </Head>
      <HeadingPages title='Contact' text='Home > Contact' />
      <section className='section'>
        <Contact />
        <ContactForm />
      </section>
    </>
  );
};

export default ContactPage;
