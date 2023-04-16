import Layout from '@/components/shared/Layout'
import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Script from 'next/script'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <>
          <Component {...pageProps} />
          <Script src="https://scripts.simpleanalyticscdn.com/latest.js" />
          <noscript>
            {/* eslint-disable @next/next/no-img-element */}
            <img
              src="https://queue.simpleanalyticscdn.com/noscript.gif"
              alt=""
              referrerPolicy="no-referrer-when-downgrade"
            />
          </noscript>
        </>
      </Layout>
    </SessionProvider>
  )
}
