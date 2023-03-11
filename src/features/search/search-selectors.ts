import {RootState} from 'app/store'
import { createSelector } from '@reduxjs/toolkit'

const baseSearchSelector = (state: RootState) => state.search.data

export const selectSearchResults = (pathname: string) => {
	return createSelector(
		baseSearchSelector,
		(searchData) => {
			const pathElemets = pathname.split('/')
			let slug = ''

			if(!pathElemets.includes('categories')) {
				return searchData
			}

			if (pathElemets.length === 3){
				slug = pathElemets[2]
			} else if (pathElemets.length === 4) {
				slug = pathElemets[2] + '/' + pathElemets[3]
			}

			return searchData.filter(el => el.slug !== slug)
		}
	)
}