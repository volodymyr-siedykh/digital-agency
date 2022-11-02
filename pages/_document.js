import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@700;800&family=Poppins:wght@400;500&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
