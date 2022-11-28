import { EntriesState } from "@context/entries/EntriesProvider";
import { IEntry } from "@interfaces/intex";

type EntriesActionType = {
	type: '[Entries] Add Entry' | '',
	payload: IEntry
}

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] Add Entry':
			return {
				...state,
				entries: [...state.entries, action.payload]
			}	
		default:
			return state;
	}
}