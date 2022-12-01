import { db } from "@database/index";
import { NextApiRequest, NextApiResponse } from "next"
import { Entry } from '@models/index';
import { IEntry } from "@interfaces/index";

type EntriesResponseType = 
	| { name: string }
	| IEntry[]
	| IEntry

const handler = (req: NextApiRequest, res: NextApiResponse<EntriesResponseType>) => {
	switch (req.method) {
		case 'GET':			
			return getEntries(res);
		case 'POST':
			return postEntry(req, res);
		case 'PUT':
			return postEntry(req, res);
		default:
			return res.status(400).json({name: 'Enpoint doesn\'t exist'});
	}

}

const getEntries = async (res: NextApiResponse<EntriesResponseType>) => {
	await db.connect();

	const entries: IEntry[] = await Entry.find().sort({createdAt: 'ascending'})

	await db.disconnect();

	res.status(200).json(entries);
}

const postEntry = async (req: NextApiRequest, res: NextApiResponse<EntriesResponseType>) => {
	const { description = '' } = req.body;
	
	const newEntry = new Entry({
		description,
		createdAt: Date.now()
	})

	try {
			await db.connect()
			await newEntry.save()
			await db.disconnect()

			return res.status(201).json(newEntry)
	} catch (error) {
		await db.disconnect()
		console.log(error);
		return res.status(500).json({name: 'Something was wrong, check browser console'})
	}
}

export default handler