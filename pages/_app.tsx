import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import MainLayout from '@/components/layouts/main_layout';

export type NextPageWithLayout<P = any, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  if(Component.getLayout)
  {
    return <Component {...pageProps} />
  }
  
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}
