import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html' />
        <meta name='robots' content='index, follow' />
        <meta name='description' content='Digital Agency' />
        <meta name='keywords' content='Digital Agency' />
        <meta name='author' content='Volodymyr Siedykh' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
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
