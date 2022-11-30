import { db } from "@database/index";
import { NextApiRequest, NextApiResponse } from "next"
import { Entry } from '@models/index';
import { IEntry } from "@interfaces/index";

type EntriesResponseType = 
	| { name: string }
	| IEntry[]

const handler = (req: NextApiRequest, res: NextApiResponse<EntriesResponseType>) => {
	switch (req.method) {
		case 'GET':			
			return getEntries(res);
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

export default handler