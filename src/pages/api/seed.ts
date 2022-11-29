import { NextApiRequest, NextApiResponse } from "next"
import { db } from '@database/index';

type Data = {
	message: string
}

export const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
	if(process.env.NODE_ENV === 'production') {
		return res.status(401).json({message: 'You are not allowed to this endpoint'})
	}

	await db.connect();
	await db.disconnect();

	return res.status(200).json({message: 'Process finished successfully'})
}

export default handler