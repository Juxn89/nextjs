import mongoose from 'mongoose'

const MONGO_CONNECTION_STATUS = {
	disconnected: 0,
	connected: 1,
	connecting: 2,
	disconnecting: 3,
}

const MONGO_CONNECTION = {
	isConenected: MONGO_CONNECTION_STATUS.disconnected
}

export const connect = async() => {
	if(MONGO_CONNECTION.isConenected) {
		console.log('You\'re already connected...');
		return;
	}

	if(mongoose.connections.length > 0) {
		MONGO_CONNECTION.isConenected = mongoose.connections[0].readyState

		if(MONGO_CONNECTION.isConenected === MONGO_CONNECTION_STATUS.connected) {
			console.log('Using last connection...');
			return;
		}
		else {
			await mongoose.disconnect()
		}
	}

	await mongoose.connect(process.env.MONGO_URL || '')
	MONGO_CONNECTION.isConenected = MONGO_CONNECTION_STATUS.connected

	console.log(`Connected to MongoDB: ${ process.env.MONGO_URL }`)

}

export const disconnect = async() => {
	if(process.env.NODE_ENV === 'development') return
	
	if(MONGO_CONNECTION.isConenected !== MONGO_CONNECTION_STATUS.disconnected) return
	
	await mongoose.disconnect()
	console.log('Disconnected from MongoDB')
}
