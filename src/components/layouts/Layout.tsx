import React, { FC } from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import { Navbar, Sidebar } from '@components/ui'

type LayoutProps = {
	title?: string,
	children: JSX.Element | JSX.Element[]
}

export const Layout: FC<LayoutProps> = ({ title = 'OpenJira App', children }) => {
	return (
		<Box sx={{ flexFlow: 1 }}>
			<Head>
				<title>{ title }</title>
			</Head>

			<Navbar />
			<Sidebar />

			<Box sx={{ padding: '10px 20px' }}>
				{ children }
			</Box>
		</Box>
	)
}
