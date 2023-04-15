import eventsBus from 'events-bus/events-bus'

const eventName = 'toastSuccess'

const subscribe = (callback: (messages: string[]) => void) => {
	return eventsBus.subscribe(eventName, callback);
}

const broadcast = (messages: string[]) => {
	eventsBus.broadcast(eventName, messages)
}

const toastSuccess = {
	subscribe,
	broadcast
}

export default toastSuccess