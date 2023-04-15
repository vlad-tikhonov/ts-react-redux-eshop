import eventsBus from 'events-bus/events-bus'

const eventName = 'toastFailure'

const subscribe = (callback: (messages: string[]) => void) => {
	return eventsBus.subscribe(eventName, callback);
}

const broadcast = (messages: string[]) => {
	eventsBus.broadcast(eventName, messages)
}

const toastFailure = {
	subscribe,
	broadcast
}

export default toastFailure