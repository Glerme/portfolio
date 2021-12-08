import Head from 'next/head';
import { NextPage } from 'next';
import { AppProps } from 'next/dist/next-server/lib/router/router';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Layout } from '../layouts';

import GlobalStyles from '../styles/global';

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Guilherme Felipe | Dev. Júnior </title>
      </Head>
      <GlobalStyles />
      <Layout>
        <ToastContainer />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
