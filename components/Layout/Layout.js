import { NextSeo } from 'next-seo';
import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
  return (
    <>
      {/* <Head>
        <title>DGStart - Digital Agency</title>
        <link rel='icon' href='/favicon.ico' />
      </Head> */}

      <NextSeo
        title='Digital Agency | DGStart'
        description='DGStart is a digital agency that specializes in web development, ux design, and app development. We create intuitive and easy to use products that people love to use.'
      />
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}
