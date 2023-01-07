import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { GlobalStyles } from 'src/theme/globals';
import { SiteStore } from '~/utils/stores/site';
import { ThemeUI } from '../theme/theme-provider';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  return (
    <SiteStore>
      <ThemeUI>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeUI>
    </SiteStore>
  );
}

export default MyApp;
