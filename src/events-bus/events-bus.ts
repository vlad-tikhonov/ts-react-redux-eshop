
const subscriptions: Record<string, Set<(...args: any[]) => void>> = Object.create(null)

const subscribe = (eventName: string, callback: (...args: any[]) => void) => {
	if (!subscriptions[eventName]) {
		subscriptions[eventName] = new Set()
	}

	const callbacks = subscriptions[eventName]
	callbacks.add(callback)

	return () => {
		callbacks.delete(callback)

		if(!callbacks.size) {
			delete subscriptions[eventName]
		}
	}
}

const broadcast = (eventName: string, ...args: any[]) => {
	if (!subscriptions[eventName]) {
		return
	}

	const callbacks = Array.from(subscriptions[eventName])
	for (const cb of callbacks) {
		cb(...args)
	}
}

const eventsBus = {
	subscribe,
	broadcast
}

export default eventsBus