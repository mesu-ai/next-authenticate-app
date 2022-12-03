import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import Layout from '../layout/Layout';
import '../styles/globals.css';

const App = ({ Component, pageProps }) => {
  const queryClient = new QueryClient();

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Welcome to Next app</title>
        <meta
          name='description'
          content='Learn nextjs by coding along with sections'
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;
