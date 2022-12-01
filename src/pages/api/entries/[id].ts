import type { NextApiRequest, NextApiResponse } from 'next'
import mongoose from 'mongoose';
import { db } from '@database/index';
import { Entry } from '@models/index';
import { IEntry } from '@interfaces/index';

type Data = 
	| { message: string }
	| IEntry

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
	const { id } = req.query;

	if(!mongoose.isValidObjectId(id))
		return res.status(400).json({ message: 'ID is not valid' });

	switch (req.method) {
		case 'PUT':
			return updateEntry(req, res);
		default:
			return res.status(400).json({ message: 'Method is not allowed' });
	}
}

const updateEntry = async (req: NextApiRequest, res: NextApiResponse) => {
	const { id } = req.query;

	await db.connect()
	
	const entryToUpdate = await Entry.findById(id);

	if(!entryToUpdate) {
		await db.disconnect()
		return res.status(400).json({message: `Entry with ID: ${id} dosen't exist`})
	}

	const { 
		description = entryToUpdate.description,
		status = entryToUpdate.status
	} = req.body;

	try {
		const updatedEntry = await Entry.findByIdAndUpdate(id, { description, status }, { runValidators: true, new: true } )
			//  Other way to update a record \\

			// entryToUpdate.description = description;
			// entryToUpdate.status = status;
			// await entryToUpdate.save();

		await db.disconnect()		
		return res.status(200).json(updatedEntry);

	} catch (error: any) {
		await db.disconnect()		
		return res.status(200).json(
			{ message: `Something is wrong! \n ${error.errors.status}`});		
	}
}

export default handler;