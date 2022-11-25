import '@styles/globals.css'
import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { UIProvider } from '@context/ui'
import { EntriesProvider } from '@context/entries'
import { DARK_THEME } from '@theme/index'

export default function App({ Component, pageProps }: AppProps) {

  return (
		<EntriesProvider>
			<UIProvider>
				<ThemeProvider theme={ DARK_THEME }>
					<CssBaseline />
					<Component {...pageProps} />		
				</ThemeProvider>			
			</UIProvider>
		</EntriesProvider>
	)
}
