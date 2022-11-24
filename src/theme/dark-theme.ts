import { createTheme } from "@mui/material";
import { red, grey } from "@mui/material/colors";

export const DARK_THEME = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: grey[900]
		},
		secondary: {
			main: '#19857b'
		},
		error: {
			main: red.A400
		}		
	},
	components: {
		MuiAppBar: {
			defaultProps: { 
				elevation: 0
			},
			styleOverrides: {
				root: {
					backgroundColor: '#4a148c'
				},
				
			}
		}
	}
});