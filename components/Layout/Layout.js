import { NextSeo } from 'next-seo';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { Nunito } from '@next/font/google';

const nunito = Nunito({
  display: 'fallback',
  weights: ['100 900'],
  subsets: ['latin'],
});

export default function Layout({ children }) {
  return (
    <>
      <NextSeo
        title='Digital Agency | DGStart'
        description='DGStart is a digital agency that specializes in web development, ux design, and app development. We create intuitive and easy to use products that people love to use.'
      />
      <div className={nunito.className}>
        <Header />
        <main className=''>{children}</main>
        <Footer />
      </div>
    </>
  );
}
