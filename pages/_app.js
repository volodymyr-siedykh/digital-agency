import '../styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </AnimatePresence>
  );
}

export default MyApp;
