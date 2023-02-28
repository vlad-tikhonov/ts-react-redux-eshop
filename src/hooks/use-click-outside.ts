import { RefObject , useEffect } from "react";

export const useClickOutside = (
	ref: RefObject <HTMLElement>,
	handler: (e: Event) => void
) => {
	const el = ref.current

	useEffect(() => {
		const listener = (e: Event) => {
			e.stopPropagation()
			if (!el || el.contains(e.target as Node)) {
				return
			}
			handler(e)
		}

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler, el])
}