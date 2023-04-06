import { RefObject , useEffect } from "react";

export const useClickOutside = (
	refs: RefObject <HTMLElement>[],
	handler: (e: Event) => void
) => {

	useEffect(() => {
		const listener = (e: Event) => {
			e.stopPropagation()
			for (let ref of refs) {
				const el = ref.current
				if (!el || el.contains(e.target as Node)) {
					return
				}
			}
			handler(e)
		}

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [refs, handler])
}