import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { DARK_THEME } from '@theme/index'
import '@styles/globals.css'
import { UIProvider } from '@context/ui'

export default function App({ Component, pageProps }: AppProps) {

  return (
		<UIProvider>
			<ThemeProvider theme={ DARK_THEME }>
				<CssBaseline />
				<Component {...pageProps} />		
			</ThemeProvider>			
		</UIProvider>
	)
}
