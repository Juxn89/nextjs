import mongoose, { Model, Schema } from "mongoose";
import { IEntry } from "@interfaces/index";

const entrySchema = new Schema({
	description: { type: String, require: true },
	createdAt: { type: Number },
	status: { 
		type: String,
		enum: {
			values: [ 'pending', 'in-progress', 'finished' ],
			message: '{VALUE} is not a valid status'
		}
	}
})

const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema)

export default EntryModel