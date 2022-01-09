import type { AppProps } from 'next/app';
import PlausibleProvider from 'next-plausible';

import '../styles/globals.css';

import Header from '../components/Header';
import Footer from '../components/Footer';

const App = ({ Component, pageProps }: AppProps) => (
  <PlausibleProvider domain="poly-plague.vercel.app" trackOutboundLinks>
    <div className="bg-neutral-900 text-gray-200">
      <Header />

      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
      <Footer />
    </div>
  </PlausibleProvider>
);

export default App;
