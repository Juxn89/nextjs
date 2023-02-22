import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CartProvider, UIProvider } from '@context/index'
import { lightTheme } from '@themes/index'
import '@styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return(
    <SWRConfig  value={{
      fetcher: (resource, init) => fetch(resource, init).then(res => res.json())
    }}>
      <CartProvider>
        <UIProvider>
          <ThemeProvider theme={ lightTheme }>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>    
        </UIProvider>        
      </CartProvider>
    </SWRConfig>

  )
}
