import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import '@styles/globals.css'
import type { AppProps } from 'next/app'

const BASIC_THEME = createTheme({
	palette: {
		mode: 'dark'
	}
});

export default function App({ Component, pageProps }: AppProps) {

  return (
		<ThemeProvider theme={ BASIC_THEME }>
			<CssBaseline />
			<Component {...pageProps} />		
		</ThemeProvider>
	)
}
