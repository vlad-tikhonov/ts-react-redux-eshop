import axios from './axios'
import { AxiosResponse } from 'axios';
import { SearchItem } from 'types'

export const getSearchResult = (query: string): Promise<SearchItem[]> => {
  return axios.post('/search', { query })
		.then((response: AxiosResponse<SearchItem[]>) =>
			response.data
		)
}