import HeadingPages from '../../components/HeadingPages/HeadingPages';
import services from '../../constants/services';
import ServiceDetails from '../../components/Services/ServiceDetails';


export const getStaticProps = async ({ params }) => {
  const serviceList = services.filter(
    (x) => x.slug.toString() === params.slug
  );
  return {
    props: {
      service: serviceList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = services.map((service) => ({
    params: { slug: service.slug.toString() },
  }));

  return { paths, fallback: false };
};

const ServiceDetailsPage = ({ service }) => {
  return (
    <>
      <HeadingPages title={service.title} text={`Home > Service`} />
      <ServiceDetails service={service} />
    </>
  );
};

export default ServiceDetailsPage;