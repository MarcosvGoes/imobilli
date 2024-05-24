import '../styles/global.css';
import { AppProps } from 'next/app';
import Head from 'next/head';
import RootLayout from './layout';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Imobilli</title>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
        <meta name="description" content="Rent your house" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <RootLayout>
            <Component {...pageProps} />
      </RootLayout>
    </>
  );
}
