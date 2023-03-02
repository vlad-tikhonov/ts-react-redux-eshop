export const getItem = <T>(key: string): T | null => {
  try {
		const stringResult = window.localStorage.getItem(key)

		if (!stringResult) {
			return null
		}

    return JSON.parse(stringResult)
  } catch (e) {
    console.error('Error getting data from localStorage', e)
    return null
  }
}

export const setItem = <T>(key: string, data: T): void => {
  try {
    window.localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.error('Error setting data in localStorage')
  }
}
