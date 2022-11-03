import Head from 'next/head';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? 'DGStart - ' + title : 'DGStart - Digital Agency'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </>
    </>
  );
}
