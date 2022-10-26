import Heading from '../components/Heading/Heading';
import HeadingPages from '../components/HeadingPages/HeadingPages';
import ServicesAll from '../components/Services/ServicesAll';
import Subscription from '../components/Subscription/Subscription';

const ServicesPage = () => {
  return (
    <>
      <HeadingPages title='Services' text='Home > Services' />
      <section className='section'>
        <Heading
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
          title='What We Provide'
          text='Praesent placerated egestas egestas cras rhone magna rutrum tellus laoreet'
        />
        <ServicesAll />
      </section>
      <Subscription />
    </>
  );
};

export default ServicesPage;
