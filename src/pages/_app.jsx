import Head from 'next/head';
import Layout from '../layout/Layout';
import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Head>
        <title>Welcome to Next app</title>
        <meta name="description" content="Learn nextjs by coding along with sections" />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
