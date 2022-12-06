import { isValidObjectId } from "mongoose"
import { db } from '@database/index';
import { Entry } from '@models/index';
import { IEntry } from '@interfaces/index';

export const getEntryById = async (id: string): Promise<IEntry | null> => {
	if( !isValidObjectId(id) ) return null;

	await db.connect();
	const entry = await Entry.findById(id).lean();
	await db.disconnect();

	return JSON.parse( JSON.stringify(entry) )
}