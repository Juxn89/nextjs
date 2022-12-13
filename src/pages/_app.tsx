import { useEffect, useState } from 'react'
import type { AppContext, AppProps } from 'next/app'
import { CssBaseline, ThemeProvider, Theme } from '@mui/material'
import { customTheme, darkTheme, lightTheme } from '@theme/index'
import '@styles/globals.css'
import Cookies from 'js-cookie';

interface Props extends AppProps {
  theme: string
}

export default function App({ Component, pageProps, theme }: Props) {

  const [currentTheme, setCurrentTheme] = useState(lightTheme)

  useEffect(() => {
    const cookieTheme = Cookies.get('theme')

    const selectedTheme: Theme = theme === 'light' 
    ? lightTheme 
    : theme === 'dark' 
      ? darkTheme 
      : customTheme

      setCurrentTheme(selectedTheme)
  }, [])
  



  return (
    <ThemeProvider theme={ currentTheme }>
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