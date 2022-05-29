import type { AppProps } from 'next/app';
import { GlobalProviders } from '@/contexts';
import { GlobalStyles } from '@/theme/global';
import { Layout } from '@/components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProviders>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalProviders>
  );
}

export default MyApp;
