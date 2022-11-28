import { EntriesState } from "@context/entries/EntriesProvider";
import { IEntry } from "@interfaces/intex";

type EntriesActionType = 
	| {type: '[Entries] Add Entry', payload: IEntry}
	| {type: '[Entries] Update Entry', payload: IEntry}

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] Add Entry':
			return {
				...state,
				entries: [...state.entries, action.payload]
			}
		case '[Entries] Update Entry':
			return {
				...state,
				entries: state.entries.map(entry => {
					if(entry._id === action.payload._id) {
						entry.status = action.payload.status; 
						entry.description = action.payload.description;
					}

					return entry
				})
			}
		default:
			return state;
	}
}