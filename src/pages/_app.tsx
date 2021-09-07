import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import GlobalStyles from '../styles/global';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Guilherme Felipe | Dev. Júnior </title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
