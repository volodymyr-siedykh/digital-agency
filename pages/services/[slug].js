import HeadingPages from '../../components/HeadingPages/HeadingPages';
import services from '../../constants/services';
import ServiceDetails from '../../components/Services/ServiceDetails';
import { motion } from 'framer-motion';
import Layout from '../../components/Layout/Layout';

export const getStaticProps = async ({ params }) => {
  const serviceList = services.filter((x) => x.slug.toString() === params.slug);
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
    <Layout>
      <HeadingPages title={service.title} text={`Home > Service`} />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ServiceDetails service={service} />
      </motion.div>
    </Layout>
  );
};

export default ServiceDetailsPage;
