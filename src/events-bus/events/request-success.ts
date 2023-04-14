import eventsBus from 'events-bus/events-bus'

const eventName = 'requestSuccess'

const subscribe = (callback: (messages: string[]) => void) => {
	return eventsBus.subscribe(eventName, callback);
}

const broadcast = (messages: string[]) => {
	eventsBus.broadcast(eventName, messages)
}

const requestSuccess = {
	subscribe,
	broadcast
}

export default requestSuccess