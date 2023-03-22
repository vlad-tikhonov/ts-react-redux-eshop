import makeRequest from '../makeRequest'
import { AxiosResponse } from 'axios';
import { SearchItem } from 'types'

export const getSearchResult = (query: string): Promise<SearchItem[]> => {
	return makeRequest({
		url: '/search',
		method: 'post',
		data: {query}
	}).then((response: AxiosResponse<SearchItem[]>) => response.data)
}