import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Layout } from "@components/layouts";
import { EntryList } from "@components/ui";

export default function HomePage() {
  return (
    <Layout title="OpenJira | Dashboard">
			<Grid container spacing={2}>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="Pending"></CardHeader>
						<CardContent>
							{ /* Addd new entry */ }
							<EntryList />
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="In progress"></CardHeader>
						<CardContent>
							{ /* Addd new entry */ }
							{ /* List of entries */ }
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={4}>
					<Card sx={{ height: 'calc(100vh - 100px)' }}>
						<CardHeader title="Finished"></CardHeader>
						<CardContent>
							{ /* Addd new entry */ }
							{ /* List of entries */ }
						</CardContent>
					</Card>
				</Grid>
			</Grid>
    </Layout>
  )
}
