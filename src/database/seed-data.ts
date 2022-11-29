type SeedData = {
	entries: SeedEntry[]
}

type SeedEntry = {
	description: string,
	status: string,
	createdAt: number
}

export const seedData: SeedData = {
	entries: [
		{
			description: 'Pending task',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			description: 'In progress task',
			status: 'in-progress',
			createdAt: Date.now() - 1_000_000,
		},
		{
			description: 'Task done',
			status: 'finished',
			createdAt: Date.now() - 100_000,
		}
	]
}