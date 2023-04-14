import eventsBus from 'events-bus/events-bus'

const eventName = 'requestError'

const subscribe = (callback: (messages: string[]) => void) => {
	return eventsBus.subscribe(eventName, callback);
}

const broadcast = (messages: string[]) => {
	eventsBus.broadcast(eventName, messages)
}

const requestError = {
	subscribe,
	broadcast
}

export default requestError