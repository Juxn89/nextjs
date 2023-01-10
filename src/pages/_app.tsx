import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { lightTheme } from '@themes/index'
import '@styles/globals.css'
import { UIProvider } from '@context/index'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SWRConfig  value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      <UIProvider>
        <ThemeProvider theme={ lightTheme }>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>    
      </UIProvider>
    </SWRConfig>

  )
}
