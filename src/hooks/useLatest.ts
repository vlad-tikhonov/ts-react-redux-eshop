import { useRef, useLayoutEffect, MutableRefObject } from 'react'

export const useLatest = <T>(value: T): MutableRefObject<T> => {
	const valueRef = useRef(value)

	useLayoutEffect(() => {
		valueRef.current = value
	}, [value])

	return valueRef
}
