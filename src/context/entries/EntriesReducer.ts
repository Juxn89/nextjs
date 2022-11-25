import { EntriesState } from "@context/entries/EntriesProvider";

type EntriesActionType = {
	type: '[Entries] Add Entry' | ''
}

export const EntriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
	switch (action.type) {
		case '[Entries] Add Entry':
			return {
				...state
			}	
		default:
			return state;
	}
}