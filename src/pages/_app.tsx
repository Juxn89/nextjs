import { GetServerSideProps } from 'next'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { darkTheme } from '@theme/index'
import '@styles/globals.css'

export default function App({ Component, pageProps, ...rest }: AppProps) {
  console.log({...rest});
  return (
    <ThemeProvider theme={ darkTheme }>
      <CssBaseline>
        <Component {...pageProps} />
      </CssBaseline>
    </ThemeProvider>
  )
}


App.getInitialProps = async (appContext: AppContext) => {
  const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'};
  console.log('getInitialProps:', cookies);
  return cookies
}