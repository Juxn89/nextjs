import React, { FC } from 'react'
import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';


const MENU_ITEMS: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar: FC = () => {
	const closeSidebarHandler = () => {

	}

	return (
		<Drawer anchor='left' open={true} onClose= { closeSidebarHandler }>
			<Box sx={{ width: 250 }}>
				<Box sx={{ padding: '5px 10px' }}>
					<Typography variant='h4'></Typography>
					<List>
						{
							MENU_ITEMS.map( (text, index) => (
								<ListItem key={ text } button>
									<ListItemIcon>
										{ index % 2 ? <InboxRoundedIcon /> : <MailOutlineRoundedIcon/> }
									</ListItemIcon>
									<ListItemText primary={ text }/>
								</ListItem>
							) )
						}
					</List>
					<Divider />
				</Box>
			</Box>
		</Drawer>
	)
}
